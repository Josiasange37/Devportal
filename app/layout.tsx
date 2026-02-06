import type { Metadata } from "next";
import { Inter, Great_Vibes, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-script" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Dev Portal - Bridge the Gap Between Freelancers & Clients",
  description: "Real-time collaboration platform that transforms how freelancers deliver projects. Track commits, share contracts, conduct AI-powered meetings—all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${greatVibes.variable} ${manrope.variable}`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
