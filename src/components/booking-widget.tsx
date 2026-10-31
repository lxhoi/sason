"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BookingWidget({
  variant = "bar",
  defaultRoom,
}: {
  variant?: "bar" | "page";
  defaultRoom?: string;
}) {
  const router = useRouter();
  const [range, setRange] = useState<DateRange | undefined>();
  const [guests, setGuests] = useState(2);
  const [room, setRoom] = useState(defaultRoom ?? "");
  const [open, setOpen] = useState(false);

  const label = useMemo(() => {
    if (!range?.from) return "Select dates";
    if (!range.to) return format(range.from, "dd MMM yyyy");
    return `${format(range.from, "dd MMM")} — ${format(range.to, "dd MMM yyyy")}`;
  }, [range]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (range?.from) params.set("checkIn", format(range.from, "yyyy-MM-dd"));
    if (range?.to) params.set("checkOut", format(range.to, "yyyy-MM-dd"));
    params.set("guests", String(guests));
    if (room) params.set("room", room);
    router.push(`/booking?${params.toString()}`);
  }

  return (
    <form
      onSubmit={submit}
      className={cn(
        variant === "bar"
          ? "grid gap-4 bg-cream p-4 text-forest shadow-2xl md:grid-cols-[1.4fr_0.7fr_auto] md:items-end md:p-5"
          : "grid gap-6",
      )}
    >
      <Field label="Stay">
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="flex h-12 w-full items-center border-b border-forest/20 bg-transparent text-left text-sm">
            {label}
          </PopoverTrigger>
          <PopoverContent>
            <Calendar
              mode="range"
              min={1}
              selected={range}
              onSelect={(next) => {
                setRange(next);
                if (next?.from && next.to && next.from.getTime() !== next.to.getTime()) {
                  setOpen(false);
                }
              }}
              disabled={{ before: new Date() }}
              numberOfMonths={1}
            />
          </PopoverContent>
        </Popover>
      </Field>

      <Field label="Guests">
        <select
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          className="h-12 w-full border-b border-forest/20 bg-transparent text-sm outline-none"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </Field>

      {variant === "page" && (
        <Field label="Residence">
          <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="h-12 w-full border-b border-forest/20 bg-transparent text-sm outline-none"
          >
            <option value="">Any suite or villa</option>
            <option value="garden-bungalow">Garden Bungalow</option>
            <option value="forest-suite">Forest Suite</option>
            <option value="ocean-villa">Ocean Villa</option>
            <option value="sason-residence">SASÓN Residence</option>
          </select>
        </Field>
      )}

      <Button type="submit" variant="forest" className="md:min-w-[180px]">
        Check availability
      </Button>
    </form>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="nav-link text-[10px] text-forest/55">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
