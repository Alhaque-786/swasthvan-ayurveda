import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Button, SectionHeading } from "@/components/ui";
import { JOURNAL } from "@/lib/content";
import { ArrowIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Journal() {
  return (
    <section id="journal" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="The Journal"
            title="Wisdom for your everyday ritual"
            description="Practical guides, ingredient deep-dives and the science behind the tradition."
          />
          <Button href="/#journal" variant="secondary" className="shrink-0">
            All articles
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {JOURNAL.map((post, i) => (
            <Reveal key={post.title} delay={i * 120}>
              <Link
                href="/#journal"
                className="hover-lift group flex h-full flex-col overflow-hidden rounded-3xl bg-cream-50 ring-1 ring-brand-900/8"
              >
                <div className={cn("relative aspect-16/10 overflow-hidden bg-gradient-to-br", post.hue)}>
                  <div className="absolute inset-0 bg-grain opacity-25" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-xs font-600 uppercase tracking-wide text-brand-700">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs uppercase tracking-widest text-brand-700/50">
                    {post.read}
                  </span>
                  <h3 className="font-display text-xl font-500 leading-snug text-brand-800 transition-colors group-hover:text-leaf-600">
                    {post.title}
                  </h3>
                  <span className="mt-auto flex items-center gap-1.5 pt-2 text-sm font-600 text-leaf-600">
                    Read more
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
