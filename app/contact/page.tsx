'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  // Scroll animation observer
  useScrollAnimation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage({
          type: 'success',
          text: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitMessage({
          type: 'error',
          text: 'Une erreur est survenue. Veuillez réessayer.',
        });
      }
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Erreur de connexion. Veuillez réessayer.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-12 sm:mb-16 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
          Contact
        </h1>
        <p className="text-zinc-400 font-sans text-lg">
          Pour une collaboration ou une question, n'hésitez pas à me contacter.
        </p>
        <div className="h-1 w-16 bg-violet-500 mt-6 rounded-full" />
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16">
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-6 animate-fade-in-up animation-delay-100">
          <div className="glass-card rounded-xl p-5 card-hover">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-sans font-semibold text-white">Email</h3>
            </div>
            <a
              href="mailto:contact@musicien-pianiste.fr"
              className="text-violet-400 hover:text-violet-300 transition-colors font-sans text-sm ml-14"
            >
              contact@musicien-pianiste.fr
            </a>
          </div>

          <div className="glass-card rounded-xl p-5 card-hover">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-base font-sans font-semibold text-white">Téléphone</h3>
            </div>
            <a
              href="tel:+33612345678"
              className="text-violet-400 hover:text-violet-300 transition-colors font-sans text-sm ml-14"
            >
              +33 (0)6 12 34 56 78
            </a>
          </div>

          <div className="glass-card rounded-xl p-5 card-hover">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-sans font-semibold text-white">Localisation</h3>
            </div>
            <p className="text-zinc-400 font-sans text-sm ml-14">Paris, France</p>
          </div>

          <div className="glass-card rounded-xl p-5">
            <h3 className="text-base font-sans font-semibold text-white mb-4">Réseaux sociaux</h3>
            <div className="flex gap-3">
              {[
                { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.846-14.189c-.798 0-1.45.652-1.45 1.45s.652 1.45 1.45 1.45 1.45-.652 1.45-1.45-.652-1.45-1.45-1.45z' },
                { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
                { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-full bg-violet-500/20 hover:bg-violet-500 flex items-center justify-center text-violet-400 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5 animate-fade-in-up animation-delay-200">
          <div className="glass-card rounded-xl p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-sans font-medium text-zinc-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-zinc-900/50 border border-violet-500/20 text-zinc-100 font-sans rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all placeholder-zinc-500"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-sans font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-zinc-900/50 border border-violet-500/20 text-zinc-100 font-sans rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all placeholder-zinc-500"
                  placeholder="votre.email@exemple.fr"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-sans font-medium text-zinc-300 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-zinc-900/50 border border-violet-500/20 text-zinc-100 font-sans rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                >
                  <option value="" className="bg-zinc-900">Sélectionnez un sujet</option>
                  <option value="collaboration" className="bg-zinc-900">Collaboration musicale</option>
                  <option value="masterclass" className="bg-zinc-900">Masterclass / Enseignement</option>
                  <option value="autre" className="bg-zinc-900">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-sans font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3.5 bg-zinc-900/50 border border-violet-500/20 text-zinc-100 font-sans rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none placeholder-zinc-500"
                  placeholder="Votre message..."
                />
              </div>

              {submitMessage && (
                <div
                  className={`p-4 rounded-xl font-sans text-sm flex items-center gap-3 animate-fade-in ${
                    submitMessage.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/30 text-green-300'
                      : 'bg-red-500/10 border border-red-500/30 text-red-300'
                  }`}
                >
                  {submitMessage.type === 'success' ? (
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  {submitMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full font-sans font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer mon message'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
