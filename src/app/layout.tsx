import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";

import { CookieConsent } from "@/components/CookieConsent";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { TrackingScripts } from "@/components/TrackingScripts";
import { BRAND, CRN } from "@/data/content";
import { INSTAGRAM_URL, SITE_URL, WHATSAPP_NUMBER } from "@/lib/env";
import "./globals.css";

// Manrope: sans geométrica para títulos, sóbria e profissional. Inter: texto e rótulos.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "Nutricionista em Anápolis-GO com atendimento online para todo o Brasil e avaliação física presencial. Plano alimentar para atletas, emagrecimento, hipertrofia e reeducação alimentar. Agende com Esther Duarte.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Esther Duarte | Nutricionista Online",
    template: "%s | Esther Duarte",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Esther Duarte - Nutricionista Online",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Esther Duarte Nutrição",
    images: [
      {
        url: "/images/og-image-esther.jpg",
        width: 1200,
        height: 630,
        alt: "Esther Duarte, nutricionista",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f3",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Esther Duarte Nutricionista",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-image-esther.jpg`,
  description: DESCRIPTION,
  telephone: `+${WHATSAPP_NUMBER}`,
  sameAs: [INSTAGRAM_URL],
  founder: {
    "@type": "Person",
    name: BRAND.name,
    jobTitle: BRAND.role,
    ...(CRN ? { identifier: CRN } : {}),
  },
  // Atendimento online para todo o país; a avaliação física presencial é em Anápolis-GO (local combinado pelo WhatsApp).
  address: { "@type": "PostalAddress", addressLocality: "Anápolis", addressRegion: "GO", addressCountry: "BR" },
  areaServed: { "@type": "Country", name: "Brasil" },
  availableService: [
    { "@type": "MedicalTherapy", name: "Consulta nutricional online" },
    { "@type": "MedicalTherapy", name: "Avaliação física presencial" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <MotionProvider>
          <ScrollProgress />
          {/* Banner antes do conteúdo no DOM: teclado/leitor de tela chegam nele primeiro (visual é fixed) */}
          <CookieConsent />
          {children}
          <FloatingWhatsApp />
        </MotionProvider>
        <TrackingScripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
