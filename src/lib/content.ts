/**
 * Central placeholder content for the Swasthvan Ayurveda site.
 * Swap these values for real copy / a CMS later — the UI reads from here.
 */

export const SITE = {
  name: "Swasthvan Ayurveda",
  url: "https://swasthvan-ayurveda.vercel.app",
  email: "Swasthvanayurveda@gmail.com",
  phoneDisplay: "+91 95690 38538",
  phoneHref: "+919569038538",
  address: {
    line1: "Goriyana, Bhadohi",
    line2: "Uttar Pradesh 221401, India",
  },
  socials: {
    instagram: "https://www.instagram.com/swasthvanayurveda",
    facebook: "https://www.facebook.com/share/1CSkcp4gqx/",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Our Story", href: "/#philosophy" },
  { label: "Rituals", href: "/#doshas" },
  { label: "Journal", href: "/#journal" },
] as const;

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  badge?: string;
  hue: string; // gradient hue for the placeholder art
};

export const PRODUCTS: Product[] = [
  {
    id: "ashwagandha-gold",
    name: "Ashwagandha Gold",
    tagline: "Calm the mind, restore your energy",
    price: 34,
    rating: 4.9,
    reviews: 1284,
    category: "Stress & Sleep",
    badge: "Bestseller",
    hue: "from-brand-700 to-brand-900",
  },
  {
    id: "triphala-cleanse",
    name: "Triphala Cleanse",
    tagline: "Gentle daily digestive reset",
    price: 28,
    rating: 4.8,
    reviews: 942,
    category: "Digestion",
    hue: "from-gold-400 to-clay-500",
  },
  {
    id: "brahmi-focus",
    name: "Brahmi Focus",
    tagline: "Clarity, memory & sharper thinking",
    price: 32,
    rating: 4.7,
    reviews: 611,
    category: "Mind",
    hue: "from-leaf-500 to-brand-600",
  },
  {
    id: "turmeric-glow",
    name: "Turmeric Glow",
    tagline: "Radiant skin from within",
    price: 30,
    rating: 4.9,
    reviews: 1533,
    category: "Beauty",
    badge: "New",
    hue: "from-gold-500 to-gold-300",
  },
  {
    id: "tulsi-immune",
    name: "Tulsi Immune",
    tagline: "Holy basil for everyday defense",
    price: 26,
    rating: 4.8,
    reviews: 788,
    category: "Immunity",
    hue: "from-brand-500 to-leaf-600",
  },
  {
    id: "chyawanprash-vital",
    name: "Chyawanprash Vitality",
    tagline: "The classic rejuvenating tonic",
    price: 38,
    rating: 4.9,
    reviews: 2041,
    category: "Vitality",
    badge: "Award-winning",
    hue: "from-clay-500 to-brand-800",
  },
];

export const BENEFITS = [
  {
    icon: "leaf",
    title: "100% Plant-Based",
    body: "Whole-herb extracts, never synthetic fillers. Vegan, gluten-free and non-GMO by default.",
  },
  {
    icon: "microscope",
    title: "Lab-Verified Purity",
    body: "Every batch is third-party tested for heavy metals, potency and microbial safety.",
  },
  {
    icon: "shield",
    title: "Ayurveda-Certified",
    body: "Formulated by BAMS practitioners following classical Ayurvedic pharmacopoeia.",
  },
  {
    icon: "recycle",
    title: "Sustainably Sourced",
    body: "Ethically wild-harvested and farm-partnered ingredients in recyclable glass.",
  },
] as const;

export const DOSHAS = [
  {
    name: "Vata",
    element: "Air & Ether",
    trait: "Creative, quick, light",
    balance: "Grounding, warmth & routine",
    color: "from-brand-600 to-brand-800",
    accent: "text-leaf-300",
  },
  {
    name: "Pitta",
    element: "Fire & Water",
    trait: "Focused, driven, warm",
    balance: "Cooling, calm & moderation",
    color: "from-clay-500 to-gold-500",
    accent: "text-gold-300",
  },
  {
    name: "Kapha",
    element: "Earth & Water",
    trait: "Steady, loyal, strong",
    balance: "Stimulation, lightness & movement",
    color: "from-leaf-600 to-brand-700",
    accent: "text-leaf-300",
  },
] as const;

