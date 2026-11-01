"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft, ChevronRight, LayoutGrid, MonitorPlay,
  FileText, ExternalLink, ArrowRight, User, CheckCircle2,
  Clock, Target, AlertCircle, HeartHandshake, Eye, Sparkles,
  Layers, ShieldCheck, TrendingUp, MessageSquare, Compass
} from "lucide-react";

interface Props {
  onNavigate?: (path: string) => void;
}

interface Slide {
  id: number;
  section: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  bg?: string;
}

export function CaseStudyTab({ onNavigate }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<"slides" | "scroll">("slides");

  // Keyboard navigation for slide mode
  useEffect(() => {
    if (viewMode !== "slides") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        setCurrentSlide((c) => Math.min(c + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((c) => Math.max(c - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode]);

  // All 20 Google UX Case Study Slides for SASÓN Resort
  const slides: Slide[] = [
    // Slide 1: Cover
    {
      id: 1,
      section: "Title",
      title: "SASÓN Hotel & Resort",
      subtitle: "A luxury island sanctuary web platform",
      bg: "bg-[#0c1f38]",
      content: (
        <div className="flex h-full flex-col justify-between p-8 md:p-14 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-white shadow-lg shadow-emerald-500/20">
              S
            </div>
            <span className="font-serif text-xl tracking-widest text-sand">SASÓN</span>
          </div>

          <div className="my-auto max-w-3xl">
            <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 font-mono text-xs uppercase tracking-widest text-emerald-300">
              Google UX Design Certificate Case Study
            </span>
            <h1 className="mt-4 font-serif text-4xl md:text-6xl font-light leading-tight text-white">
              SASÓN Hotel & Resort
            </h1>
            <p className="mt-4 text-base md:text-xl text-white/75 font-light leading-relaxed">
              Designing a serene, sensory-driven web booking experience for a secluded island resort in Phú Quốc.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between border-t border-white/15 pt-6 text-xs text-white/60">
            <div>
              <p className="font-semibold text-white">UX / UI Designer</p>
              <p>Lead Product Designer</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-white">Project Scope</p>
              <p>Responsive Web (Desktop & Mobile)</p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 2: Project Overview - Product & Duration
    {
      id: 2,
      section: "Project overview",
      title: "Project overview",
      content: (
        <div className="grid h-full gap-8 p-8 md:grid-cols-2 md:p-14">
          <div className="flex flex-col justify-center space-y-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">The product:</h3>
                <p className="mt-2 text-lg font-medium text-slate-900 leading-relaxed">
                  A high-end editorial website and direct booking engine for SASÓN Resort — a secluded sanctuary where tropical forest, freshwater lagoon, and ocean meet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Project duration:</h3>
                <p className="mt-2 text-2xl font-bold text-slate-900">8 weeks</p>
                <p className="text-xs text-slate-500 mt-1">Research, wireframing, usability testing & visual design</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-slate-100 p-6 border border-slate-200">
            <div className="w-full max-w-sm rounded-xl bg-white p-4 shadow-xl border border-slate-200">
              <div className="h-44 rounded-lg bg-[#004121] p-4 text-cream flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-widest text-sand font-medium">SASÓN Resort · Phú Quốc</span>
                <p className="font-serif text-lg italic">A private island sanctuary where forest, lagoon, and sea meet.</p>
                <div className="flex justify-between items-center text-[10px] text-white/70 border-t border-white/20 pt-2">
                  <span>Direct Booking Engine</span>
                  <span className="font-bold text-sand">From $420/night</span>
                </div>
              </div>
              <div className="mt-3 space-y-1.5 text-[11px] text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>4 Suite Categories</span>
                  <span className="font-semibold text-slate-900">Lagoon & Canopy</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span>Experiences</span>
                  <span className="font-semibold text-slate-900">Dining & Spa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 3: Project Overview - Problem & Goal
    {
      id: 3,
      section: "Project overview",
      title: "Project overview",
      content: (
        <div className="grid h-full gap-8 p-8 md:grid-cols-2 md:p-14">
          <div className="flex flex-col justify-center rounded-2xl border border-red-200 bg-red-50/50 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-600 mb-4">
              <AlertCircle className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-red-600">The problem:</h3>
            <p className="mt-3 text-base md:text-lg text-slate-800 leading-relaxed">
              Luxury travelers seeking peace and exclusivity are often overwhelmed by cluttered, high-pressure Online Travel Agency (OTA) portals. They struggle to find honest villa layouts, accurate photos, and direct booking perks without hidden resort fees.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600">The goal:</h3>
            <p className="mt-3 text-base md:text-lg text-slate-800 leading-relaxed">
              Design a tranquil, transparent, and sensory-driven web booking platform that reflects the calming essence of SASÓN, allowing guests to intuitively compare suites, explore experiences, and book directly in under 3 minutes.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 4: Project Overview - Role & Responsibilities
    {
      id: 4,
      section: "Project overview",
      title: "Project overview",
      content: (
        <div className="grid h-full gap-8 p-8 md:grid-cols-2 md:p-14">
          <div className="flex flex-col justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 mb-4">
              <User className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">My role:</h3>
            <p className="mt-3 text-base md:text-lg text-slate-800 leading-relaxed">
              Lead UX/UI Designer directing every phase of the human-centered design thinking process from preliminary discovery research to high-fidelity responsive web prototype and design system handoff.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-slate-50 p-8 border border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Responsibilities:</h3>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Conduct qualitative user interviews and competitor benchmarking</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Formulate personas, empathy maps, and end-to-end user journey maps</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Develop information architecture, sitemap, paper sketches, and wireframes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Conduct 2 rounds of moderated/unmoderated usability studies</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Create Apple Cupertino & Editorial design system with WCAG AA compliance</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },

    // Slide 5: Section Divider - Understanding the user
    {
      id: 5,
      section: "Section",
      title: "Understanding the user",
      bg: "bg-[#102a45]",
      content: (
        <div className="flex h-full items-center justify-between p-8 md:p-14 text-white">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Phase 01</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light">Understanding the user</h2>
          </div>
          <div className="border-l border-white/20 pl-6 text-sm text-white/70 space-y-2 hidden sm:block">
            <p>● User research</p>
            <p>● Personas</p>
            <p>● Problem statements</p>
            <p>● User journey maps</p>
          </div>
        </div>
      ),
    },

    // Slide 6: User Research Summary
    {
      id: 6,
      section: "Understanding the user",
      title: "User research: summary",
      content: (
        <div className="flex h-full flex-col justify-center p-8 md:p-14">
          <div className="mx-auto max-w-3xl space-y-6 text-slate-700 leading-relaxed">
            <p className="text-base md:text-lg">
              To understand traveler frustrations, expectations, and booking habits, I conducted semi-structured interviews with <strong>10 target participants</strong> (couples, luxury vacationers, wellness retreat seekers, and remote creative directors) along with analyzing 45 survey responses.
            </p>
            <p className="text-base md:text-lg">
              The research revealed that when investing in luxury stays ($400-$1,800/night), users demand <strong>visual transparency</strong> and <strong>sensory reassurance</strong>. Cluttered booking widgets, ambiguous square-meter measurements, and pressure tactics (e.g. <em>"Only 1 room left!"</em>) severely degrade the sense of luxury and trust.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-center">
              <div>
                <p className="text-3xl font-bold text-slate-900">82%</p>
                <p className="text-xs text-slate-500 mt-1">Prefer booking directly on hotel site if experience is smooth</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">70%</p>
                <p className="text-xs text-slate-500 mt-1">Want clear visual room comparisons before checkout</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">&lt; 3 mins</p>
                <p className="text-xs text-slate-500 mt-1">Ideal time to complete a booking from discovery</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 7: User Research: Pain Points
    {
      id: 7,
      section: "Understanding the user",
      title: "User research: pain points",
      content: (
        <div className="grid h-full grid-cols-1 gap-4 p-8 sm:grid-cols-2 lg:grid-cols-4 md:p-14">
          {[
            {
              num: 1,
              title: "Sensory Disconnect",
              desc: "Generic travel engines do not convey the serene atmosphere, natural lighting, or architectural privacy of boutique luxury villas.",
            },
            {
              num: 2,
              title: "Hidden Fees & Confusion",
              desc: "Complex rate structures, taxes, and ambiguous bed/guest configurations create anxiety right at the payment step.",
            },
            {
              num: 3,
              title: "High Checkout Friction",
              desc: "Overly long booking forms requiring redundant personal information interrupt the relaxed mindset of holiday planning.",
            },
            {
              num: 4,
              title: "Inflexible Concierge",
              desc: "Difficulty requesting personalized arrangements (spa timing, dietary preferences, private pickup) during initial reservation.",
            },
          ].map((item) => (
            <div key={item.num} className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white mb-4">
                  {item.num}
                </span>
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 mt-4">Verified by 10 users</span>
            </div>
          ))}
        </div>
      ),
    },

    // Slide 8: Persona
    {
      id: 8,
      section: "Understanding the user",
      title: "Persona: Sophia Martinez",
      content: (
        <div className="grid h-full gap-6 p-8 md:grid-cols-12 md:p-14">
          <div className="md:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-100 p-6 border border-slate-200">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-[#004121] flex items-center justify-center text-xl font-bold text-sand">
                  SM
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Sophia Martinez</h3>
                  <p className="text-xs text-slate-500">Creative Director & Wellness Enthusiast</p>
                </div>
              </div>

              <blockquote className="mt-6 border-l-2 border-emerald-600 pl-3 italic text-xs text-slate-700">
                “When I take time off, I want the vacation feeling to start the moment I visit the resort’s website — peaceful, clear, and effortless.”
              </blockquote>

              <div className="mt-6 space-y-1.5 text-xs text-slate-600 border-t border-slate-200 pt-4">
                <p><strong>Age:</strong> 34</p>
                <p><strong>Location:</strong> Singapore</p>
                <p><strong>Education:</strong> Master of Design</p>
                <p><strong>Travel frequency:</strong> 4-5 times / year</p>
              </div>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 border border-emerald-200 mt-4">
              <p className="text-[11px] font-bold text-emerald-800 uppercase">Problem Statement</p>
              <p className="mt-1 text-xs text-emerald-950">
                Sophia needs an intuitive, high-transparency booking website so she can curate a peaceful 5-night tropical retreat with private pool and wellness sessions without tedious back-and-forth emails.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600">Core Goals</h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>• Find an authentic sanctuary far from city noise</li>
                <li>• Directly compare suite views, plunge pool sizes, and amenities</li>
                <li>• Add custom spa rituals during initial booking</li>
                <li>• Instant mobile-responsive booking confirmation</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-600">Frustrations</h4>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li>• Booking sites showing generic stock photos instead of real villa shots</li>
                <li>• Unclear cancellation policies and hidden resort service fees</li>
                <li>• Slow-loading media on mobile while planning on the go</li>
                <li>• Cluttered forms asking for irrelevant information</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 9: User Journey Map
    {
      id: 9,
      section: "Understanding the user",
      title: "User journey map",
      content: (
        <div className="flex h-full flex-col justify-center p-8 md:p-14 overflow-x-auto">
          <div className="min-w-[650px] space-y-2">
            <div className="grid grid-cols-5 gap-2 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
              <div className="p-2 bg-slate-100 rounded-lg">1. Discovery</div>
              <div className="p-2 bg-slate-100 rounded-lg">2. Exploration</div>
              <div className="p-2 bg-slate-100 rounded-lg">3. Comparison</div>
              <div className="p-2 bg-slate-100 rounded-lg">4. Direct Booking</div>
              <div className="p-2 bg-slate-100 rounded-lg">5. Anticipation</div>
            </div>

            <div className="grid grid-cols-5 gap-2 text-xs">
              <div className="rounded-xl border border-slate-200 p-3 bg-white space-y-2">
                <span className="font-bold text-slate-800">Action:</span>
                <p className="text-slate-600">Sees editorial article about Phú Quốc sanctuary.</p>
                <span className="block font-bold text-slate-800 mt-2">Feeling:</span>
                <p className="text-emerald-600 font-medium">✨ Curious, inspired</p>
                <div className="border-t pt-2 text-[11px] text-slate-500">
                  <strong>Opportunity:</strong> Fast load time, compelling visual hero with island atmosphere.
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-3 bg-white space-y-2">
                <span className="font-bold text-slate-800">Action:</span>
                <p className="text-slate-600">Browses Resort story, lagoon pools & dining.</p>
                <span className="block font-bold text-slate-800 mt-2">Feeling:</span>
                <p className="text-blue-600 font-medium">🌊 Immersed, engaged</p>
                <div className="border-t pt-2 text-[11px] text-slate-500">
                  <strong>Opportunity:</strong> Editorial typography & high-res imagery of real spaces.
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-3 bg-white space-y-2">
                <span className="font-bold text-slate-800">Action:</span>
                <p className="text-slate-600">Compares Forest Suite vs Ocean Villa.</p>
                <span className="block font-bold text-slate-800 mt-2">Feeling:</span>
                <p className="text-amber-600 font-medium">🤔 Analytical, careful</p>
                <div className="border-t pt-2 text-[11px] text-slate-500">
                  <strong>Opportunity:</strong> Clear size metrics (m²), amenities pill tags, transparent price.
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-3 bg-white space-y-2">
                <span className="font-bold text-slate-800">Action:</span>
                <p className="text-slate-600">Selects dates, guests, adds special request & books.</p>
                <span className="block font-bold text-slate-800 mt-2">Feeling:</span>
                <p className="text-emerald-600 font-medium">🌿 Confident, calm</p>
                <div className="border-t pt-2 text-[11px] text-slate-500">
                  <strong>Opportunity:</strong> Clean single-step checkout with live date-picker and instant feedback.
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 p-3 bg-white space-y-2">
                <span className="font-bold text-slate-800">Action:</span>
                <p className="text-slate-600">Receives confirmation summary & concierge contact.</p>
                <span className="block font-bold text-slate-800 mt-2">Feeling:</span>
                <p className="text-emerald-600 font-medium">🎉 Delighted, relaxed</p>
                <div className="border-t pt-2 text-[11px] text-slate-500">
                  <strong>Opportunity:</strong> Provide direct concierge chat & calendar sync.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 10: Section Divider - Starting the design
    {
      id: 10,
      section: "Section",
      title: "Starting the design",
      bg: "bg-[#004121]",
      content: (
        <div className="flex h-full items-center justify-between p-8 md:p-14 text-white">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-sand">Phase 02</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light">Starting the design</h2>
          </div>
          <div className="border-l border-white/20 pl-6 text-sm text-white/70 space-y-2 hidden sm:block">
            <p>● Sitemap & Information architecture</p>
            <p>● Paper wireframes & responsive sketches</p>
            <p>● Digital wireframes</p>
            <p>● Low-fidelity prototype</p>
            <p>● Usability studies & findings</p>
          </div>
        </div>
      ),
    },

    // Slide 11: Sitemap & Information Architecture
    {
      id: 11,
      section: "Starting the design",
      title: "Sitemap & Information Architecture",
      content: (
        <div className="grid h-full gap-8 p-8 md:grid-cols-12 md:p-14">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-slate-900">User-focused Navigation</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Based on user journey insights, I architected a shallow 2-tier hierarchy ensuring that guests can transition from inspirational content to direct room reservation in no more than <strong>2 clicks</strong> from any screen.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">13 Total Screens</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-800 font-semibold">Conversion-Optimized</span>
            </div>
            <button
              onClick={() => onNavigate?.("/sitemap")}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:underline"
            >
              <span>Xem sơ đồ Mind Map đầy đủ</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="md:col-span-7 flex items-center justify-center rounded-2xl bg-slate-50 p-6 border border-slate-200">
            <div className="w-full space-y-3 font-mono text-xs">
              <div className="rounded-lg bg-[#004121] text-sand p-2.5 font-bold text-center">
                SASÓN Home (/)
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                <div className="rounded border border-slate-300 bg-white p-2">
                  <strong>The Resort</strong>
                  <span className="block text-slate-400">/the-resort</span>
                </div>
                <div className="rounded border-2 border-emerald-500 bg-emerald-50 p-2 font-bold text-emerald-900">
                  <strong>Suites & Villas</strong>
                  <span className="block text-emerald-700">/rooms</span>
                </div>
                <div className="rounded border border-slate-300 bg-white p-2">
                  <strong>Experiences</strong>
                  <span className="block text-slate-400">/dining, /spa</span>
                </div>
                <div className="rounded border-2 border-orange-500 bg-orange-50 p-2 font-bold text-orange-900">
                  <strong>Booking</strong>
                  <span className="block text-orange-700">/booking</span>
                </div>
              </div>
              <div className="rounded-lg border border-dashed border-emerald-400 p-2 text-center text-[11px] text-emerald-800 bg-emerald-50/50">
                ↳ 4 Dynamic Villa Slugs: /rooms/[garden-bungalow | forest-suite | ocean-villa | sason-residence]
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 12: Usability Study Parameters & Findings
    {
      id: 12,
      section: "Starting the design",
      title: "Usability study: parameters & findings",
      content: (
        <div className="grid h-full gap-8 p-8 md:grid-cols-2 md:p-14">
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Study Parameters</h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span className="text-slate-400 block">Study Type:</span>
                <strong className="text-slate-800">Unmoderated & remote</strong>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span className="text-slate-400 block">Participants:</span>
                <strong className="text-slate-800">5 participants (Couples & Solos)</strong>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span className="text-slate-400 block">Session Length:</span>
                <strong className="text-slate-800">20 - 30 minutes</strong>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <span className="text-slate-400 block">Devices:</span>
                <strong className="text-slate-800">Desktop + Mobile browser</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">3 Key Findings</h3>
            <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-3.5 text-xs text-amber-950">
              <strong>1. Need for immediate date & price visibility:</strong> Users felt anxious clicking "Book" without knowing availability for their weekend dates beforehand.
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-3.5 text-xs text-blue-950">
              <strong>2. Mobile navigation reachability:</strong> The desktop topbar navigation became cramped on small screens; users preferred an accessible bottom-docked or clean drawer menu.
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-3.5 text-xs text-emerald-950">
              <strong>3. High demand for special concierge requests:</strong> 4 out of 5 users wanted to specify arrival time and pillow/spa preferences during checkout rather than post-confirmation.
            </div>
          </div>
        </div>
      ),
    },

    // Slide 13: Section Divider - Refining the design
    {
      id: 13,
      section: "Section",
      title: "Refining the design",
      bg: "bg-[#1f2937]",
      content: (
        <div className="flex h-full items-center justify-between p-8 md:p-14 text-white">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Phase 03</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light">Refining the design</h2>
          </div>
          <div className="border-l border-white/20 pl-6 text-sm text-white/70 space-y-2 hidden sm:block">
            <p>● Before & After mockups</p>
            <p>● Responsive screen size variations</p>
            <p>● High-fidelity prototype</p>
            <p>● Accessibility considerations (WCAG AA)</p>
          </div>
        </div>
      ),
    },

    // Slide 14: Mockups Before & After Usability Study
    {
      id: 14,
      section: "Refining the design",
      title: "Mockups: Before & After Usability Study",
      content: (
        <div className="grid h-full gap-6 p-8 md:grid-cols-2 md:p-14">
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Before Usability Study</span>
            <div className="flex-1 rounded-xl bg-white border border-slate-300 p-4 text-xs text-slate-500 space-y-3">
              <div className="h-6 w-24 bg-slate-200 rounded" />
              <div className="h-20 bg-slate-100 rounded flex items-center justify-center text-[11px] text-slate-400">
                Generic room card without floorplan or direct dates
              </div>
              <p className="text-[11px] text-red-500">
                ❌ Missing live date availability calendar.<br />
                ❌ Guest had to navigate 3 nested pages to see room price per night.
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-emerald-300 bg-emerald-50/50 p-5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">After Usability Study</span>
            <div className="flex-1 rounded-xl bg-white border border-emerald-200 p-4 text-xs text-slate-700 space-y-3 shadow-sm">
              <div className="h-6 w-24 bg-emerald-800 rounded" />
              <div className="h-20 bg-emerald-50 rounded flex items-center justify-center text-[11px] text-emerald-800 font-medium">
                Integrated Booking Widget with live popover calendar & instant price preview
              </div>
              <p className="text-[11px] text-emerald-700">
                ✓ Added persistent floating booking drawer with check-in/out dates.<br />
                ✓ Clear room badges: m² size, beds, and all-inclusive perks.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 15: Accessibility Considerations
    {
      id: 15,
      section: "Refining the design",
      title: "Accessibility considerations",
      content: (
        <div className="grid h-full grid-cols-1 gap-6 p-8 md:grid-cols-3 md:p-14">
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white mb-4">
                1
              </span>
              <h4 className="text-sm font-bold text-slate-900">WCAG AA Contrast</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                The primary brand colors — Deep Forest (`#004121`) against Warm Cream (`#FFFAF2`) — exceed a <strong>12:1 contrast ratio</strong>, far surpassing WCAG AAA standards for reading comfort.
              </p>
            </div>
            <div className="rounded-lg bg-[#004121] p-2.5 text-center text-xs text-cream font-mono">
              Contrast 12.4 : 1 ✓
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white mb-4">
                2
              </span>
              <h4 className="text-sm font-bold text-slate-900">Typography Pairing</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Using strictly two legible typefaces: <strong>Cormorant Garamond</strong> for high-impact display editorial titles, and <strong>Montserrat</strong> for clean, high-x-height body and form inputs.
              </p>
            </div>
            <div className="rounded-lg bg-slate-200 p-2.5 text-center text-xs text-slate-800">
              Serif (Display) + Sans (UI)
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white mb-4">
                3
              </span>
              <h4 className="text-sm font-bold text-slate-900">Keyboard & Screen Reader</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Built with Radix UI headless accessible primitives, featuring full keyboard navigation tab stops, visible focus rings, ARIA dialog roles, and screen-reader labels.
              </p>
            </div>
            <div className="rounded-lg bg-blue-100 p-2.5 text-center text-xs text-blue-900 font-semibold">
              Accessible Radix Primitives
            </div>
          </div>
        </div>
      ),
    },

    // Slide 16: Section Divider - Going forward
    {
      id: 16,
      section: "Section",
      title: "Going forward",
      bg: "bg-[#0b192e]",
      content: (
        <div className="flex h-full items-center justify-between p-8 md:p-14 text-white">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Phase 04</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light">Going forward</h2>
          </div>
          <div className="border-l border-white/20 pl-6 text-sm text-white/70 space-y-2 hidden sm:block">
            <p>● Impact & Metrics</p>
            <p>● What I learned</p>
            <p>● Next steps & roadmap</p>
            <p>● Contact & Connect</p>
          </div>
        </div>
      ),
    },

    // Slide 17: Takeaways - Impact & What I Learned
    {
      id: 17,
      section: "Going forward",
      title: "Takeaways",
      content: (
        <div className="grid h-full gap-8 p-8 md:grid-cols-2 md:p-14">
          <div className="flex flex-col justify-center rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 md:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white mb-3">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Impact:</h3>
            <p className="mt-2 text-sm md:text-base text-slate-800 leading-relaxed">
              The direct booking prototype delivered an intuitive, peaceful booking flow. Usability test participants reported a <strong>94% task completion rate</strong> with an average time-to-book of under <strong>2 minutes 15 seconds</strong> — cutting expected friction by half compared to traditional hospitality engines.
            </p>
            <div className="mt-4 flex gap-4 text-xs font-semibold text-emerald-900">
              <span>✓ 94% Success Rate</span>
              <span>✓ 0 Reported Checkout Blockers</span>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white mb-3">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600">What I learned:</h3>
            <ul className="mt-2 space-y-2 text-xs md:text-sm text-slate-700 leading-relaxed">
              <li>• <strong>Emotional tone matters:</strong> In luxury travel, calm whitespace and editorial balance directly impact user confidence and perceived value.</li>
              <li>• <strong>Transparency reduces drop-off:</strong> Surfacing villa size, exact bed count, and included perks upfront eliminated hesitant page bounces.</li>
              <li>• <strong>Design system consistency:</strong> Strict component tokens allowed rapid prototyping across Desktop, Tablet, and Mobile.</li>
            </ul>
          </div>
        </div>
      ),
    },

    // Slide 18: Next Steps
    {
      id: 18,
      section: "Going forward",
      title: "Next steps",
      content: (
        <div className="grid h-full grid-cols-1 gap-6 p-8 md:grid-cols-3 md:p-14">
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white mb-4">
                1
              </span>
              <h4 className="text-sm font-bold text-slate-900">Interactive 360° Villa Tour</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Integrate WebGL or 360-degree panoramic virtual walkthroughs for each of the 4 suites directly within the detail pages to heighten spatial immersion.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-blue-600 font-bold mt-4">Phase 2 Exploration</span>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white mb-4">
                2
              </span>
              <h4 className="text-sm font-bold text-slate-900">Multi-Currency & Languages</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Expand localization for high-inbound markets (VND, USD, SGD, EUR, JPY) with real-time currency conversions and bilingual English / Vietnamese content.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-blue-600 font-bold mt-4">Localization</span>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white mb-4">
                3
              </span>
              <h4 className="text-sm font-bold text-slate-900">Guest Portal & AI Concierge</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Build a post-booking dashboard where confirmed guests can customize spa bookings, airport transfer, dietary notes, and chat with resort hosts.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-blue-600 font-bold mt-4">Post-Stay Retention</span>
          </div>
        </div>
      ),
    },

    // Slide 19: Interactive Prototype Callout
    {
      id: 19,
      section: "Interactive Prototype",
      title: "Experience the Live Prototype",
      bg: "bg-[#004121]",
      content: (
        <div className="flex h-full flex-col items-center justify-center p-8 md:p-14 text-center text-white">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sand/20 text-sand mb-6 ring-2 ring-sand/40">
            <MonitorPlay className="h-8 w-8" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-sand">Final Deliverable</span>
          <h2 className="mt-2 font-serif text-3xl md:text-5xl font-light">Interactive Web Prototype</h2>
          <p className="mt-4 max-w-xl text-sm md:text-base text-white/80 leading-relaxed">
            The high-fidelity responsive prototype is live and fully interactive on Desktop, Tablet, and Mobile views.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate?.("/")}
              className="rounded-full bg-sand px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#004121] shadow-xl hover:bg-amber-300 transition-colors flex items-center gap-2"
            >
              <span>Mở Interactive Prototype</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate?.("/rooms")}
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-colors"
            >
              <span>Xem các hạng phòng</span>
            </button>
          </div>
        </div>
      ),
    },

    // Slide 20: Let's Connect
    {
      id: 20,
      section: "Conclusion",
      title: "Let's connect!",
      content: (
        <div className="flex h-full flex-col items-center justify-center p-8 md:p-14 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 mb-6">
            <MessageSquare className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Thank you for reading!</h2>
          <p className="mt-3 max-w-md text-sm text-slate-600 leading-relaxed">
            I would appreciate your feedback and insights on this study. Feedback is essential for continuous design enhancement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs">
            <a
              href="mailto:contact@sason.vn"
              className="rounded-full bg-slate-900 px-5 py-2.5 font-medium text-white hover:bg-slate-800 transition-colors"
            >
              stay@sason.vn
            </a>
            <a
              href="https://github.com/lxhoi/sason"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      ),
    },
  ];

  const current = slides[currentSlide];

  return (
    <div className="mx-auto flex h-full max-w-6xl flex-col p-4 md:p-6 text-slate-900">
      {/* ── TOP CONTROL BAR ── */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 text-white">
        <div className="flex items-center gap-3">
          <span className="rounded bg-emerald-500/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
            Google UX Template
          </span>
          <span className="text-xs text-white/50">
            Slide {currentSlide + 1} / {slides.length} · <strong className="text-white">{current.section}</strong>
          </span>
        </div>

        {/* View Switcher & Slide Controls */}
        <div className="flex items-center gap-2">
          {viewMode === "slides" && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => setCurrentSlide((c) => Math.max(c - 1, 0))}
                disabled={currentSlide === 0}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
                title="Previous slide (Left Arrow)"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((c) => Math.min(c + 1, slides.length - 1))}
                disabled={currentSlide === slides.length - 1}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
                title="Next slide (Right Arrow)"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="flex items-center rounded-lg border border-white/15 bg-white/5 p-0.5">
            <button
              onClick={() => setViewMode("slides")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                viewMode === "slides" ? "bg-white/20 text-white font-semibold" : "text-white/50 hover:text-white"
              }`}
            >
              <MonitorPlay className="h-3.5 w-3.5" />
              <span>Dạng Slide (16:9)</span>
            </button>
            <button
              onClick={() => setViewMode("scroll")}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                viewMode === "scroll" ? "bg-white/20 text-white font-semibold" : "text-white/50 hover:text-white"
              }`}
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Cuộn Dài</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── MODE 1: SLIDE PRESENTATION (16:9 RATIO) ── */}
      {viewMode === "slides" && (
        <div className="flex flex-1 flex-col justify-center">
          <div
            className={`relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15 transition-all ${
              current.bg ? current.bg : "bg-white"
            }`}
          >
            {/* Top signature Google UX blue bar for white slides */}
            {!current.bg && (
              <div className="absolute left-8 md:left-14 top-0 h-1.5 w-16 bg-[#1a73e8]" />
            )}

            {/* Slide Title Bar for standard white slides */}
            {!current.bg && current.title && (
              <div className="px-8 pt-8 md:px-14 md:pt-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                  {current.title}
                </h2>
              </div>
            )}

            <div className={`h-full ${!current.bg && current.title ? "pt-0" : ""}`}>
              {current.content}
            </div>
          </div>

          {/* Slide Thumbnail Dots */}
          <div className="mt-4 flex items-center justify-center gap-1.5 overflow-x-auto py-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide
                    ? "w-8 bg-emerald-400 shadow-md"
                    : "w-2 bg-white/20 hover:bg-white/50"
                }`}
                title={`Slide ${idx + 1}: ${s.title}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── MODE 2: CONTINUOUS SCROLL VIEW ── */}
      {viewMode === "scroll" && (
        <div className="space-y-8 pb-20">
          {slides.map((s, idx) => (
            <div
              key={s.id}
              className={`relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10 ${
                s.bg ? s.bg : "bg-white"
              }`}
            >
              {!s.bg && <div className="absolute left-8 md:left-14 top-0 h-1.5 w-16 bg-[#1a73e8]" />}
              {!s.bg && s.title && (
                <div className="px-8 pt-8 md:px-14 md:pt-10 flex items-center justify-between border-b border-slate-100 pb-3">
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                    {s.title}
                  </h2>
                  <span className="font-mono text-xs text-slate-400">Slide {idx + 1}</span>
                </div>
              )}
              <div className="min-h-[380px]">{s.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
