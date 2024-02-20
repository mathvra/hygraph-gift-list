"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { CheckSquareOffset, Copy } from "@phosphor-icons/react";

export default function PixPayment() {
  const pixKey = "84996948711";

  return (
    <div className="container mx-auto flex text-primary-0">
      <div className="bg-primary-1 flex items-center justify-center p-2 rounded-s-lg min-w-fit">
        <Image src="/lemlogo.svg" width={50} height={50} alt={""} />
      </div>
      <div className="flex bg-primary-2 rounded-e-lg p-2 items-center justify-between gap-2 grow">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Pix para presente</h3>
          <p>
            Prefere dar um presente em dinheiro? Faça um pix do valor desejado!
          </p>
          <p>
            <b>Nome:</b> Matheus Vinícius Ribeiro Araújo
          </p>
          <p>
            <b>Chave:</b> {pixKey}
          </p>
        </div>
        <div>
          <Button
            onClick={() => {
              toast.success("Pix copiado!", {
                icon: <CheckSquareOffset size={24} weight="bold" />,
              });
              navigator.clipboard.writeText(pixKey);
            }}
          >
            <Copy weight="bold" />
            Copiar
          </Button>
        </div>
      </div>
    </div>
  );
}
