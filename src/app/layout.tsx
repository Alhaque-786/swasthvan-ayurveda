import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swasthvan-ayurveda.vercel.app"),
  title: {
    default: "Swasthvan Ayurveda — Pure Herbal Wellness, Rooted in Tradition",
    template: "%s · Swasthvan Ayurveda",
  },
  description:
    "Swasthvan Ayurveda crafts 100% natural, clinically-inspired herbal wellness products — rooted in 5,000 years of Ayurvedic wisdom and made for modern life.",
  keywords: [
    "Ayurveda",
    "herbal wellness",
    "natural supplements",
    "Ashwagandha",
    "Triphala",
    "dosha",
    "Swasthvan",
  ],
  authors: [{ name: "Swasthvan Ayurveda" }],
  openGraph: {
    title: "Swasthvan Ayurveda — Pure Herbal Wellness, Rooted in Tradition",
    description:
      "100% natural, Ayurveda-certified herbal wellness — crafted for modern life.",
    type: "website",
    siteName: "Swasthvan Ayurveda",
  },
  icons: {
    icon: [{ url: "/logo-mark.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-brand-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
