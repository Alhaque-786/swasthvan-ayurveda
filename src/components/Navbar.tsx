"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui";
import { MenuIcon, CloseIcon, ArrowIcon } from "@/components/icons";
import { NAV_LINKS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-brand-900/10 bg-cream-50/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" aria-label="Swasthvan Ayurveda home" className="relative z-10">
          <Logo />
        </Link>

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-500 text-brand-800/80 transition-colors hover:bg-brand-50 hover:text-brand-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/#dosha-quiz"
            className="text-sm font-600 text-brand-800/80 transition-colors hover:text-brand-900"
          >
            Take the Dosha Quiz
          </Link>
          <Button href="/products" size="sm">
            Shop Now
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-10 grid h-11 w-11 place-items-center rounded-full text-brand-800 ring-1 ring-brand-900/10 transition hover:bg-brand-50 lg:hidden"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-0 origin-top bg-cream-50 transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="container-px mx-auto flex h-full max-w-7xl flex-col justify-center gap-2 pt-20">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-brand-900/10 py-4 font-display text-3xl text-brand-800 transition-colors hover:text-leaf-600"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/products" size="lg" onClick={() => setOpen(false)}>
              Shop Now
            </Button>
            <Button
              href="/#dosha-quiz"
              variant="secondary"
              size="lg"
              onClick={() => setOpen(false)}
            >
              Take the Dosha Quiz
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
