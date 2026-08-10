import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Loader } from "@/components/Loader";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio.dema.web.id"),
  title: {
    default: "Achmad Fauzi Guritno — Backend Engineer",
    template: "%s · Achmad Fauzi Guritno",
  },
  description:
    "Portfolio of Achmad Fauzi Guritno — Backend Engineer building scalable REST APIs and AI-driven services with Laravel, Flask, and Domain-Driven Design.",
  keywords: [
    "Backend Engineer",
    "Laravel",
    "Flask",
    "PHP",
    "Python",
    "Domain-Driven Design",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Achmad Fauzi Guritno" }],
  openGraph: {
    title: "Achmad Fauzi Guritno — Backend Engineer",
    description:
      "Scalable REST APIs and AI-driven services with Laravel, Flask, and Domain-Driven Design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achmad Fauzi Guritno — Backend Engineer",
    description:
      "Scalable REST APIs and AI-driven services with Laravel, Flask, and Domain-Driven Design.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#05081a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Providers>
          <Loader />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
