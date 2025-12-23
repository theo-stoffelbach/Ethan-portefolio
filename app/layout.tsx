import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ethan Desmarest - Pianiste Portfolio',
  description: 'Portfolio professionnel d\'Ethan Desmarest, pianiste spécialisé en compositions originales et interprétations classiques.',
  keywords: ['Ethan Desmarest', 'pianiste', 'musique classique', 'compositions', 'concert'],
  authors: [{ name: 'Ethan Desmarest' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-zinc-950 text-zinc-100">
        <Header />
        <main className="pt-20 sm:pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
