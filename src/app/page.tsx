import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/logo";
import { rooms, offers } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <SiteHeader transparent />
      <Hero />

      <section className="relative overflow-hidden bg-cream py-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 opacity-70"
          style={{
            backgroundImage: "url('/brand/pattern.svg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <Reveal>
            <BrandMark className="h-20 w-20" />
            <p className="mt-8 nav-link text-copper">The resort</p>
            <h2 className="mt-4 font-serif text-4xl italic leading-tight md:text-6xl">
              A quiet luxury, drawn from land and light.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base leading-8 text-forest/80">
              SASÓN sits between a protected forest and a private stretch of Bãi
              Dài. Villas open onto lagoon water. Suites float in the canopy.
              Days move slowly — from the first light of the sea to the last
              lantern on the terrace.
            </p>
            <p className="mt-6 text-base leading-8 text-forest/80">
              The emblem of SASÓN is an eye: to see, to be seen, to stay
              present. Every space is composed around that stillness.
            </p>
            <Button asChild variant="outline" className="mt-10">
              <Link href="/the-resort">Discover the resort</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="nav-link text-sand">Stay</p>
                <h2 className="mt-3 font-serif text-4xl italic md:text-6xl">
                  Suites & villas
                </h2>
              </div>
              <Link href="/rooms" className="hidden nav-link text-sand md:inline">
                View all
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={i * 0.08}>
                <Link href={`/rooms/${room.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="nav-link text-[10px] text-sand">{room.tag}</p>
                      <h3 className="mt-1 font-serif text-3xl">{room.name}</h3>
                      <p className="mt-2 text-sm text-cream/70">
                        {room.size} · {room.guests} guests
                      </p>
                    </div>
                    <p className="font-serif text-xl text-sand">
                      {formatCurrency(room.price)}
                      <span className="block text-right text-xs tracking-normal text-cream/50">
                        / night
                      </span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="relative min-h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
            alt="Dining at SASÓN"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-sage/30 px-8 py-20 md:px-16">
          <Reveal>
            <p className="nav-link text-copper">Dining</p>
            <h2 className="mt-4 font-serif text-4xl italic md:text-5xl">
              From garden, fire, and sea.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-forest/80">
              Vietnamese coastal cooking, charcoal, herbs from our garden, and
              a wine room that looks into the mangrove. Breakfast is unhurried.
              Dinner is by reservation only.
            </p>
            <Button asChild variant="forest" className="mt-10 w-fit">
              <Link href="/dining">The table</Link>
            </Button>
          </Reveal>
        </div>
        <div className="flex flex-col justify-center bg-cream px-8 py-20 md:order-4 md:px-16">
          <Reveal>
            <p className="nav-link text-copper">Wellness</p>
            <h2 className="mt-4 font-serif text-4xl italic md:text-5xl">
              Rituals of water and stillness.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-forest/80">
              A spa house among the trees — steam, herbal compress, and
              treatments drawn from Phú Quốc pepper, coconut, and mineral clay.
            </p>
            <Button asChild variant="outline" className="mt-10 w-fit">
              <Link href="/wellness">The spa</Link>
            </Button>
          </Reveal>
        </div>
        <div className="relative min-h-[520px] md:order-3">
          <Image
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80"
            alt="Spa at SASÓN"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <Reveal>
            <p className="nav-link text-copper">Exclusive offers</p>
            <h2 className="mt-3 font-serif text-4xl italic md:text-6xl">
              Arrive with intention.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {offers.map((offer, i) => (
              <Reveal key={offer.slug} delay={i * 0.1}>
                <Link href="/offers" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                      <p className="nav-link text-sand">{offer.season}</p>
                      <h3 className="mt-2 font-serif text-3xl italic">
                        {offer.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-28 text-center text-cream">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <Reveal className="relative z-10 px-6">
          <BrandMark gold className="mx-auto h-16 w-16" />
          <h2 className="mx-auto mt-8 max-w-2xl font-serif text-4xl italic md:text-6xl">
            Begin your stay at SASÓN.
          </h2>
          <Button asChild className="mt-10">
            <Link href="/booking">Reserve a villa</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}
