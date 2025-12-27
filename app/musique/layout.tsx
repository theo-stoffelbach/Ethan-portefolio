import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Musique - Ethan Desmarest | Compositions & Interprétations",
  description:
    "Ecoutez les compositions originales et interprétations piano d'Ethan Desmarest. Chopin, Bach, et oeuvres personnelles.",
  openGraph: {
    title: "Musique - Ethan Desmarest",
    description: "Compositions originales et interprétations classiques au piano",
    type: "music.album",
  },
};

export default function MusiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
