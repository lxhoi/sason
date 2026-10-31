import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "The Resort" };

export default function TheResortPage() {
  return (
    <>
      <SiteHeader transparent />
      <PageHero
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=80"
        kicker="The resort"
        title="A landscape to inhabit"
        subtitle="Ninety-two keys, set among forest, lagoon, and a private bay on the northwest coast of Phú Quốc."
      />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="nav-link text-copper">Place</p>
          <h2 className="mt-4 font-serif text-4xl italic md:text-5xl">
            Built around the eye of SASÓN.
          </h2>
        </Reveal>
        <Reveal>
          <p className="leading-8 text-forest/80">
            Architecture follows the land: low pavilions, timber, lime plaster,
            and water courts that cool the air. Paths are unlit at their
            edges so the night sky remains. The emblem — an eye, a seed, a
            lagoon — appears in bronze, in carved wood, and in the circular
            pools that gather rain.
          </p>
        </Reveal>
      </section>
      <section className="grid md:grid-cols-3">
        {[
          {
            src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
            title: "Forest",
            copy: "A protected belt of native trees, walked at dawn.",
          },
          {
            src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
            title: "Lagoon",
            copy: "Still water at the heart of the resort.",
          },
          {
            src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
            title: "Sea",
            copy: "A private beach of pale sand, west-facing.",
          },
        ].map((item) => (
          <Reveal key={item.title}>
            <article className="relative min-h-[420px]">
              <Image src={item.src} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-forest/40" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-cream">
                <h3 className="font-serif text-3xl italic">{item.title}</h3>
                <p className="mt-2 text-sm text-cream/80">{item.copy}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
