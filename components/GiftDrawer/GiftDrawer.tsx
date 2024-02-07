import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
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
  return (
    <Drawer>
      <DrawerTrigger>
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
      <DrawerContent className="bg-primary-2">
        <DrawerHeader className="text-start">
          <DrawerTitle className="text-primary-0">{name}</DrawerTitle>
          <DrawerDescription className="text-primary-0">
            {description}
          </DrawerDescription>
          <Button asChild>
            <Link href={url} target="_blank">
              <ArrowSquareOut weight="bold" />
              Ver na loja
            </Link>
          </Button>
        </DrawerHeader>
        <DrawerFooter className="flex flex-row">
          <DrawerClose className="grow">
            <Button variant="outline" className="w-full">
              Cancelar
            </Button>
          </DrawerClose>
          <Button className="grow bg-primary-0">
            <PencilSimpleLine weight="bold" />
            Assinar
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
