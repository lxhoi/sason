"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const light = transparent && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        light
          ? "bg-transparent text-cream"
          : "bg-cream/95 text-forest shadow-[0_1px_0_rgba(0,65,33,0.08)] backdrop-blur-md",
      )}
    >
      <div className="mx-auto grid h-[88px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10">
        <nav className="hidden min-w-0 items-center gap-5 lg:flex xl:gap-8">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link shrink-0 hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="justify-self-center"
          aria-label="SASÓN home"
        >
          <Logo invert={light} className="h-8 md:h-10" />
        </Link>

        <div className="flex min-w-0 items-center justify-end gap-5 xl:gap-8">
          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link shrink-0 hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant={light ? "gold" : "forest"}
              size="sm"
              className="ml-1"
            >
              <Link href="/booking">Book now</Link>
            </Button>
          </nav>

          <Sheet>
            <SheetTrigger className="lg:hidden" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent>
              <Link href="/" className="mb-12 block w-40">
                <Logo />
              </Link>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link href={link.href} className="nav-link text-sm">
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="/contact" className="nav-link text-sm">
                    Contact
                  </Link>
                </SheetClose>
              </nav>
              <SheetClose asChild>
                <Button asChild className="mt-12 w-full" variant="forest">
                  <Link href="/booking">Book now</Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
