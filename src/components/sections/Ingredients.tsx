import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { INGREDIENTS } from "@/lib/content";
import { LeafIcon } from "@/components/icons";

export function Ingredients() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grain opacity-40" />

      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="From the Earth"
          title="Nothing you can't pronounce"
          description="Whole, traceable botanicals — each chosen for a purpose and nothing added just to fill the bottle."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {INGREDIENTS.map((ing, i) => (
            <Reveal
              key={ing.name}
              delay={(i % 4) * 90}
              className="hover-lift group flex flex-col items-center gap-4 rounded-3xl bg-cream-50 p-7 text-center ring-1 ring-brand-900/8"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-leaf-400/25 to-brand-300/25 text-brand-600 transition-transform duration-500 group-hover:scale-110">
                <LeafIcon className="h-8 w-8" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-lg font-500 text-brand-800">{ing.name}</h3>
                <p className="text-xs uppercase tracking-widest text-brand-700/55">
                  {ing.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
