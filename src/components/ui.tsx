import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LeafIcon } from "@/components/icons";

/* --------------------------------- Button -------------------------------- */

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-800 text-cream-50 hover:bg-brand-900 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)]",
  secondary:
    "bg-cream-50 text-brand-800 ring-1 ring-brand-200 hover:ring-brand-400 hover:bg-cream-100",
  ghost: "bg-transparent text-brand-800 hover:bg-brand-50",
  gold: "bg-gold-400 text-brand-900 hover:bg-gold-500 shadow-[var(--shadow-soft)]",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-600 tracking-tight transition-all duration-300",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}

/* --------------------------------- Badge --------------------------------- */

export function Eyebrow({
  children,
  className,
  inverted = false,
}: {
  children: ReactNode;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-600 uppercase tracking-[0.2em]",
        inverted
          ? "bg-white/10 text-leaf-300 ring-1 ring-white/15"
          : "bg-leaf-500/10 text-brand-600 ring-1 ring-leaf-500/20",
        className,
      )}
    >
      <LeafIcon className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

/* ----------------------------- SectionHeading ---------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverted = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow inverted={inverted}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-4xl leading-[1.08] font-500 tracking-tight text-balance sm:text-5xl",
          inverted ? "text-cream-50" : "text-brand-800",
          align === "center" ? "max-w-3xl" : "max-w-2xl",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg text-balance",
            inverted ? "text-cream-100/80" : "text-brand-700/75",
            align === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
