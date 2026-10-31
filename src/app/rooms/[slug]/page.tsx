import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { rooms, getRoom } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  return { title: room?.name ?? "Suite" };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  return (
    <>
      <SiteHeader transparent />
      <section className="relative h-[70vh] min-h-[480px]">
        <Image
          src={room.image}
          alt={room.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-16 text-center text-cream">
          <p className="nav-link text-sand">{room.tag}</p>
          <h1 className="mt-3 font-serif text-5xl italic md:text-7xl">
            {room.name}
          </h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="leading-8 text-forest/80">{room.summary}</p>
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
            {room.amenities.map((item) => (
              <li key={item} className="border-t border-forest/10 pt-3">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <aside className="border border-forest/10 bg-sage/20 p-8">
            <p className="nav-link text-copper">From</p>
            <p className="mt-2 font-serif text-4xl">
              {formatCurrency(room.price)}
              <span className="text-lg text-forest/50"> / night</span>
            </p>
            <p className="mt-4 text-sm text-forest/70">
              {room.size} · {room.guests} guests · {room.beds}
            </p>
            <Button asChild variant="forest" className="mt-8 w-full">
              <Link href={`/booking?room=${room.slug}`}>Reserve this stay</Link>
            </Button>
          </aside>
        </Reveal>
      </section>
      <section className="grid md:grid-cols-2">
        {room.gallery.map((src) => (
          <div key={src} className="relative aspect-[16/10]">
            <Image
              src={src}
              alt={`${room.name} interior`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        ))}
      </section>
    </>
  );
}
