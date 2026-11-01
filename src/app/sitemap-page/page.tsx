import Link from "next/link";
import { Logo } from "@/components/logo";
import { rooms, offers } from "@/lib/data";

const sections = [
  {
    title: "Main Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/the-resort", label: "The Resort" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
      { href: "/booking", label: "Book Now" },
    ],
  },
  {
    title: "Suites & Villas",
    links: [
      { href: "/rooms", label: "All Suites" },
      ...rooms.map((r) => ({ href: `/rooms/${r.slug}`, label: r.name })),
    ],
  },
  {
    title: "Experiences",
    links: [
      { href: "/dining", label: "Dining" },
      { href: "/wellness", label: "Wellness" },
    ],
  },
  {
    title: "Exclusive Offers",
    links: [
      { href: "/offers", label: "All Offers" },
      ...offers.map((o) => ({ href: `/offers`, label: o.title })),
    ],
  },
];

export const metadata = {
  title: "Site Map — SASÓN",
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-cream text-forest">
      {/* Header bar */}
      <div className="border-b border-forest/10 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Link href="/" aria-label="SASÓN home">
            <Logo className="h-8 md:h-10" />
          </Link>
          <Link
            href="/"
            className="text-[11px] uppercase tracking-[0.18em] text-forest/60 hover:text-forest transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1440px] px-5 py-20 md:px-10">
        <h1 className="font-serif text-5xl md:text-6xl text-forest">Site Map</h1>
        <p className="mt-4 text-sm text-forest/50 uppercase tracking-[0.18em]">
          All pages on sason.vn
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-[11px] uppercase tracking-[0.18em] text-forest/50 mb-5 font-medium">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 font-serif text-lg text-forest hover:text-gold transition-colors"
                    >
                      <span className="h-px w-4 bg-forest/20 group-hover:bg-gold group-hover:w-6 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* All routes table */}
        <div className="mt-20 border-t border-forest/10 pt-16">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-forest/50 mb-8">
            All Routes
          </h2>
          <div className="grid gap-2 text-sm font-mono text-forest/70">
            {sections.flatMap((s) =>
              s.links.map((link, i) => (
                <div
                  key={`${link.href}-${i}`}
                  className="flex items-center gap-4 border-b border-forest/5 py-3"
                >
                  <span className="text-forest/30 w-6 text-right shrink-0">
                    {sections.flatMap((x) => x.links).indexOf(link) + 1}
                  </span>
                  <Link
                    href={link.href}
                    className="text-forest hover:text-gold transition-colors"
                  >
                    {link.href}
                  </Link>
                  <span className="ml-auto text-forest/40">{link.label}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-forest/10 mt-20">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-6 text-[11px] uppercase tracking-[0.18em] text-forest/40 md:flex-row md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} SASÓN Hotel & Resort</span>
          <span>Phú Quốc · Việt Nam</span>
        </div>
      </div>
    </main>
  );
}
