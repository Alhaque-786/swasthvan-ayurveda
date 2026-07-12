import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, SectionHeading, Button } from "@/components/ui";
import { LogoMark } from "@/components/Logo";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { ArrowIcon, HeartIcon, LeafIcon, GlobeIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Swasthvan Ayurveda blends 5,000 years of tradition with modern science to craft honest herbal wellness.",
};

const VALUES = [
  {
    icon: HeartIcon,
    title: "Honesty first",
    body: "Full transparency — published lab reports, real sourcing, and no marketing myths.",
  },
  {
    icon: LeafIcon,
    title: "Nature, respected",
    body: "Regenerative farming and wild-harvesting that gives back more than it takes.",
  },
  {
    icon: GlobeIcon,
    title: "Tradition, forward",
    body: "Ancient formulas, modern rigor — proven wisdom made relevant for today.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* hero */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grain opacity-50" />
          <div className="absolute left-1/2 top-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-leaf-400/12 blur-3xl" />
        </div>
        <div className="container-px mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Eyebrow>Est. in the foothills of the Himalayas</Eyebrow>
          <h1 className="font-display text-5xl font-500 leading-[1.05] tracking-tight text-brand-900 text-balance sm:text-6xl">
            We didn&apos;t invent Ayurveda. We just made it{" "}
            <span className="italic text-leaf-600">honest again.</span>
          </h1>
          <p className="max-w-2xl text-lg text-brand-700/75">
            Swasthvan began with a simple frustration: shelves full of &ldquo;natural&rdquo;
            products that were anything but. We set out to build the Ayurvedic brand
            we wished existed — pure, proven and radically transparent.
          </p>
        </div>
      </section>

      {/* story split */}
      <section className="container-px mx-auto max-w-7xl pb-24 sm:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-lg">
              <div className="blob absolute inset-0 bg-gradient-to-br from-brand-700 to-brand-950 shadow-[var(--shadow-card)]" />
              <div className="blob absolute inset-0 bg-grain opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-40 w-40 place-items-center rounded-full bg-cream-50/95 shadow-2xl">
                  <LogoMark className="h-24 w-24" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="Wellness that respects both people and the planet"
              description="Every formula is created by BAMS-certified Ayurvedic practitioners, verified by independent labs, and packaged in materials that return to the earth. We measure success not in units sold, but in lives quietly made better."
            />
            <p className="leading-relaxed text-brand-700/80">
              From a single-room apothecary to a community of a quarter-million,
              our promise hasn&apos;t changed: whole herbs, real science, and
              nothing to hide. This is Ayurveda for the way you actually live.
            </p>
            <div>
              <Button href="/products" size="lg">
                Explore our products
                <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* values */}
      <section className="container-px mx-auto max-w-7xl py-24 sm:py-32">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Three promises we never break"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.title}
              delay={i * 120}
              className="flex flex-col gap-4 rounded-3xl bg-cream-100 p-8 ring-1 ring-brand-900/8"
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-leaf-500/15 text-leaf-600">
                <v.icon className="h-7 w-7" />
              </span>
              <h3 className="font-display text-xl font-500 text-brand-800">{v.title}</h3>
              <p className="leading-relaxed text-brand-700/75">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Process />
    </>
  );
}
