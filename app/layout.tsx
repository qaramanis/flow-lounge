import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/nav";
import LenisProvider from "@/components/providers/lenis-provider";
import UnicornScene from "@/components/unicorn-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flow Lounge",
  description: "Immersive Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          {children}
          <Nav />
          <div className="w-screen h-[150vh] fixed top-0 left-0 z-[-1] opacity-25">
            <UnicornScene projectId="D3XV9A8wfytqYBlHrrCI" />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
