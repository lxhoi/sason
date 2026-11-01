"use client";

import { useState } from "react";
import { rooms, offers } from "@/lib/data";
import {
  Compass, BedDouble, Utensils, Sparkles, Phone, Calendar,
  ArrowUpRight, Star, Zap, Network, LayoutGrid, CheckCircle2,
  Info, ExternalLink, ChevronRight
} from "lucide-react";

interface Props {
  onNavigate?: (path: string) => void;
  currentUrl?: string;
}

type ViewMode = "mindmap" | "grid";

interface MindNode {
  id: string;
  name: string;
  en: string;
  href: string;
  icon: any;
  category: "core" | "rooms" | "experience" | "booking" | "offers";
  desc: string;
  isKeyFlow?: boolean;
  keyFlowStep?: number;
  keyFlowNote?: string;
  children?: MindNode[];
}

const mindMapData: {
  branchName: string;
  category: "rooms" | "booking" | "offers" | "experience" | "brand";
  isKeyFlow?: boolean;
  flowRole?: string;
  color: string;
  accent: string;
  nodes: MindNode[];
}[] = [
  {
    branchName: "1. Đặt Phòng & Chuyển Đổi (Conversion)",
    category: "booking",
    isKeyFlow: true,
    flowRole: "Điểm chốt chuyển đổi doanh thu chính của resort (Primary Goal)",
    color: "border-orange-500/60 bg-orange-500/10 text-orange-300",
    accent: "orange",
    nodes: [
      {
        id: "booking",
        name: "Đặt phòng trực tuyến",
        en: "Online Booking Engine",
        href: "/booking",
        icon: Calendar,
        category: "booking",
        desc: "Form chọn ngày, số lượng khách, chọn hạng phòng & xác nhận thông tin",
        isKeyFlow: true,
        keyFlowStep: 4,
        keyFlowNote: "Mục tiêu tối thượng (Primary Goal): Khách chọn ngày, hạng phòng và gửi thông tin đặt phòng.",
      },
      {
        id: "contact",
        name: "Liên hệ & Trợ lý cá nhân",
        en: "Contact & Concierge",
        href: "/contact",
        icon: Phone,
        category: "booking",
        desc: "Hỗ trợ khách VIP, sự kiện đặc biệt, xe đưa đón và tiệc cưới",
        isKeyFlow: false,
      },
    ],
  },
  {
    branchName: "2. Lưu Trú & Nghỉ Dưỡng (Suites & Villas)",
    category: "rooms",
    isKeyFlow: true,
    flowRole: "Trọng tâm sản phẩm: So sánh & ra quyết định chọn phòng",
    color: "border-emerald-500/60 bg-emerald-500/10 text-emerald-300",
    accent: "emerald",
    nodes: [
      {
        id: "rooms",
        name: "Tất cả Suites & Villas",
        en: "All Rooms Catalog",
        href: "/rooms",
        icon: BedDouble,
        category: "rooms",
        desc: "Danh mục 4 hạng phòng cao cấp từ bungalow đến dinh thự riêng",
        isKeyFlow: true,
        keyFlowStep: 2,
        keyFlowNote: "Bước khám phá: Khách duyệt tổng quan các hạng phòng, so sánh diện tích, hướng view và giá.",
        children: rooms.map((r, idx) => ({
          id: r.slug,
          name: r.name,
          en: `${r.size} · ${r.beds}`,
          href: `/rooms/${r.slug}`,
          icon: BedDouble,
          category: "rooms" as const,
          desc: r.summary,
          isKeyFlow: idx === 1, // Highlight Forest Suite as featured key flow example
          keyFlowStep: idx === 1 ? 3 : undefined,
          keyFlowNote: idx === 1 ? "Bước cân nhắc chi tiết: Xem chi tiết tiện nghi phòng, hồ bơi riêng và CTA 'Book now'." : undefined,
        })),
      },
    ],
  },
  {
    branchName: "3. Gói Ưu Đãi (Exclusive Offers)",
    category: "offers",
    isKeyFlow: true,
    flowRole: "Kích hoạt tâm lý đặt phòng qua gói quà tặng & giảm giá",
    color: "border-amber-500/60 bg-amber-500/10 text-amber-300",
    accent: "amber",
    nodes: [
      {
        id: "offers",
        name: "Ưu Đãi Độc Quyền",
        en: "Seasonal Packages",
        href: "/offers",
        icon: Sparkles,
        category: "offers",
        desc: "Gói 'First Light', 'Monsoon Still' và 'The Gathering' tặng kèm spa & bữa tối",
        isKeyFlow: true,
        keyFlowNote: "Luồng kích cầu phụ: Khách bị thu hút bởi khuyến mãi sẽ bấm nút đặt phòng kèm quà tặng.",
      },
    ],
  },
  {
    branchName: "4. Thương Hiệu & Không Gian (Brand & Sanctuary)",
    category: "brand",
    isKeyFlow: false,
    flowRole: "Xây dựng niềm tin, truyền tải triết lý kiến trúc & phong cách sống",
    color: "border-blue-500/60 bg-blue-500/10 text-blue-300",
    accent: "blue",
    nodes: [
      {
        id: "the-resort",
        name: "Về SASÓN Resort",
        en: "The Sanctuary Story",
        href: "/the-resort",
        icon: Compass,
        category: "core",
        desc: "Triết lý tĩnh lặng giữa rừng nguyên sinh và bãi biển riêng Bãi Dài",
      },
      {
        id: "gallery",
        name: "Thư viện hình ảnh",
        en: "Visual Gallery",
        href: "/gallery",
        icon: Sparkles,
        category: "core",
        desc: "Không gian kiến trúc mở, hồ bơi vô cực và ánh hoàng hôn đảo ngọc",
      },
    ],
  },
  {
    branchName: "5. Trải Nghiệm Ẩm Thực & Trị Liệu (Experiences)",
    category: "experience",
    isKeyFlow: false,
    flowRole: "Gia tăng giá trị cảm xúc và thời gian lưu trú",
    color: "border-purple-500/60 bg-purple-500/10 text-purple-300",
    accent: "purple",
    nodes: [
      {
        id: "dining",
        name: "Ẩm Thực & Bar",
        en: "Dining Experience",
        href: "/dining",
        icon: Utensils,
        category: "experience",
        desc: "Hải sản tươi ngon bản địa, cocktail hoàng hôn và nhà hàng mặt nước",
      },
      {
        id: "wellness",
        name: "Spa & Trị Liệu",
        en: "Wellness & Spa",
        href: "/wellness",
        icon: Sparkles,
        category: "experience",
        desc: "Liệu trình thảo mộc Phú Quốc, phòng xông hơi và yoga bình minh",
      },
    ],
  },
];

