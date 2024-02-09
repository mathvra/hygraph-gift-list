import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

interface GiftModalProps {
  isAssigned: boolean;
  name: string;
  description: string;
  url: string;
  id: string;
  refetch: any;
}

export default function GiftModal({
  isAssigned,
  name,
  description,
  url,
  refetch,
  id,
}: GiftModalProps) {
  const [submitLoading, setSubmitLoading] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent
        className={`${isAssigned ? "bg-secondary-2" : "bg-primary-2"}`}
      >
        <DialogHeader>
          <DialogTitle
            className={`${
              isAssigned ? "text-secondary-0" : "text-primary-0"
            } text-2xl`}
          >
            {name}
          </DialogTitle>
          <DialogDescription
            className={`${isAssigned ? "text-secondary-0" : "text-primary-0"}`}
          >
            {description}
          </DialogDescription>
          {!isAssigned && (
            <Button asChild>
              <Link href={url} target="_blank">
                <ArrowSquareOut weight="bold" />
                Ver na loja
              </Link>
            </Button>
          )}
        </DialogHeader>
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
            <Button variant="secondary" className="w-full" asChild>
              <Link href={url} target="_blank">
                <ArrowSquareOut weight="bold" />
                Ver na loja
              </Link>
            </Button>
          ) : submitLoading ? (
            <Button className="w-full" type="submit" form="gift-form">
              <CircleNotch weight="bold" className="animate-spin" />
              Carregando
            </Button>
          ) : (
            <Button
              variant="defaultStrong"
              className="w-full"
              type="submit"
              form="gift-form"
            >
              <PencilSimpleLine weight="bold" />
              Assinar
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
