import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <section className="mx-auto grid max-w-5xl gap-16 px-6 pb-24 pt-36 md:grid-cols-2">
        <div>
          <p className="nav-link text-copper">Contact</p>
          <h1 className="mt-4 font-serif text-5xl italic">Write to SASÓN</h1>
          <p className="mt-6 leading-8 text-forest/75">
            Reservations, celebrations, and press. We reply within one working
            day.
          </p>
          <p className="mt-8 text-sm leading-7">
            +84 297 399 1888
            <br />
            stay@sason.vn
            <br />
            Bãi Dài, Phú Quốc, Kiên Giang
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
