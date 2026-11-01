"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft, ChevronRight, LayoutGrid, MonitorPlay,
  FileText, ExternalLink, ArrowRight, User, CheckCircle2,
  Clock, Target, AlertCircle, HeartHandshake, Eye, Sparkles,
  Layers, ShieldCheck, TrendingUp, MessageSquare, Compass,
  Check, Calendar, MapPin, Award
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
  theme?: "dark" | "light";
}

export function CaseStudyTab({ onNavigate }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<"slides" | "scroll">("slides");

  // Keyboard navigation for slide presentation mode
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

  // All 20 Google UX Certificate Slides styled with SASÓN Design System
  // (Forest #004121, Sage #C0DBAC, Moss #95B380, Cream #FFFAF2, Sand #FFD99C, Copper #A66B37)
  const slides: Slide[] = [
    // Slide 1: Cover
    {
      id: 1,
      section: "Title",
      title: "SASÓN Hotel & Resort",
      subtitle: "A luxury island sanctuary web platform",
      theme: "dark",
      bg: "bg-[#00381c]",
      content: (
        <div className="flex h-full flex-col justify-between p-6 sm:p-10 md:p-12 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFD99C] font-serif font-bold text-[#004121] shadow-md">
                S
              </div>
              <span className="font-serif text-xl tracking-widest text-[#FFD99C]">SASÓN</span>
            </div>
            <span className="rounded-full border border-[#C0DBAC]/30 bg-[#004121]/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[#C0DBAC]">
              Google UX Certificate Case Study
            </span>
          </div>

          <div className="my-auto max-w-3xl">
            <span className="inline-block rounded-full bg-[#FFD99C]/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#FFD99C]">
              Design System · Editorial Sanctuary
            </span>
            <h1 className="mt-3 font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-tight text-white">
              SASÓN Hotel & Resort
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-white/80 font-light leading-relaxed">
              Designing a serene, sensory-driven direct booking experience for a secluded island sanctuary in Phú Quốc.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between border-t border-white/15 pt-4 text-xs text-white/60">
            <div>
              <p className="font-semibold text-[#FFD99C]">Role: Lead UX/UI Designer</p>
              <p className="text-white/70">UX Research · Information Architecture · Design System</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-[#FFD99C]">Platform Scope</p>
              <p className="text-white/70">Responsive Web (Desktop · Tablet · Mobile)</p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 2: Project Overview - Product & Duration
    {
      id: 2,
      section: "Project overview",
      title: "Project Overview: Product & Duration",
      theme: "light",
      content: (
        <div className="grid h-full gap-6 p-6 sm:p-10 md:p-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#004121]/10 text-[#004121]">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A66B37]">The Product:</h3>
                <p className="mt-1.5 text-base sm:text-lg font-medium text-[#004121] leading-relaxed">
                  A high-end editorial website and direct booking engine for SASÓN Resort — a secluded sanctuary where tropical forest, freshwater lagoon, and ocean meet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#004121]/10 text-[#004121]">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#A66B37]">Project Duration:</h3>
                <p className="mt-1 font-serif text-2xl font-bold text-[#004121]">8 Weeks</p>
                <p className="text-xs text-slate-600 mt-0.5">Foundational research, wireframing, usability study & design system tokens</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-2xl bg-[#F4EFE6] p-5 border border-[#C0DBAC]/40">
            <div className="w-full max-w-sm rounded-xl bg-white p-4 shadow-lg border border-[#004121]/10">
              <div className="h-36 rounded-lg bg-[#004121] p-3.5 text-[#FFFAF2] flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#FFD99C] font-semibold">SASÓN Resort · Phú Quốc</span>
                <p className="font-serif text-base italic leading-snug">A private island sanctuary where forest, lagoon, and sea meet.</p>
                <div className="flex justify-between items-center text-[10px] text-white/70 border-t border-white/20 pt-1.5">
                  <span>Direct Booking Engine</span>
                  <span className="font-bold text-[#FFD99C]">From $420 / night</span>
                </div>
              </div>
              <div className="mt-2.5 space-y-1 text-[11px] text-slate-600">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Suite Types</span>
                  <span className="font-semibold text-[#004121]">Lagoon, Canopy & Ocean</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Architecture</span>
                  <span className="font-semibold text-[#A66B37]">Biophilic & Sustainable</span>
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
      title: "Project Overview: Problem & Goal",
      theme: "light",
      content: (
        <div className="grid h-full gap-5 p-6 sm:p-10 md:p-12 md:grid-cols-2">
          <div className="flex flex-col justify-center rounded-2xl border border-[#A66B37]/30 bg-[#FFF7ED] p-6 sm:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A66B37]/15 text-[#A66B37] mb-3">
              <AlertCircle className="h-5 w-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A66B37]">The Problem:</h3>
            <p className="mt-2 text-sm sm:text-base text-slate-800 leading-relaxed">
              Luxury travelers seeking tranquility are overwhelmed by cluttered, high-pressure Online Travel Agency (OTA) portals. They struggle to find genuine room layouts, transparent all-inclusive rates, and authentic atmosphere without hidden resort fees.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-[#004121]/20 bg-[#F4EFE6] p-6 sm:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004121]/15 text-[#004121] mb-3">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#004121]">The Goal:</h3>
            <p className="mt-2 text-sm sm:text-base text-slate-800 leading-relaxed">
              Design a tranquil, transparent web booking platform that embodies the natural calmness of SASÓN, allowing discerning guests to intuitively compare suites, configure wellness experiences, and complete direct reservations in under 3 minutes.
            </p>
          </div>
        </div>
      ),
    },

    // Slide 4: Project Overview - Role & Responsibilities
    {
      id: 4,
      section: "Project overview",
      title: "Project Overview: My Role & Responsibilities",
      theme: "light",
      content: (
        <div className="grid h-full gap-6 p-6 sm:p-10 md:p-12 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#004121]/10 text-[#004121] mb-3">
              <User className="h-5 w-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A66B37]">My Role:</h3>
            <p className="mt-2 text-sm sm:text-base text-slate-800 leading-relaxed">
              Lead UX/UI Designer directing every phase of the human-centered design thinking framework — from foundational interviews and persona empathy maps to high-fidelity responsive web prototypes and design token handoff.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center rounded-2xl bg-[#F4EFE6] p-6 border border-[#C0DBAC]/40">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#004121] mb-3">Core Responsibilities:</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#004121] shrink-0 mt-0.5" />
                <span>Conduct qualitative user interviews & competitive hospitality benchmarking</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#004121] shrink-0 mt-0.5" />
                <span>Formulate personas, problem statements, and end-to-end user journey maps</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#004121] shrink-0 mt-0.5" />
                <span>Develop information architecture, mind map sitemap, and responsive wireframes</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#004121] shrink-0 mt-0.5" />
                <span>Execute 2 rounds of unmoderated & remote usability studies</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-[#004121] shrink-0 mt-0.5" />
                <span>Construct SASÓN Design System with WCAG 2.1 AA accessibility standards</span>
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
      theme: "dark",
      bg: "bg-[#002f18]",
      content: (
        <div className="flex h-full items-center justify-between p-6 sm:p-10 md:p-14 text-white">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFD99C]">Phase 01</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-light">Understanding the user</h2>
            <p className="mt-3 text-sm text-[#C0DBAC] max-w-md font-light">
              Empathizing with travelers through qualitative research, personas, and emotional journey mapping.
            </p>
          </div>
          <div className="border-l border-[#C0DBAC]/25 pl-6 text-xs text-[#FFFAF2]/80 space-y-2 hidden sm:block">
            <p className="text-[#FFD99C] font-semibold">Topics Covered:</p>
            <p>● User research summary</p>
            <p>● Key user pain points</p>
            <p>● Persona: Sophia Martinez</p>
            <p>● End-to-end User Journey Map</p>
          </div>
        </div>
      ),
    },

    // Slide 6: User Research Summary
    {
      id: 6,
      section: "Understanding the user",
      title: "User Research: Summary",
      theme: "light",
      content: (
        <div className="flex h-full flex-col justify-center p-6 sm:p-10 md:p-12">
          <div className="mx-auto max-w-3xl space-y-4 text-slate-700 leading-relaxed">
            <p className="text-xs sm:text-sm md:text-base">
              To uncover traveler frustrations, expectations, and booking habits, I conducted semi-structured interviews with <strong>10 target participants</strong> (couples, luxury vacationers, and wellness retreat seekers) alongside analyzing 45 luxury traveler survey responses.
            </p>
            <p className="text-xs sm:text-sm md:text-base">
              The research revealed that when investing in premium retreats ($400 - $1,800/night), guests prioritize <strong>visual honesty</strong> and <strong>sensory reassurance</strong>. Cluttered widgets, ambiguous square-meter measurements, and pressure tactics (e.g. <em>"Only 1 room left!"</em>) severely harm trust.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#004121]/15 text-center">
              <div className="rounded-xl bg-[#F4EFE6] p-3 border border-[#C0DBAC]/40">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#004121]">82%</p>
                <p className="text-[11px] text-slate-600 mt-1">Prefer booking directly on hotel site if UI is smooth & transparent</p>
              </div>
              <div className="rounded-xl bg-[#F4EFE6] p-3 border border-[#C0DBAC]/40">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#004121]">70%</p>
                <p className="text-[11px] text-slate-600 mt-1">Require clear visual room comparisons before checkout</p>
              </div>
              <div className="rounded-xl bg-[#F4EFE6] p-3 border border-[#C0DBAC]/40">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#004121]">&lt; 3 mins</p>
                <p className="text-[11px] text-slate-600 mt-1">Expected ideal time to complete a direct reservation</p>
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
      title: "User Research: Key Pain Points",
      theme: "light",
      content: (
        <div className="grid h-full grid-cols-1 gap-3.5 p-6 sm:grid-cols-2 lg:grid-cols-4 md:p-12">
          {[
            {
              num: 1,
              title: "Sensory Disconnect",
              desc: "Generic travel aggregators fail to convey the peaceful atmosphere, natural acoustic privacy, and architectural quality of the villas.",
            },
            {
              num: 2,
              title: "Hidden Fees & Anxiety",
              desc: "Unclear tax additions, resort service charges, and ambiguous bedding rules cause high bounce rates at checkout.",
            },
            {
              num: 3,
              title: "Checkout Friction",
              desc: "Multi-page booking wizards asking redundant questions disrupt the relaxed mindset of planning a tranquil island vacation.",
            },
            {
              num: 4,
              title: "Inflexible Concierge",
              desc: "Inability to schedule wellness treatments or specify dietary and transport needs directly within the initial reservation flow.",
            },
          ].map((item) => (
            <div key={item.num} className="flex flex-col justify-between rounded-2xl border border-[#004121]/15 bg-[#F4EFE6] p-5">
              <div>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#004121] text-xs font-bold text-[#FFD99C] mb-3">
                  {item.num}
                </span>
                <h4 className="text-xs font-bold text-[#004121]">{item.title}</h4>
                <p className="mt-1.5 text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#A66B37] font-semibold mt-3">
                Verified by 10 users
              </span>
            </div>
          ))}
        </div>
      ),
    },

    // Slide 8: Persona: Sophia Martinez
    {
      id: 8,
      section: "Understanding the user",
      title: "Persona: Sophia Martinez",
      theme: "light",
      content: (
        <div className="grid h-full gap-5 p-6 sm:p-10 md:p-12 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col justify-between rounded-2xl bg-[#F4EFE6] p-5 border border-[#C0DBAC]/50">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#004121] flex items-center justify-center text-lg font-serif font-bold text-[#FFD99C]">
                  SM
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#004121]">Sophia Martinez</h3>
                  <p className="text-[11px] text-slate-600">Creative Director · Singapore</p>
                </div>
              </div>

              <blockquote className="mt-3.5 border-l-2 border-[#004121] pl-3 italic text-[11px] text-slate-700 font-serif">
                “When I take time off, I want the vacation feeling to start the moment I visit the resort’s website — peaceful, clear, and effortless.”
              </blockquote>

              <div className="mt-3.5 space-y-1 text-[11px] text-slate-600 border-t border-[#004121]/10 pt-2.5">
                <p><strong>Age:</strong> 34 · <strong>Travel:</strong> 4-5 luxury trips / year</p>
                <p><strong>Values:</strong> Organic architecture, privacy, wellness</p>
              </div>
            </div>

            <div className="rounded-xl bg-white p-3 border border-[#004121]/15 mt-3">
              <p className="text-[10px] font-bold text-[#004121] uppercase">Problem Statement</p>
              <p className="mt-0.5 text-[11px] text-slate-700 leading-snug">
                Sophia needs an intuitive, high-transparency booking website so she can curate a 5-night tropical retreat with private pool and wellness rituals without tedious back-and-forth emails.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#004121]/15 bg-white p-4 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#004121]">Core Goals</h4>
                <ul className="mt-2.5 space-y-2 text-xs text-slate-700">
                  <li>• Find an authentic retreat far from city noise</li>
                  <li>• Directly compare suite views, pool sizes & inclusions</li>
                  <li>• Add custom spa rituals during reservation</li>
                  <li>• Instant mobile-responsive booking confirmation</li>
                </ul>
              </div>
              <span className="text-[10px] text-[#A66B37] font-semibold uppercase mt-2">Desired Outcome</span>
            </div>

            <div className="rounded-2xl border border-[#A66B37]/30 bg-white p-4 shadow-sm flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A66B37]">Key Frustrations</h4>
                <ul className="mt-2.5 space-y-2 text-xs text-slate-700">
                  <li>• Sites showing stock photos instead of real suites</li>
                  <li>• Ambiguous cancellation policies & hidden resort fees</li>
                  <li>• Sluggish mobile loading while on the go</li>
                  <li>• Cluttered checkout asking for irrelevant details</li>
                </ul>
              </div>
              <span className="text-[10px] text-red-600 font-semibold uppercase mt-2">Pain Points to Solve</span>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 9: User Journey Map
    {
      id: 9,
      section: "Understanding the user",
      title: "User Journey Map: Sophia's Booking Flow",
      theme: "light",
      content: (
        <div className="flex h-full flex-col justify-center p-6 sm:p-10 md:p-12 overflow-x-auto">
          <div className="min-w-[620px] space-y-2">
            <div className="grid grid-cols-5 gap-2 text-center text-[11px] font-bold uppercase tracking-wider text-[#004121]">
              <div className="p-2 bg-[#F4EFE6] rounded-lg border border-[#C0DBAC]/40">1. Discovery</div>
              <div className="p-2 bg-[#F4EFE6] rounded-lg border border-[#C0DBAC]/40">2. Exploration</div>
              <div className="p-2 bg-[#F4EFE6] rounded-lg border border-[#C0DBAC]/40">3. Comparison</div>
              <div className="p-2 bg-[#F4EFE6] rounded-lg border border-[#C0DBAC]/40">4. Direct Booking</div>
              <div className="p-2 bg-[#F4EFE6] rounded-lg border border-[#C0DBAC]/40">5. Anticipation</div>
            </div>

            <div className="grid grid-cols-5 gap-2 text-[11px]">
              <div className="rounded-xl border border-[#004121]/15 p-3 bg-white space-y-1.5">
                <span className="font-bold text-[#004121]">Action:</span>
                <p className="text-slate-600">Discovers SASÓN through editorial article.</p>
                <span className="block font-bold text-[#A66B37] mt-1">Emotion:</span>
                <p className="text-emerald-700 font-medium">✨ Inspired, curious</p>
                <div className="border-t pt-1.5 text-[10px] text-slate-500">
                  <strong>Opportunity:</strong> Fast load time, immersive sensory photography.
                </div>
              </div>

              <div className="rounded-xl border border-[#004121]/15 p-3 bg-white space-y-1.5">
                <span className="font-bold text-[#004121]">Action:</span>
                <p className="text-slate-600">Explores Resort story, lagoon pools & dining.</p>
                <span className="block font-bold text-[#A66B37] mt-1">Emotion:</span>
                <p className="text-emerald-700 font-medium">🌿 Immersed, relaxed</p>
                <div className="border-t pt-1.5 text-[10px] text-slate-500">
                  <strong>Opportunity:</strong> Editorial typography & genuine space photography.
                </div>
              </div>

              <div className="rounded-xl border border-[#004121]/15 p-3 bg-white space-y-1.5">
                <span className="font-bold text-[#004121]">Action:</span>
                <p className="text-slate-600">Compares Forest Suite vs Ocean Villa.</p>
                <span className="block font-bold text-[#A66B37] mt-1">Emotion:</span>
                <p className="text-[#A66B37] font-medium">🤔 Analytical, careful</p>
                <div className="border-t pt-1.5 text-[10px] text-slate-500">
                  <strong>Opportunity:</strong> Clear m² size, plunge pool tags, transparent rates.
                </div>
              </div>

              <div className="rounded-xl border border-[#004121]/15 p-3 bg-white space-y-1.5">
                <span className="font-bold text-[#004121]">Action:</span>
                <p className="text-slate-600">Picks dates, guest count, adds special requests.</p>
                <span className="block font-bold text-[#A66B37] mt-1">Emotion:</span>
                <p className="text-emerald-700 font-medium">✨ Confident, calm</p>
                <div className="border-t pt-1.5 text-[10px] text-slate-500">
                  <strong>Opportunity:</strong> Seamless single-step checkout with live calendar.
                </div>
              </div>

              <div className="rounded-xl border border-[#004121]/15 p-3 bg-white space-y-1.5">
                <span className="font-bold text-[#004121]">Action:</span>
                <p className="text-slate-600">Receives booking summary & concierge details.</p>
                <span className="block font-bold text-[#A66B37] mt-1">Emotion:</span>
                <p className="text-emerald-700 font-medium">🎉 Excited, delighted</p>
                <div className="border-t pt-1.5 text-[10px] text-slate-500">
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
      theme: "dark",
      bg: "bg-[#00381c]",
      content: (
        <div className="flex h-full items-center justify-between p-6 sm:p-10 md:p-14 text-white">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFD99C]">Phase 02</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-light">Starting the design</h2>
            <p className="mt-3 text-sm text-[#C0DBAC] max-w-md font-light">
              Architecting the sitemap, iterating on paper sketches, and validating low-fidelity prototypes.
            </p>
          </div>
          <div className="border-l border-[#C0DBAC]/25 pl-6 text-xs text-[#FFFAF2]/80 space-y-2 hidden sm:block">
            <p className="text-[#FFD99C] font-semibold">Topics Covered:</p>
            <p>● Sitemap & Information architecture</p>
            <p>● Paper wireframes & responsive layouts</p>
            <p>● Digital wireframes</p>
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
      theme: "light",
      content: (
        <div className="grid h-full gap-6 p-6 sm:p-10 md:p-12 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col justify-center">
            <h3 className="text-base font-bold text-[#004121]">User-Focused Architecture</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Based on journey map insights, I structured a shallow 2-tier hierarchy ensuring that guests can transition from inspirational editorial content to room comparison and checkout in no more than <strong>2 clicks</strong> from any screen.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#F4EFE6] px-3 py-1 text-xs text-[#004121] font-semibold border border-[#C0DBAC]/50">
                13 Responsive Screens
              </span>
              <span className="rounded-full bg-[#004121]/10 px-3 py-1 text-xs text-[#004121] font-semibold">
                Conversion Optimized
              </span>
            </div>
            <button
              onClick={() => onNavigate?.("/sitemap")}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#004121] hover:underline"
            >
              <span>Xem sơ đồ Mind Map đầy đủ</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="md:col-span-7 flex items-center justify-center rounded-2xl bg-[#F4EFE6] p-5 border border-[#C0DBAC]/40">
            <div className="w-full space-y-2.5 font-mono text-xs">
              <div className="rounded-lg bg-[#004121] text-[#FFD99C] p-2.5 font-bold text-center shadow-md">
                SASÓN Home (/)
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                <div className="rounded border border-slate-300 bg-white p-2">
                  <strong className="text-slate-800">The Resort</strong>
                  <span className="block text-slate-400">/the-resort</span>
                </div>
                <div className="rounded border-2 border-[#004121] bg-[#004121]/10 p-2 font-bold text-[#004121]">
                  <strong>Suites & Villas</strong>
                  <span className="block text-[#004121]/70">/rooms</span>
                </div>
                <div className="rounded border border-slate-300 bg-white p-2">
                  <strong className="text-slate-800">Experiences</strong>
                  <span className="block text-slate-400">/dining, /spa</span>
                </div>
                <div className="rounded border-2 border-[#A66B37] bg-[#FFF7ED] p-2 font-bold text-[#A66B37]">
                  <strong>Booking</strong>
                  <span className="block text-[#A66B37]">/booking</span>
                </div>
              </div>
              <div className="rounded-lg border border-dashed border-[#004121] p-2 text-center text-[11px] text-[#004121] bg-white">
                ↳ 4 Villa Slugs: /rooms/[garden-bungalow | forest-suite | ocean-villa | sason-residence]
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
      title: "Usability Study: Parameters & 3 Key Findings",
      theme: "light",
      content: (
        <div className="grid h-full gap-6 p-6 sm:p-10 md:p-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A66B37]">Study Parameters</h3>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="rounded-xl border border-[#004121]/15 bg-[#F4EFE6] p-3">
                <span className="text-slate-500 block text-[11px]">Format:</span>
                <strong className="text-[#004121]">Unmoderated & remote</strong>
              </div>
              <div className="rounded-xl border border-[#004121]/15 bg-[#F4EFE6] p-3">
                <span className="text-slate-500 block text-[11px]">Participants:</span>
                <strong className="text-[#004121]">5 participants (Couples & Solos)</strong>
              </div>
              <div className="rounded-xl border border-[#004121]/15 bg-[#F4EFE6] p-3">
                <span className="text-slate-500 block text-[11px]">Duration:</span>
                <strong className="text-[#004121]">20 - 30 minutes / session</strong>
              </div>
              <div className="rounded-xl border border-[#004121]/15 bg-[#F4EFE6] p-3">
                <span className="text-slate-500 block text-[11px]">Testing Devices:</span>
                <strong className="text-[#004121]">Desktop & Mobile browser</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A66B37]">3 Key Findings</h3>
            <div className="rounded-xl border border-[#A66B37]/30 bg-[#FFF7ED] p-3 text-xs text-[#562902]">
              <strong>1. Need for immediate date & price preview:</strong> Guests hesitated clicking "Book" without knowing availability for their chosen dates beforehand.
            </div>
            <div className="rounded-xl border border-[#004121]/20 bg-[#F4EFE6] p-3 text-xs text-[#004121]">
              <strong>2. Mobile navigation ergonomics:</strong> The desktop menu became crowded on mobile; users preferred a floating bottom-docked or clean drawer navigation.
            </div>
            <div className="rounded-xl border border-[#004121]/20 bg-[#F4EFE6] p-3 text-xs text-[#004121]">
              <strong>3. High demand for personalized requests:</strong> 4 out of 5 users wanted to specify arrival time and pillow/spa preferences during checkout rather than waiting for email confirmations.
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
      theme: "dark",
      bg: "bg-[#002f18]",
      content: (
        <div className="flex h-full items-center justify-between p-6 sm:p-10 md:p-14 text-white">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFD99C]">Phase 03</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-light">Refining the design</h2>
            <p className="mt-3 text-sm text-[#C0DBAC] max-w-md font-light">
              Elevating mockups, engineering responsive variations, and verifying WCAG accessibility.
            </p>
          </div>
          <div className="border-l border-[#C0DBAC]/25 pl-6 text-xs text-[#FFFAF2]/80 space-y-2 hidden sm:block">
            <p className="text-[#FFD99C] font-semibold">Topics Covered:</p>
            <p>● Before & After mockups</p>
            <p>● Responsive screen size variations</p>
            <p>● High-fidelity interactive prototype</p>
            <p>● Accessibility considerations (WCAG AA)</p>
          </div>
        </div>
      ),
    },

    // Slide 14: Mockups: Before & After Usability Study
    {
      id: 14,
      section: "Refining the design",
      title: "Mockups: Before & After Usability Study",
      theme: "light",
      content: (
        <div className="grid h-full gap-5 p-6 sm:p-10 md:p-12 md:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-red-200 bg-red-50/40 p-4 sm:p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 mb-2">Before Usability Study</span>
            <div className="flex-1 rounded-xl bg-white border border-red-200 p-3.5 text-xs text-slate-500 space-y-2.5">
              <div className="h-5 w-24 bg-slate-200 rounded" />
              <div className="h-16 bg-slate-100 rounded flex items-center justify-center text-[11px] text-slate-400">
                Generic room card without floorplan or direct dates
              </div>
              <p className="text-[11px] text-red-600 leading-snug">
                ❌ Missing live date availability calendar.<br />
                ❌ Guest had to navigate 3 nested pages to view room price per night.
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-[#004121]/30 bg-[#F4EFE6] p-4 sm:p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#004121] mb-2">After Usability Study</span>
            <div className="flex-1 rounded-xl bg-white border border-[#004121]/20 p-3.5 text-xs text-slate-700 space-y-2.5 shadow-sm">
              <div className="h-5 w-24 bg-[#004121] rounded" />
              <div className="h-16 bg-[#004121]/10 rounded flex items-center justify-center text-[11px] text-[#004121] font-semibold">
                Integrated Booking Widget with live popover calendar & instant price preview
              </div>
              <p className="text-[11px] text-[#004121] leading-snug">
                ✓ Added persistent floating booking drawer with check-in/out dates.<br />
                ✓ Clear room badges: m² size, plunge pool, and breakfast perks.
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
      title: "Accessibility Considerations (WCAG 2.1 AA)",
      theme: "light",
      content: (
        <div className="grid h-full grid-cols-1 gap-4 p-6 sm:p-10 md:p-12 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl border border-[#004121]/15 bg-[#F4EFE6] p-5">
            <div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#004121] text-xs font-bold text-[#FFD99C] mb-3">
                1
              </span>
              <h4 className="text-xs font-bold text-[#004121]">WCAG AAA Contrast</h4>
              <p className="mt-1.5 text-[11px] text-slate-600 leading-relaxed">
                Primary brand colors — Deep Forest (`#004121`) against Warm Cream (`#FFFAF2`) — deliver a <strong>12.4:1 contrast ratio</strong>, far exceeding the 4.5:1 WCAG AA baseline for comfortable reading.
              </p>
            </div>
            <div className="rounded-lg bg-[#004121] p-2 text-center text-[11px] text-[#FFFAF2] font-mono mt-3">
              Contrast 12.4 : 1 ✓
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#004121]/15 bg-[#F4EFE6] p-5">
            <div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#004121] text-xs font-bold text-[#FFD99C] mb-3">
                2
              </span>
              <h4 className="text-xs font-bold text-[#004121]">Typography Hierarchy</h4>
              <p className="mt-1.5 text-[11px] text-slate-600 leading-relaxed">
                Carefully paired <strong>Cormorant Garamond</strong> for editorial titles with <strong>Montserrat</strong> for clean, high-x-height body and input fields to ensure high legibility at all scales.
              </p>
            </div>
            <div className="rounded-lg bg-white p-2 text-center text-[11px] text-slate-800 border border-[#004121]/15 mt-3">
              Serif (Display) + Sans (UI)
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#004121]/15 bg-[#F4EFE6] p-5">
            <div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#004121] text-xs font-bold text-[#FFD99C] mb-3">
                3
              </span>
              <h4 className="text-xs font-bold text-[#004121]">Keyboard & Screen Reader</h4>
              <p className="mt-1.5 text-[11px] text-slate-600 leading-relaxed">
                Accessible headless primitives with keyboard tab stops, visible focus outlines, ARIA modal dialog roles, and screen-reader descriptive labels.
              </p>
            </div>
            <div className="rounded-lg bg-[#004121]/10 p-2 text-center text-[11px] text-[#004121] font-semibold mt-3">
              Full Keyboard & ARIA Compliant
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
      theme: "dark",
      bg: "bg-[#00381c]",
      content: (
        <div className="flex h-full items-center justify-between p-6 sm:p-10 md:p-14 text-white">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFD99C]">Phase 04</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-light">Going forward</h2>
            <p className="mt-3 text-sm text-[#C0DBAC] max-w-md font-light">
              Measuring impact, distilling key design lessons, and charting future roadmap features.
            </p>
          </div>
          <div className="border-l border-[#C0DBAC]/25 pl-6 text-xs text-[#FFFAF2]/80 space-y-2 hidden sm:block">
            <p className="text-[#FFD99C] font-semibold">Topics Covered:</p>
            <p>● Impact & User success metrics</p>
            <p>● What I learned</p>
            <p>● Next steps roadmap</p>
            <p>● Interactive prototype access</p>
          </div>
        </div>
      ),
    },

    // Slide 17: Takeaways - Impact & What I Learned
    {
      id: 17,
      section: "Going forward",
      title: "Takeaways: Impact & What I Learned",
      theme: "light",
      content: (
        <div className="grid h-full gap-6 p-6 sm:p-10 md:p-12 md:grid-cols-2">
          <div className="flex flex-col justify-center rounded-2xl border border-[#004121]/20 bg-[#F4EFE6] p-5 sm:p-7">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#004121] text-[#FFD99C] mb-2.5">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#004121]">Impact:</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
              The direct booking prototype delivered an intuitive, tranquil flow. Usability test participants demonstrated a <strong>94% task completion rate</strong> with an average time-to-book of under <strong>2 minutes 15 seconds</strong> — cutting expected booking friction by half.
            </p>
            <div className="mt-3 flex gap-3 text-xs font-semibold text-[#004121]">
              <span>✓ 94% Success Rate</span>
              <span>✓ 0 Reported Checkout Blockers</span>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-[#A66B37]/30 bg-white p-5 sm:p-7 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A66B37] text-white mb-2.5">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A66B37]">What I Learned:</h3>
            <ul className="mt-1.5 space-y-2 text-xs text-slate-700 leading-relaxed">
              <li>• <strong>Emotional tone matters:</strong> In luxury travel, calm whitespace and editorial balance directly impact user confidence and perceived value.</li>
              <li>• <strong>Transparency reduces drop-off:</strong> Surfacing villa size, exact bed count, and included perks upfront eliminated hesitant page bounces.</li>
              <li>• <strong>Design token rigor:</strong> Strict component tokens allowed rapid prototyping across Desktop, Tablet, and Mobile.</li>
            </ul>
          </div>
        </div>
      ),
    },

    // Slide 18: Next Steps
    {
      id: 18,
      section: "Going forward",
      title: "Next Steps: Roadmap & Expansion",
      theme: "light",
      content: (
        <div className="grid h-full grid-cols-1 gap-4 p-6 sm:p-10 md:p-12 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl border border-[#004121]/15 bg-[#F4EFE6] p-5">
            <div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#004121] text-xs font-bold text-[#FFD99C] mb-3">
                1
              </span>
              <h4 className="text-xs font-bold text-[#004121]">Interactive 360° Villa Tour</h4>
              <p className="mt-1.5 text-[11px] text-slate-600 leading-relaxed">
                Integrate 360-degree panoramic virtual walkthroughs for each of the 4 suites directly within detail pages to heighten spatial immersion.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#A66B37] font-bold mt-3">Phase 2 Exploration</span>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#004121]/15 bg-[#F4EFE6] p-5">
            <div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#004121] text-xs font-bold text-[#FFD99C] mb-3">
                2
              </span>
              <h4 className="text-xs font-bold text-[#004121]">Multi-Currency & Languages</h4>
              <p className="mt-1.5 text-[11px] text-slate-600 leading-relaxed">
                Expand localization for high-inbound markets (VND, USD, SGD, EUR, JPY) with real-time currency conversions and bilingual content.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#A66B37] font-bold mt-3">Localization</span>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-[#004121]/15 bg-[#F4EFE6] p-5">
            <div>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#004121] text-xs font-bold text-[#FFD99C] mb-3">
                3
              </span>
              <h4 className="text-xs font-bold text-[#004121]">Guest Portal & Concierge</h4>
              <p className="mt-1.5 text-[11px] text-slate-600 leading-relaxed">
                Build a post-booking dashboard where confirmed guests can customize spa bookings, airport transfer, and chat with resort hosts.
              </p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#A66B37] font-bold mt-3">Post-Stay Retention</span>
          </div>
        </div>
      ),
    },

    // Slide 19: Interactive Prototype Callout
    {
      id: 19,
      section: "Interactive Prototype",
      title: "Experience the Live Prototype",
      theme: "dark",
      bg: "bg-[#00381c]",
      content: (
        <div className="flex h-full flex-col items-center justify-center p-6 sm:p-10 md:p-14 text-center text-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFD99C]/20 text-[#FFD99C] mb-4 ring-2 ring-[#FFD99C]/40">
            <MonitorPlay className="h-7 w-7" />
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFD99C]">Final Deliverable</span>
          <h2 className="mt-2 font-serif text-2xl sm:text-4xl md:text-5xl font-light">Experience the Live Prototype</h2>
          <p className="mt-3 max-w-lg text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
            The high-fidelity responsive prototype is live and fully interactive on Desktop, Tablet, and Mobile views right inside this workspace.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => onNavigate?.("/")}
              className="rounded-full bg-[#FFD99C] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#004121] shadow-xl hover:bg-amber-300 transition-colors flex items-center gap-2"
            >
              <span>Mở Interactive Prototype</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate?.("/rooms")}
              className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-colors"
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
      theme: "light",
      content: (
        <div className="flex h-full flex-col items-center justify-center p-6 sm:p-10 md:p-14 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#004121]/10 text-[#004121] mb-4">
            <MessageSquare className="h-7 w-7" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#004121]">Thank you for reading!</h2>
          <p className="mt-2.5 max-w-md text-xs sm:text-sm text-slate-600 leading-relaxed">
            I would appreciate your feedback and insights on this study. Constructive feedback is essential for continuous design enhancement.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs">
            <a
              href="mailto:contact@sason.vn"
              className="rounded-full bg-[#004121] px-5 py-2.5 font-medium text-[#FFFAF2] hover:bg-[#002f18] transition-colors shadow-md"
            >
              stay@sason.vn
            </a>
            <a
              href="https://github.com/lxhoi/sason"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-[#004121]/20 bg-white px-5 py-2.5 font-medium text-[#004121] hover:bg-[#F4EFE6] transition-colors"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="h-3.5 w-3.5" />
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
          <span className="rounded bg-[#004121] border border-[#C0DBAC]/30 px-2.5 py-1 text-xs font-serif tracking-wider text-[#FFD99C]">
            SASÓN · Google UX Certificate
          </span>
          <span className="text-xs text-white/60">
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
                title="Slide trước (Mũi tên trái)"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((c) => Math.min(c + 1, slides.length - 1))}
                disabled={currentSlide === slides.length - 1}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white hover:bg-white/10 disabled:opacity-30 transition-colors"
                title="Slide tiếp theo (Mũi tên phải)"
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
              <span>Cuộn Dài (16:9)</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── MODE 1: SLIDE PRESENTATION (16:9 RATIO WIDESCREEN) ── */}
      {viewMode === "slides" && (
        <div className="flex flex-1 flex-col justify-center">
          <div
            className={`relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/15 transition-all flex flex-col ${
              current.bg ? current.bg : "bg-[#FFFAF2]"
            }`}
          >
            {/* Top signature SASÓN Forest & Sand accent bar for light slides */}
            {current.theme === "light" && (
              <div className="absolute left-6 sm:left-10 md:left-12 top-0 h-1.5 w-24 bg-gradient-to-r from-[#004121] via-[#95B380] to-[#FFD99C]" />
            )}

            {/* Slide Title Bar for standard light slides */}
            {current.theme === "light" && current.title && (
              <div className="px-6 pt-5 sm:px-10 sm:pt-7 md:px-12 md:pt-8 shrink-0">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#A66B37]">
                  {current.section}
                </span>
                <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#004121]">
                  {current.title}
                </h2>
              </div>
            )}

            {/* Slide Content inside 16:9 box */}
            <div className="flex-1 min-h-0 overflow-hidden">
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
                    ? "w-8 bg-[#FFD99C] shadow-md shadow-amber-400/20"
                    : "w-2 bg-white/20 hover:bg-white/50"
                }`}
                title={`Slide ${idx + 1}: ${s.title}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── MODE 2: CONTINUOUS SCROLL VIEW (EVERY CARD IN 16:9 RATIO) ── */}
      {viewMode === "scroll" && (
        <div className="space-y-8 pb-20">
          {slides.map((s, idx) => (
            <div
              key={s.id}
              className={`relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 flex flex-col ${
                s.bg ? s.bg : "bg-[#FFFAF2]"
              }`}
            >
              {s.theme === "light" && (
                <div className="absolute left-6 sm:left-10 md:left-12 top-0 h-1.5 w-24 bg-gradient-to-r from-[#004121] via-[#95B380] to-[#FFD99C]" />
              )}
              {s.theme === "light" && s.title && (
                <div className="px-6 pt-5 sm:px-10 sm:pt-7 md:px-12 md:pt-8 flex items-center justify-between border-b border-[#004121]/10 pb-2 shrink-0">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#A66B37]">
                      {s.section}
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#004121]">
                      {s.title}
                    </h2>
                  </div>
                  <span className="font-mono text-xs text-slate-400">Slide {idx + 1} / {slides.length}</span>
                </div>
              )}
              <div className="flex-1 min-h-0 overflow-hidden">
                {s.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
