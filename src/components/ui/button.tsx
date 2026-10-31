import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        gold: "bg-sand text-forest hover:bg-[#f3c97a]",
        forest: "bg-forest text-cream hover:bg-[#05351d]",
        outline:
          "border border-current bg-transparent hover:bg-forest hover:text-cream",
        ghost: "bg-transparent hover:opacity-70",
      },
      size: {
        default:
          "h-12 px-7 text-[11px] font-medium uppercase tracking-[0.22em]",
        sm: "h-10 px-5 text-[10px] font-medium uppercase tracking-[0.22em]",
        lg: "h-14 px-10 text-[11px] font-medium uppercase tracking-[0.22em]",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
