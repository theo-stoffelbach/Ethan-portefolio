import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Ethan Desmarest | Pianiste",
  description:
    "Contactez Ethan Desmarest pour collaborations musicales, masterclasses, ou toute demande. Reponse rapide garantie.",
  openGraph: {
    title: "Contact - Ethan Desmarest",
    description: "Contactez le pianiste pour vos projets musicaux",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
