import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roof | Find your place in the Netherlands",
  description:
    "Real-time housing alerts from Kamernet, Pararius, Funda and more. Be first. Apply fast. Get the keys.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(playfair.variable)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
