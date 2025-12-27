"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { tracks } from "@/lib/data";
import AudioPlayer from "@/components/AudioPlayer";

// Fonction pour extraire l'ID YouTube d'une URL ou embedId
function getYouTubeId(urlOrId: string): string {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([^&?/]+)/,
    /youtube\.com\/embed\/([^&?/]+)/,
  ];
  for (const pattern of patterns) {
    const match = urlOrId.match(pattern);
    if (match) return match[1];
  }
  // Si c'est déjà un ID simple
  return urlOrId;
}

// Fonction pour obtenir la miniature YouTube
function getYouTubeThumbnail(embedId: string): string {
  const id = getYouTubeId(embedId);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Scroll animation observer
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

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const featuredTracks = tracks.slice(0, 3);

  const videos = [
    {
      id: 1,
      title: "Chopin - Prelude Op.28 No.20",
      embedId: "_7tdFHmC88Y",
    },
    {
      id: 2,
      title: "Chopin - Valse en mi mineur Posthume",
      embedId: "uIMWJN2rQWU",
    },
  ];

  return (
    <>
      {/* ACCUEIL - Hero Section */}
      <section
        id="accueil"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      >
        <div className="max-w-4xl w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 animate-fade-in-up animation-delay-200">
              <div className="aspect-square rounded-2xl overflow-hidden border border-violet-500/30 relative group">
                <Image
                  src="/images/portrait.webp"
                  alt="Ethan Desmarest - Pianiste"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="animate-fade-in-up">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-3 tracking-tight">
                  Ethan Desmarest
                </h1>
                <p className="text-lg sm:text-xl text-violet-400 font-sans font-medium">
                  Pianiste, Compositeur, Interprète
                </p>
              </div>

              <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed max-w-xl animate-fade-in-up animation-delay-100">
                Bienvenue dans mon univers musical. Découvrez mes
                interprétations des grands classiques et mes compositions
                originales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-200">
                <Link
                  href="/musique"
                  className="btn-primary inline-flex items-center justify-center font-sans font-medium"
                >
                  Découvrir ma musique
                </Link>
                <a
                  href="#biographie"
                  className="btn-secondary inline-flex items-center justify-center font-sans font-medium"
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
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-900/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="animate-on-scroll text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Parcours & Accomplissements
            </h2>
            <div className="h-1 w-16 bg-violet-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                number: "5+",
                label: "Années d'études",
              },
              {
                number: "6+",
                label: "Classes ouvertes",
              },
              {
                number: "4+",
                label: "Compositions originales",
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className="animate-on-scroll text-center p-8 rounded-xl glass-card card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="text-4xl sm:text-5xl font-serif font-bold text-violet-400 mb-3">
                  {item.number}
                </p>
                <p className="text-zinc-300 font-sans text-lg">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto animate-on-scroll">
            <p className="text-zinc-400 font-sans leading-relaxed text-lg text-center">
              Ma passion pour le piano a commencé dès mon adolescence. Formé au
              conservatoire Henri Duparc, j'ai développé une approche unique qui
              fusionne la rigueur classique avec une curiosité du Jazz.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* MUSIQUE Section */}
      <section id="musique" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12 animate-on-scroll">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2">
                Ma Musique
              </h2>
              <div className="h-1 w-12 bg-violet-500 rounded-full" />
            </div>
            <Link
              href="/musique"
              className="text-violet-400 hover:text-violet-300 transition-colors font-sans text-sm sm:text-base group flex items-center gap-2"
            >
              Voir tout
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>

          <div className="space-y-4">
            {featuredTracks.map((track, index) => (
              <div
                key={track.id}
                className="animate-on-scroll glass-card card-hover rounded-xl p-5 sm:p-6"
                style={{ transitionDelay: `${index * 100}ms` }}
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
                    <div className="flex items-center gap-3 ml-12">
                      <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full font-sans font-medium">
                        {track.type}
                      </span>
                      <span className="text-zinc-500 font-sans text-sm">
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

          <div className="mt-10 text-center animate-on-scroll">
            <Link
              href="/musique"
              className="btn-primary inline-flex items-center justify-center font-sans font-medium"
            >
              Découvrir tous mes morceaux
            </Link>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* VIDÉOS Section */}
      <section
        id="videos"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-900/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12 animate-on-scroll">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2">
                Mes Vidéos
              </h2>
              <div className="h-1 w-12 bg-violet-500 rounded-full" />
            </div>
            <Link
              href="/videos"
              className="text-violet-400 hover:text-violet-300 transition-colors font-sans text-sm sm:text-base group flex items-center gap-2"
            >
              Voir tout
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="animate-on-scroll group rounded-xl overflow-hidden glass-card card-hover"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Video Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={getYouTubeThumbnail(video.embedId)}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
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
                </div>

                {/* Video Info */}
                <div className="p-5">
                  <h3 className="text-base font-sans font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-zinc-500 font-sans text-sm mb-4">
                    Performance musicale
                  </p>

                  <a
                    href={`https://youtube.com/watch?v=${video.embedId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-violet-500/20 text-violet-300 rounded-lg hover:bg-violet-500 hover:text-white transition-all duration-200 font-sans font-medium text-sm"
                  >
                    Regarder sur YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* CONTACT Section */}
      <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="animate-on-scroll text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Contactez-moi
            </h2>
            <div className="h-1 w-16 bg-violet-500 mx-auto rounded-full mb-6" />
            <p className="text-zinc-400 font-sans text-lg">
              Vous avez une question ou une demande ? N'hésitez pas à me
              contacter.
            </p>
          </div>

          {submitted && (
            <div className="mb-8 p-4 bg-green-500/20 border border-green-500/40 rounded-xl text-green-300 font-sans text-center animate-fade-in flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Merci ! Votre message a été envoyé avec succès.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 animate-on-scroll">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3.5 bg-zinc-900/50 border border-violet-500/20 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all font-sans"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3.5 bg-zinc-900/50 border border-violet-500/20 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all font-sans"
                />
              </div>
            </div>

            <input
              type="text"
              placeholder="Sujet"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              required
              className="w-full px-4 py-3.5 bg-zinc-900/50 border border-violet-500/20 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all font-sans"
            />

            <textarea
              placeholder="Votre message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={5}
              className="w-full px-4 py-3.5 bg-zinc-900/50 border border-violet-500/20 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all font-sans resize-none"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full font-sans font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                "Envoyer le message"
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
