"use client";

import { useState, useMemo } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import {
  videos as allVideos,
  artists,
  ambiances,
  VideoType,
} from "@/lib/data";

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
        <div className="space-y-8">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="animate-on-scroll glass-card rounded-xl overflow-hidden"
              style={{ transitionDelay: `${Math.min(index * 100, 300)}ms` }}
            >
              {/* Video Player */}
              <VideoPlayer
                title={video.title}
                src={video.file}
                poster={video.poster}
                duration={video.duration}
              />

              {/* Video Info */}
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full font-sans font-medium">
                    {video.type}
                  </span>
                  <span className="text-zinc-500 font-sans text-sm">
                    {video.artist}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-500 font-sans text-sm">
                    {video.date}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {video.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-zinc-800/80 text-zinc-400 text-xs rounded-full font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
