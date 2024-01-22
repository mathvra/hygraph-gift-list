"use client";
import { useQuery, gql } from "@apollo/client";

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
  const { data, error } = useQuery(GET_PRODUCTS);
  console.log("==>data", data);
  console.log("==>error", error);

  return <main>Lista de casamento Lays e Matheus</main>;
}
