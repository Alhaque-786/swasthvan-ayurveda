import { LeafIcon } from "@/components/icons";

const ITEMS = [
  "100% Plant-Based",
  "Third-Party Lab Tested",
  "Ayurveda Certified",
  "Cruelty-Free",
  "Non-GMO",
  "Sustainably Sourced",
  "Vegan & Gluten-Free",
  "Carbon-Neutral Shipping",
];

export function Marquee() {
  return (
    <section className="border-y border-brand-900/10 bg-brand-900 py-5 text-cream-100">
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
          {[...ITEMS, ...ITEMS].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 text-sm font-500 uppercase tracking-[0.18em] text-cream-100/85">
                {item}
              </span>
              <LeafIcon className="h-4 w-4 text-leaf-400" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
