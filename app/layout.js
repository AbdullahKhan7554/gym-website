import { Anton, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import GlobalFX from "@/components/fx/GlobalFX";
import IntroExperience from "@/components/intro/IntroExperience";
import WhatsAppButton from "@/components/fx/WhatsAppButton";

// Runs before paint: marks the intro as pending so the overlay shows with no
// content flash and the body is scroll-locked until the intro completes.
const introGate = `document.documentElement.setAttribute('data-intro','new');`;

const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://ironelite.pk";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Iron Elite Fitness Club | Lahore's Elite Fitness Destination",
    template: "%s | Iron Elite Fitness Club",
  },
  description:
    "Train hard. Live strong. Iron Elite is Lahore's premium fitness club — professional coaches, world-class equipment, women-only timings and personalized coaching in Gulberg III.",
  keywords: [
    "gym Lahore",
    "fitness club Lahore",
    "personal training Lahore",
    "Gulberg gym",
    "women only gym Lahore",
    "Iron Elite Fitness",
  ],
  authors: [{ name: "Iron Elite Fitness Club" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: "Iron Elite Fitness Club",
    title: "Iron Elite Fitness Club | Lahore's Elite Fitness Destination",
    description:
      "Transform your body, improve your health and train with professional coaches using world-class equipment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Elite Fitness Club",
    description: "Lahore's Elite Fitness Destination. Train Hard. Live Strong.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Iron Elite Fitness Club",
  description:
    "Lahore's premium fitness club offering professional coaching, modern equipment and personalized training.",
  url: SITE_URL,
  telephone: "+92 300 1234567",
  email: "hello@ironelite.pk",
  priceRange: "₨₨",
  address: {
    "@type": "PostalAddress",
    streetAddress: "M.M. Alam Road, Gulberg III",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  openingHours: "Mo-Su 06:00-23:00",
  slogan: "Train Hard. Live Strong.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: introGate }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-iron-black"
        >
          Skip to content
        </a>
        <IntroExperience />
        <div className="vignette" aria-hidden="true" />
        <GlobalFX />
        <WhatsAppButton />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
