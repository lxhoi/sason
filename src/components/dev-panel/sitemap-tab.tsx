"use client";

import { useState } from "react";
import {
  Compass, BedDouble, Utensils, Sparkles, Phone, Calendar,
  ArrowUpRight, Star, Zap, Network, LayoutGrid, CheckCircle2,
  ChevronRight, ArrowRight, Award, ShieldCheck, Check
} from "lucide-react";

interface Props {
  onNavigate?: (path: string) => void;
  currentUrl?: string;
}

type ViewMode = "mindmap" | "grid";

interface SitemapNode {
  order: string;
  name: string;
  en: string;
  href: string;
  icon: any;
  isKeyFlow?: boolean;
  keyFlowStep?: number;
  keyFlowLabel?: string;
  isGoalNode?: boolean;
  children?: SitemapNode[];
}

interface SitemapBranch {
  branchId: string;
  branchOrder: string;
  title: string;
  role: string;
  colorBorder: string;
  colorBg: string;
  colorText: string;
  isKeyBranch?: boolean;
  nodes: SitemapNode[];
}

// Complete ordered SASÓN Resort Sitemap with complete 5-step User Flow
// From Home Page -> Room Catalog -> Room Detail -> Booking Form -> Booking Success!
const sitemapBranches: SitemapBranch[] = [
  {
    branchId: "stay",
    branchOrder: "NHÁNH 01",
    title: "Lưu Trú & Không Gian Nghỉ Dưỡng (Sanctuary & Stay)",
    role: "Trọng tâm sản phẩm: Tìm hiểu không gian, duyệt danh mục & chọn phòng",
    isKeyBranch: true,
    colorBorder: "border-[#C0DBAC]/40",
    colorBg: "bg-[#004121]/20",
    colorText: "text-[#C0DBAC]",
    nodes: [
      {
        order: "02",
        name: "The Resort (Giới thiệu)",
        en: "The Sanctuary Story",
        href: "/the-resort",
        icon: Compass,
      },
      {
        order: "03",
        name: "Suites & Villas (Danh mục phòng)",
        en: "All Suites & Villas",
        href: "/rooms",
        icon: BedDouble,
        isKeyFlow: true,
        keyFlowStep: 2,
        keyFlowLabel: "BƯỚC 2: DUYỆT PHÒNG",
        children: [
          {
            order: "3.1",
            name: "Garden Bungalow",
            en: "Garden Villa · 140m²",
            href: "/rooms/garden-bungalow",
            icon: BedDouble,
          },
          {
            order: "3.2",
            name: "Forest Suite (Chi tiết phòng)",
            en: "Lagoon View · 185m²",
            href: "/rooms/forest-suite",
            icon: BedDouble,
            isKeyFlow: true,
            keyFlowStep: 3,
            keyFlowLabel: "BƯỚC 3: CHI TIẾT PHÒNG",
          },
          {
            order: "3.3",
            name: "Ocean Villa",
            en: "Beachfront · 240m²",
            href: "/rooms/ocean-villa",
            icon: BedDouble,
          },
          {
            order: "3.4",
            name: "SASÓN Residence",
            en: "Private Compound · 420m²",
            href: "/rooms/sason-residence",
            icon: BedDouble,
          },
        ],
      },
      {
        order: "04",
        name: "Gallery (Thư viện hình ảnh)",
        en: "Visual Gallery",
        href: "/gallery",
        icon: Sparkles,
      },
    ],
  },
  {
    branchId: "booking",
    branchOrder: "NHÁNH 02",
    title: "Đặt Phòng & Chuyển Đổi (Conversion Funnel)",
    role: "Mục tiêu tối thượng: Điền thông tin đặt phòng & Nhận xác nhận thành công",
    isKeyBranch: true,
    colorBorder: "border-[#FFD99C]/60",
    colorBg: "bg-[#FFD99C]/10",
    colorText: "text-[#FFD99C]",
    nodes: [
      {
        order: "05",
        name: "Exclusive Offers (Gói ưu đãi)",
        en: "Seasonal Packages",
        href: "/offers",
        icon: Sparkles,
      },
      {
        order: "06",
        name: "Booking (Form đặt phòng trực tuyến)",
        en: "Direct Booking Form",
        href: "/booking",
        icon: Calendar,
        isKeyFlow: true,
        keyFlowStep: 4,
        keyFlowLabel: "BƯỚC 4: ĐIỀN THÔNG TIN ĐẶT PHÒNG",
      },
      {
        order: "07",
        name: "Booking Success (Đặt phòng thành công)",
        en: "Booking Confirmed & Reference Code",
        href: "/booking?status=success",
        icon: CheckCircle2,
        isKeyFlow: true,
        keyFlowStep: 5,
        keyFlowLabel: "BƯỚC 5: ĐẶT PHÒNG THÀNH CÔNG (GOAL)",
        isGoalNode: true,
      },
      {
        order: "08",
        name: "Contact (Liên hệ & Chỉ đường)",
        en: "Contact & Concierge",
        href: "/contact",
        icon: Phone,
      },
    ],
  },
  {
    branchId: "experience",
    branchOrder: "NHÁNH 03",
    title: "Trải Nghiệm Ẩm Thực & Trị Liệu (Experiences)",
    role: "Gia tăng giá trị cảm xúc, ẩm thực cao cấp và sức khỏe",
    isKeyBranch: false,
    colorBorder: "border-[#95B380]/40",
    colorBg: "bg-[#95B380]/10",
    colorText: "text-[#95B380]",
    nodes: [
      {
        order: "09",
        name: "Dining (Ẩm thực & Bar)",
        en: "Dining Experience",
        href: "/dining",
        icon: Utensils,
      },
      {
        order: "10",
        name: "Wellness & Spa (Trị liệu & Yoga)",
        en: "Wellness & Spa",
        href: "/wellness",
        icon: Sparkles,
      },
    ],
  },
];

