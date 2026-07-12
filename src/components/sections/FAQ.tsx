"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { PlusIcon } from "@/components/icons";
import { FAQS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Good to Know"
          title="Questions, answered"
          description="Everything you might want to know before beginning your Swasthvan ritual."
        />

        <div className="mt-14 flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl ring-1 transition-colors",
                    isOpen
                      ? "bg-cream-100 ring-brand-300/50"
                      : "bg-cream-50 ring-brand-900/8 hover:ring-brand-300/40",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-500 text-brand-800">
                      {faq.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300",
                        isOpen
                          ? "rotate-45 bg-brand-800 text-cream-50"
                          : "bg-brand-100 text-brand-700",
                      )}
                    >
                      <PlusIcon className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-brand-700/80">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
