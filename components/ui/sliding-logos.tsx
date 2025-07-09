"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const logos = [
  { src: "https://cdn.magicui.design/companies/Google.svg", alt: "Google" },
  { src: "https://cdn.magicui.design/companies/Microsoft.svg", alt: "Microsoft" },
  { src: "https://cdn.magicui.design/companies/Amazon.svg", alt: "Amazon" },
  { src: "https://cdn.magicui.design/companies/Netflix.svg", alt: "Netflix" },
  { src: "https://cdn.magicui.design/companies/YouTube.svg", alt: "YouTube" },
  { src: "https://cdn.magicui.design/companies/Instagram.svg", alt: "Instagram" },
  { src: "https://cdn.magicui.design/companies/Uber.svg", alt: "Uber" },
];

export function SlidingLogos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          TRUSTED BY LEADING TEAMS
        </h3>
        <div className="relative mt-6">
          <div
            className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row max-w-full [--duration:40s]"
          >
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={112}
                  height={40}
                  className="h-10 w-28 dark:brightness-0 dark:invert grayscale opacity-30"
                />
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row" aria-hidden="true">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={112}
                  height={40}
                  className="h-10 w-28 dark:brightness-0 dark:invert grayscale opacity-30"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}