export function SitemapTab({ onNavigate, currentUrl }: Props) {
  const [viewMode, setViewMode] = useState<ViewMode>("mindmap");
  const [filterKeyFlowOnly, setFilterKeyFlowOnly] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 text-white md:px-8">

      {/* ── HEADER (SASÓN DESIGN SYSTEM PALETTE) ── */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#C0DBAC]/20 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-[#FFD99C]/40 bg-[#004121] px-3 py-0.5 text-[11px] font-serif tracking-wider text-[#FFD99C] shadow-sm">
              <Zap className="h-3 w-3 fill-current text-[#FFD99C]" />
              Sitemap Architecture
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-mono text-[#C0DBAC]">
              14 Screens · 5-Step Key Flow
            </span>
          </div>
          <h1 className="mt-2.5 font-serif text-2xl font-bold tracking-tight text-white md:text-3xl">
            Sơ Đồ Phân Nhánh Sitemap & Key User Flow
          </h1>
          <p className="mt-1 text-xs text-[#FFFAF2]/60">
            Tuyến trải nghiệm người dùng chính (<strong className="text-[#FFD99C] font-semibold">Primary Key Flow</strong>) được thiết kế xuyên suốt 5 bước: Từ lúc khách tiếp cận <strong className="text-white">Home Page (/)</strong> cho đến khi <strong className="text-[#FFD99C]">Booking thành công (/booking?status=success)</strong>.
          </p>
        </div>

        {/* View Switcher & Filter Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Filter Key Flow Toggle */}
          <button
            onClick={() => setFilterKeyFlowOnly((v) => !v)}
            className={`flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-xs font-medium transition-all ${
              filterKeyFlowOnly
                ? "border-[#FFD99C] bg-[#FFD99C]/20 text-[#FFD99C] shadow-md shadow-[#FFD99C]/10 ring-1 ring-[#FFD99C]/30"
                : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
            }`}
          >
            <Star className={`h-3.5 w-3.5 ${filterKeyFlowOnly ? "fill-[#FFD99C] text-[#FFD99C]" : ""}`} />
            <span>{filterKeyFlowOnly ? "Đang lọc: Chỉ Key Flow (5 Bước)" : "Lọc: Chỉ Key Flow"}</span>
          </button>

          {/* Mode Switch: Mind Map vs Grid */}
          <div className="flex items-center rounded-lg border border-white/15 bg-white/5 p-0.5">
            <button
              onClick={() => setViewMode("mindmap")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "mindmap" ? "bg-[#004121] text-[#FFD99C] shadow-sm font-semibold" : "text-white/50 hover:text-white"
              }`}
            >
              <Network className="h-3.5 w-3.5" />
              <span>Dạng Mind Map</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "grid" ? "bg-[#004121] text-[#FFD99C] shadow-sm font-semibold" : "text-white/50 hover:text-white"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Dạng Lưới Thẻ</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── KEY FLOW CALLOUT BANNER: HOME ➔ BOOKING SUCCESS ── */}
      <div className="mb-10 overflow-hidden rounded-2xl border border-[#FFD99C]/50 bg-gradient-to-r from-[#00381c] via-[#004121] to-[#0a2318] p-5 shadow-2xl shadow-black/50 ring-1 ring-[#FFD99C]/30">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFD99C] text-[#004121] ring-2 ring-[#FFD99C]/40 shadow-lg">
            <Zap className="h-6 w-6 fill-current" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider text-[#FFD99C]">
                Tuyến Trải Nghiệm Chính (Home Page ➔ Booking Thành Công)
              </h2>
              <span className="rounded-full bg-[#FFD99C] px-2.5 py-0.5 text-[10px] font-black uppercase text-[#004121]">
                Full Conversion Journey · 5 Bước
              </span>
            </div>
            <p className="mt-1 text-xs text-[#FFFAF2]/80 leading-relaxed">
              Trực quan hóa hành trình chuyển đổi cốt lõi từ điểm chạm đầu tiên tới màn hình xác nhận đặt phòng:
            </p>

            {/* Stepper Visual in Design System Colors */}
            <div className="mt-4 flex flex-wrap items-center gap-2 font-sans text-xs">
              {/* Step 1: Home */}
              <button
                onClick={() => onNavigate?.("/")}
                className="flex items-center gap-1.5 rounded-lg border border-[#FFD99C]/40 bg-[#002f18] px-2.5 py-1 text-[#FFD99C] hover:bg-[#002513] transition-all"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FFD99C] text-[10px] font-bold text-[#004121]">1</span>
                <strong>01. Home Page (/)</strong>
              </button>
              <ChevronRight className="h-3.5 w-3.5 text-[#FFD99C]/60 shrink-0" />

              {/* Step 2: Rooms */}
              <button
                onClick={() => onNavigate?.("/rooms")}
                className="flex items-center gap-1.5 rounded-lg border border-[#FFD99C]/40 bg-[#002f18] px-2.5 py-1 text-[#FFD99C] hover:bg-[#002513] transition-all"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FFD99C] text-[10px] font-bold text-[#004121]">2</span>
                <strong>03. Danh Sách Phòng (/rooms)</strong>
              </button>
              <ChevronRight className="h-3.5 w-3.5 text-[#FFD99C]/60 shrink-0" />

              {/* Step 3: Room Detail */}
              <button
                onClick={() => onNavigate?.("/rooms/forest-suite")}
                className="flex items-center gap-1.5 rounded-lg border border-[#FFD99C]/40 bg-[#002f18] px-2.5 py-1 text-[#FFD99C] hover:bg-[#002513] transition-all"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FFD99C] text-[10px] font-bold text-[#004121]">3</span>
                <strong>3.2. Chi Tiết Forest Suite</strong>
              </button>
              <ChevronRight className="h-3.5 w-3.5 text-[#FFD99C]/60 shrink-0" />

              {/* Step 4: Booking Form */}
              <button
                onClick={() => onNavigate?.("/booking")}
                className="flex items-center gap-1.5 rounded-lg border border-[#FFD99C]/40 bg-[#002f18] px-2.5 py-1 text-[#FFD99C] hover:bg-[#002513] transition-all"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FFD99C] text-[10px] font-bold text-[#004121]">4</span>
                <strong>06. Form Đặt Phòng (/booking)</strong>
              </button>
              <ChevronRight className="h-3.5 w-3.5 text-[#FFD99C]/60 shrink-0" />

              {/* Step 5: Booking Success (Goal) */}
              <button
                onClick={() => onNavigate?.("/booking?status=success")}
                className="flex items-center gap-1.5 rounded-lg border-2 border-[#FFD99C] bg-[#FFD99C] text-[#004121] font-bold px-3 py-1 shadow-lg shadow-[#FFD99C]/30 hover:bg-amber-300 transition-all"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#004121] text-[10px] font-black text-[#FFD99C]">✓</span>
                <strong>07. ĐẶT PHÒNG THÀNH CÔNG (GOAL)</strong>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── VIEW 1: MIND MAP VIEW (REORGANIZED & ORDERED) ── */}
      {viewMode === "mindmap" && (
        <div className="space-y-10">

          {/* Central Root Node (01. Trang Chủ) */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative group">
              <button
                onClick={() => onNavigate?.("/")}
                className={`relative flex items-center gap-3.5 rounded-2xl border-2 px-6 py-3.5 shadow-2xl transition-all hover:scale-105 ${
                  currentUrl === "/"
                    ? "border-[#FFD99C] bg-gradient-to-r from-[#004121] to-[#0a2f1c] text-white ring-4 ring-[#FFD99C]/30"
                    : "border-[#FFD99C]/80 bg-[#00381c] text-white hover:border-[#FFD99C] shadow-[#FFD99C]/10"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD99C] text-[#004121] font-serif font-bold text-lg shadow-md">
                  01
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#FFD99C] px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#004121]">
                      ★ KEY FLOW BƯỚC 1: BẮT ĐẦU
                    </span>
                    <span className="font-mono text-[10px] text-[#C0DBAC]">/</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-white">
                    01. Home Page (Trang Chủ)
                  </h3>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#FFD99C] opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-2" />
              </button>

              {/* Trunk connector line going down */}
              <div className="mx-auto h-8 w-0.5 bg-gradient-to-b from-[#FFD99C] to-[#C0DBAC]/40" />
            </div>
          </div>

          {/* Mind Map Branches */}
          <div className="grid gap-6 lg:grid-cols-3">
            {sitemapBranches
              .filter((branch) => !filterKeyFlowOnly || branch.isKeyBranch)
              .map((branch) => {
                return (
                  <div
                    key={branch.branchId}
                    className={`relative rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                      branch.isKeyBranch
                        ? "border-[#FFD99C]/50 bg-[#0b1a13] shadow-xl ring-1 ring-[#FFD99C]/20"
                        : "border-[#C0DBAC]/20 bg-[#0a1410] hover:border-[#C0DBAC]/40"
                    }`}
                  >
                    <div>
                      {/* Branch Header */}
                      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2">
                          <span className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${branch.colorBg} ${branch.colorText} border ${branch.colorBorder}`}>
                            {branch.branchOrder}
                          </span>
                          <span className="font-serif text-xs font-bold text-white">
                            {branch.title}
                          </span>
                        </div>
                        {branch.isKeyBranch && (
                          <span className="flex items-center gap-1 rounded bg-[#FFD99C]/20 px-2 py-0.5 text-[10px] font-bold text-[#FFD99C]">
                            <Star className="h-2.5 w-2.5 fill-current" />
                            Key Flow
                          </span>
                        )}
                      </div>

                      {/* Nodes inside this branch */}
                      <div className="space-y-3">
                        {branch.nodes
                          .filter((node) => !filterKeyFlowOnly || node.isKeyFlow || node.children?.some((c) => c.isKeyFlow))
                          .map((node) => {
                            const isNodeActive = currentUrl === node.href;

                            return (
                              <div key={node.order} className="space-y-2">
                                <button
                                  onClick={() => onNavigate?.(node.href)}
                                  className={`group relative flex w-full items-center justify-between rounded-xl border px-3.5 py-2.5 text-left transition-all ${
                                    node.isGoalNode
                                      ? "border-2 border-[#FFD99C] bg-gradient-to-r from-[#FFD99C]/25 via-[#004121] to-[#0a2318] hover:border-amber-300 shadow-lg shadow-[#FFD99C]/20 ring-2 ring-[#FFD99C]/40"
                                      : node.isKeyFlow
                                      ? "border-[#FFD99C] bg-gradient-to-r from-[#004121] to-[#0f3220] hover:border-amber-300 shadow-md shadow-[#FFD99C]/10 ring-1 ring-[#FFD99C]/30"
                                      : isNodeActive
                                      ? "border-[#C0DBAC] bg-[#004121]/50 text-white"
                                      : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
                                  }`}
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold ${
                                      node.isGoalNode
                                        ? "bg-[#FFD99C] text-[#004121] font-black"
                                        : node.isKeyFlow
                                        ? "bg-[#FFD99C] text-[#004121]"
                                        : "bg-white/10 text-[#C0DBAC]"
                                    }`}>
                                      {node.isGoalNode ? "✓" : node.order}
                                    </span>
                                    <div className="min-w-0">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <h4 className={`font-medium transition-colors text-xs sm:text-sm ${
                                          node.isGoalNode ? "text-[#FFD99C] font-bold" : "text-white group-hover:text-[#FFD99C]"
                                        }`}>
                                          {node.name}
                                        </h4>
                                        {node.isKeyFlow && node.keyFlowLabel && (
                                          <span className={`rounded px-1.5 py-0.2 text-[8px] font-black uppercase tracking-wider ${
                                            node.isGoalNode
                                              ? "bg-[#FFD99C] text-[#004121] shadow-sm"
                                              : "bg-[#FFD99C] text-[#004121]"
                                          }`}>
                                            ★ {node.keyFlowLabel}
                                          </span>
                                        )}
                                      </div>
                                      <p className="font-mono text-[10px] text-white/40">{node.href}</p>
                                    </div>
                                  </div>
                                  <ArrowUpRight className={`h-3.5 w-3.5 shrink-0 transition-colors ml-2 ${
                                    node.isGoalNode ? "text-[#FFD99C]" : "text-white/30 group-hover:text-[#FFD99C]"
                                  }`} />
                                </button>

                                {/* Sub-children (Ordered 3.1 to 3.4 for Suite Detail Pages) */}
                                {node.children && node.children.length > 0 && (
                                  <div className="ml-4 border-l-2 border-dashed border-[#C0DBAC]/40 pl-3 space-y-1.5 pt-1">
                                    <span className="text-[10px] uppercase tracking-wider text-[#C0DBAC] font-bold block mb-1">
                                      ↳ Chi tiết 4 hạng phòng:
                                    </span>
                                    <div className="grid gap-1.5">
                                      {node.children
                                        .filter((child) => !filterKeyFlowOnly || child.isKeyFlow)
                                        .map((child) => {
                                          const isChildActive = currentUrl === child.href;
                                          return (
                                            <button
                                              key={child.order}
                                              onClick={() => onNavigate?.(child.href)}
                                              className={`group flex items-center justify-between rounded-lg border px-3 py-1.5 text-left transition-all ${
                                                child.isKeyFlow
                                                  ? "border-[#FFD99C] bg-[#FFD99C]/20 text-white shadow-sm ring-1 ring-[#FFD99C]/30"
                                                  : isChildActive
                                                  ? "border-[#C0DBAC] bg-[#004121]/40 text-white"
                                                  : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                                              }`}
                                            >
                                              <div className="flex items-center gap-2 min-w-0 pr-1">
                                                <span className={`font-mono text-[10px] font-bold ${
                                                  child.isKeyFlow ? "text-[#FFD99C]" : "text-[#C0DBAC]"
                                                }`}>
                                                  {child.order}
                                                </span>
                                                <span className="text-xs text-white truncate group-hover:text-[#FFD99C]">
                                                  {child.name}
                                                </span>
                                                {child.isKeyFlow && (
                                                  <span className="rounded bg-[#FFD99C] px-1 text-[8px] font-black text-[#004121] shrink-0">
                                                    ★ KEY BƯỚC 3
                                                  </span>
                                                )}
                                              </div>
                                              <ArrowUpRight className="h-3 w-3 text-white/30 group-hover:text-white shrink-0 ml-1.5" />
                                            </button>
                                          );
                                        })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    <div className="mt-4 border-t border-white/10 pt-2 text-[10px] text-white/40">
                      {branch.role}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* ── VIEW 2: ORDERED GRID ARCHITECTURE VIEW ── */}
      {viewMode === "grid" && (
        <div className="space-y-6">
          {sitemapBranches
            .filter((branch) => !filterKeyFlowOnly || branch.isKeyBranch)
            .map((branch) => (
              <div key={branch.branchId} className="rounded-2xl border border-[#C0DBAC]/20 bg-[#0a1410] p-5 shadow-lg">
                <div className="mb-3.5 flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#004121] px-2 py-0.5 font-mono text-[10px] font-bold text-[#FFD99C] border border-[#FFD99C]/30">
                      {branch.branchOrder}
                    </span>
                    <h3 className="font-serif font-bold text-white text-sm">{branch.title}</h3>
                  </div>
                  <span className="text-[11px] text-white/40">{branch.nodes.length} màn hình</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {branch.nodes
                    .filter((n) => !filterKeyFlowOnly || n.isKeyFlow || n.children?.some((c) => c.isKeyFlow))
                    .map((n) => (
                      <button
                        key={n.order}
                        onClick={() => onNavigate?.(n.href)}
                        className={`flex items-center justify-between rounded-xl border p-3 text-left transition-all ${
                          n.isGoalNode
                            ? "border-2 border-[#FFD99C] bg-[#FFD99C]/20 text-white shadow-lg ring-1 ring-[#FFD99C]/40"
                            : n.isKeyFlow
                            ? "border-[#FFD99C] bg-[#004121] text-white shadow-md shadow-[#FFD99C]/10"
                            : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`font-mono text-xs font-bold ${
                            n.isGoalNode ? "text-[#FFD99C] font-black" : n.isKeyFlow ? "text-[#FFD99C]" : "text-[#C0DBAC]"
                          }`}>
                            {n.isGoalNode ? "✓" : n.order}
                          </span>
                          <div className="min-w-0">
                            <span className="font-medium text-white text-xs block truncate">{n.name}</span>
                            <span className="font-mono text-[10px] text-white/40 block mt-0.5">{n.href}</span>
                          </div>
                        </div>
                        <ArrowUpRight className={`h-3.5 w-3.5 shrink-0 ml-2 ${n.isKeyFlow ? "text-[#FFD99C]" : "text-white/30"}`} />
                      </button>
                    ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
