import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <Skeleton className="h-[450px] rounded-xl dark:bg-dark-2 flex items-center justify-center w-[calc(1/3-32px)] border shadow-2xl " />
  );
}
