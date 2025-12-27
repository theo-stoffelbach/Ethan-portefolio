import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
    },
    {
      name: 'Spotify',
      url: 'https://spotify.com',
      icon: 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.414-.646.404-.948.27-2.693-1.662-6.082-2.048-10.084-1.12-.416.1-.779-.179-.879-.595-.099-.416.179-.779.595-.879 4.653-1.011 8.362-.538 11.331 1.287.903.564 1.326 1.928.487 2.924-.246.416-.644.404-.948.27l.215-.338zm1.588-3.561c-.3.52-.82.757-1.338.757-.197 0-.396-.051-.591-.155-3.034-1.865-7.597-2.405-11.174-1.314-.598.18-1.237-.224-1.417-.822-.18-.598.224-1.237.822-1.417 4.187-1.267 9.351-.505 12.999 1.527.939.577 1.236 1.725.408 2.744-.183.303-.5.467-.823.467zm.31-3.35c-3.645-2.165-9.863-2.359-13.425-.72-.684.32-1.479-.063-1.799-.748-.32-.684.063-1.479.748-1.799 4.248-1.993 11.375-1.757 15.493.979.747.445 1.059 1.494.408 2.241-.38.636-1.058.957-1.74.957-.275 0-.549-.063-.809-.19z',
    },
    {
      name: 'Email',
      url: 'mailto:contact@example.com',
      icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    },
  ];

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Biographie', href: '/biographie' },
    { name: 'Musique', href: '/musique' },
    { name: 'Vidéos', href: '/videos' },
  ];

  return (
    <footer className="border-t border-violet-500/20 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* About Section */}
          <div>
            <Link
              href="/"
              className="inline-block hover:scale-105 transition-transform duration-200 mb-5"
            >
              <Logo className="w-12 h-12" />
            </Link>
            <p className="text-zinc-500 font-sans text-sm leading-relaxed">
              Portfolio professionnel d'Ethan Stoffelbach Desmarest, pianiste passionné par les grandes compositions classiques et les créations originales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-sans font-semibold mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-violet-400 transition-colors font-sans text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-violet-400 group-hover:w-3 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links - Coming Soon */}
          <div className="opacity-40">
            <h3 className="text-zinc-500 font-sans font-semibold mb-5 text-sm uppercase tracking-wider">
              Suivez-moi
              <span className="ml-2 text-xs normal-case">(bientôt)</span>
            </h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <span
                  key={social.name}
                  title={social.name}
                  className="w-10 h-10 rounded-full bg-zinc-900/80 border border-zinc-700/30 flex items-center justify-center text-zinc-600 cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-sans">
          <p>&copy; {currentYear} Ethan Stoffelbach Desmarest. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-violet-400 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
