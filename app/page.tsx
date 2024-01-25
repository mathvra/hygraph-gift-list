"use client";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const GET_PRODUCTS = gql`
  query PRODUCTS {
    allProducts {
      name
      description
      url
      _id
      isAssigned
    }
  }
`;

const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export default function Home() {
  const { data, loading, refetch } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <div>Carregando...</div>;
  }

  function handleClick(id: string, isAssigned: boolean) {
    console.log(id, isAssigned);
    const mutations = [
      {
        patch: {
          id: id,
          set: {
            isAssigned: !isAssigned,
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
              <button onClick={() => handleClick(_id, isAssigned)}>
                Assinar
              </button>
              <br />
              ---------------------
            </div>
          );
        }
      )}
    </main>
  );
}
