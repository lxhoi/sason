"use client";

import { rooms, offers, navLinks } from "@/lib/data";
import { ArrowUpRight, Compass, BedDouble, Utensils, Sparkles, Phone, Calendar } from "lucide-react";

interface Props {
  onNavigate?: (path: string) => void;
  currentUrl?: string;
}

const mainPages = [
  { href: "/", label: "Trang chủ", en: "Home Page", icon: Compass, desc: "Hero video, triết lý nghỉ dưỡng, phòng nổi bật, ưu đãi & tiện ích" },
  { href: "/the-resort", label: "Khu nghỉ dưỡng", en: "The Resort", icon: Sparkles, desc: "Câu chuyện SASÓN, kiến trúc hòa hợp thiên nhiên tại Bãi Dài" },
  { href: "/gallery", label: "Thư viện ảnh", en: "Gallery", icon: Sparkles, desc: "Bộ sưu tập ảnh toàn cảnh hoàng hôn, hồ bơi và kiến trúc" },
  { href: "/booking", label: "Đặt phòng trực tuyến", en: "Online Booking", icon: Calendar, desc: "Form chọn ngày, loại phòng, số lượng khách và xác nhận" },
  { href: "/contact", label: "Liên hệ & Chỉ đường", en: "Contact & Concierge", icon: Phone, desc: "Thông tin liên hệ, hotline, form nhắn tin và địa chỉ Phú Quốc" },
];

const diningAndWellness = [
  { href: "/dining", label: "Nhà hàng & Bar", en: "Dining Experience", icon: Utensils, desc: "Ẩm thực đảo ngọc, hải sản bản địa và không gian mở bên biển" },
  { href: "/wellness", label: "Spa & Trị liệu", en: "Wellness & Sanctuary", icon: Sparkles, desc: "Liệu trình thư giãn thảo mộc tự nhiên và yoga đón bình minh" },
];

export function SitemapTab({ onNavigate, currentUrl }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 text-white">
      {/* Board Header */}
      <div className="mb-10 border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="inline-block rounded bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
              Architecture & Sitemap
            </span>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
              Sitemap & Cấu Trúc Toàn Bộ Website
            </h1>
            <p className="mt-1 text-sm text-white/50">
              Click vào bất kỳ trang nào để chuyển sang xem trực tiếp trên Prototype
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              Tổng cộng: <strong className="text-white">13 màn hình</strong>
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Main Navigation */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              1. Các Trang Chính (Core Pages)
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mainPages.map((page) => {
              const isActive = currentUrl === page.href;
              const Icon = page.icon;
              return (
                <button
                  key={page.href}
                  onClick={() => onNavigate?.(page.href)}
                  className={`group relative flex flex-col justify-between rounded-xl border p-5 text-left transition-all ${
                    isActive
                      ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/10 ring-1 ring-orange-500"
                      : "border-white/10 bg-[#161922] hover:border-white/20 hover:bg-[#1a1f2b]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/70 group-hover:bg-orange-500/20 group-hover:text-orange-400 transition-colors">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-[11px] text-white/30 group-hover:text-white/60">
                        {page.href}
                      </span>
                    </div>
                    <h3 className="mt-4 font-semibold text-white group-hover:text-orange-300 transition-colors">
                      {page.label}
                    </h3>
                    <p className="text-xs text-white/40">{page.en}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/55">
                      {page.desc}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-[11px] font-medium text-orange-400 opacity-80 group-hover:opacity-100">
                    <span>Mở trên prototype</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Suites & Rooms */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                2. Khu Vực Phòng Nghỉ & Biệt Thự (Suites & Villas)
              </h2>
            </div>
            <button
              onClick={() => onNavigate?.("/rooms")}
              className="text-xs text-emerald-400 hover:underline"
            >
              Xem danh sách phòng (/rooms) →
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rooms.map((room) => {
              const href = `/rooms/${room.slug}`;
              const isActive = currentUrl === href;
              return (
                <button
                  key={room.slug}
                  onClick={() => onNavigate?.(href)}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500"
                      : "border-white/10 bg-[#161922] hover:border-white/20 hover:bg-[#1a1f2b]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-medium text-emerald-300">
                        {room.tag}
                      </span>
                      <span className="font-mono text-white/40">${room.price}/night</span>
                    </div>
                    <h3 className="mt-3 font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {room.name}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] text-white/30">{href}</p>
                    <p className="mt-2 line-clamp-2 text-xs text-white/50">
                      {room.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-white/40">{room.size}</span>
                      <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-white/40">{room.beds}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-[11px] font-medium text-emerald-400 opacity-80 group-hover:opacity-100">
                    <span>Xem chi tiết phòng</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Dining & Wellness */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-violet-500" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              3. Trải Nghiệm & Tiện Ích (Experiences)
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {diningAndWellness.map((item) => {
              const isActive = currentUrl === item.href;
              const Icon = item.icon;
              return (
                <button
                  key={item.href}
                  onClick={() => onNavigate?.(item.href)}
                  className={`group relative flex items-start gap-4 rounded-xl border p-5 text-left transition-all ${
                    isActive
                      ? "border-violet-500 bg-violet-500/10 shadow-lg shadow-violet-500/10 ring-1 ring-violet-500"
                      : "border-white/10 bg-[#161922] hover:border-white/20 hover:bg-[#1a1f2b]"
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {item.label}
                      </h3>
                      <span className="font-mono text-[11px] text-white/30">{item.href}</span>
                    </div>
                    <p className="text-xs text-white/40">{item.en}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/55">{item.desc}</p>
                    <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-violet-400">
                      <span>Mở màn hình này</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Offers */}
        <section>
          <div className="mb-4 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-amber-500" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              4. Gói Ưu Đãi Đặc Biệt (Exclusive Offers)
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {offers.map((offer) => {
              return (
                <button
                  key={offer.slug}
                  onClick={() => onNavigate?.("/offers")}
                  className="group relative rounded-xl border border-white/10 bg-[#161922] p-4 text-left transition-all hover:border-amber-500/50 hover:bg-[#1a1f2b]"
                >
                  <span className="text-[10px] font-medium text-amber-400">{offer.season}</span>
                  <h3 className="mt-1 font-semibold text-white group-hover:text-amber-300 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">{offer.detail}</p>
                  <div className="mt-3 rounded bg-amber-500/10 px-2 py-1 text-[11px] text-amber-300">
                    🎁 {offer.perk}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
