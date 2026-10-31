import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { PageHero } from "@/components/page-hero";
import { gallery } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <SiteHeader transparent />
      <PageHero
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2200&q=80"
        kicker="Gallery"
        title="Light, water, shade"
      />
      <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[280px]">
          {gallery.map((item) => (
            <div
              key={item.src}
              className={cn("relative overflow-hidden", item.className)}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
