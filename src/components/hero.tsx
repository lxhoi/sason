"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { BrandMark } from "@/components/logo";
import { BookingWidget } from "@/components/booking-widget";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 180]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <section className="relative h-[100svh] min-h-[720px] overflow-hidden bg-forest">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=80"
          alt="SASÓN pool and tropical canopy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/35 via-forest/25 to-forest/70" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrandMark gold className="mx-auto h-[88px] w-[88px]" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-8 nav-link text-sand"
        >
          Phú Quốc · Việt Nam
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1 }}
          className="mt-4 max-w-4xl font-serif text-5xl font-light leading-[1.05] italic md:text-7xl lg:text-8xl"
        >
          Where forest
          <br />
          meets the sea
        </motion.h1>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-20 mx-auto max-w-4xl px-5 pb-8 md:px-8">
        <BookingWidget />
      </div>
    </section>
  );
}
