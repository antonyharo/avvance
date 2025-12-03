import { cn } from "@/lib/utils";

function Skeleton({ className, noPulse = false, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-primary/10 rounded-md",
        noPulse ? "animate-none" : "animate-pulse",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
