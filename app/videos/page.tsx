"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import {
  videos as allVideos,
  artists,
  ambiances,
  VideoType,
} from "@/lib/data";

// Extraire l'ID YouTube d'une URL
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

// Obtenir la miniature YouTube
function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function Videos() {
  const [selectedType, setSelectedType] = useState<VideoType | "all">("all");
  const [selectedArtist, setSelectedArtist] = useState<string | "all">("all");
  const [selectedTag, setSelectedTag] = useState<string | "all">("all");

  // Scroll animation observer
  useScrollAnimation([selectedType, selectedArtist, selectedTag]);

  const clearFilters = () => {
    setSelectedType("all");
    setSelectedArtist("all");
    setSelectedTag("all");
  };

  const hasActiveFilters =
    selectedType !== "all" ||
    selectedArtist !== "all" ||
    selectedTag !== "all";

  const filteredVideos = useMemo(() => {
    return allVideos.filter((video) => {
      if (selectedType !== "all" && video.type !== selectedType) {
        return false;
      }
      if (selectedArtist !== "all" && video.artist !== selectedArtist) {
        return false;
      }
      if (selectedTag !== "all" && !video.tags.includes(selectedTag)) {
        return false;
      }
      return true;
    });
  }, [selectedType, selectedArtist, selectedTag]);

  const types: VideoType[] = ["Composition", "Interprétation"];

  // Calculate total duration
  const totalMinutes = useMemo(() => {
    return allVideos.reduce((total, video) => {
      const [min, sec] = video.duration.split(":").map(Number);
      return total + min + sec / 60;
    }, 0);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-12 sm:mb-16 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
          Videos & Performances
        </h1>
        <p className="text-zinc-400 font-sans text-lg">
          Decouvrez mes concerts, masterclasses et performances en video
        </p>
        <div className="h-1 w-16 bg-violet-500 mt-6 rounded-full" />
      </div>

      {/* Filters */}
      {allVideos.length > 0 && (
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

          {/* Artists */}
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

          {/* Ambiance */}
          <div>
            <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">
              Ambiance
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag("all")}
                className={`px-3 py-1.5 rounded-full font-sans text-xs transition-all duration-200 ${
                  selectedTag === "all"
                    ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                    : "bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                Toutes
              </button>
              {ambiances.map((amb) => (
                <button
                  key={amb}
                  onClick={() => setSelectedTag(amb)}
                  className={`px-3 py-1.5 rounded-full font-sans text-xs transition-all duration-200 ${
                    selectedTag === amb
                      ? "bg-violet-500 text-white shadow-lg shadow-violet-500/25"
                      : "bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                  }`}
                >
                  {amb}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-2 text-violet-400 hover:text-violet-300 font-sans text-sm transition-colors group"
            >
              <span className="group-hover:rotate-90 transition-transform duration-200">
                ✕
              </span>
              Reinitialiser les filtres
            </button>
          )}
        </div>
      )}

      {/* Results Count */}
      {allVideos.length > 0 && (
        <div className="mb-6 animate-fade-in">
          <p className="text-zinc-500 font-sans text-sm">
            {filteredVideos.length} video{filteredVideos.length > 1 ? "s" : ""}{" "}
            trouvee{filteredVideos.length > 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Videos Grid */}
      {allVideos.length === 0 ? (
        // Empty State - No videos yet
        <div className="animate-on-scroll glass-card rounded-xl p-10 sm:p-14 text-center">
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
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-serif font-bold text-white mb-3">
            Videos a venir
          </h3>
          <p className="text-zinc-400 font-sans text-lg mb-2">
            Les videos seront disponibles bientot.
          </p>
          <p className="text-zinc-500 font-sans text-sm">
            Ajoutez vos fichiers .mp4 dans le dossier public/videos
          </p>
        </div>
      ) : filteredVideos.length === 0 ? (
        // No results for filters
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
            Aucune video ne correspond a vos criteres.
          </p>
          <button
            onClick={clearFilters}
            className="text-violet-400 hover:text-violet-300 font-sans text-sm transition-colors"
          >
            Reinitialiser les filtres
          </button>
        </div>
      ) : (
        // Videos List
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="animate-on-scroll group rounded-xl overflow-hidden glass-card card-hover"
              style={{ transitionDelay: `${Math.min(index * 100, 300)}ms` }}
            >
              {/* Video Thumbnail */}
              <div className="aspect-video relative overflow-hidden">
                {video.youtubeUrl ? (
                  <Image
                    src={getYouTubeThumbnail(video.youtubeUrl)}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : video.poster ? (
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                    <svg className="w-12 h-12 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
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
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded text-xs text-white font-sans">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="text-sm font-sans font-semibold text-white mb-2 line-clamp-2 group-hover:text-violet-300 transition-colors">
                  {video.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                  <span className="px-2 py-0.5 bg-violet-500/20 text-violet-300 rounded-full font-sans font-medium">
                    {video.type}
                  </span>
                  <span className="text-zinc-500 font-sans">
                    {video.artist}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-zinc-800/80 text-zinc-400 text-xs rounded-full font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {video.youtubeUrl ? (
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-violet-500/20 text-violet-300 rounded-lg hover:bg-violet-500 hover:text-white transition-all duration-200 font-sans font-medium text-sm"
                  >
                    Regarder sur YouTube
                  </a>
                ) : video.file ? (
                  <a
                    href={video.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-violet-500/20 text-violet-300 rounded-lg hover:bg-violet-500 hover:text-white transition-all duration-200 font-sans font-medium text-sm"
                  >
                    Regarder la vidéo
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      {allVideos.length > 0 && (
        <div className="mt-16">
          <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mb-12" />
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="animate-on-scroll text-center p-8 glass-card rounded-xl card-hover">
              <p className="text-4xl font-serif font-bold text-violet-400 mb-2">
                {allVideos.length}
              </p>
              <p className="text-zinc-400 font-sans">Videos</p>
            </div>
            <div
              className="animate-on-scroll text-center p-8 glass-card rounded-xl card-hover"
              style={{ transitionDelay: "100ms" }}
            >
              <p className="text-4xl font-serif font-bold text-violet-400 mb-2">
                {Math.round(totalMinutes)}
              </p>
              <p className="text-zinc-400 font-sans">Minutes de contenu</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
