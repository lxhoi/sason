"use client";

import { useState } from "react";
import { Check, Copy, Layers, Type, Move, Sparkles, ExternalLink, Sliders } from "lucide-react";
import { AILoadingState, type AILoadingStateVariant } from "@/components/cupertino/ai-loading-state";
import { CupertinoSegmentedControl } from "@/components/cupertino/segmented-control";

const colorTokens = [
  { name: "forest", hex: "#004121", role: "Primary Brand Color", usage: "Headers, primary buttons, hero accents, footer background", textLight: true },
  { name: "sage", hex: "#C0DBAC", role: "Secondary Light Accent", usage: "Subheadings, badges, tags, decorative elements", textLight: false },
  { name: "moss", hex: "#95B380", role: "Muted Green", usage: "Hover states, subtle borders, nature illustration", textLight: false },
  { name: "cream", hex: "#FFFAF2", role: "Primary Background", usage: "Main body background, card containers, warm canvas", textLight: false },
  { name: "mist", hex: "#E0E0E0", role: "Neutral Border / Divider", usage: "Hairlines, subtle separators, disabled borders", textLight: false },
  { name: "sand", hex: "#FFD99C", role: "Warm Gold Accent", usage: "Prices, stars, luxury highlights, gold buttons", textLight: false },
  { name: "copper", hex: "#A66B37", role: "Earth Accent", usage: "Category tags, quotes, warm photography borders", textLight: true },
  { name: "earth", hex: "#562902", role: "Deep Soil / Dark Contrast", usage: "Deep text contrast, dark wood accents", textLight: true },
];

const typographyTokens = [
  {
    family: "Cormorant Garamond",
    varName: "--font-serif",
    category: "Display & Headings",
    spec: "Serif, Editorial Luxury",
    weights: ["300 Light", "400 Regular", "500 Medium", "600 SemiBold"],
    styles: ["Normal", "Italic"],
    sample: "A quiet luxury, drawn from land and light.",
  },
  {
    family: "Montserrat",
    varName: "--font-sans",
    category: "Body & UI Elements",
    spec: "Clean Geometric Sans-serif",
    weights: ["400 Regular", "500 Medium", "600 SemiBold"],
    styles: ["Normal"],
    sample: "SASÓN sits between a protected forest and a private stretch of Bãi Dài.",
  },
];

const typeHierarchy = [
  { level: "Hero Display", font: "Cormorant Garamond Light", size: "72px / 4.5rem", tracking: "-0.02em", sample: "Sanctuary of Senses" },
  { level: "H1 / Page Title", font: "Cormorant Garamond Regular", size: "48px / 3rem", tracking: "normal", sample: "Suites & Private Villas" },
  { level: "H2 / Section Title", font: "Cormorant Garamond Italic", size: "36px / 2.25rem", tracking: "normal", sample: "A private pavilion wrapped in garden" },
  { level: "H3 / Card Title", font: "Cormorant Garamond Medium", size: "24px / 1.5rem", tracking: "normal", sample: "Ocean Front Villa" },
  { level: "Nav Link / Overline", font: "Montserrat Medium", size: "11px / 0.6875rem", tracking: "0.22em (Uppercase)", sample: "THE RESORT · SUITES · DINING" },
  { level: "Body Regular", font: "Montserrat Regular", size: "15px / 0.9375rem", tracking: "normal", sample: "Villas open onto lagoon water. Suites float quietly in the tropical canopy." },
  { level: "Small / Caption", font: "Montserrat Medium", size: "12px / 0.75rem", tracking: "0.08em", sample: "FROM $420 PER NIGHT · TAX INCLUDED" },
];

const spacingScale = [
  { step: "1", px: "4px", rem: "0.25rem" },
  { step: "2", px: "8px", rem: "0.5rem" },
  { step: "3", px: "12px", rem: "0.75rem" },
  { step: "4", px: "16px", rem: "1rem" },
  { step: "6", px: "24px", rem: "1.5rem" },
  { step: "8", px: "32px", rem: "2rem" },
  { step: "12", px: "48px", rem: "3rem" },
  { step: "16", px: "64px", rem: "4rem" },
  { step: "24", px: "96px", rem: "6rem" },
];

