'use client';

import { useState, useMemo } from 'react';
import AudioPlayer from '@/components/AudioPlayer';
import { tracks as allTracks, artists, ambiances, TrackType } from '@/lib/data';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export default function Musique() {
  const [selectedType, setSelectedType] = useState<TrackType | 'all'>('all');
  const [selectedArtist, setSelectedArtist] = useState<string | 'all'>('all');
  const [selectedTag, setSelectedTag] = useState<string | 'all'>('all');

  // Scroll animation observer - re-run when filters change
  useScrollAnimation([selectedType, selectedArtist, selectedTag]);

  const clearFilters = () => {
    setSelectedType('all');
    setSelectedArtist('all');
    setSelectedTag('all');
  };

  const hasActiveFilters = selectedType !== 'all' || selectedArtist !== 'all' || selectedTag !== 'all';

  const filteredTracks = useMemo(() => {
    return allTracks.filter(track => {
      if (selectedType !== 'all' && track.type !== selectedType) {
        return false;
      }
      if (selectedArtist !== 'all' && track.artist !== selectedArtist) {
        return false;
      }
      if (selectedTag !== 'all' && !track.tags.includes(selectedTag)) {
        return false;
      }
      return true;
    });
  }, [selectedType, selectedArtist, selectedTag]);

  const types: TrackType[] = ['Composition', 'Interprétation'];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-12 sm:mb-16 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
          Musique
        </h1>
        <p className="text-zinc-400 font-sans text-lg">
          Découvrez mes interprétations et compositions originales
        </p>
        <div className="h-1 w-16 bg-violet-500 mt-6 rounded-full" />
      </div>

      {/* Filtres */}
      <div className="space-y-6 mb-8 p-6 glass-card rounded-xl animate-fade-in-up animation-delay-100">
        {/* Type */}
        <div>
          <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">Type</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-lg font-sans text-sm transition-all duration-200 ${
                selectedType === 'all'
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white'
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
                    ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Artistes */}
        <div>
          <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">Artiste</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedArtist('all')}
              className={`px-4 py-2 rounded-lg font-sans text-sm transition-all duration-200 ${
                selectedArtist === 'all'
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white'
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
                    ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {artist}
              </button>
            ))}
          </div>
        </div>

        {/* Tags / Ambiance */}
        <div>
          <h3 className="text-sm font-sans font-medium text-zinc-400 mb-3">Ambiance</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1.5 rounded-full font-sans text-xs transition-all duration-200 ${
                selectedTag === 'all'
                  ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700 hover:text-white'
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
                    ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700 hover:text-white'
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
            <span className="group-hover:rotate-90 transition-transform duration-200">✕</span>
            Réinitialiser les filtres
          </button>
        )}
      </div>

      {/* Résultats */}
      <div className="mb-6 animate-fade-in">
        <p className="text-zinc-500 font-sans text-sm">
          {filteredTracks.length} morceau{filteredTracks.length > 1 ? 'x' : ''} trouvé{filteredTracks.length > 1 ? 's' : ''}
        </p>
      </div>

      {/* Liste des musiques */}
      {filteredTracks.length === 0 ? (
        <div className="text-center py-16 glass-card rounded-xl">
          <svg className="w-16 h-16 mx-auto text-zinc-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <p className="text-zinc-400 font-sans mb-4">Aucun morceau ne correspond à vos critères.</p>
          <button
            onClick={clearFilters}
            className="text-violet-400 hover:text-violet-300 font-sans text-sm transition-colors"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTracks.map((track, index) => (
            <div
              key={track.id}
              className="animate-on-scroll glass-card card-hover rounded-xl p-5 sm:p-6"
              style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-500/20 text-violet-400 font-serif font-bold text-sm">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-sans font-semibold text-white">
                      {track.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 ml-12">
                    <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full font-sans font-medium">
                      {track.type}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400 font-sans text-xs">
                      {track.artist}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-500 font-sans text-xs">
                      {track.duration}
                    </span>
                  </div>
                </div>
              </div>
              <div className="ml-12">
                <AudioPlayer
                  title={track.title}
                  src={track.file}
                  duration={track.duration}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent mb-12" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-on-scroll text-center p-8 glass-card rounded-xl card-hover">
            <p className="text-4xl font-serif font-bold text-violet-400 mb-2">
              {allTracks.length}
            </p>
            <p className="text-zinc-400 font-sans">Morceaux</p>
          </div>
          <div className="animate-on-scroll text-center p-8 glass-card rounded-xl card-hover" style={{ transitionDelay: '100ms' }}>
            <p className="text-4xl font-serif font-bold text-violet-400 mb-2">
              {Math.round(
                allTracks.reduce((sum, track) => {
                  const [min, sec] = track.duration.split(':').map(Number);
                  return sum + (min * 60 + sec);
                }, 0) / 60
              )}
            </p>
            <p className="text-zinc-400 font-sans">Minutes de musique</p>
          </div>
        </div>
      </div>
    </div>
  );
}
