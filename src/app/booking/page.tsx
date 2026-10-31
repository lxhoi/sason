import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteHeader } from "@/components/site-header";
import { BookingForm } from "@/components/booking-form";

export const metadata: Metadata = { title: "Book a stay" };

export default function BookingPage() {
  return (
    <>
      <SiteHeader />
      <section className="bg-cream pt-32">
        <div className="mx-auto max-w-3xl px-6 pb-24">
          <p className="nav-link text-copper">Reservations</p>
          <h1 className="mt-4 font-serif text-5xl italic md:text-6xl">
            Request your stay
          </h1>
          <p className="mt-4 max-w-xl leading-8 text-forest/70">
            A reservations host will confirm availability within a few hours.
            Direct bookings include daily breakfast and lagoon access.
          </p>
          <div className="mt-12">
            <Suspense fallback={<p className="text-sm text-forest/50">Preparing your stay…</p>}>
              <BookingForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
