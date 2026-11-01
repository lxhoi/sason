import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ConditionalFooter } from "@/components/conditional-footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "SASÓN Hotel & Resort — Phú Quốc",
    template: "%s · SASÓN",
  },
  description:
    "SASÓN Hotel & Resort — a private sanctuary on Phú Quốc where forest, lagoon, and sea meet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-forest">
        <SmoothScroll />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
