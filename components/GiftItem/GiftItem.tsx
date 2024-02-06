import Image from "next/image";
import { FormEvent, useState } from "react";
import { token, projectId, dataset, versionApi } from "@/env";
import { Button } from "../ui/button";
import { Eye, PencilSimpleLine } from "@phosphor-icons/react/dist/ssr";

interface GiftItemProps {
  name: string;
  description: string;
  url: string;
  _id: string;
  isAssigned: boolean;
  refetch: any;
  imageUrl: string;
}

export default function GiftItem({
  name,
  description,
  url,
  _id,
  isAssigned,
  refetch,
  imageUrl,
}: GiftItemProps) {
  const [submitLoading, setSubmitLoading] = useState(false);

  function handleSubmit(
    e: FormEvent<HTMLFormElement>,
    id: string,
    isAssigned: boolean
  ) {
    e.preventDefault();
    setSubmitLoading(true);
    const mutations = [
      {
        patch: {
          id: id,
          set: {
            isAssigned: !isAssigned,
            assignedName: e.currentTarget.assignedName.value,
            assignedPhone: e.currentTarget.assignedPhone.value,
          },
        },
      },
    ];

    fetch(
      `https://${projectId}.api.sanity.io/${versionApi}/data/mutate/${dataset}`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ mutations }),
      }
    )
      .then((response) => response.json())
      .then(() => {
        refetch();
        setSubmitLoading(false);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="flex flex-col border border-primary-2 rounded-lg">
      {imageUrl && (
        <div className="px-4 pt-4 relative">
          {isAssigned && (
            <div className="absolute w-full h-full top-0 left-0 p-1">
              <div className="bg-secondary/75 flex items-center justify-center rounded h-full">
                <p className="font-light text-2xl text-secondary-foreground">
                  Assinado
                </p>
              </div>
            </div>
          )}
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="h-36 object-contain"
            priority={false}
          />
        </div>
      )}
      <div
        className={`${
          isAssigned ? "bg-white" : "bg-primary-2"
        } flex-grow flex flex-col justify-between p-4 gap-4`}
      >
        <div className="flex flex-col gap-2">
          <h3 className="font-bold leading-4 line-clamp-2">{name}</h3>
          <p className="text-xs line-clamp-3">{description}</p>
        </div>
        {isAssigned ? (
          <Button variant={"secondary"}>
            <Eye weight="bold" />
            Ver detalhes
          </Button>
        ) : (
          <Button>
            <PencilSimpleLine weight="bold" />
            Assinar
          </Button>
        )}
      </div>
    </div>
  );
}
