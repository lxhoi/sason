import { cn } from "@/lib/utils";

export function Logo({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo.svg"
      alt="SASÓN Hotel & Resort"
      className={cn(
        "h-10 w-auto md:h-12",
        invert && "brightness-0 invert",
        className,
      )}
    />
  );
}

export function BrandMark({
  className,
  gold = false,
}: {
  className?: string;
  gold?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={gold ? "/brand/icon-1.svg" : "/brand/icon.svg"}
      alt=""
      className={cn("h-16 w-16", className)}
    />
  );
}
