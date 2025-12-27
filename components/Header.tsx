'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/biographie', label: 'Biographie' },
    { href: '/musique', label: 'Musique' },
    { href: '/videos', label: 'Vidéos' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/98 backdrop-blur-lg border-b border-violet-500/30 shadow-lg shadow-violet-500/5'
          : 'bg-zinc-950/80 backdrop-blur-md border-b border-violet-500/20'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="hover:scale-105 transition-transform duration-200"
          >
            <Logo className="w-9 h-9 sm:w-10 sm:h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-sans transition-all duration-200 rounded-lg ${
                  isActive(link.href)
                    ? 'text-violet-400'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-0.5 w-5 bg-violet-400 transition-all duration-300 ease-out ${
                isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-violet-400 transition-all duration-300 ease-out ${
                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-violet-400 transition-all duration-300 ease-out ${
                isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 py-3 px-3 rounded-lg text-sm font-sans transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-violet-400 bg-violet-500/10'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                )}
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
