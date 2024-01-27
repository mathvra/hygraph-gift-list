"use client";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import GET_PRODUCTS from "./graphql/queries/products.gql";
import { FormEvent } from "react";

const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export default function Home() {
  const { data, loading, refetch } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <div>Carregando...</div>;
  }

  function handleSubmit(
    e: FormEvent<HTMLFormElement>,
    id: string,
    isAssigned: boolean
  ) {
    e.preventDefault();
    console.log(e.currentTarget.assignedName.value);
    console.log(e.currentTarget.assignedPhone.value);
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
      `https://${projectId}.api.sanity.io/v2023-08-01/data/mutate/production`,
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
      .then(() => refetch())
      .catch((error) => console.error(error));
  }

  return (
    <main>
      <h1>Lista de casamento de Lays e Matheus</h1>
      ---------------------
      {data.allProducts.map(
        (
          {
            name,
            description,
            url,
            _id,
            isAssigned,
          }: {
            name: string;
            description: string;
            url: string;
            _id: string;
            isAssigned: boolean;
          },
          index: number
        ) => {
          return (
            <div key={index}>
              <h3>{name}</h3>
              <p>{description}</p>
              <Link href={url}>Sugestão de presente</Link>
              <br />
              <form onSubmit={(e) => handleSubmit(e, _id, isAssigned)}>
                <input type="text" name="assignedName" />
                <br />
                <input type="tel" name="assignedPhone" />
                <br />
                <button type="submit">Assinar</button>
              </form>
              <br />
              ---------------------
            </div>
          );
        }
      )}
    </main>
  );
}
