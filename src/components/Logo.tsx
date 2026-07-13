import Image from "next/image";
import { cn } from "@/lib/utils";
import logoArtwork from "../../public/logo.png";

/**
 * LogoMark — the circular mortar-&-pestle-with-leaves brand emblem,
 * recreated as scalable inline SVG so it stays crisp at any size.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Swasthvan Ayurveda emblem"
      className={cn("h-10 w-10", className)}
    >
      {/* enclosing ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="var(--color-brand-800)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="250 26"
        transform="rotate(-18 50 50)"
      />

      {/* central leaf trio */}
      <g>
        <path
          d="M50 22c-7 6-10 15-8 27 5-3 9-9 9-17 0 8 3 14 8 17 2-12-2-21-9-27z"
          fill="var(--color-leaf-500)"
        />
        <path
          d="M50 30c-8-1-15 3-19 11 6 2 13 1 18-4-6 6-8 12-7 18 9-4 12-15 8-25z"
          fill="var(--color-leaf-400)"
        />
        <path
          d="M50 30c8-1 15 3 19 11-6 2-13 1-18-4 6 6 8 12 7 18-9-4-12-15-8-25z"
          fill="var(--color-brand-500)"
        />
      </g>

      {/* mortar bowl */}
      <path
        d="M28 55h44a2 2 0 0 1 2 2.4C71.5 68 61.7 75 50 75S28.5 68 26 57.4A2 2 0 0 1 28 55z"
        fill="var(--color-brand-800)"
      />
      {/* pestle */}
      <rect
        x="33"
        y="40"
        width="5.4"
        height="20"
        rx="2.7"
        transform="rotate(24 35.7 50)"
        fill="var(--color-brand-700)"
      />

      {/* small sprig, right */}
      <g stroke="var(--color-brand-400)" strokeWidth="1.6" fill="var(--color-leaf-400)">
        <path d="M78 46c0 8-3 15-9 20" fill="none" strokeLinecap="round" />
        <ellipse cx="80" cy="49" rx="3.4" ry="1.8" transform="rotate(35 80 49)" />
        <ellipse cx="76" cy="56" rx="3.4" ry="1.8" transform="rotate(20 76 56)" />
        <ellipse cx="71" cy="63" rx="3.2" ry="1.7" transform="rotate(8 71 63)" />
      </g>
    </svg>
  );
}

/**
 * Logo — emblem + wordmark. `inverted` flips colors for dark backgrounds.
 */
export function Logo({
  className,
  inverted = false,
  showTagline = true,
}: {
  className?: string;
  inverted?: boolean;
  showTagline?: boolean;
}) {
  // On light surfaces, use the real brand artwork (its dark-green wordmark
  // reads cleanly on cream/white).
  if (!inverted) {
    return (
      <Image
        src={logoArtwork}
        alt="Swasthvan Ayurveda"
        priority
        sizes="220px"
        className={cn("h-12 w-auto", className)}
      />
    );
  }

  // On dark surfaces the logo's dark-green text would disappear, so render an
  // SVG lockup with cream text that mirrors the mark.
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-600 tracking-tight text-cream-50">
          Swasthvan
        </span>
        {showTagline && (
          <span className="text-[0.6rem] font-600 uppercase tracking-[0.42em] text-leaf-300">
            Ayurveda
          </span>
        )}
      </span>
    </span>
  );
}
