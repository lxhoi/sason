"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Map, Palette, Play, BookOpen,
  RotateCcw, ExternalLink,
  Monitor, Tablet, Smartphone,
  ChevronLeft, ChevronRight, ChevronDown, Check
} from "lucide-react";
import { SitemapTab } from "@/components/dev-panel/sitemap-tab";
import { DesignSystemTab } from "@/components/dev-panel/design-system-tab";
import { CaseStudyTab } from "@/components/dev-panel/case-study-tab";
import { CupertinoSegmentedControl, type SegmentedControlOption } from "@/components/cupertino/segmented-control";
import { AILoadingState } from "@/components/cupertino/ai-loading-state";

type View = "prototype" | "design" | "sitemap" | "casestudy";

const PROTOTYPE_SCREENS = [
  { id: "home",            num: "1",  label: "Trang chủ (Home)",                 href: "/" },
  { id: "resort",          num: "2",  label: "The Resort (Giới thiệu)",           href: "/the-resort" },
  { id: "rooms",           num: "3",  label: "Suites & Villas (Danh sách phòng)", href: "/rooms" },
  { id: "garden-bungalow", num: "4",  label: "Garden Bungalow (Chi tiết phòng)",  href: "/rooms/garden-bungalow" },
  { id: "forest-suite",    num: "5",  label: "Forest Suite (Chi tiết phòng)",     href: "/rooms/forest-suite" },
  { id: "ocean-villa",     num: "6",  label: "Ocean Villa (Chi tiết phòng)",      href: "/rooms/ocean-villa" },
  { id: "sason-residence", num: "7",  label: "SASÓN Residence (Chi tiết phòng)", href: "/rooms/sason-residence" },
  { id: "dining",          num: "8",  label: "Dining (Ẩm thực & Bar)",            href: "/dining" },
  { id: "wellness",        num: "9",  label: "Wellness & Spa (Chăm sóc)",         href: "/wellness" },
  { id: "gallery",         num: "10", label: "Gallery (Thư viện ảnh)",           href: "/gallery" },
  { id: "offers",          num: "11", label: "Exclusive Offers (Gói ưu đãi)",    href: "/offers" },
  { id: "booking",         num: "12", label: "Booking (Đặt phòng)",              href: "/booking" },
  { id: "booking-success", num: "13", label: "Booking Success (Đặt phòng thành công)", href: "/booking?status=success" },
  { id: "contact",         num: "14", label: "Contact (Liên hệ & Chỉ đường)",    href: "/contact" },
];

type Device = { label: string; icon: React.ReactNode; width: string; height: string };
const DEVICES: Device[] = [
  { label: "Desktop",  icon: <Monitor    className="h-3.5 w-3.5" />, width: "100%",  height: "100%" },
  { label: "Tablet",   icon: <Tablet     className="h-3.5 w-3.5" />, width: "768px", height: "1024px" },
  { label: "Mobile",   icon: <Smartphone className="h-3.5 w-3.5"/>,  width: "390px", height: "844px" },
];

