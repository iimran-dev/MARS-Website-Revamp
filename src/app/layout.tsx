import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SmoothScrollProvider } from "@/components/site/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://marssigmasolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mars Sigma Solutions — Building High-Performance Organizations",
    template: "%s | Mars Sigma Solutions",
  },
  description:
    "Mars Sigma Solutions turns global standards into operational advantage. Quality systems, compliance transformation, manufacturing intelligence and training that build world-class engineering organizations.",
  keywords: [
    "Mars Sigma Solutions",
    "ISO 9001",
    "AS9100",
    "IATF 16949",
    "ISO 27001",
    "Lean Six Sigma",
    "operational excellence",
    "quality management systems",
    "aerospace certification",
    "automotive quality",
    "manufacturing intelligence",
    "third party inspection",
  ],
  authors: [{ name: "Mars Sigma Solutions" }],
  creator: "Mars Sigma Solutions",
  publisher: "Mars Sigma Solutions",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Mars Sigma Solutions — Building High-Performance Organizations",
    description:
      "From compliance requirements to measurable operational performance. Quality systems, global certifications, and operational excellence engineering.",
    url: SITE_URL,
    siteName: "Mars Sigma Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mars Sigma Solutions — Building High-Performance Organizations",
    description:
      "From compliance requirements to measurable operational performance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/mars/icon.svg", type: "image/svg+xml" },
      { url: "/mars/favicon.ico", sizes: "any" },
    ],
    shortcut: "/mars/favicon.ico",
    apple: "/mars/apple-touch-icon.png",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mars Sigma Solutions",
  description:
    "Global engineering and operational excellence organization specializing in quality management systems, international certifications, and manufacturing intelligence.",
  url: SITE_URL,
  areaServed: ["India", "Bahrain", "Global"],
  knowsAbout: [
    "ISO 9001",
    "AS9100",
    "IATF 16949",
    "ISO 27001",
    "ISO 14001",
    "ISO 45001",
    "Lean Six Sigma",
    "Supplier Development",
    "Third Party Inspection",
  ],
  address: [
    {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    {
      "@type": "PostalAddress",
      addressCountry: "BH",
      addressRegion: "Bahrain",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/mars/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/mars/favicon.ico" />
        <link rel="apple-touch-icon" href="/mars/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${display.variable} ${mono.variable} antialiased bg-background text-foreground`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Toaster />
      </body>
    </html>
  );
}
