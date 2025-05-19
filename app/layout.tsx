import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const satoshi = Poppins({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-satoshi" });

export const metadata: Metadata = {
  title: "DSE Group | AI Automation Systems for Lead Conversion & Sales",
  description: "We build custom GPT-powered AI systems that help businesses automate lead response, client qualification, and workflow execution.",
  keywords: [
    "AI Automation Agency",
    "Lead Generation Automation",
    "Sales Workflow Automation",
    "GPT for Business",
    "Dubai AI Company",
    "WhatsApp + GPT Automation"
  ],
  authors: [{ name: "DSE Group" }],
  creator: "DSE Group",
  publisher: "DSE Group",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dsegroup.ai",
    title: "DSE Group | AI Automation That Scales With You",
    description: "We build custom GPT-powered AI systems to automate sales, leads, and workflows.",
    siteName: "DSE Group",
    images: [
      {
        url: "https://www.dsegroup.ai/og-preview.png",
        width: 1200,
        height: 630,
        alt: "DSE Group - AI Automation Agency"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "DSE Group | AI Automation That Scales With You",
    description: "We build custom GPT-powered AI systems to automate sales, leads, and workflows.",
    images: ["https://www.dsegroup.ai/og-preview.png"],
    creator: "@dsegroup",
    site: "@dsegroup"
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://www.dsegroup.ai"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/dse-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/dse-logo.png" />
        <meta name="theme-color" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DSE Group",
              url: "https://www.dsegroup.ai",
              logo: "https://www.dsegroup.ai/logo.png",
              description:
                "AI Automation Agency helping businesses scale with GPT-powered systems for lead generation, workflow automation, and sales.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "United Arab Emirates",
              },
              sameAs: [
                "https://www.linkedin.com/company/dse-group-fzco/",
                "https://www.instagram.com/dsegroupai/#",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-white text-black`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
