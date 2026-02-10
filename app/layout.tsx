import type { Metadata } from "next";
import { Inter, Great_Vibes, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-script" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "DevPortal Pro - Bridge the Gap Between Freelancers & Clients",
  description: "Real-time collaboration platform that transforms how freelancers deliver projects. Track commits, share contracts, conduct AI-powered meetings—all in one place.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '48x48', type: 'image/png' },
      { url: '/logo.png', sizes: '96x96', type: 'image/png' },
      { url: '/logo.png', sizes: '144x144', type: 'image/png' },
      { url: '/logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${greatVibes.variable} ${manrope.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
