import { Button, Eyebrow } from "@/components/ui";
import { LogoMark } from "@/components/Logo";
import { ArrowIcon, StarIcon, LeafIcon } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grain opacity-60" />
        <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-leaf-400/15 blur-3xl" />
        <div className="absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-brand-300/20 blur-3xl" />
        <div className="absolute left-1/2 bottom-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gold-300/10 blur-3xl" />
      </div>

      <div className="container-px mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <div className="flex flex-col items-start gap-7">
          <Eyebrow>Rooted in 5,000 years of wisdom</Eyebrow>

          <h1 className="font-display text-5xl leading-[1.02] font-500 tracking-tight text-brand-900 text-balance sm:text-6xl lg:text-7xl">
            Ancient Ayurveda,{" "}
            <span className="relative whitespace-nowrap">
              <span className="italic text-leaf-600">reimagined</span>
              <svg
                aria-hidden
                viewBox="0 0 300 24"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold-400"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 16 C 80 6, 220 6, 296 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            for modern life.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-brand-700/80">
            Clean, clinically-inspired herbal formulas — crafted by Ayurvedic
            practitioners, verified by modern science, and made to fit
            effortlessly into your everyday ritual.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/products" size="lg">
              Shop the Collection
              <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="/#dosha-quiz" variant="secondary" size="lg">
              Find your dosha
            </Button>
          </div>

          {/* social proof */}
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {["from-leaf-400 to-brand-600", "from-gold-400 to-clay-500", "from-brand-400 to-brand-700", "from-clay-400 to-gold-500"].map(
                  (hue, i) => (
                    <span
                      key={i}
                      className={`h-10 w-10 rounded-full bg-gradient-to-br ${hue} ring-2 ring-cream-50`}
                    />
                  ),
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span className="text-sm text-brand-700/70">
                  Loved by 250,000+ people
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* visual — layered placeholder composition */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-4/5 w-full">
            {/* main organic card */}
            <div className="blob absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 shadow-[var(--shadow-card)]" />
            <div className="blob absolute inset-0 bg-grain opacity-30" />

            {/* rotating ring */}
            <div className="absolute inset-6 grid place-items-center">
              <div className="animate-spin-slow">
                <svg viewBox="0 0 200 200" className="h-full w-full max-h-72 max-w-72 text-leaf-300/40">
                  <path
                    id="ring"
                    d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
                    fill="none"
                  />
                  <text className="fill-current text-[13px] uppercase tracking-[0.35em]">
                    <textPath href="#ring" startOffset="0">
                      · Pure · Potent · Plant-based · Ayurveda-certified
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* center emblem */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-40 w-40 place-items-center rounded-full bg-cream-50/95 shadow-2xl backdrop-blur">
                <LogoMark className="h-24 w-24" />
              </div>
            </div>

            {/* floating chips */}
            <div className="animate-float absolute -left-4 top-10 flex items-center gap-2 rounded-2xl bg-cream-50 px-4 py-3 shadow-[var(--shadow-card)] sm:-left-8">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-500/15 text-leaf-600">
                <LeafIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-600 text-brand-800">100% Natural</p>
                <p className="text-xs text-brand-700/60">No synthetics</p>
              </div>
            </div>

            <div
              className="animate-float absolute -right-2 bottom-16 flex items-center gap-2 rounded-2xl bg-cream-50 px-4 py-3 shadow-[var(--shadow-card)] sm:-right-6"
              style={{ animationDelay: "1.4s" }}
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-400/20 text-gold-600">
                <StarIcon className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-600 text-brand-800">4.9 / 5</p>
                <p className="text-xs text-brand-700/60">12k+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
