import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { PROCESS } from "@/lib/content";

export function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Soil to Shelf"
          title="Craft you can trace, quality you can trust"
          description="Every bottle travels a deliberate, transparent journey from farm to your front door."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.step} delay={i * 120} className="relative flex flex-col gap-4">
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-brand-800 font-display text-xl font-500 text-cream-50 ring-8 ring-cream-50">
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-500 text-brand-800">{step.title}</h3>
                <p className="text-sm leading-relaxed text-brand-700/70">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
