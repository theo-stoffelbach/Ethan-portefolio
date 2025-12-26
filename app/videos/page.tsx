"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

// Fonction pour extraire l'ID YouTube d'une URL
function getYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/,
    /youtube\.com\/embed\/([^&?/]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Fonction pour obtenir la miniature YouTube (hqdefault fonctionne toujours)
function getYouTubeThumbnail(url: string): string | null {
  const id = getYouTubeId(url);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// Types (mêmes que musique)
type VideoType = "Composition" | "Interprétation";
type Ambiance =
  | "Calme"
  | "Énergique"
  | "Mélancolique"
  | "Nostalgique"
  | "Joyeux";

interface Video {
  id: number;
  title: string;
  date: string;
  duration: string; // Format "MM:SS"
  type: VideoType;
  artist: string;
  tags: Ambiance[];
  thumbnail: string;
  url?: string; // Lien YouTube ou Vimeo
}

// Fonction pour calculer le total des minutes
function getTotalMinutes(vids: Video[]): number {
  return vids.reduce((total, video) => {
    const [min, sec] = video.duration.split(":").map(Number);
    return total + min + sec / 60;
  }, 0);
}

// Données (mêmes listes que musique)
const types: VideoType[] = ["Composition", "Interprétation"];
const artists: string[] = [
  "Ethan Stoffelbach Desmarest",
  "Frédéric Chopin",
  "Jean-Sébastien Bach",
  "Edvard Grieg",
  "Jean Sibelius",
];
const ambiances: Ambiance[] = [
  "Calme",
  "Énergique",
  "Mélancolique",
  "Nostalgique",
  "Joyeux",
];

const videos: Video[] = [
  {
    id: 1,
    title: "Chopin - Prelude Op.28 No.20",
    date: "21 décembre 2024",
    duration: "0:58", // Durée de la vidéo
    type: "Composition",
    artist: "Frédéric Chopin",
    tags: ["Calme", "Mélancolique"],
    thumbnail:
      "bg-gradient-to-br from-violet-500/20 via-violet-400/10 to-blue-500/20",
    url: "https://youtube.com/shorts/_7tdFHmC88Y?si=b4Zeh2jZoFHPzNcF",
  },
  {
    id: 2,
    title: "Chopin - Valse en mi mineur Posthume",
    date: "13 décembre 2025",
    duration: "3:45", // Durée de la vidéo
    type: "Composition",
    artist: "Frédéric Chopin",
    tags: ["Énergique", "Nostalgique"],
    thumbnail:
      "bg-gradient-to-br from-violet-500/20 via-violet-400/10 to-blue-500/20",
    url: "https://youtu.be/uIMWJN2rQWU?si=0I_eyPCKixJecZkq",
  },
];

export default function Videos() {
  const [selectedType, setSelectedType] = useState<VideoType | "all">("all");
  const [selectedArtist, setSelectedArtist] = useState<string | "all">("all");
  const [selectedAmbiance, setSelectedAmbiance] = useState<Ambiance | "all">(
    "all"
  );

  // Scroll animation observer - re-run when filters change
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [selectedType, selectedArtist, selectedAmbiance]);

  const clearFilters = () => {
    setSelectedType("all");
    setSelectedArtist("all");
    setSelectedAmbiance("all");
  };

  const hasActiveFilters =
    selectedType !== "all" ||
    selectedArtist !== "all" ||
    selectedAmbiance !== "all";

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      if (selectedType !== "all" && video.type !== selectedType) {
        return false;
      }
      if (selectedArtist !== "all" && video.artist !== selectedArtist) {
        return false;
      }
      if (
        selectedAmbiance !== "all" &&
        !video.tags.includes(selectedAmbiance)
      ) {
        return false;
      }
      return true;
    });
  }, [selectedType, selectedArtist, selectedAmbiance]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-12 sm:mb-16 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
          Vidéos & Performances
        </h1>
        <p className="text-zinc-400 font-sans text-lg">
          Découvrez mes concerts, masterclasses et performances en vidéo
        </p>
        <div className="h-1 w-16 bg-violet-500 mt-6 rounded-full" />
      </div>

      {/* Filtres */}
      <div className="space-y-6 mb-8 p-6 glass-card rounded-xl animate-fade-in-up animation-delay-100">
        {/* Type */}
        <div>
          <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">
            Type
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-lg font-sans text-sm transition-all duration-200 ${
                selectedType === "all"
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              Tous
            </button>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg font-sans text-sm transition-all duration-200 ${
                  selectedType === type
                    ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                    : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Artistes */}
        <div>
          <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">
            Artiste
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedArtist("all")}
              className={`px-4 py-2 rounded-lg font-sans text-sm transition-all duration-200 ${
                selectedArtist === "all"
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                  : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              Tous
            </button>
            {artists.map((artist) => (
              <button
                key={artist}
                onClick={() => setSelectedArtist(artist)}
                className={`px-4 py-2 rounded-lg font-sans text-sm transition-all duration-200 ${
                  selectedArtist === artist
                    ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                    : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                {artist}
              </button>
            ))}
          </div>
        </div>

        {/* Ambiances */}
        <div>
          <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">
            Ambiance
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedAmbiance("all")}
              className={`px-3 py-1.5 rounded-full font-sans text-xs transition-all duration-200 ${
                selectedAmbiance === "all"
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                  : "bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              Toutes
            </button>
            {ambiances.map((amb) => (
              <button
                key={amb}
                onClick={() => setSelectedAmbiance(amb)}
                className={`px-3 py-1.5 rounded-full font-sans text-xs transition-all duration-200 ${
                  selectedAmbiance === amb
                    ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                    : "bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                {amb}
              </button>
            ))}
          </div>
        </div>

        {/* Bouton réinitialiser */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 text-violet-400 hover:text-violet-300 font-sans text-sm transition-colors group"
          >
            <span className="group-hover:rotate-90 transition-transform duration-200">
              ✕
            </span>
            Réinitialiser les filtres
          </button>
        )}
      </div>

      {/* Résultats */}
      <div className="mb-6 animate-fade-in">
        <p className="text-zinc-500 font-sans text-sm">
          {filteredVideos.length} vidéo{filteredVideos.length > 1 ? "s" : ""}{" "}
          trouvée{filteredVideos.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Videos Grid */}
      {filteredVideos.length === 0 ? (
        <div className="text-center py-16 glass-card rounded-xl">
          <svg
            className="w-16 h-16 mx-auto text-zinc-600 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <p className="text-zinc-400 font-sans mb-4">
            Aucune vidéo ne correspond à vos critères.
          </p>
          <button
            onClick={clearFilters}
            className="text-violet-400 hover:text-violet-300 font-sans text-sm transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredVideos.map((video, index) => (
            <a
              key={video.id}
              href={video.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`animate-on-scroll group overflow-hidden rounded-xl glass-card card-hover ${
                video.url ? "cursor-pointer" : "cursor-default"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={(e) => !video.url && e.preventDefault()}
            >
              {/* Thumbnail */}
              <div
                className={`aspect-video ${!video.url || !getYouTubeId(video.url) ? video.thumbnail : ""} relative overflow-hidden`}
              >
                {video.url && getYouTubeThumbnail(video.url) && (
                  <Image
                    src={getYouTubeThumbnail(video.url)!}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-violet-500/90 group-hover:bg-violet-500 group-hover:scale-110 flex items-center justify-center transition-all duration-300 shadow-lg shadow-violet-500/30">
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <h3 className="text-base font-sans font-semibold text-white group-hover:text-violet-300 transition-colors mb-2">
                  {video.title}
                </h3>
                <p className="text-zinc-500 font-sans text-sm mb-3">
                  {video.date}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full font-sans font-medium">
                    {video.type}
                  </span>
                  {video.tags[0] && (
                    <span className="px-3 py-1 bg-zinc-800/80 text-zinc-400 text-xs rounded-full font-sans">
                      {video.tags[0]}
                    </span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Placeholder Message */}
      <div className="mt-16 animate-on-scroll glass-card rounded-xl p-10 sm:p-14 text-center">
        <div className="animate-float">
          <svg
            className="w-16 h-16 text-violet-400/40 mx-auto mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-zinc-400 font-sans text-lg">
          Les vidéos seront disponibles bientôt.
        </p>
        <p className="text-zinc-500 font-sans text-sm mt-2">
          Intégrez vos performances YouTube ou Vimeo ici.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mb-12" />
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="animate-on-scroll text-center p-8 glass-card rounded-xl card-hover">
            <p className="text-4xl font-serif font-bold text-violet-400 mb-2">
              {videos.length}
            </p>
            <p className="text-zinc-400 font-sans">Vidéos</p>
          </div>
          <div
            className="animate-on-scroll text-center p-8 glass-card rounded-xl card-hover"
            style={{ transitionDelay: "100ms" }}
          >
            <p className="text-4xl font-serif font-bold text-violet-400 mb-2">
              {Math.round(getTotalMinutes(videos))}
            </p>
            <p className="text-zinc-400 font-sans">Minutes de contenu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
