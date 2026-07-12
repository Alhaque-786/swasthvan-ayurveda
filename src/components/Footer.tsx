import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/icons";

const COLUMNS = [
  {
    title: "Shop",
    links: ["All Products", "Bestsellers", "New Arrivals", "Bundles & Kits", "Gift Cards"],
  },
  {
    title: "Learn",
    links: ["The Journal", "Dosha Quiz", "Ingredient Glossary", "Lab Reports", "FAQs"],
  },
  {
    title: "Company",
    links: ["Our Story", "Sustainability", "Practitioners", "Careers", "Press"],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-cream-100">
      {/* soft botanical glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-leaf-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
          {/* brand column */}
          <div className="flex flex-col gap-6">
            <Logo inverted />
            <p className="max-w-xs text-sm leading-relaxed text-cream-100/70">
              Pure herbal wellness, rooted in 5,000 years of Ayurvedic tradition and
              crafted for the way you live today.
            </p>
            <div className="flex flex-col gap-2 text-sm text-cream-100/70">
              <a href="mailto:hello@swasthvan.com" className="flex items-center gap-3 transition hover:text-leaf-300">
                <MailIcon className="h-4 w-4 text-leaf-400" /> hello@swasthvan.com
              </a>
              <a href="tel:+18005550100" className="flex items-center gap-3 transition hover:text-leaf-300">
                <PhoneIcon className="h-4 w-4 text-leaf-400" /> +1 (800) 555-0100
              </a>
              <span className="flex items-center gap-3">
                <PinIcon className="h-4 w-4 text-leaf-400" /> Rishikesh · London · Austin
              </span>
            </div>
            <div className="flex gap-3">
              {[InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/15 transition hover:bg-white/10 hover:text-leaf-300"
                >
                  <Icon className="h-4.5 w-4.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-xs font-600 uppercase tracking-[0.2em] text-leaf-300">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-cream-100/70 transition hover:text-cream-50"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs text-cream-100/50 sm:flex-row">
          <p>© {2026} Swasthvan Ayurveda. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="#" className="transition hover:text-cream-50">Privacy Policy</Link>
            <Link href="#" className="transition hover:text-cream-50">Terms of Service</Link>
            <Link href="#" className="transition hover:text-cream-50">Accessibility</Link>
          </div>
          <p className="text-cream-100/40">
            These statements have not been evaluated by the FDA.
          </p>
        </div>
      </div>
    </footer>
  );
}