export const INGREDIENTS = [
  { name: "Ashwagandha", note: "Adaptogenic root" },
  { name: "Turmeric", note: "Golden anti-inflammatory" },
  { name: "Brahmi", note: "Brain tonic herb" },
  { name: "Tulsi", note: "Holy basil" },
  { name: "Triphala", note: "Three-fruit blend" },
  { name: "Shatavari", note: "Women's wellness" },
  { name: "Neem", note: "Purifying leaf" },
  { name: "Amla", note: "Vitamin-C berry" },
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Ethically Harvested",
    body: "We partner with regenerative farms across India, harvesting herbs at peak potency.",
  },
  {
    step: "02",
    title: "Slow-Crafted",
    body: "Traditional methods — sun-drying, cold grinding and time-honored decoctions.",
  },
  {
    step: "03",
    title: "Triple Tested",
    body: "Independent labs verify identity, purity and strength before anything is bottled.",
  },
  {
    step: "04",
    title: "Delivered Fresh",
    body: "Small batches, carbon-neutral shipping, and packaging that returns to the earth.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Ashwagandha Gold quietly changed my evenings. I fall asleep faster and wake up genuinely rested for the first time in years.",
    name: "Ananya R.",
    role: "Yoga teacher, Pune",
    rating: 5,
  },
  {
    quote:
      "As a physician I'm skeptical of supplements. Swasthvan's lab reports won me over — clean, transparent, and it actually works.",
    name: "Dr. Marcus L.",
    role: "GP, London",
    rating: 5,
  },
  {
    quote:
      "Turmeric Glow gave my skin a warmth no serum ever did. The whole ritual feels like a small act of self-respect each morning.",
    name: "Leila K.",
    role: "Designer, Dubai",
    rating: 5,
  },
  {
    quote:
      "I took the dosha quiz on a whim and the recommendations were spot on. Finally, wellness that feels personal, not generic.",
    name: "Sam T.",
    role: "Software engineer, Berlin",
    rating: 4,
  },
];

export const STATS = [
  { value: "5,000+", label: "Years of Ayurvedic wisdom" },
  { value: "40+", label: "Single-origin herbs" },
  { value: "250k", label: "Happy customers" },
  { value: "100%", label: "Third-party tested" },
];

export const FAQS = [
  {
    q: "What makes Swasthvan different from other Ayurvedic brands?",
    a: "We pair classical formulations with modern rigor — every product is created by BAMS-certified practitioners and independently lab-tested for purity and potency. Transparency reports are published for every batch.",
  },
  {
    q: "How do I know which products are right for me?",
    a: "Start with our free dosha assessment. In two minutes it maps your mind-body constitution (Vata, Pitta or Kapha) and recommends a tailored ritual. You can also chat with an Ayurvedic advisor anytime.",
  },
  {
    q: "Are your products safe to take daily?",
    a: "Our formulas use food-grade, whole-herb extracts designed for daily use. That said, if you're pregnant, nursing or on medication, we recommend checking with your healthcare provider first.",
  },
  {
    q: "When will I notice results?",
    a: "Ayurveda works gently and cumulatively. Many customers feel a shift within 2–3 weeks, with fuller benefits building over 8–12 weeks of consistent use.",
  },
  {
    q: "What is your shipping & returns policy?",
    a: "We offer free carbon-neutral shipping on orders over $50 and a 30-day happiness guarantee. Not feeling the glow? Return it for a full refund, no questions asked.",
  },
];

export const JOURNAL = [
  {
    tag: "Rituals",
    title: "The 5-minute morning routine that balances every dosha",
    read: "6 min read",
    hue: "from-brand-600 to-brand-800",
  },
  {
    tag: "Ingredients",
    title: "Why Ashwagandha is the adaptogen worth the hype",
    read: "4 min read",
    hue: "from-gold-400 to-clay-500",
  },
  {
    tag: "Science",
    title: "Reading a lab report: what purity really means",
    read: "7 min read",
    hue: "from-leaf-500 to-brand-600",
  },
];
