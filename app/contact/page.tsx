'use client';

import { useState } from 'react';

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
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">Contact</h1>
        <p className="text-zinc-300 font-sans text-lg">
          Pour une collaboration ou une question, n'hésitez pas à me contacter.
        </p>
        <div className="h-1 w-16 bg-violet-500 mt-6" />
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16">
        {/* Contact Info */}
        <div className="md:col-span-1 space-y-8">
          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">Email</h3>
            <a
              href="mailto:contact@musicien-pianiste.fr"
              className="text-violet-400 hover:text-violet-300 transition-colors font-sans"
            >
              contact@musicien-pianiste.fr
            </a>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">Téléphone</h3>
            <a
              href="tel:+33612345678"
              className="text-violet-400 hover:text-violet-300 transition-colors font-sans"
            >
              +33 (0)6 12 34 56 78
            </a>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-2">Localisation</h3>
            <p className="text-zinc-300 font-sans">Paris, France</p>
          </div>

          <div>
            <h3 className="text-lg font-serif font-bold text-white mb-3">Réseaux sociaux</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-violet-500/20 hover:bg-violet-500/30 flex items-center justify-center text-violet-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.846-14.189c-.798 0-1.45.652-1.45 1.45s.652 1.45 1.45 1.45 1.45-.652 1.45-1.45-.652-1.45-1.45-1.45z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-violet-500/20 hover:bg-violet-500/30 flex items-center justify-center text-violet-400 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-violet-500/20 hover:bg-violet-500/30 flex items-center justify-center text-violet-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-sans font-medium text-zinc-200 mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900/50 border border-violet-500/30 text-zinc-100 font-sans rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition-all"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-sans font-medium text-zinc-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900/50 border border-violet-500/30 text-zinc-100 font-sans rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition-all"
              placeholder="votre.email@exemple.fr"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-sans font-medium text-zinc-200 mb-2">
              Sujet
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900/50 border border-violet-500/30 text-zinc-100 font-sans rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition-all"
            >
              <option value="">Sélectionnez un sujet</option>
              <option value="collaboration">Collaboration musicale</option>
              <option value="masterclass">Masterclass / Enseignement</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-sans font-medium text-zinc-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-zinc-900/50 border border-violet-500/30 text-zinc-100 font-sans rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition-all resize-none"
              placeholder="Votre message..."
            />
          </div>

          {submitMessage && (
            <div
              className={`p-4 rounded-lg font-sans text-sm ${
                submitMessage.type === 'success'
                  ? 'bg-green-500/10 border border-green-500/30 text-green-300'
                  : 'bg-red-500/10 border border-red-500/30 text-red-300'
              }`}
            >
              {submitMessage.text}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors font-sans font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Envoi en cours...' : 'Envoyer mon message'}
          </button>
        </form>
      </div>
    </div>
  );
}
