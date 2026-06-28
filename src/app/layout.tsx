import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "GardenGiri | Premium Biophilic Design & Luxury Landscaping",
  description: "Transforming corporate spaces, luxury hotels, hospitals, educational campuses, and residential villas with high-end, sustainable nature installations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-stone-50 text-stone-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}