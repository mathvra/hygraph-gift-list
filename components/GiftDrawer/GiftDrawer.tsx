import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerBar,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import {
  ArrowSquareOut,
  CircleNotch,
  Eye,
  PencilSimpleLine,
} from "@phosphor-icons/react";
import Link from "next/link";
import { GiftForm } from "../GiftForm/GiftForm";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

interface GiftDrawerProps {
  isAssigned: boolean;
  name: string;
  description: string;
  url: string;
  id: string;
  refetch: any;
  totalItems: number;
}

export default function GiftDrawer({
  isAssigned,
  name,
  description,
  url,
  refetch,
  id,
  totalItems,
}: GiftDrawerProps) {
  const [submitLoading, setSubmitLoading] = useState(false);

  const drawerVariant = isAssigned ? "secondary" : "default";

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {isAssigned ? (
          <Button variant={"secondary"} className="w-full">
            <Eye weight="bold" />
            Detalhes
          </Button>
        ) : (
          <Button className="w-full">
            <PencilSimpleLine weight="bold" />
            Assinar
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent variant={drawerVariant}>
        <DrawerHeader>
          <DrawerBar variant={drawerVariant} />
          <DrawerTitle variant={drawerVariant}>{name}</DrawerTitle>
          <DrawerDescription variant={drawerVariant}>
            {description}
          </DrawerDescription>
          {!isAssigned && (
            <Button asChild>
              <Link href={url} target="_blank">
                <ArrowSquareOut weight="bold" />
                Ver na loja
              </Link>
            </Button>
          )}
        </DrawerHeader>
        <div>
          {isAssigned ? (
            <div>
              <span className="text-secondary-0 font-bold">
                Esse presente já foi assinado!
              </span>
              <p className="text-secondary-0 text-sm">
                Não se preocupe, você pode escolher outro presente que esteja
                disponível na lista!
              </p>
            </div>
          ) : (
            <div>
              <span className="text-primary-0 font-bold">
                Assinar presente:
              </span>
              <p className="text-sm">
                Preencha suas informações para garantir a sua assinatura do
                presente
              </p>
            </div>
          )}
        </div>
        {!isAssigned && (
          <GiftForm
            isAssigned={isAssigned}
            id={id}
            refetch={refetch}
            setSubmitLoading={setSubmitLoading}
            totalItems={totalItems}
          />
        )}
        <DrawerFooter>
          <div className="flex gap-4">
            <DrawerClose asChild>
              {isAssigned ? (
                <Button variant="secondaryWhite" className="w-1/2">
                  Voltar
                </Button>
              ) : (
                <Button variant="defaultWhite" className="w-1/2">
                  Cancelar
                </Button>
              )}
            </DrawerClose>
            {isAssigned ? (
              <Button variant="secondary" className="w-1/2" asChild>
                <Link href={url} target="_blank">
                  <ArrowSquareOut weight="bold" />
                  Ver na loja
                </Link>
              </Button>
            ) : submitLoading ? (
              <Button className="w-1/2" type="submit" form="gift-form">
                <CircleNotch weight="bold" className="animate-spin" />
                Carregando
              </Button>
            ) : (
              <Button
                variant="defaultStrong"
                className="w-1/2"
                type="submit"
                form="gift-form"
              >
                <PencilSimpleLine weight="bold" />
                Assinar
              </Button>
            )}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
