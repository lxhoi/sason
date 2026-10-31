import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Dining" };

export default function DiningPage() {
  return (
    <>
      <SiteHeader transparent />
      <PageHero
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=80"
        kicker="Dining"
        title="The table"
        subtitle="Three rooms, one kitchen — seafood at first light, fire at dusk."
      />
      <section className="mx-auto max-w-4xl space-y-16 px-6 py-24">
        {[
          {
            name: "Lá",
            time: "Breakfast & lunch",
            copy: "Open pavilion facing the lagoon. Tropical fruit, herbs, and a slow breakfast until eleven.",
          },
          {
            name: "Than",
            time: "Dinner, reservation",
            copy: "Charcoal, clay pots, and the catch of the day. A tasting menu that changes with the tide.",
          },
          {
            name: "The Bar",
            time: "Sunset onwards",
            copy: "Phú Quốc pepper gin, coconut, and a terrace that faces due west.",
          },
        ].map((place) => (
          <Reveal key={place.name}>
            <article className="border-t border-forest/10 pt-8">
              <p className="nav-link text-copper">{place.time}</p>
              <h2 className="mt-2 font-serif text-4xl italic">{place.name}</h2>
              <p className="mt-4 max-w-xl leading-8 text-forest/75">{place.copy}</p>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}
