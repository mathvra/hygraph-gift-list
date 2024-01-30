"use client";
import { useQuery } from "@apollo/client";
import GET_PRODUCTS from "@/app/graphql/queries/products.gql";
import GiftItem from "../GiftItem";
import { useState } from "react";

export default function GiftList() {
  const [loadingFetchMore, setLoadingFetchMore] = useState(false);

  const {
    data: giftList,
    loading,
    refetch,
    fetchMore,
  } = useQuery(GET_PRODUCTS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  if (loading) return <p>Carregando...</p>;

  return (
    <main>
      {giftList.allProducts.map((giftItem: any, index: number) => (
        <GiftItem
          key={index}
          name={giftItem.name}
          description={giftItem.description}
          url={giftItem.url}
          _id={giftItem._id}
          isAssigned={giftItem.isAssigned}
          imageUrl={giftItem?.image?.asset?.url && giftItem.image.asset.url}
          refetch={refetch}
        />
      ))}
      {loadingFetchMore ? (
        <button>Carregando...</button>
      ) : (
        <button
          onClick={() => {
            setLoadingFetchMore(true);
            fetchMore({
              variables: {
                offset: giftList.allProducts.length,
              },
            }).then(() => setLoadingFetchMore(false));
          }}
        >
          Ver mais
        </button>
      )}
    </main>
  );
}
