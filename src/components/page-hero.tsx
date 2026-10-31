import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function PageHero({
  image,
  kicker,
  title,
  subtitle,
}: {
  image: string;
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative h-[58vh] min-h-[420px] overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest/45" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-16 text-center text-cream">
        <Reveal>
          <p className="nav-link text-sand">{kicker}</p>
          <h1 className="mt-4 font-serif text-5xl italic md:text-7xl">{title}</h1>
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-cream/80">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
