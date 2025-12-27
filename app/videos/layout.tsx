import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos - Ethan Desmarest | Performances Piano",
  description:
    "Regardez les performances et concerts piano d'Ethan Desmarest. Chopin, musique classique et compositions originales en video.",
  openGraph: {
    title: "Videos - Ethan Desmarest",
    description: "Performances piano et concerts en video",
    type: "video.other",
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
