"use client";

import Link from "next/link";
import { useState } from "react";
import { tracks } from "@/lib/data";
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  // Récupérer les 3 premières musiques
  const featuredTracks = tracks.slice(0, 3);

  // Vidéos à afficher (à remplacer par vos vraies vidéos)
  const videos = [
    {
      id: 1,
      title: "Nocturne No. 1 - Live Performance",
      embedId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Sonate de Chopin - Studio Recording",
      embedId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Composition Originale - Rêverie en Bleu",
      embedId: "dQw4w9WgXcQ",
    },
  ];

  return (
    <>
      {/* ACCUEIL - Hero Section */}
      <section
        id="accueil"
        className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-gradient-to-br from-violet-500/20 to-zinc-900 rounded-lg overflow-hidden border border-violet-500/30 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-32 h-32 mx-auto text-violet-400/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                  <p className="text-zinc-400 mt-4">Votre portrait sera ici</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-3">
                  Ethan Desmarest
                </h1>
                <p className="text-lg sm:text-xl text-violet-400 font-sans">
                  Pianiste, Compositeur, Interprète
                </p>
              </div>

              <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-xl">
                Bienvenue dans mon univers musical. Découvrez mes
                interprétations des grands classiques et mes compositions
                originales, fruit de plus de 15 ans de passion pour le piano.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/musique"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors font-sans font-medium"
                >
                  Découvrir toute ma musique
                </Link>
                <a
                  href="#biographie"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-violet-500 text-violet-400 rounded-lg hover:bg-violet-500/10 transition-colors font-sans font-medium"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHIE Section */}
      <section
        id="biographie"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-12">
            Parcours & Accomplissements
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "5+",
                label: "Années d'études",
              },
              {
                number: "6+",
                label: "Classe ouverts",
              },
              {
                number: "4+",
                label: "Compositions originales",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-6 rounded-lg border border-violet-500/20 bg-zinc-900/50 hover:bg-zinc-900/70 transition-colors"
              >
                <p className="text-3xl sm:text-4xl font-serif font-bold text-violet-400 mb-2">
                  {item.number}
                </p>
                <p className="text-zinc-300 font-sans">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-zinc-300 font-sans leading-relaxed mb-4">
              Ma passion pour le piano a commencé dès mon adolescence. Formé aux
              conservatoires Henri Duparc, j'ai développé une approche unique
              qui fusionne la rigueur classique avec une curiosité du Jazz.
            </p>
          </div>
        </div>
      </section>

      {/* MUSIQUE Section - 3 morceaux */}
      <section id="musique" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Ma Musique
            </h2>
            <Link
              href="/musique"
              className="text-violet-400 hover:text-violet-300 transition-colors font-sans text-sm sm:text-base"
            >
              Voir tout →
            </Link>
          </div>

          <div className="space-y-4">
            {featuredTracks.map((track, index) => (
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
                    <div className="flex items-center gap-3 ml-9">
                      <span className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded font-sans">
                        {track.type}
                      </span>
                      <span className="text-zinc-400 font-sans text-sm">
                        {track.duration}
                      </span>
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
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/musique"
              className="inline-flex items-center justify-center px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors font-sans font-medium"
            >
              Découvrir tous mes morceaux
            </Link>
          </div>
        </div>
      </section>

      {/* VIDÉOS Section - 3 vidéos */}
      <section
        id="videos"
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">
              Mes Vidéos
            </h2>
            <Link
              href="/videos"
              className="text-violet-400 hover:text-violet-300 transition-colors font-sans text-sm sm:text-base"
            >
              Voir tout →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group rounded-lg overflow-hidden bg-zinc-900/50 border border-violet-500/20 hover:border-violet-500/50 transition-all hover:shadow-xl hover:shadow-violet-500/20"
              >
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-violet-500/20 to-zinc-900 flex items-center justify-center relative overflow-hidden">
                  <svg
                    className="w-16 h-16 text-violet-400/50 group-hover:text-violet-400/70 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-zinc-300 font-sans text-sm mb-4">
                    Performance musicale
                  </p>

                  <a
                    href={`https://youtube.com/watch?v=${video.embedId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition-colors font-sans font-medium text-sm"
                  >
                    Regarder sur YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT Section */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-4">
            Contactez-moi
          </h2>
          <p className="text-center text-zinc-300 font-sans mb-12">
            Vous avez une question ou une demande ? N'hésitez pas à me
            contacter.
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded text-green-300 font-sans text-center">
              Merci ! Votre message a été envoyé avec succès.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="px-4 py-3 bg-zinc-900/50 border border-violet-500/20 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors font-sans"
              />
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="px-4 py-3 bg-zinc-900/50 border border-violet-500/20 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors font-sans"
              />
            </div>

            <input
              type="text"
              placeholder="Sujet"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
              className="w-full px-4 py-3 bg-zinc-900/50 border border-violet-500/20 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors font-sans"
            />

            <textarea
              placeholder="Votre message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={5}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-violet-500/20 rounded text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-colors font-sans resize-none"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-violet-500 text-white rounded hover:bg-violet-600 transition-colors font-sans font-medium"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
