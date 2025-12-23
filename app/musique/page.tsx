'use client';

import { useState } from 'react';
import AudioPlayer from '@/components/AudioPlayer';
import { tracks, categories, artists, availableTags, Category } from '@/lib/data';

export default function Musique() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedArtist, setSelectedArtist] = useState<string | 'all'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedArtist('all');
    setSelectedTags([]);
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedArtist !== 'all' || selectedTags.length > 0;

  const filteredTracks = tracks.filter(track => {
    // Filtre par catégorie
    if (selectedCategory !== 'all' && track.category !== selectedCategory) {
      return false;
    }
    // Filtre par artiste
    if (selectedArtist !== 'all' && track.artist !== selectedArtist) {
      return false;
    }
    // Filtre par tags (tous les tags sélectionnés doivent être présents)
    if (selectedTags.length > 0 && !selectedTags.every(tag => track.tags.includes(tag))) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">Musique</h1>
        <p className="text-zinc-300 font-sans text-lg">
          Découvrez mes interprétations et compositions originales
        </p>
        <div className="h-1 w-16 bg-violet-500 mt-6" />
      </div>

      {/* Filtres */}
      <div className="space-y-6 mb-8 p-6 bg-zinc-900/50 rounded-lg border border-violet-500/20">
        {/* Catégories */}
        <div>
          <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">Catégorie</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-violet-500 text-white'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Tout
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-violet-500 text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Artistes */}
        <div>
          <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">Compositeur</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedArtist('all')}
              className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
                selectedArtist === 'all'
                  ? 'bg-violet-500 text-white'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              Tous
            </button>
            {artists.map((artist) => (
              <button
                key={artist}
                onClick={() => setSelectedArtist(artist)}
                className={`px-4 py-2 rounded-lg font-sans text-sm transition-colors ${
                  selectedArtist === artist
                    ? 'bg-violet-500 text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {artist}
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div>
          <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full font-sans text-xs transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-violet-500 text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Bouton réinitialiser */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-violet-400 hover:text-violet-300 font-sans text-sm transition-colors"
          >
            ✕ Réinitialiser les filtres
          </button>
        )}
      </div>

      {/* Résultats */}
      <div className="mb-6">
        <p className="text-zinc-400 font-sans text-sm">
          {filteredTracks.length} morceau{filteredTracks.length > 1 ? 'x' : ''} trouvé{filteredTracks.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Liste des musiques */}
      <div className="space-y-4">
        {filteredTracks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-zinc-400 font-sans">Aucun morceau ne correspond à vos critères.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-violet-400 hover:text-violet-300 font-sans text-sm transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          filteredTracks.map((track, index) => (
            <div
              key={track.id}
              className="bg-zinc-900/50 border border-violet-500/20 rounded-lg p-4 sm:p-6 hover:bg-zinc-900/70 transition-colors"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-violet-400 font-serif font-bold text-lg w-6">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-sans font-semibold text-white">
                      {track.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 ml-9">
                    <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded font-sans">
                      {track.type}
                    </span>
                    <span className="text-zinc-500 text-xs">•</span>
                    <span className="text-zinc-400 font-sans text-xs">
                      {track.artist}
                    </span>
                    <span className="text-zinc-500 text-xs">•</span>
                    <span className="text-zinc-400 font-sans text-xs">
                      {track.duration}
                    </span>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 ml-9 mt-2">
                    {track.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs rounded-full font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="ml-9">
                <AudioPlayer
                  title={track.title}
                  src={track.file}
                  duration={track.duration}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="mt-16 sm:mt-20 pt-12 border-t border-violet-500/20 grid md:grid-cols-2 gap-6">
        <div className="text-center">
          <p className="text-3xl font-serif font-bold text-violet-400 mb-2">
            {tracks.length}
          </p>
          <p className="text-zinc-400 font-sans">Morceaux</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-serif font-bold text-violet-400 mb-2">
            {Math.round(
              tracks.reduce((sum, track) => {
                const [min, sec] = track.duration.split(':').map(Number);
                return sum + (min * 60 + sec);
              }, 0) / 60
            )}
          </p>
          <p className="text-zinc-400 font-sans">Minutes de musique</p>
        </div>
      </div>
    </div>
  );
}