export function SitemapTab({ onNavigate, currentUrl }: Props) {
  const [viewMode, setViewMode] = useState<ViewMode>("mindmap");
  const [filterKeyFlowOnly, setFilterKeyFlowOnly] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 text-white md:px-8">

      {/* ── TOP HEADER ── */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 rounded bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-400">
              <Zap className="h-3 w-3" />
              Sitemap Mind Map
            </span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/50">
              13 Màn hình
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Sơ Đồ Phân Nhánh Sitemap & Key Flow
          </h1>
          <p className="mt-1 text-xs text-white/50">
            Trực quan hóa cấu trúc website dưới dạng Mind Map phân nhánh. Các bước trong <strong className="text-orange-400">Key Flow</strong> được viền sáng và đánh số thứ tự trải nghiệm.
          </p>
        </div>

        {/* View Toggle & Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Key flow filter toggle */}
          <button
            onClick={() => setFilterKeyFlowOnly((v) => !v)}
            className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
              filterKeyFlowOnly
                ? "border-orange-500 bg-orange-500/20 text-orange-300 shadow-md shadow-orange-500/10"
                : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
            }`}
          >
            <Star className={`h-3.5 w-3.5 ${filterKeyFlowOnly ? "fill-orange-400 text-orange-400" : ""}`} />
            <span>{filterKeyFlowOnly ? "Đang lọc: Chỉ Key Flow" : "Lọc: Chỉ Key Flow"}</span>
          </button>

          {/* Mode switch */}
          <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-0.5">
            <button
              onClick={() => setViewMode("mindmap")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "mindmap" ? "bg-white/15 text-white shadow-sm" : "text-white/40 hover:text-white/80"
              }`}
            >
              <Network className="h-3.5 w-3.5" />
              <span>Mind Map</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === "grid" ? "bg-white/15 text-white shadow-sm" : "text-white/40 hover:text-white/80"
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Dạng Thẻ</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── KEY FLOW ANNOTATION / CHÚ THÍCH BANNER ── */}
      <div className="mb-10 overflow-hidden rounded-2xl border border-orange-500/40 bg-gradient-to-r from-orange-950/40 via-amber-950/20 to-black/30 p-5 shadow-xl shadow-orange-950/20 ring-1 ring-orange-500/20">
        <div className="flex items-start gap-3.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/30">
            <Zap className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-orange-300">
                Chú Thích Tuyến Trải Nghiệm Cốt Lõi (Primary Key Flow)
              </h2>
              <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-semibold text-orange-300">
                Conversion Funnel
              </span>
            </div>
            <p className="mt-1 text-xs text-white/70 leading-relaxed">
              Tuyến đường có tỷ lệ chuyển đổi cao nhất, biến người truy cập lần đầu thành khách đặt phòng thành công:
            </p>

            {/* Stepper Visual */}
            <div className="mt-4 flex flex-wrap items-center gap-2 font-sans text-xs">
              <div className="flex items-center gap-1.5 rounded-lg border border-orange-500/40 bg-orange-500/10 px-2.5 py-1 text-orange-200">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">1</span>
                <strong>Trang Chủ (/)</strong>
              </div>
              <ChevronRight className="h-3.5 w-3.5 text-orange-400/60" />

              <div className="flex items-center gap-1.5 rounded-lg border border-orange-500/40 bg-orange-500/10 px-2.5 py-1 text-orange-200">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">2</span>
                <strong>Suites & Villas (/rooms)</strong>
              </div>
              <ChevronRight className="h-3.5 w-3.5 text-orange-400/60" />

              <div className="flex items-center gap-1.5 rounded-lg border border-orange-500/40 bg-orange-500/10 px-2.5 py-1 text-orange-200">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">3</span>
                <strong>Chi Tiết Phòng (/rooms/[slug])</strong>
              </div>
              <ChevronRight className="h-3.5 w-3.5 text-orange-400/60" />

              <div className="flex items-center gap-1.5 rounded-lg border border-orange-500 bg-orange-500 text-white font-bold px-2.5 py-1 shadow-md shadow-orange-500/30">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px] font-black text-orange-600">4</span>
                <strong>Đặt Phòng Trực Tuyến (/booking)</strong>
              </div>
            </div>

            {/* Annotation tags */}
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-white/50">
              <span>🎯 <strong>Mục tiêu:</strong> Tối đa hóa tỷ lệ đặt phòng trực tiếp không qua OTA</span>
              <span>⭐ <strong>Điểm nhấn:</strong> Giữ chân bằng hình ảnh bãi biển, tiện nghi và ưu đãi độc quyền</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── VIEW 1: MIND MAP VIEW ── */}
      {viewMode === "mindmap" && (
        <div className="space-y-12">

          {/* Central Root Node */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative group">
              <button
                onClick={() => onNavigate?.("/")}
                className={`relative flex items-center gap-3 rounded-2xl border-2 px-6 py-4 shadow-2xl transition-all hover:scale-105 ${
                  currentUrl === "/"
                    ? "border-orange-500 bg-gradient-to-r from-orange-600/30 to-amber-600/20 text-white ring-4 ring-orange-500/20"
                    : "border-orange-500/80 bg-gradient-to-br from-[#1b1726] to-[#121622] text-white hover:border-orange-400 shadow-orange-500/10"
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white font-bold shadow-md shadow-orange-500/30">
                  <Compass className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-orange-500 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest text-white">
                      ★ KEY FLOW BƯỚC 1
                    </span>
                    <span className="font-mono text-[10px] text-orange-300">/</span>
                  </div>
                  <h3 className="text-base font-bold text-white">SASÓN Resort (Home Page)</h3>
                  <p className="text-[11px] text-white/60">Điểm chạm gốc tiếp nhận 100% người dùng</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-orange-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>

              {/* Trunk connector line going down */}
              <div className="mx-auto h-8 w-0.5 bg-gradient-to-b from-orange-500 to-white/20" />
            </div>
          </div>

          {/* Mind Map Branches Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {mindMapData
              .filter((branch) => !filterKeyFlowOnly || branch.isKeyFlow)
              .map((branch) => {
                return (
                  <div
                    key={branch.branchName}
                    className={`relative rounded-2xl border p-6 transition-all ${
                      branch.isKeyFlow
                        ? "border-orange-500/50 bg-[#16131c] shadow-lg shadow-orange-950/10 ring-1 ring-orange-500/20"
                        : "border-white/10 bg-[#12151f]/80 hover:border-white/20"
                    }`}
                  >
                    {/* Branch Header */}
                    <div className="mb-5 flex flex-wrap items-start justify-between gap-2 border-b border-white/10 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${branch.color}`}>
                            {branch.branchName}
                          </span>
                          {branch.isKeyFlow && (
                            <span className="flex items-center gap-1 rounded bg-orange-500/20 px-2 py-0.5 text-[10px] font-semibold text-orange-300">
                              <Star className="h-2.5 w-2.5 fill-current" />
                              Key Flow Branch
                            </span>
                          )}
                        </div>
                        <p className="mt-1.5 text-xs text-white/50">{branch.flowRole}</p>
                      </div>
                    </div>

                    {/* Nodes inside this branch */}
                    <div className="space-y-4">
                      {branch.nodes.map((node) => {
                        const Icon = node.icon;
                        const isNodeActive = currentUrl === node.href;

                        return (
                          <div key={node.id} className="space-y-2">
                            <button
                              onClick={() => onNavigate?.(node.href)}
                              className={`group relative flex w-full flex-col rounded-xl border p-4 text-left transition-all ${
                                node.isKeyFlow
                                  ? "border-orange-500/60 bg-gradient-to-r from-orange-950/30 to-[#1e1b29] hover:border-orange-400 shadow-md shadow-orange-500/5"
                                  : isNodeActive
                                  ? "border-violet-500 bg-violet-500/10"
                                  : "border-white/10 bg-[#171b26] hover:border-white/25 hover:bg-[#1c2130]"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-2.5">
                                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                                    node.isKeyFlow ? "bg-orange-500/20 text-orange-300" : "bg-white/5 text-white/70"
                                  }`}>
                                    <Icon className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h4 className="font-semibold text-white group-hover:text-orange-300 transition-colors">
                                        {node.name}
                                      </h4>
                                      {node.isKeyFlow && node.keyFlowStep && (
                                        <span className="rounded bg-orange-500 px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider text-white">
                                          BƯỚC {node.keyFlowStep}
                                        </span>
                                      )}
                                    </div>
                                    <p className="font-mono text-[10px] text-white/40">{node.href}</p>
                                  </div>
                                </div>
                                <ArrowUpRight className="h-3.5 w-3.5 text-white/30 group-hover:text-orange-400 transition-colors" />
                              </div>

                              <p className="mt-2 text-xs text-white/55 leading-relaxed">{node.desc}</p>

                              {node.keyFlowNote && (
                                <div className="mt-3 flex items-start gap-1.5 rounded-lg border border-orange-500/30 bg-orange-500/10 p-2 text-[11px] text-orange-200">
                                  <Info className="h-3.5 w-3.5 shrink-0 mt-0.5 text-orange-400" />
                                  <span>{node.keyFlowNote}</span>
                                </div>
                              )}
                            </button>

                            {/* Sub-children (e.g. 4 Suite Detail Pages) */}
                            {node.children && node.children.length > 0 && (
                              <div className="ml-5 border-l-2 border-dashed border-emerald-500/40 pl-4 space-y-2 pt-1">
                                <span className="text-[10px] uppercase tracking-wider text-emerald-400/80 font-bold block mb-1">
                                  ↳ 4 Màn hình chi tiết hạng phòng:
                                </span>
                                <div className="grid gap-2 sm:grid-cols-2">
                                  {node.children.map((child) => {
                                    const isChildActive = currentUrl === child.href;
                                    return (
                                      <button
                                        key={child.id}
                                        onClick={() => onNavigate?.(child.href)}
                                        className={`group flex items-start justify-between rounded-lg border p-2.5 text-left transition-all ${
                                          child.isKeyFlow
                                            ? "border-orange-500/80 bg-orange-500/15 shadow-sm shadow-orange-500/10"
                                            : isChildActive
                                            ? "border-emerald-500 bg-emerald-500/10 text-white"
                                            : "border-white/10 bg-[#141722] hover:border-white/20 hover:bg-[#1a1f2d]"
                                        }`}
                                      >
                                        <div className="min-w-0 pr-1">
                                          <div className="flex items-center gap-1.5">
                                            <span className="text-xs font-medium text-white truncate group-hover:text-orange-300">
                                              {child.name}
                                            </span>
                                            {child.isKeyFlow && (
                                              <span className="rounded bg-orange-500 px-1 text-[8px] font-bold text-white shrink-0">
                                                BƯỚC 3
                                              </span>
                                            )}
                                          </div>
                                          <span className="text-[10px] text-white/40 font-mono block mt-0.5">{child.en}</span>
                                        </div>
                                        <ArrowUpRight className="h-3 w-3 text-white/30 group-hover:text-white shrink-0 mt-0.5" />
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
                );
              })}
          </div>
        </div>
      )}

      {/* ── VIEW 2: GRID / CARD ARCHITECTURE VIEW ── */}
      {viewMode === "grid" && (
        <div className="space-y-10">
          {mindMapData.map((branch) => (
            <div key={branch.branchName} className="rounded-2xl border border-white/10 bg-[#161922] p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-semibold text-white">{branch.branchName}</h3>
                <span className="text-xs text-white/40">{branch.flowRole}</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {branch.nodes.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => onNavigate?.(n.href)}
                    className="flex flex-col justify-between rounded-xl border border-white/10 bg-black/20 p-4 text-left transition-colors hover:border-white/30 hover:bg-black/40"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-white">{n.name}</span>
                        <span className="font-mono text-[10px] text-white/30">{n.href}</span>
                      </div>
                      <p className="mt-2 text-xs text-white/50">{n.desc}</p>
                    </div>
                    <span className="mt-4 text-xs font-medium text-orange-400">Mở trên prototype →</span>
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
