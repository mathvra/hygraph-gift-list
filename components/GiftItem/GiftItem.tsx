import Image from "next/image";
import GiftDrawer from "../GiftDrawer/GiftDrawer";
import GiftDrawerVaul from "../GiftDrawer/GiftDrawerVaul";
import GiftModal from "../GiftModal/GiftModal";

interface GiftItemProps {
  name: string;
  description: string;
  url: string;
  _id: string;
  isAssigned: boolean;
  refetch: any;
  imageUrl: string;
  totalItems: number;
}

export default function GiftItem({
  name,
  description,
  url,
  _id,
  isAssigned,
  refetch,
  imageUrl,
  totalItems,
}: GiftItemProps) {
  return (
    <div className="flex flex-col h-80 border border-primary-2 rounded-lg">
      {imageUrl && (
        <div className="px-2 py-2 relative">
          {isAssigned && (
            <div className="absolute w-full h-full top-0 left-0 p-1">
              <div className="bg-secondary/75 flex items-center justify-center rounded h-full">
                <p className="font-light text-2xl text-secondary-foreground">
                  Assinado
                </p>
              </div>
            </div>
          )}
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="h-32 object-contain"
            priority={false}
          />
        </div>
      )}
      <div
        className={`${
          isAssigned ? "bg-white" : "bg-primary-2"
        } flex-grow flex flex-col justify-between p-4 gap-4 rounded-b-lg`}
      >
        <div className="flex flex-col gap-2">
          <h3 className="font-bold leading-4 line-clamp-2">{name}</h3>
          <p className="text-xs line-clamp-3">{description}</p>
        </div>
        <GiftModal
          isAssigned={isAssigned}
          name={name}
          description={description}
          url={url}
          id={_id}
          refetch={refetch}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
}
