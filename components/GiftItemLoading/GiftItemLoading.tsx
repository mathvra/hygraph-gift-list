import { Skeleton } from "@/components/ui/skeleton";

export default function GiftItemLoading() {
  return (
    <div className="flex flex-col border rounded-lg">
      <Skeleton className="h-80 w-full" />
    </div>
  );
}
