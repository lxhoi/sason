"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { format, parseISO } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/logo";
import { rooms } from "@/lib/data";
import { formatCurrency, nightsBetween } from "@/lib/utils";

export function BookingForm() {
  const params = useSearchParams();
  const [range, setRange] = useState<DateRange | undefined>(() => {
    const checkIn = params.get("checkIn");
    const checkOut = params.get("checkOut");
    if (!checkIn) return undefined;
    return {
      from: parseISO(checkIn),
      to: checkOut ? parseISO(checkOut) : undefined,
    };
  });
  const [guests, setGuests] = useState(Number(params.get("guests") ?? 2));
  const [roomSlug, setRoomSlug] = useState(params.get("room") ?? "forest-suite");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [datesOpen, setDatesOpen] = useState(false);

  const room = rooms.find((item) => item.slug === roomSlug) ?? rooms[1];
  const nights = nightsBetween(range?.from, range?.to);
  const total = useMemo(
    () => (nights > 0 ? nights * room.price : room.price),
    [nights, room.price],
  );

  const dateLabel = !range?.from
    ? "Select dates"
    : !range.to
      ? format(range.from, "dd MMM yyyy")
      : `${format(range.from, "dd MMM")} — ${format(range.to, "dd MMM yyyy")}`;

  if (submitted) {
    return (
      <div className="border border-forest/10 bg-sage/20 px-8 py-16 text-center">
        <BrandMark className="mx-auto h-16 w-16" />
        <h2 className="mt-6 font-serif text-4xl italic">Request received</h2>
        <p className="mx-auto mt-4 max-w-md leading-8 text-forest/75">
          Thank you, {name.split(" ")[0] || "guest"}. A host will write to{" "}
          {email || "you"} to confirm {room.name}
          {nights ? ` for ${nights} night${nights > 1 ? "s" : ""}` : ""}.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        if (!range?.from || !range.to) return;
        setSubmitted(true);
      }}
    >
      <label className="block">
        <span className="nav-link text-[10px] text-forest/55">Residence</span>
        <select
          required
          value={roomSlug}
          onChange={(e) => setRoomSlug(e.target.value)}
          className="mt-2 h-12 w-full border-b border-forest/20 bg-transparent outline-none"
        >
          {rooms.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name} — from {formatCurrency(item.price)}
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-8 md:grid-cols-2">
        <label className="block">
          <span className="nav-link text-[10px] text-forest/55">Stay</span>
          <Popover open={datesOpen} onOpenChange={setDatesOpen}>
            <PopoverTrigger className="mt-2 flex h-12 w-full items-center border-b border-forest/20 text-left">
              {dateLabel}
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="range"
                min={1}
                selected={range}
                onSelect={(next) => {
                  setRange(next);
                  if (next?.from && next.to && next.from.getTime() !== next.to.getTime()) {
                    setDatesOpen(false);
                  }
                }}
                disabled={{ before: new Date() }}
              />
            </PopoverContent>
          </Popover>
        </label>
        <label className="block">
          <span className="nav-link text-[10px] text-forest/55">Guests</span>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-2 h-12 w-full border-b border-forest/20 bg-transparent outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Full name">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 w-full border-b border-forest/20 bg-transparent outline-none"
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 w-full border-b border-forest/20 bg-transparent outline-none"
          />
        </Field>
      </div>

      <Field label="Requests">
        <textarea
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-2 w-full border-b border-forest/20 bg-transparent py-3 outline-none"
          placeholder="Arrival time, celebrations, dietary notes…"
        />
      </Field>

      <div className="flex items-end justify-between border-t border-forest/10 pt-6">
        <div>
          <p className="nav-link text-copper">Indicative total</p>
          <p className="mt-1 font-serif text-3xl">{formatCurrency(total)}</p>
          <p className="text-xs text-forest/50">
            {nights
              ? `${nights} night${nights === 1 ? "" : "s"} · `
              : ""}
            {room.name} · {guests} guests
          </p>
        </div>
        <Button type="submit" variant="forest" disabled={!range?.from || !range.to}>
          Send request
        </Button>
      </div>
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
      {children}
    </label>
  );
}
