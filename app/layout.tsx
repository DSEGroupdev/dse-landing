import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const satoshi = Poppins({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-satoshi" });

export const metadata: Metadata = {
  title: "DSE Group – AI Automation for Businesses",
  description: "We build custom AI-powered systems that help you grow revenue, reduce costs, and unlock operational scale.",
  openGraph: {
    title: "DSE Group – AI Automation for Businesses",
    description: "We build custom AI-powered systems that help you grow revenue, reduce costs, and unlock operational scale.",
    images: ["/dse-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
