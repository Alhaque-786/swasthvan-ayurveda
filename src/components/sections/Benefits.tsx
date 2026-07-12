import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { BENEFITS } from "@/lib/content";
import {
  LeafIcon,
  MicroscopeIcon,
  ShieldIcon,
  RecycleIcon,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  leaf: LeafIcon,
  microscope: MicroscopeIcon,
  shield: ShieldIcon,
  recycle: RecycleIcon,
};

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-24 text-cream-100 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grain opacity-20" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-leaf-500/10 blur-3xl" />
      </div>

      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          inverted
          eyebrow="Why Swasthvan"
          title="Held to a higher standard"
          description="Every choice — from soil to shelf — is made with your health and the planet in mind."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon] ?? LeafIcon;
            return (
              <Reveal
                key={b.title}
                delay={i * 100}
                className="group flex flex-col gap-4 rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 transition-colors hover:bg-white/[0.08]"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-leaf-500/15 text-leaf-300 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-xl font-500 text-cream-50">{b.title}</h3>
                <p className="text-sm leading-relaxed text-cream-100/70">{b.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
