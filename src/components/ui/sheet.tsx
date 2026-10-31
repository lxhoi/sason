"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  className,
  children,
  ...props
}: Dialog.DialogContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-forest/40 backdrop-blur-[2px] data-[state=open]:animate-in" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream p-8 text-forest shadow-2xl outline-none",
          className,
        )}
        {...props}
      >
        <Dialog.Title className="sr-only">Menu</Dialog.Title>
        <Dialog.Close className="absolute right-6 top-6 text-forest/70 hover:text-forest">
          <X className="h-5 w-5" />
        </Dialog.Close>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
