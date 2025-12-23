import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl sm:text-8xl font-serif font-bold text-violet-400 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
          Page non trouvée
        </h2>
        <p className="text-zinc-300 font-sans text-lg mb-8">
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors font-sans font-medium"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
