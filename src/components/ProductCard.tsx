import Link from "next/link";
import type { Product } from "@/lib/content";
import { StarIcon, ArrowIcon, LeafIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products#${product.id}`}
      className="hover-lift group flex flex-col overflow-hidden rounded-3xl bg-cream-50 ring-1 ring-brand-900/8"
    >
      {/* placeholder art */}
      <div className="relative aspect-4/5 overflow-hidden">
        <div className={cn("absolute inset-0 bg-gradient-to-br", product.hue)} />
        <div className="absolute inset-0 bg-grain opacity-25" />

        {/* faux bottle */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative flex h-44 w-24 flex-col items-center rounded-[1.4rem] bg-cream-50/95 shadow-2xl ring-1 ring-white/40 transition-transform duration-500 group-hover:scale-105">
            <span className="mt-3 h-4 w-10 rounded-full bg-brand-800/80" />
            <span className="mt-4 grid h-9 w-9 place-items-center rounded-full bg-leaf-500/15 text-leaf-600">
              <LeafIcon className="h-5 w-5" />
            </span>
            <span className="mt-3 px-2 text-center font-display text-[0.7rem] font-600 leading-tight text-brand-800">
              {product.name}
            </span>
            <span className="mt-auto mb-4 text-[0.55rem] uppercase tracking-[0.2em] text-brand-700/60">
              Ayurveda
            </span>
          </div>
        </div>

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-xs font-600 uppercase tracking-wide text-brand-700 shadow-sm">
            {product.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-brand-900/80 px-2.5 py-1 text-xs font-600 text-cream-50 backdrop-blur">
          {product.category}
        </span>
      </div>

      {/* details */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-1.5 text-gold-500">
          <StarIcon className="h-4 w-4" />
          <span className="text-sm font-600 text-brand-800">{product.rating}</span>
          <span className="text-sm text-brand-700/50">({product.reviews.toLocaleString()})</span>
        </div>
        <h3 className="font-display text-xl font-500 text-brand-800">{product.name}</h3>
        <p className="text-sm text-brand-700/70">{product.tagline}</p>

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-2xl font-500 text-brand-900">
            ${product.price}
          </span>
          <span className="flex items-center gap-1.5 text-sm font-600 text-leaf-600 transition-colors group-hover:text-brand-800">
            Add to cart
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
