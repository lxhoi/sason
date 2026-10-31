import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "Wellness" };

export default function WellnessPage() {
  return (
    <>
      <SiteHeader transparent />
      <PageHero
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2200&q=80"
        kicker="Wellness"
        title="The spa house"
      />
      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <p className="font-serif text-3xl italic leading-snug md:text-4xl">
            Treatments are unhurried, and never louder than the forest.
          </p>
          <p className="mt-8 leading-8 text-forest/75">
            Steam rooms open onto a private garden. Therapists work with
            pepper, coconut oil, and mineral clay from the island. Yoga is held
            at first light on the dune deck — complimentary for in-house guests.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {["Forest ritual · 90 min", "Lagoon soak · 60 min", "Sunrise yoga"].map(
            (item) => (
              <p
                key={item}
                className="border border-forest/10 bg-sage/20 px-5 py-8 text-center font-serif text-xl italic"
              >
                {item}
              </p>
            ),
          )}
        </div>
      </section>
    </>
  );
}
