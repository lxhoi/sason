import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { rooms } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export const metadata: Metadata = { title: "Suites & Villas" };

export default function RoomsPage() {
  return (
    <>
      <SiteHeader transparent />
      <PageHero
        image="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2200&q=80"
        kicker="Stay"
        title="Suites & villas"
        subtitle="Four residences, from a garden pavilion to the SASÓN Residence."
      />
      <section className="mx-auto max-w-6xl space-y-24 px-6 py-24">
        {rooms.map((room, i) => (
          <Reveal key={room.slug}>
            <article
              className={`grid items-center gap-10 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div>
                <p className="nav-link text-copper">{room.tag}</p>
                <h2 className="mt-3 font-serif text-4xl italic md:text-5xl">
                  {room.name}
                </h2>
                <p className="mt-4 text-sm text-forest/60">
                  {room.size} · up to {room.guests} guests · {room.beds}
                </p>
                <p className="mt-6 leading-8 text-forest/80">{room.summary}</p>
                <p className="mt-6 font-serif text-2xl">
                  from {formatCurrency(room.price)}{" "}
                  <span className="text-base text-forest/50">/ night</span>
                </p>
                <div className="mt-8 flex gap-3">
                  <Button asChild variant="forest">
                    <Link href={`/rooms/${room.slug}`}>View suite</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`/booking?room=${room.slug}`}>Reserve</Link>
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
