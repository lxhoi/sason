"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";

interface Props {
  onNavigate?: (path: string) => void;
  currentUrl?: string;
}

export function SitemapTab({ onNavigate, currentUrl }: Props) {
  const [filterKeyFlow, setFilterKeyFlow] = useState(false);

  // 5-step primary user flow from Home to Booking Success
  const keyFlowSteps = [
    { num: "1", label: "Trang Chủ", path: "/" },
    { num: "2", label: "Suites & Villas", path: "/rooms" },
    { num: "3", label: "Forest Suite", path: "/rooms/forest-suite" },
    { num: "4", label: "Đặt Phòng", path: "/booking" },
    { num: "5", label: "Đặt Thành Công", path: "/booking?status=success", isGoal: true },
  ];

  // Simplified and ordered sitemap groups
  const sections = [
    {
      title: "Khám Phá",
      items: [
        { num: "02", name: "The Resort (Giới thiệu)", path: "/the-resort" },
        { num: "03", name: "Thư viện ảnh (Gallery)", path: "/gallery" },
      ],
    },
    {
      title: "Phòng Nghỉ",
      highlight: true,
      items: [
        { num: "04", name: "Danh sách Suites & Villas", path: "/rooms", keyStep: "Bước 2" },
        { num: "4.1", name: "Garden Bungalow", path: "/rooms/garden-bungalow", sub: true },
        { num: "4.2", name: "Forest Suite", path: "/rooms/forest-suite", sub: true, keyStep: "Bước 3" },
        { num: "4.3", name: "Ocean Villa", path: "/rooms/ocean-villa", sub: true },
        { num: "4.4", name: "SASÓN Residence", path: "/rooms/sason-residence", sub: true },
      ],
    },
    {
      title: "Trải Nghiệm",
      items: [
        { num: "05", name: "Ẩm thực & Bar (Dining)", path: "/dining" },
        { num: "06", name: "Wellness & Spa", path: "/wellness" },
      ],
    },
    {
      title: "Đặt Phòng & Dịch Vụ",
      highlight: true,
      items: [
        { num: "07", name: "Gói ưu đãi (Offers)", path: "/offers" },
        { num: "08", name: "Form đặt phòng trực tuyến", path: "/booking", keyStep: "Bước 4" },
        { num: "09", name: "Đặt phòng thành công", path: "/booking?status=success", keyStep: "Bước 5 (Đích)", isGoal: true },
        { num: "10", name: "Liên hệ & Chỉ đường", path: "/contact" },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 text-white md:px-6">

      {/* ── HEADER TỐI GIẢN ── */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <h1 className="font-serif text-2xl font-normal tracking-wide text-white">
            Sitemap
          </h1>
          <p className="mt-1 text-xs text-white/50">
            Sơ đồ toàn bộ 14 trang · Nhấn vào thẻ để mở trên website
          </p>
        </div>

        {/* Nút lọc Key Flow */}
        <button
          onClick={() => setFilterKeyFlow((v) => !v)}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
            filterKeyFlow
              ? "bg-[#FFD99C] text-[#004121] font-semibold"
              : "border border-white/15 bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
          }`}
        >
          {filterKeyFlow ? "✓ Đang xem: Chỉ User Flow chính" : "Lọc: Chỉ User Flow chính"}
        </button>
      </div>

      {/* ── KEY USER FLOW CHÍNH (TỐI GIẢN: HOME ➔ THÀNH CÔNG) ── */}
      <div className="mb-8 rounded-xl border border-[#FFD99C]/30 bg-[#004121]/30 p-4">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#FFD99C]">
            User Flow chính: Trang Chủ ➔ Đặt phòng thành công
          </span>
          <span className="text-[11px] text-white/40">5 Bước</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {keyFlowSteps.map((step, idx) => {
            const isActive = currentUrl === step.path;
            return (
              <div key={step.path} className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={() => onNavigate?.(step.path)}
                  className={`group flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs transition-all ${
                    step.isGoal
                      ? "bg-[#FFD99C] text-[#004121] font-bold shadow-sm hover:bg-amber-300"
                      : isActive
                      ? "border border-[#FFD99C] bg-[#004121] text-[#FFD99C] font-semibold"
                      : "border border-white/15 bg-white/5 text-white/80 hover:border-[#FFD99C]/50 hover:text-white"
                  }`}
                >
                  <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold ${
                    step.isGoal ? "bg-[#004121] text-[#FFD99C]" : "bg-white/15 text-white"
                  }`}>
                    {step.isGoal ? "✓" : step.num}
                  </span>
                  <span>{step.label}</span>
                </button>
                {idx < keyFlowSteps.length - 1 && (
                  <ArrowRight className="h-3 w-3 text-[#FFD99C]/40 shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── SƠ ĐỒ MINDMAP TỐI GIẢN (HIERARCHICAL TREE) ── */}
      <div className="space-y-6">

        {/* Nút Gốc: 01. Trang Chủ */}
        {!filterKeyFlow && (
          <div className="flex flex-col items-center">
            <button
              onClick={() => onNavigate?.("/")}
              className={`group flex items-center gap-2 rounded-xl border px-5 py-2.5 transition-all ${
                currentUrl === "/"
                  ? "border-[#FFD99C] bg-[#004121] text-[#FFD99C] shadow-lg ring-2 ring-[#FFD99C]/20"
                  : "border-[#FFD99C]/60 bg-[#00381c] text-white hover:border-[#FFD99C]"
              }`}
            >
              <span className="font-mono text-xs font-bold text-[#FFD99C]">01</span>
              <span className="font-serif font-bold text-sm">Trang Chủ (Home)</span>
              <span className="rounded bg-[#FFD99C] px-1.5 py-0.5 text-[9px] font-bold text-[#004121]">
                BƯỚC 1
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-white/40 group-hover:text-white" />
            </button>
            <div className="h-6 w-px bg-white/20" />
          </div>
        )}

        {/* Các Nhóm / Nhánh Trang */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((sec) => {
            // Nếu đang lọc Key Flow, chỉ hiện các mục thuộc Key Flow
            const items = filterKeyFlow
              ? sec.items.filter((item) => item.keyStep)
              : sec.items;

            if (items.length === 0) return null;

            return (
              <div
                key={sec.title}
                className={`rounded-xl border p-4 ${
                  sec.highlight
                    ? "border-[#C0DBAC]/30 bg-[#004121]/15"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="mb-3 border-b border-white/10 pb-2">
                  <h3 className="font-serif text-xs font-bold tracking-wider text-[#C0DBAC] uppercase">
                    {sec.title}
                  </h3>
                </div>

                <div className="space-y-1.5">
                  {items.map((item) => {
                    const isActive = currentUrl === item.path;
                    return (
                      <button
                        key={item.path}
                        onClick={() => onNavigate?.(item.path)}
                        className={`group flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-all ${
                          item.isGoal
                            ? "border border-[#FFD99C] bg-[#FFD99C]/20 text-[#FFD99C] font-semibold"
                            : item.keyStep
                            ? "border border-[#FFD99C]/50 bg-[#004121]/40 text-white font-medium hover:border-[#FFD99C]"
                            : isActive
                            ? "bg-white/15 text-white font-medium"
                            : item.sub
                            ? "text-white/60 hover:text-white hover:bg-white/5 pl-4"
                            : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="font-mono text-[10px] text-white/40 shrink-0">
                            {item.num}
                          </span>
                          <span className="truncate">{item.name}</span>
                        </div>

                        {item.keyStep ? (
                          <span className="shrink-0 rounded bg-[#FFD99C] px-1 text-[8px] font-bold text-[#004121] ml-1">
                            {item.keyStep}
                          </span>
                        ) : (
                          <ArrowUpRight className="h-3 w-3 text-white/20 group-hover:text-white shrink-0 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
