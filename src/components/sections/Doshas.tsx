import { Reveal } from "@/components/Reveal";
import { Button, SectionHeading } from "@/components/ui";
import { DOSHAS } from "@/lib/content";
import { ArrowIcon, SparkIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Doshas() {
  return (
    <section id="doshas" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Know Your Nature"
          title={
            <>
              Wellness begins with your <span className="italic text-leaf-600">dosha</span>
            </>
          }
          description="In Ayurveda, three energies shape every one of us. Understanding your unique blend is the first step toward lasting balance."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {DOSHAS.map((dosha, i) => (
            <Reveal
              key={dosha.name}
              delay={i * 120}
              className={cn(
                "hover-lift group relative overflow-hidden rounded-3xl bg-gradient-to-br p-8 text-cream-50 shadow-[var(--shadow-soft)]",
                dosha.color,
              )}
            >
              <div aria-hidden className="absolute inset-0 bg-grain opacity-20" />
              <div className="relative flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-500">{dosha.name}</span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15">
                    <SparkIcon className="h-5 w-5" />
                  </span>
                </div>
                <span className={cn("text-sm font-600 uppercase tracking-widest", dosha.accent)}>
                  {dosha.element}
                </span>
                <div className="space-y-3 text-sm">
                  <p className="text-cream-50/85">
                    <span className="font-600 text-cream-50">Nature:</span> {dosha.trait}
                  </p>
                  <p className="text-cream-50/85">
                    <span className="font-600 text-cream-50">Balance with:</span>{" "}
                    {dosha.balance}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* quiz CTA */}
        <Reveal
          id="dosha-quiz"
          className="mt-14 flex flex-col items-center gap-6 rounded-[2rem] bg-cream-100 p-10 text-center ring-1 ring-brand-900/8 sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-2xl font-500 text-brand-800 sm:text-3xl">
              Not sure where you fit?
            </h3>
            <p className="max-w-xl text-brand-700/75">
              Take our free 2-minute assessment and get a ritual tailored to your
              mind-body constitution.
            </p>
          </div>
          <Button href="/#dosha-quiz" size="lg" className="shrink-0">
            Take the Dosha Quiz
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
