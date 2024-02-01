import Link from "next/link";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { token, projectId, dataset, versionApi } from "@/env";
import { Button } from "../ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

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
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          priority={false}
        />
      )}
      <h3>{name}</h3>
      <p>{description}</p>
      <Link href={url}>Sugestão de presente</Link>
      <br />
      {isAssigned ? (
        <b>Produto assinado!</b>
      ) : (
        <form onSubmit={(e) => handleSubmit(e, _id, isAssigned)}>
          <input
            type="text"
            name="assignedName"
            required
            minLength={5}
            className="border-primary border-2 rounded-sm"
          />
          <br />
          <input
            type="tel"
            name="assignedPhone"
            required
            minLength={11}
            className="border-primary border-2 rounded-sm"
          />
          <br />
          {submitLoading ? (
            <Button disabled>
              <ReloadIcon />
              Carregando...
            </Button>
          ) : (
            <Button type="submit">Assinar</Button>
          )}
        </form>
      )}
      <br />
      ---------------------
    </div>
  );
}
