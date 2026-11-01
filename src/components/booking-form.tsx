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
  const [submitted, setSubmitted] = useState(
    () => params.get("status") === "success"
  );
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
      <div className="border border-forest/15 bg-sage/25 p-8 md:p-14 text-center rounded-2xl shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#004121] text-[#FFD99C] shadow-lg shadow-forest/20">
          <BrandMark className="h-10 w-10" />
        </div>
        <span className="mt-6 inline-block rounded-full bg-[#004121]/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-[#004121]">
          Reference: #SSN-88294 · Confirmed
        </span>
        <h2 className="mt-3 font-serif text-3xl md:text-5xl italic text-[#004121]">
          Đặt phòng thành công!
        </h2>
        <p className="mx-auto mt-4 max-w-lg leading-relaxed text-forest/80 text-sm md:text-base">
          Cảm ơn quý khách {name ? name.split(" ")[0] : ""}. Yêu cầu lưu trú của quý khách tại{" "}
          <strong className="text-[#004121]">{room.name}</strong>
          {nights ? ` (${nights} đêm)` : ""} đã được ghi nhận. Trợ lý cá nhân của SASÓN sẽ liên hệ qua{" "}
          <strong className="text-[#004121]">{email || "email"}</strong> trong vòng 2 giờ để xác nhận giờ đón và lịch trình nghỉ dưỡng.
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-xl bg-white/80 p-4 border border-forest/10 text-left text-xs text-forest/80 space-y-2">
          <div className="flex justify-between border-b border-forest/10 pb-2">
            <span>Hạng phòng:</span>
            <strong className="text-forest">{room.name}</strong>
          </div>
          <div className="flex justify-between border-b border-forest/10 pb-2">
            <span>Thời gian lưu trú:</span>
            <strong className="text-forest">{dateLabel !== "Select dates" ? dateLabel : "3 đêm (Tiêu chuẩn)"}</strong>
          </div>
          <div className="flex justify-between">
            <span>Đặc quyền bao gồm:</span>
            <span className="text-forest font-semibold">Bữa sáng hàng ngày & Lagoon pool</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="rounded-full bg-[#004121] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#FFFAF2] shadow-md hover:bg-[#002f18] transition-colors"
          >
            Về Trang Chủ (Home)
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="rounded-full border border-forest/20 bg-white/50 px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-forest hover:bg-white transition-colors"
          >
            Đặt Phòng Mới
          </button>
        </div>
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
