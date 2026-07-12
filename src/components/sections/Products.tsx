import { Reveal } from "@/components/Reveal";
import { Button, SectionHeading } from "@/components/ui";
import { ProductCard } from "@/components/ProductCard";
import { ArrowIcon } from "@/components/icons";
import { PRODUCTS } from "@/lib/content";

export function Products() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Bestsellers"
            title="Formulas your body already knows"
            description="Single-origin herbs, expertly blended into rituals for sleep, focus, digestion and glow."
          />
          <Button href="/products" variant="secondary" className="shrink-0">
            View all products
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, i) => (
            <Reveal key={product.id} delay={i * 120}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
