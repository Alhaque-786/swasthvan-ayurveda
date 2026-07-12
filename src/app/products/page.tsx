import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, Button } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/content";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse the full Swasthvan Ayurveda collection — herbal formulas for sleep, focus, digestion, immunity and glow.",
};

const CATEGORIES = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

export default function ProductsPage() {
  return (
    <>
      {/* page hero */}
      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grain opacity-50" />
          <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-leaf-400/15 blur-3xl" />
          <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-gold-300/15 blur-3xl" />
        </div>
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <Eyebrow>The Collection</Eyebrow>
          <h1 className="font-display text-5xl font-500 leading-tight tracking-tight text-brand-900 text-balance sm:text-6xl">
            Rituals for every part of you
          </h1>
          <p className="max-w-2xl text-lg text-brand-700/75">
            Clean, potent, single-origin formulas — thoughtfully blended and
            triple-tested. Find the one your body has been asking for.
          </p>
        </div>
      </section>

      {/* filter chips (static placeholders) */}
      <section className="container-px mx-auto max-w-7xl pb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat, i) => (
            <span
              key={cat}
              className={
                i === 0
                  ? "rounded-full bg-brand-800 px-5 py-2 text-sm font-600 text-cream-50"
                  : "rounded-full bg-cream-100 px-5 py-2 text-sm font-500 text-brand-700 ring-1 ring-brand-900/8 transition hover:bg-brand-50"
              }
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* grid */}
      <section className="container-px mx-auto max-w-7xl pb-24 sm:pb-32">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 100} className="scroll-mt-28" as="div">
              <div id={product.id}>
                <ProductCard product={product} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-[2rem] bg-brand-900 px-8 py-14 text-center text-cream-50">
          <h2 className="font-display text-3xl font-500 sm:text-4xl">
            Still deciding?
          </h2>
          <p className="max-w-md text-cream-100/75">
            Take the 2-minute dosha quiz and we&apos;ll build a personalized ritual
            just for you.
          </p>
          <Button href="/#dosha-quiz" variant="gold" size="lg" className="mt-2">
            Take the Dosha Quiz
            <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
    </>
  );
}
