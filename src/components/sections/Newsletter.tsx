"use client";

import { useState } from "react";
import { LogoMark } from "@/components/Logo";
import { ArrowIcon, MailIcon, LeafIcon } from "@/components/icons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-800 via-brand-900 to-brand-950 px-8 py-16 text-center text-cream-50 sm:px-16 sm:py-20">
          {/* decor */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-grain opacity-20" />
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-leaf-500/15 blur-3xl" />
            <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
            <LeafIcon className="absolute left-10 top-12 h-10 w-10 rotate-12 text-leaf-400/20" />
            <LeafIcon className="absolute bottom-12 right-14 h-14 w-14 -rotate-12 text-leaf-400/20" />
          </div>

          <div className="relative mx-auto flex max-w-xl flex-col items-center gap-6">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-cream-50/95">
              <LogoMark className="h-11 w-11" />
            </div>
            <h2 className="font-display text-3xl font-500 leading-tight text-balance sm:text-4xl">
              Begin your ritual. Get 15% off your first order.
            </h2>
            <p className="max-w-md text-cream-100/75">
              Join the Swasthvan circle for Ayurvedic wisdom, early access and
              members-only offers. No noise, just balance.
            </p>

            {submitted ? (
              <p className="flex items-center gap-2 rounded-full bg-leaf-500/20 px-6 py-3 font-600 text-leaf-300 ring-1 ring-leaf-400/30">
                <LeafIcon className="h-5 w-5" /> You&apos;re in! Check your inbox for the welcome gift.
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSubmitted(true);
                }}
                className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              >
                <label className="relative flex-1">
                  <MailIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-700/50" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-full bg-cream-50 py-4 pl-12 pr-4 text-brand-900 placeholder:text-brand-700/40 focus:outline-none focus:ring-4 focus:ring-leaf-400/40"
                  />
                </label>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-leaf-500 px-7 py-4 font-600 text-brand-950 transition-all hover:bg-leaf-400"
                >
                  Subscribe
                  <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}

            <p className="text-xs text-cream-100/50">
              By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
