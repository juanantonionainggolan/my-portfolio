
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL("https://juan-portfolio.example.com"); // TODO: set real domain

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Juan Antonio Nainggolan — Software Engineer (Backend)",
    template: "%s | Juan A. Nainggolan"
  },
  description: "Minimalist portfolio of Juan Antonio Nainggolan, a backend-focused software engineer (Java/Spring) with full‑stack exposure. Email-only contact.",
  applicationName: "Juan Portfolio",
  authors: [{ name: "Juan Antonio Nainggolan" }],
  generator: "Next.js",
  keywords: ["Juan Antonio Nainggolan","Software Engineer","Backend","Java","Spring Boot","Indonesia"],
  category: "Technology",
  alternates: {
    canonical: "/",
    languages: { "en": "/", "id": "/?lang=id" }
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Juan Antonio Nainggolan — Software Engineer (Backend)",
    description: "Backend-focused software engineer (Java/Spring). Minimalist portfolio with bilingual EN/ID content.",
    siteName: "Juan Portfolio"
  },
  twitter: {
    card: "summary",
    title: "Juan Antonio Nainggolan — Software Engineer (Backend)",
    description: "Backend-focused software engineer (Java/Spring). Minimalist, bilingual portfolio."
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Juan Antonio Nainggolan",
    "jobTitle": "Software Engineer (Backend)",
    "address": { "@type": "PostalAddress", "addressCountry": "ID" },
    "email": "mailto:juanantonionainggolan@yahoo.com",
    "url": siteUrl.toString(),
    "sameAs": ["https://www.linkedin.com/in/juan-antonio-7674a3180/"]
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
