"use client";
import { useQuery } from "@apollo/client";
import GET_PRODUCTS from "@/app/graphql/queries/products.gql";
import GiftItem from "../GiftItem/GiftItem";
import { useState } from "react";
import { Button } from "../ui/button";
import { CircleNotch } from "@phosphor-icons/react";

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
    <section>
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
        <Button>
          <CircleNotch weight="bold" className="animate-spin" />
          Carregando...
        </Button>
      ) : (
        <Button
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
        </Button>
      )}
    </section>
  );
}
