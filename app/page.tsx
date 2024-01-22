"use client";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const GET_PRODUCTS = gql`
  query PRODUCTS {
    products {
      isAssigned
      description
      id
      name
      url
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
      {data.products.map((product: any) => {
        return (
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link href={product.url}>Sugestão de presente</Link>
            <br />
            ---------------------
          </div>
        );
      })}
    </main>
  );
}
