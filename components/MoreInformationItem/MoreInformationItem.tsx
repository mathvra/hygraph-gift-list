import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface MoreInformationItemProps {
  title: string;
  iconTitle: ReactNode;
  description: string;
  imageUrl: string;
  addressTitle: string;
  address: string;
  addressUrl: string;
}

export default function MoreInformationItem({
  title,
  iconTitle,
  description,
  imageUrl,
  addressTitle,
  address,
  addressUrl,
}: MoreInformationItemProps) {
  return (
    <div className="flex flex-col gap-6 xl:w-1/2">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          {iconTitle}
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <p className="min-h-12">{description}</p>
      </div>
      <Image src={imageUrl} alt={"Igreja"} width={1000} height={1000} />
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold">{addressTitle}</h3>
          <span className="text-xs">{address}</span>
        </div>
        <Button variant={"secondaryInverted"} asChild>
          <Link href={addressUrl} target="_blank">
            <MapPin weight="bold" />
            Ver no mapa
          </Link>
        </Button>
      </div>
    </div>
  );
}
