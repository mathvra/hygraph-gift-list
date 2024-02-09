import { Button } from "../ui/button";
import {
  ArrowSquareOut,
  CircleNotch,
  Eye,
  PencilSimpleLine,
} from "@phosphor-icons/react";
import Link from "next/link";
import { GiftForm } from "../GiftForm/GiftForm";
import { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

interface GiftDrawerProps {
  isAssigned: boolean;
  name: string;
  description: string;
  url: string;
  id: string;
  refetch: any;
}

export default function GiftDrawerReact({
  isAssigned,
  name,
  description,
  url,
  refetch,
  id,
}: GiftDrawerProps) {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("==>open", open);
  }, [open]);

  return (
    <>
      {isAssigned ? (
        <Button
          variant={"secondary"}
          className="w-full"
          onClick={() => setOpen(true)}
        >
          <Eye weight="bold" />
          Detalhes
        </Button>
      ) : (
        <Button className="w-full">
          <PencilSimpleLine weight="bold" />
          Assinar
        </Button>
      )}
      <BottomSheet open={open}>
        <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mt-4" />
        <div className="flex flex-col p-4 gap-4">
          <div>{name}</div>
          <div>{description}</div>
          {!isAssigned && (
            <Button asChild>
              <Link href={url} target="_blank">
                <ArrowSquareOut weight="bold" />
                Ver na loja
              </Link>
            </Button>
          )}
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
            />
          )}
          <div className="flex gap-4">
            {isAssigned ? (
              <Button
                variant="secondaryWhite"
                className="w-1/2"
                onClick={() => setOpen(false)}
              >
                Voltar
              </Button>
            ) : (
              <Button
                variant="defaultWhite"
                className="w-1/2"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
            )}

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
        </div>
      </BottomSheet>
    </>
  );
}
