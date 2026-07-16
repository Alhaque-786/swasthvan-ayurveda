import Image from "next/image";
import { cn } from "@/lib/utils";
import logoColor from "../../public/logo.png";
import logoWhite from "../../public/logo-white.png";
import emblemColor from "../../public/logo-emblem.png";
import emblemWhite from "../../public/logo-emblem-white.png";

/**
 * LogoMark — the circular mortar-&-pestle-with-leaves emblem, cropped from the
 * official Swasthvan Ayurveda artwork. Pass variant="light" on dark surfaces,
 * where the default dark-green mark would otherwise disappear.
 */
export function LogoMark({
  className,
  variant = "color",
  priority = false,
}: {
  className?: string;
  variant?: "color" | "light";
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "light" ? emblemWhite : emblemColor}
      alt="Swasthvan Ayurveda emblem"
      priority={priority}
      className={cn("h-10 w-10 object-contain", className)}
    />
  );
}

/**
 * Logo — the full lockup (emblem + wordmark). Uses the colour artwork on light
 * surfaces and a cream/reversed version on dark surfaces (`inverted`).
 */
export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Image
      src={inverted ? logoWhite : logoColor}
      alt="Swasthvan Ayurveda"
      priority={!inverted}
      className={cn("h-12 w-auto", className)}
    />
  );
}
