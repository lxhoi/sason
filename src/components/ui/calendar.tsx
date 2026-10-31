"use client";

import { DayPicker, type DayPickerProps } from "react-day-picker";
import { cn } from "@/lib/utils";

export function Calendar({ className, classNames, ...props }: DayPickerProps) {
  return (
    <DayPicker
      className={cn("p-2", className)}
      classNames={{
        months: "flex flex-col",
        month_caption: "flex justify-center py-2 font-serif text-lg",
        nav: "flex items-center justify-between absolute inset-x-2 top-2",
        button_previous:
          "h-8 w-8 text-forest/60 hover:text-forest cursor-pointer",
        button_next: "h-8 w-8 text-forest/60 hover:text-forest cursor-pointer",
        weekdays: "flex",
        weekday:
          "w-9 text-[10px] uppercase tracking-[0.18em] text-forest/50 font-medium",
        week: "flex",
        day: "size-9 text-sm",
        day_button:
          "size-9 hover:bg-sage/50 cursor-pointer aria-selected:bg-forest aria-selected:text-cream",
        selected: "bg-forest text-cream",
        today: "underline decoration-copper underline-offset-4",
        outside: "text-forest/25",
        disabled: "text-forest/20",
        range_middle: "bg-sage/60 text-forest",
        ...classNames,
      }}
      {...props}
    />
  );
}
