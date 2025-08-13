import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Arit Developer Circle - Your Tech Journey, Accelerated",
  description:
    " The Arit Developer Circle is a supportive, no-fluff space for techies  of all experience levels to push forward and stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