export default function DevPage() {
  const [view, setView]               = useState<View>("prototype");
  const [currentPath, setCurrentPath] = useState("/");
  const [device, setDevice]           = useState<Device>(DEVICES[0]);
  const [showPageMenu, setShowPageMenu] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Synchronize topbar with whatever screen the iframe is showing
  const syncFromIframe = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    try {
      const win = iframe.contentWindow;
      if (!win) return;
      const pathname = win.location.pathname || "/";
      setCurrentPath((prev) => (prev !== pathname ? pathname : prev));
    } catch {
      // ignore
    }
  }, []);

  // Set up listeners inside the iframe
  const handleIframeLoad = useCallback(() => {
    syncFromIframe();
    const iframe = iframeRef.current;
    if (!iframe) return;

    try {
      const win = iframe.contentWindow;
      if (!win) return;

      win.addEventListener("popstate", syncFromIframe);

      // Intercept pushState & replaceState
      const origPush = win.history.pushState;
      win.history.pushState = function (...args) {
        const result = origPush.apply(this, args);
        setTimeout(syncFromIframe, 50);
        return result;
      };

      const origReplace = win.history.replaceState;
      win.history.replaceState = function (...args) {
        const result = origReplace.apply(this, args);
        setTimeout(syncFromIframe, 50);
        return result;
      };

      // Also watch clicks inside the iframe
      win.document.addEventListener("click", () => {
        setTimeout(syncFromIframe, 150);
      });
    } catch {
      // ignore
    }
  }, [syncFromIframe]);

  // Periodic poll to ensure topbar never falls out of sync
  useEffect(() => {
    const interval = setInterval(syncFromIframe, 400);
    return () => clearInterval(interval);
  }, [syncFromIframe]);

  // Navigate the prototype without touching outer browser URL
  const navigatePrototype = useCallback((href: string) => {
    setView("prototype");
    setCurrentPath(href);
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.contentWindow) {
        iframe.contentWindow.location.href = href;
      } else {
        iframe.src = href;
      }
    }
  }, []);

  // Determine active screen index in the list
  const activeScreenIndex = PROTOTYPE_SCREENS.findIndex((s) => s.href === currentPath);
  const currentScreen = activeScreenIndex !== -1
    ? PROTOTYPE_SCREENS[activeScreenIndex]
    : { num: "•", label: currentPath, href: currentPath };

  const handlePrev = () => {
    if (activeScreenIndex > 0) {
      navigatePrototype(PROTOTYPE_SCREENS[activeScreenIndex - 1].href);
    }
  };

  const handleNext = () => {
    if (activeScreenIndex < PROTOTYPE_SCREENS.length - 1) {
      navigatePrototype(PROTOTYPE_SCREENS[activeScreenIndex + 1].href);
    }
  };

  const reload = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.location.reload();
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#0d1017] font-sans text-white">

      {/* ── TOP BAR (TutorNest / Portfolio Prototype Style) ── */}
      <header className="relative z-50 flex h-12 shrink-0 items-center gap-2.5 border-b border-[#242838] bg-[#121622] px-3 md:px-4">

        {/* Brand */}
        <div className="flex items-center gap-2 pr-2 border-r border-white/10">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-600 font-bold text-[11px] text-white shadow-sm">
            S
          </div>
          <span className="font-serif text-sm font-semibold tracking-wider text-emerald-400">
            SASÓN
          </span>
        </div>

        {/* Prev / Next Screen */}
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrev}
            disabled={activeScreenIndex <= 0}
            className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-white/50 hover:bg-white/10 hover:text-white disabled:opacity-20 disabled:hover:bg-white/5 transition-colors"
            title="Màn hình trước"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>

          {/* Page Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowPageMenu((v) => !v)}
              className="flex h-7 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 text-xs text-white/85 hover:bg-white/10 transition-colors"
            >
              <span className="font-medium text-white/95 truncate max-w-[180px] sm:max-w-[260px]">
                {currentScreen.num}. {currentScreen.label.split("(")[0].trim()}
              </span>
              <ChevronDown className="h-3 w-3 text-white/40 shrink-0" />
            </button>

            {showPageMenu && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowPageMenu(false)} />
                <div className="absolute left-0 top-full z-50 mt-1 max-h-96 w-72 overflow-y-auto rounded-xl border border-[#2b3044] bg-[#171b29] p-1.5 shadow-2xl ring-1 ring-black/50">
                  <div className="px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/30">
                    Danh sách màn hình prototype ({PROTOTYPE_SCREENS.length})
                  </div>
                  {PROTOTYPE_SCREENS.map((s, i) => {
                    const isCurrent = s.href === currentPath;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          navigatePrototype(s.href);
                          setShowPageMenu(false);
                        }}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs transition-colors ${
                          isCurrent
                            ? "bg-orange-500/20 text-orange-300 font-semibold"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <span className="w-5 font-mono text-[11px] text-white/30 text-right">{s.num}.</span>
                        <span className="flex-1 truncate">{s.label}</span>
                        {isCurrent && <Check className="h-3.5 w-3.5 text-orange-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={activeScreenIndex === -1 || activeScreenIndex >= PROTOTYPE_SCREENS.length - 1}
            className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-white/50 hover:bg-white/10 hover:text-white disabled:opacity-20 disabled:hover:bg-white/5 transition-colors"
            title="Màn hình tiếp theo"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="h-4 w-px bg-white/10 hidden sm:block" />

        {/* Cupertino iOS Segmented Control Tab Bar */}
        <div className="flex items-center">
          <CupertinoSegmentedControl
            options={[
              { value: "prototype", label: "Interactive Prototype", icon: <Play className="h-3 w-3 fill-current" /> },
              { value: "design",    label: "Design System",         icon: <Palette className="h-3.5 w-3.5" /> },
              { value: "sitemap",   label: "Sitemap",               icon: <Map className="h-3.5 w-3.5" /> },
              { value: "casestudy", label: "Case Study",            icon: <BookOpen className="h-3.5 w-3.5" /> },
            ]}
            value={view}
            onChange={(val) => setView(val as View)}
            size="md"
          />
        </div>

        <div className="flex-1" />

        {/* React Cupertino UI - AI Loading State Widget */}
        <AILoadingState
          variant="generating"
          message="v2.0 Cupertino"
          interactive
          className="hidden xl:inline-flex scale-[0.78] origin-right py-1 px-2.5"
        />

        {/* Right Tools (Device Switcher & Controls) */}
        {view === "prototype" && (
          <div className="hidden lg:flex items-center gap-1 rounded-md border border-white/10 bg-white/5 p-0.5">
            {DEVICES.map((d) => (
              <button
                key={d.label}
                onClick={() => setDevice(d)}
                title={d.label}
                className={`flex items-center gap-1 rounded px-2 py-1 text-[11px] font-medium transition-colors ${
                  device.label === d.label
                    ? "bg-white/20 text-white shadow-sm"
                    : "text-white/40 hover:text-white/80"
                }`}
              >
                {d.icon}
                <span className="hidden xl:inline">{d.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Reload */}
        {view === "prototype" && (
          <button
            onClick={reload}
            title="Reload Prototype"
            className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        )}

        {/* Open Standalone Site */}
        <a
          href={`http://localhost:3001${currentPath}?standalone=1`}
          target="_blank"
          rel="noopener noreferrer"
          title="Mở website riêng tab mới"
          className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-white/40 hover:bg-white/10 hover:text-white transition-colors"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </header>

      {/* ── CANVAS VIEWPORT ── */}
      <div className="relative flex flex-1 min-h-0 w-full overflow-hidden">

        {/* 1. Interactive Prototype Canvas (Always kept in DOM to preserve state/scroll) */}
        <div
          className={`flex h-full w-full min-h-0 items-center justify-center overflow-auto bg-[#181c28] p-4 transition-opacity duration-200 ${
            view === "prototype" ? "block" : "hidden"
          }`}
        >
          <div
            className="relative overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-white/10 transition-all duration-300"
            style={{
              width: device.width,
              height: device.height,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            <iframe
              ref={iframeRef}
              src="/"
              onLoad={handleIframeLoad}
              className="h-full w-full border-0 bg-white"
              title="Interactive Prototype"
            />
          </div>
        </div>

        {/* 2. Design System Board Canvas */}
        {view === "design" && (
          <div data-lenis-prevent className="h-full w-full min-h-0 overflow-y-auto overscroll-contain bg-[#0d1017] pb-24">
            <DesignSystemTab />
          </div>
        )}

        {/* 3. Sitemap Board Canvas */}
        {view === "sitemap" && (
          <div data-lenis-prevent className="h-full w-full min-h-0 overflow-y-auto overscroll-contain bg-[#0d1017] pb-24">
            <SitemapTab onNavigate={navigatePrototype} currentUrl={currentPath} />
          </div>
        )}

        {/* 4. Case Study Canvas */}
        {view === "casestudy" && (
          <div data-lenis-prevent className="h-full w-full min-h-0 overflow-y-auto overscroll-contain bg-[#0a0f1d] pb-24">
            <CaseStudyTab onNavigate={navigatePrototype} />
          </div>
        )}
      </div>
    </div>
  );
}