export function DesignSystemTab() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 text-white">
      {/* Board Header */}
      <div className="mb-10 border-b border-white/10 pb-6">
        <span className="inline-block rounded bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
          Design System & Tokens
        </span>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          Hệ Thống Thiết Kế SASÓN Resort
        </h1>
        <p className="mt-1 text-sm text-white/50">
          Bảng màu thương hiệu (Brand Colors), hệ thống chữ (Typography), Spacing & Layout Tokens
        </p>
      </div>

      <div className="space-y-14">
        {/* Color Palette */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-emerald-400" />
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                1. Bảng Màu Thương Hiệu (Color Tokens)
              </h2>
            </div>
            <span className="text-xs text-white/40">Click thẻ màu để copy biến CSS</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colorTokens.map((c) => {
              const varString = `var(--color-${c.name})`;
              const isCopied = copiedToken === c.name;
              return (
                <div
                  key={c.name}
                  onClick={() => handleCopy(varString, c.name)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#161922] transition-all hover:-translate-y-1 hover:border-white/25 hover:shadow-xl"
                >
                  {/* Swatch */}
                  <div
                    className="relative flex h-28 w-full items-end justify-between p-3 transition-transform group-hover:scale-[1.02]"
                    style={{ backgroundColor: c.hex }}
                  >
                    <span
                      className={`font-mono text-xs font-bold uppercase tracking-wider ${
                        c.textLight ? "text-white" : "text-[#004121]"
                      }`}
                    >
                      {c.hex}
                    </span>
                    <button
                      className={`flex h-7 w-7 items-center justify-center rounded-lg backdrop-blur-md transition-all ${
                        c.textLight
                          ? "bg-white/20 text-white hover:bg-white/30"
                          : "bg-black/20 text-black hover:bg-black/30"
                      }`}
                      title="Copy CSS variable"
                    >
                      {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-violet-300">
                        --color-{c.name}
                      </span>
                      {isCopied && (
                        <span className="text-[10px] text-emerald-400 font-medium">Copied!</span>
                      )}
                    </div>
                    <p className="mt-1 text-xs font-medium text-white/90">{c.role}</p>
                    <p className="mt-2 text-[11px] leading-relaxed text-white/50">{c.usage}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Typography */}
        <section>
          <div className="mb-6 flex items-center gap-2">
            <Type className="h-4 w-4 text-violet-400" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              2. Hệ Thống Font Chữ (Typography Specs)
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {typographyTokens.map((t) => (
              <div
                key={t.family}
                className="rounded-2xl border border-white/10 bg-[#161922] p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded bg-violet-500/20 px-2 py-0.5 font-mono text-[10px] text-violet-300">
                    {t.varName}
                  </span>
                  <span className="text-xs text-white/40">{t.category}</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">{t.family}</h3>
                <p className="text-xs text-white/50">{t.spec}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {t.weights.map((w) => (
                    <span key={w} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
                      {w}
                    </span>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-white/5 bg-black/30 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-white/30">Specimen</p>
                  <p className="mt-2 text-lg text-white/90 leading-snug">
                    {t.sample}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Type Scale Hierarchy Table */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#161922] p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
              Thang Cỡ Chữ & Phân Cấp (Hierarchy Scale)
            </h3>
            <div className="divide-y divide-white/5">
              {typeHierarchy.map((h) => (
                <div key={h.level} className="flex flex-col gap-2 py-3.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="w-48 shrink-0">
                    <span className="text-xs font-semibold text-white">{h.level}</span>
                    <p className="font-mono text-[10px] text-white/40">{h.size} · {h.tracking}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm text-white/75">{h.sample}</p>
                  </div>
                  <span className="text-[11px] text-white/30 shrink-0 font-mono hidden md:inline">
                    {h.font}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spacing Scale */}
        <section>
          <div className="mb-6 flex items-center gap-2">
            <Move className="h-4 w-4 text-amber-400" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              3. Thang Khoảng Cách (Spacing Tokens)
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#161922] p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {spacingScale.map((s) => (
                <div
                  key={s.step}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-black/20 p-3"
                >
                  <span className="w-10 font-mono text-xs font-semibold text-amber-300">
                    p-{s.step}
                  </span>
                  <div
                    className="h-3 rounded bg-amber-500/30"
                    style={{ width: `${Math.min(parseInt(s.px) * 2, 80)}px` }}
                  />
                  <span className="ml-auto font-mono text-xs text-white/40">
                    {s.px} ({s.rem})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. React Cupertino UI Library & Apple Intelligence Atoms */}
        <section>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                4. Thư Viện React Cupertino UI (Apple iOS Liquid Glass)
              </h2>
            </div>
            <a
              href="https://react-cupertino-ui.pro/storybook/?path=/docs/atoms-ailoadingstate--docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300 hover:bg-violet-500/20 transition-colors"
            >
              <span>Xem tài liệu Storybook</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* AI Loading State Atom */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="rounded bg-violet-500/20 px-2 py-0.5 font-mono text-[10px] text-violet-300">
                    Atoms / AILoadingState
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white">Apple Intelligence Orb</h3>
                  <p className="text-xs text-white/50">Trạng thái nạp tương tác dạng cầu phát sáng iridescent</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
                <span className="text-[10px] uppercase tracking-wider text-white/30 font-semibold">
                  3 Trạng thái tương tác (Click vào quả cầu để chuyển trạng thái):
                </span>
                <div className="flex flex-col gap-2.5">
                  <AILoadingState variant="thinking" message="Phân tích luồng đặt phòng..." interactive />
                  <AILoadingState variant="generating" message="Khởi tạo giao diện Cupertino..." interactive />
                  <AILoadingState variant="searching" message="Tìm kiếm hạng phòng phù hợp..." interactive />
                </div>
              </div>
            </div>

            {/* Cupertino Segmented Control Atom */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-2xl">
              <span className="rounded bg-indigo-500/20 px-2 py-0.5 font-mono text-[10px] text-indigo-300">
                Molecules / SegmentedControl
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">Cupertino Segmented Control</h3>
              <p className="text-xs text-white/50">Thanh chuyển tab viên thuốc chuẩn iOS với hiệu ứng kính mờ</p>

              <div className="mt-6 flex flex-col gap-4 rounded-xl border border-white/10 bg-black/40 p-4">
                <span className="text-[10px] uppercase tracking-wider text-white/30 font-semibold">
                  Demo Segmented Control:
                </span>
                <CupertinoSegmentedControl
                  options={[
                    { value: "day", label: "Hôm nay" },
                    { value: "week", label: "Tuần này" },
                    { value: "month", label: "Tháng này" },
                  ]}
                  value="day"
                  onChange={() => {}}
                  size="md"
                />
              </div>

              {/* Liquid Glass Materials */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                <div className="rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl">
                  <span className="font-semibold text-white block">Ultra Thin Material</span>
                  <span className="text-[10px] text-white/40">blur(24px) saturate(180%)</span>
                </div>
                <div className="rounded-xl border border-white/20 bg-white/20 p-3 backdrop-blur-2xl">
                  <span className="font-semibold text-white block">Regular Material</span>
                  <span className="text-[10px] text-white/40">blur(32px) saturate(190%)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
