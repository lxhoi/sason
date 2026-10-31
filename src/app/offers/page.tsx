import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { offers } from "@/lib/data";

export const metadata: Metadata = { title: "Exclusive Offers" };

export default function OffersPage() {
  return (
    <>
      <SiteHeader transparent />
      <PageHero
        image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2200&q=80"
        kicker="Exclusive offers"
        title="Stay a little longer"
      />
      <section className="mx-auto max-w-5xl space-y-16 px-6 py-24">
        {offers.map((offer) => (
          <Reveal key={offer.slug}>
            <article className="grid gap-8 border-t border-forest/10 pt-12 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="nav-link text-copper">{offer.season}</p>
                <h2 className="mt-3 font-serif text-4xl italic">{offer.title}</h2>
                <p className="mt-4 leading-8 text-forest/75">{offer.detail}</p>
                <p className="mt-3 text-sm text-copper">{offer.perk}</p>
                <Button asChild variant="forest" className="mt-8 w-fit">
                  <Link href="/booking">Enquire</Link>
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
