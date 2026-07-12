import { Reveal } from "@/components/Reveal";
import { STATS } from "@/lib/content";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-800 py-16 text-cream-50 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grain opacity-15" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 100}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="font-display text-4xl font-500 text-leaf-300 sm:text-5xl">
                {stat.value}
              </span>
              <span className="max-w-[12rem] text-sm text-cream-100/70">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
