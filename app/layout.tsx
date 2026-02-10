import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Great_Vibes, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import StructuredData from "@/components/StructuredData";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-script" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "DevPortal Pro - The Elite Operating System for Freelancers & Clients",
  description: "DevPortal Pro is a professional real-time collaboration ecosystem. Bridge the gap between vision and delivery with AI-powered meetings, secure contracts, and transparent commit tracking.",
  keywords: [
    "freelance project management",
    "client collaboration portal",
    "remote work software",
    "developer client ecosystem",
    "secure freelance contracts",
    "professional project delivery",
    "AI meeting management",
    "freelance OS",
    "project transparency"
  ],
  authors: [{ name: "DevPortal Team" }],
  creator: "DevPortal Pro",
  publisher: "DevPortal Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://devportal.pro"), // Placeholder - should be final domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DevPortal Pro - Bridge the Gap Between Freelancers & Clients",
    description: "Transform how you deliver projects. Real-time collaboration, AI meetings, and secure contracts in one premium portal.",
    url: "https://devportal.pro",
    siteName: "DevPortal Pro",
    images: [
      {
        url: "/meeting_ui_mockup.png",
        width: 1200,
        height: 630,
        alt: "DevPortal Pro Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevPortal Pro - Freelance Collaboration Evolved",
    description: "The professional ecosystem for freelancers and clients. Transparency, security, and AI-powered efficiency.",
    images: ["/meeting_ui_mockup.png"],
    creator: "@devportal_pro",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '48x48', type: 'image/png' },
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  category: "technology",
};

import { headers } from 'next/headers';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get('x-nonce') || undefined;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${greatVibes.variable} ${manrope.variable} font-sans`}>
        <StructuredData nonce={nonce} />
        <AuthProvider>
          <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
