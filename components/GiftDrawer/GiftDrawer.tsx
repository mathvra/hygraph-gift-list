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
import { ArrowSquareOut, Eye, PencilSimpleLine } from "@phosphor-icons/react";
import Link from "next/link";

interface GiftDrawerProps {
  isAssigned: boolean;
  name: string;
  description: string;
  url: string;
}

export default function GiftDrawer({
  isAssigned,
  name,
  description,
  url,
}: GiftDrawerProps) {
  const drawerVariant = isAssigned ? "secondary" : "default";
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {isAssigned ? (
          <Button variant={"secondary"} className="w-full">
            <Eye weight="bold" />
            Ver detalhes
          </Button>
        ) : (
          <Button className="w-full">
            <PencilSimpleLine weight="bold" />
            Assinar
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent variant={drawerVariant}>
        <DrawerBar variant={drawerVariant} />
        <DrawerHeader>
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
        <DrawerFooter>
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
          ) : (
            <Button variant="defaultStrong" className="w-1/2">
              <PencilSimpleLine weight="bold" />
              Assinar
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
