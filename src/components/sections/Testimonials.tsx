import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/content";
import { StarIcon, QuoteIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grain opacity-40" />

      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Loved & Trusted"
          title="Real rituals, real results"
          description="Join a community of 250,000 finding calm, clarity and vitality the natural way."
        />

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 120}
              className="break-inside-avoid rounded-3xl bg-cream-50 p-7 shadow-[var(--shadow-soft)] ring-1 ring-brand-900/8"
            >
              <QuoteIcon className="h-8 w-8 text-leaf-500/40" />
              <div className="mt-3 flex text-gold-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon
                    key={s}
                    className={cn("h-4 w-4", s >= t.rating && "text-brand-300/40")}
                  />
                ))}
              </div>
              <p className="mt-4 text-brand-800/90 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-leaf-400 to-brand-600 font-display text-lg font-500 text-cream-50">
                  {t.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="font-600 text-brand-800">{t.name}</p>
                  <p className="text-sm text-brand-700/60">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
