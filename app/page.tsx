"use client";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const GET_PRODUCTS = gql`
  query PRODUCTS {
    allProducts {
      name
      description
      url
      isAssigned
      assignedName
      assignedPhone
    }
  }
`;

export default function Home() {
  const { data, loading } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <div>Carregando...</div>;
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
          }: { name: string; description: string; url: string },
          index: number
        ) => {
          return (
            <div key={index}>
              <h3>{name}</h3>
              <p>{description}</p>
              <Link href={url}>Sugestão de presente</Link>
              <br />
              ---------------------
            </div>
          );
        }
      )}
    </main>
  );
}
