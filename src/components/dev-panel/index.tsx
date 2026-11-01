"use client";

import { useState } from "react";
import { SitemapTab } from "./sitemap-tab";
import { DesignSystemTab } from "./design-system-tab";
import { UserFlowTab } from "./user-flow-tab";
import { Map, Palette, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";

type Tab = "sitemap" | "design" | "flow";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "sitemap", label: "Sitemap", icon: <Map className="h-4 w-4" /> },
  { id: "design", label: "Design System", icon: <Palette className="h-4 w-4" /> },
  { id: "flow", label: "User Flow", icon: <GitBranch className="h-4 w-4" /> },
];

export function DevPanel() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Tab>("sitemap");

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[9998] bg-black/20 backdrop-blur-[1px]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed left-0 top-0 z-[9999] flex h-screen flex-col bg-[#0f1117] text-white shadow-2xl transition-all duration-300 ease-in-out ${
          open ? "w-[420px]" : "w-0"
        } overflow-hidden`}
      >
        {/* Tab bar */}
        <div className="flex shrink-0 border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex flex-1 flex-col items-center gap-1 px-2 py-3 text-[10px] uppercase tracking-widest transition-colors ${
                active === tab.id
                  ? "border-b-2 border-violet-400 text-violet-300"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab.icon}
              <span className="whitespace-nowrap">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          {active === "sitemap" && <SitemapTab />}
          {active === "design" && <DesignSystemTab />}
          {active === "flow" && <UserFlowTab />}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-white/10 px-4 py-3 text-[10px] uppercase tracking-widest text-white/20">
          Dev Tools · SASÓN
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`fixed top-1/2 z-[9999] flex h-12 w-7 -translate-y-1/2 flex-col items-center justify-center rounded-r-lg bg-[#0f1117] shadow-xl transition-all duration-300 ${
          open ? "left-[420px]" : "left-0"
        }`}
        aria-label="Toggle dev panel"
      >
        <span className="text-white/60">
          {open ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </span>
        {!open && (
          <span
            className="absolute left-full ml-2 whitespace-nowrap rounded bg-[#0f1117] px-2 py-1 text-[10px] uppercase tracking-widest text-white/60 opacity-0 shadow transition-opacity group-hover:opacity-100 pointer-events-none"
          />
        )}
      </button>
    </>
  );
}
