import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { playfair, inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ethan Desmarest - Pianiste Portfolio",
  description:
    "Portfolio professionnel d'Ethan Desmarest, pianiste specialise en compositions originales et interpretations classiques.",
  keywords: [
    "Ethan Desmarest",
    "pianiste",
    "musique classique",
    "compositions",
    "concert",
  ],
  authors: [{ name: "Ethan Desmarest" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-zinc-950 text-zinc-100 font-sans">
        <Header />
        <main className="pt-20 sm:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
