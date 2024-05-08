import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerBar,
  DrawerClose,
} from "@/components/ui/drawer";
import { CheckCircle } from "@phosphor-icons/react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

interface GiftDrawerProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  assignedName: string;
  productName: string;
}

export default function GiftDrawer({
  open,
  setOpen,
  assignedName,
  productName,
}: GiftDrawerProps) {
  const formatedAssignedName = assignedName?.replace(/ .*/, "");

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerBar />
          <DrawerTitle>
            <div className="flex justify-center">
              <CheckCircle size={48} weight="bold" />
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="flex justify-center items-center flex-col gap-4">
          <div>
            <span className="font-bold text-2xl">{`Obrigado ${formatedAssignedName}!`}</span>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-center">
              Acabei de confirmar sua assinatura do presente:{" "}
            </span>
            <span className="font-bold text-center">{productName}</span>
          </div>
        </div>
        <DrawerFooter>
          <div className="flex justify-center">
            <DrawerClose asChild>
              <Button variant="default" className="w-fit">
                Voltar para lista
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
