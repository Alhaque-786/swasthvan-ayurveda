import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Philosophy } from "@/components/sections/Philosophy";
import { Products } from "@/components/sections/Products";
import { Benefits } from "@/components/sections/Benefits";
import { Doshas } from "@/components/sections/Doshas";
import { Ingredients } from "@/components/sections/Ingredients";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Journal } from "@/components/sections/Journal";
import { Newsletter } from "@/components/sections/Newsletter";
import { FAQ } from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Philosophy />
      <Products />
      <Benefits />
      <Doshas />
      <Ingredients />
      <Process />
      <Stats />
      <Testimonials />
      <Journal />
      <Newsletter />
      <FAQ />
    </>
  );
}
