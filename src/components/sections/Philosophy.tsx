import { Reveal } from "@/components/Reveal";
import { Button, SectionHeading } from "@/components/ui";
import { LogoMark } from "@/components/Logo";
import { ArrowIcon } from "@/components/icons";

const PILLARS = [
  {
    title: "Balance",
    body: "Health is harmony between mind, body and spirit — not the absence of symptoms.",
  },
  {
    title: "Nature",
    body: "The remedies we need already grow around us. We simply honor and preserve them.",
  },
  {
    title: "Ritual",
    body: "Small, consistent daily practices compound into lasting, whole-life wellness.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* visual */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="blob-2 absolute inset-0 bg-gradient-to-br from-cream-200 to-cream-100 shadow-[var(--shadow-soft)]" />
            <div className="blob-2 absolute inset-4 bg-grain opacity-40" />

            {/* concentric "balance" rings */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative grid h-64 w-64 place-items-center rounded-full border border-brand-300/50 sm:h-72 sm:w-72">
                <div className="grid h-44 w-44 place-items-center rounded-full border border-brand-300/50 sm:h-52 sm:w-52">
                  <div className="grid h-28 w-28 place-items-center rounded-full bg-brand-800 shadow-lg sm:h-32 sm:w-32">
                    <LogoMark className="h-20 w-20" />
                  </div>
                </div>
                {["Vata", "Pitta", "Kapha"].map((d, i) => (
                  <span
                    key={d}
                    className="absolute rounded-full bg-cream-50 px-3 py-1 text-xs font-600 uppercase tracking-widest text-brand-700 shadow-[var(--shadow-soft)]"
                    style={{
                      transform: `rotate(${i * 120}deg) translateY(-9rem) rotate(-${i * 120}deg)`,
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* copy */}
        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Our Philosophy"
            title={
              <>
                Wellness isn&apos;t a product.{" "}
                <span className="italic text-leaf-600">It&apos;s a way of living.</span>
              </>
            }
            description="Ayurveda — the science of life — teaches that true health flows from balance. At Swasthvan, we translate that timeless intelligence into honest, effective products that meet you exactly where modern life is."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120} className="flex flex-col gap-2">
                <span className="font-display text-2xl text-leaf-600">
                  0{i + 1}
                </span>
                <h3 className="font-600 text-brand-800">{p.title}</h3>
                <p className="text-sm leading-relaxed text-brand-700/70">{p.body}</p>
              </Reveal>
            ))}
          </div>

          <div>
            <Button href="/about" variant="ghost" className="px-0 hover:bg-transparent">
              Read our full story
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
