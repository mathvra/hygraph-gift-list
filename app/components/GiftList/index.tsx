"use client";
import { useQuery } from "@apollo/client";
import GET_PRODUCTS from "@/app/graphql/queries/products.gql";
import GiftItem from "../GiftItem";

export default function GiftList() {
  const { data: giftList, loading, refetch } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Carregando...</p>;

  return (
    <main>
      {giftList.allProducts.map(
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
        ) => (
          <GiftItem
            key={index}
            name={name}
            description={description}
            url={url}
            _id={_id}
            isAssigned={isAssigned}
            refetch={refetch}
          />
        )
      )}
    </main>
  );
}
