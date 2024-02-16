"use client";
import { useQuery } from "@apollo/client";
import GET_PRODUCTS from "@/app/graphql/queries/products.gql";
import GiftItem from "../GiftItem/GiftItem";
import { useState } from "react";
import { Button } from "../ui/button";
import { CheckCircle, CircleNotch } from "@phosphor-icons/react";
import GiftItemLoading from "../GiftItemLoading/GiftItemLoading";
import { toast } from "sonner";

export default function GiftList() {
  const [loadingFetchMore, setLoadingFetchMore] = useState(false);
  const initialItemsToQuery = 14;

  const {
    data: giftList,
    loading,
    refetch,
    fetchMore,
  } = useQuery(GET_PRODUCTS, {
    variables: {
      offset: 0,
      limit: initialItemsToQuery,
    },
  });

  return (
    <section className="container mx-auto my-4">
      <div className="grid grid-cols-wrapDefault lg:grid-cols-wrapLarge gap-4 mb-6">
        {loading
          ? Array.from({ length: initialItemsToQuery }).map((item, index) => (
              <GiftItemLoading key={index} />
            ))
          : giftList.allProducts.map((giftItem: any, index: number) => (
              <GiftItem
                key={index}
                name={giftItem.name}
                description={giftItem.description}
                url={giftItem.url}
                _id={giftItem._id}
                isAssigned={giftItem.isAssigned}
                imageUrl={
                  giftItem?.image?.asset?.url && giftItem.image.asset.url
                }
                totalItems={giftList.allProducts.length}
                refetch={refetch}
              />
            ))}
      </div>
      <div className="mx-auto w-fit">
        {loadingFetchMore ? (
          <Button variant={"secondaryInverted"}>
            <CircleNotch weight="bold" className="animate-spin" />
            Carregando
          </Button>
        ) : (
          <Button
            variant={"secondary"}
            onClick={() => {
              setLoadingFetchMore(true);
              fetchMore({
                variables: {
                  offset: giftList.allProducts.length,
                },
              }).then((result) => {
                setLoadingFetchMore(false);
                if (result.data.allProducts.length) {
                  return;
                }
                toast.success("Todos os presentes carregados!", {
                  icon: <CheckCircle size={24} weight="bold" />,
                });
              });
            }}
          >
            Carregar mais
          </Button>
        )}
      </div>
    </section>
  );
}
