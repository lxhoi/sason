import Link from "next/link";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Logo invert className="h-14" />
          <p className="mt-8 max-w-sm font-serif text-2xl leading-snug text-sand">
            A private island sanctuary where forest, lagoon, and sea meet.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="nav-link text-sage">Visit</p>
          <p className="mt-4 text-sm leading-7 text-cream/80">
            SASÓN Hotel & Resort
            <br />
            Bãi Dài, Phú Quốc
            <br />
            Kiên Giang, Việt Nam
          </p>
        </div>
        <div className="md:col-span-2">
          <p className="nav-link text-sage">Explore</p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/80 hover:text-sand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="nav-link text-sage">Contact</p>
          <p className="mt-4 text-sm leading-7 text-cream/80">
            +84 297 399 1888
            <br />
            stay@sason.vn
          </p>
          <Link href="/contact" className="mt-4 inline-block nav-link text-sand">
            Write to us
          </Link>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-6 text-[11px] uppercase tracking-[0.18em] text-cream/50 md:flex-row md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} SASÓN Hotel & Resort</span>
          <span>Phú Quốc · Việt Nam</span>
        </div>
      </div>
    </footer>
  );
}
