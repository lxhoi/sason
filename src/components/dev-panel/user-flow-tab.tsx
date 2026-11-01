"use client";

import { GitBranch, ArrowRight, CheckCircle2, Eye, Compass, BedDouble, Calendar, MessageSquare, Sparkles } from "lucide-react";

interface Props {
  onNavigate?: (path: string) => void;
}

const flowPhases = [
  {
    phase: "Giai đoạn 1",
    title: "Discovery & Khám Phá",
    color: "from-blue-500/20 to-blue-600/5 border-blue-500/30",
    badgeColor: "bg-blue-500/20 text-blue-300",
    desc: "Khách hàng tiếp cận thương hiệu qua tìm kiếm hoặc quảng cáo",
    nodes: [
      {
        id: "home",
        title: "Trang chủ SASÓN (Home)",
        href: "/",
        type: "Landing Page",
        desc: "Hero video bãi Dài, triết lý nghỉ dưỡng, phòng tiêu biểu, widget chọn ngày nhanh",
        icon: Compass,
      },
      {
        id: "the-resort",
        title: "Khám phá Khu nghỉ dưỡng",
        href: "/the-resort",
        type: "Story & Brand",
        desc: "Câu chuyện thiết kế, vị trí Bãi Dài nguyên sơ, tiện ích nội khu",
        icon: Eye,
      },
      {
        id: "gallery",
        title: "Thư viện ảnh (Gallery)",
        href: "/gallery",
        type: "Visual Experience",
        desc: "Cảm nhận không gian thực tế qua hình ảnh chất lượng cao",
        icon: Sparkles,
      },
    ],
  },
  {
    phase: "Giai đoạn 2",
    title: "Consideration & Chọn Phòng",
    color: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/30",
    badgeColor: "bg-emerald-500/20 text-emerald-300",
    desc: "Xem danh sách hạng phòng, so sánh tiện nghi và mức giá",
    nodes: [
      {
        id: "rooms",
        title: "Danh sách Suites & Villas",
        href: "/rooms",
        type: "Catalog Page",
        desc: "Bộ sưu tập 4 hạng phòng: Bungalow, Suite, Villa và Residence",
        icon: BedDouble,
      },
      {
        id: "room-detail",
        title: "Chi tiết Hạng phòng (Room Detail)",
        href: "/rooms/garden-bungalow",
        type: "Detail Page",
        desc: "Xem ảnh thực tế, tiện nghi cụ thể, sức chứa và nút 'Đặt phòng này'",
        icon: BedDouble,
      },
      {
        id: "offers",
        title: "Gói Ưu Đãi Đặc Biệt (Offers)",
        href: "/offers",
        type: "Promotions",
        desc: "Ưu đãi theo mùa, gói kỳ nghỉ kèm spa và bữa tối lãng mạn",
        icon: Sparkles,
      },
    ],
  },
  {
    phase: "Giai đoạn 3",
    title: "Conversion & Đặt Phòng",
    color: "from-orange-500/20 to-orange-600/5 border-orange-500/30",
    badgeColor: "bg-orange-500/20 text-orange-300",
    desc: "Khách hàng chốt lịch trình và gửi yêu cầu đặt chỗ",
    nodes: [
      {
        id: "booking",
        title: "Form Đặt Phòng Trực Tuyến",
        href: "/booking",
        type: "Conversion Funnel",
        desc: "Chọn ngày nhận/trả phòng, số lượng khách, hạng phòng và thông tin liên lạc",
        icon: Calendar,
      },
      {
        id: "contact",
        title: "Tư vấn & Hỗ trợ đặc biệt",
        href: "/contact",
        type: "Direct Enquiry",
        desc: "Dành cho khách đoàn, sự kiện tiệc cưới hoặc yêu cầu đặc biệt",
        icon: MessageSquare,
      },
    ],
  },
];

const funnelStats = [
  { stage: "Tiếp cận & Khám phá (Discovery)", pct: 100, count: "100%", desc: "Vào trang chủ / quảng cáo" },
  { stage: "Tìm hiểu phòng & ưu đãi (Evaluation)", pct: 75, count: "75%", desc: "Xem Suites, Villas, Offers" },
  { stage: "Xem chi tiết phòng (Consideration)", pct: 50, count: "50%", desc: "Chọn hạng phòng cụ thể" },
  { stage: "Bắt đầu đặt phòng (Action)", pct: 28, count: "28%", desc: "Vào trang Booking / Widget" },
  { stage: "Hoàn tất yêu cầu (Conversion)", pct: 15, count: "15%", desc: "Gửi thông tin đặt phòng thành công" },
];

export function UserFlowTab({ onNavigate }: Props) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 text-white">
      {/* Board Header */}
      <div className="mb-10 border-b border-white/10 pb-6">
        <span className="inline-block rounded bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
          User Experience & Journey
        </span>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          Sơ Đồ Luồng Người Dùng (Main User Flow)
        </h1>
        <p className="mt-1 text-sm text-white/50">
          Hành trình trải nghiệm từ lúc bước vào website đến khi đặt phòng thành công. Click vào nút để tương tác ngay trên prototype.
        </p>
      </div>

      {/* Main Flow Phases */}
      <div className="space-y-10">
        {flowPhases.map((phase, idx) => (
          <div
            key={phase.phase}
            className={`relative rounded-2xl border bg-gradient-to-br p-6 ${phase.color}`}
          >
            {/* Phase Header */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className={`rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${phase.badgeColor}`}>
                  {phase.phase}
                </span>
                <h2 className="text-base font-bold text-white">{phase.title}</h2>
              </div>
              <p className="text-xs text-white/50">{phase.desc}</p>
            </div>

            {/* Nodes in this Phase */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {phase.nodes.map((node) => {
                const Icon = node.icon;
                return (
                  <button
                    key={node.id}
                    onClick={() => onNavigate?.(node.href)}
                    className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#12151f]/80 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-[#161a27] hover:shadow-lg"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-white/70 group-hover:bg-violet-500/20 group-hover:text-violet-300 transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="font-mono text-[10px] text-white/30">{node.href}</span>
                      </div>
                      <span className="mt-3 inline-block rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/60">
                        {node.type}
                      </span>
                      <h3 className="mt-2 font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {node.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/50">{node.desc}</p>
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-violet-400 opacity-90 group-hover:opacity-100">
                      <span>Xem màn hình này</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Conversion Funnel */}
      <div className="mt-14 rounded-2xl border border-white/10 bg-[#161922] p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-white">Phễu Chuyển Đổi Dự Kiến (Conversion Funnel)</h3>
            <p className="text-xs text-white/50 mt-0.5">Tỷ lệ rớt và chuyển đổi qua từng bước trên website</p>
          </div>
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
            Target CVR: 15%
          </span>
        </div>

        <div className="space-y-4">
          {funnelStats.map((f, i) => (
            <div key={f.stage} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-white/80">{f.stage}</span>
                <span className="font-mono text-emerald-400 font-bold">{f.count}</span>
              </div>
              <div className="relative h-6 w-full overflow-hidden rounded-lg bg-black/30 p-1">
                <div
                  className="h-full rounded-md bg-gradient-to-r from-violet-600 via-indigo-600 to-emerald-500 transition-all duration-500"
                  style={{ width: `${f.pct}%` }}
                />
              </div>
              <p className="text-[11px] text-white/40">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
