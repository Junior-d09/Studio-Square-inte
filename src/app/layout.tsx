import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Police principale : Inter
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Police secondaire : Mona Sans depuis src/fonts
const monaSans = localFont({
  src: [
    {
      path: "../fonts/MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MonaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  title: "Website Clone - Square UI",
  description: "Clonage du l'interface du site Square UI avec Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${monaSans.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}