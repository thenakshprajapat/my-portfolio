import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DockNav } from "@/components/layout/dock-nav";
import { GridBackground } from "@/components/layout/grid-bg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naksh Prajapati | The Kinetic Lab",
  description: "Exploring the frontier of AI and Code. A digital portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground selection:bg-white/20`}
      >
        <div className="noise-bg" />
        <GridBackground />
        <main className="pb-24 relative z-10">
          {children}
        </main>
        <DockNav />
      </body>
    </html>
  );
}
