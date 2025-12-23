export default function Biographie() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Header Section */}
      <div className="mb-16 sm:mb-20">
        <h1 className="text-5xl sm:text-6xl font-serif font-bold text-white mb-6">
          Ethan Desmarest
        </h1>
        <p className="text-xl sm:text-2xl text-violet-400 font-sans mb-4">
          Pianiste, Compositeur, Interprète
        </p>
        <div className="h-1 w-20 bg-violet-500 mb-8" />
        <p className="text-lg text-zinc-300 font-sans leading-relaxed max-w-3xl">
          Passionné par l'art du piano depuis mon adolescence. Mon parcours
          alliant formation alliant formation rigoureuse classique et Jazz
          personnelle me permet de proposer une interprétation unique des grands
          classiques et de créations musicales originales.
        </p>
      </div>

      {/* About Section with Photo */}
      <section className="mb-16 sm:mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="aspect-square bg-gradient-to-br from-violet-500/20 to-zinc-900 rounded-lg overflow-hidden border border-violet-500/30 flex items-center justify-center">
            <svg
              className="w-40 h-40 text-violet-400/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <p className="text-center text-zinc-400 mt-4 text-sm">
            Ethan Stoffelbach Desmarest
          </p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">
              Mon Univers Musical
            </h3>
            <p className="text-zinc-300 font-sans leading-relaxed">
              Ma philosophie musicale repose sur l'équilibre entre la rigueur
              technique et l'expression émotionnelle.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-3">
              Influences et Style
            </h3>
            <p className="text-zinc-300 font-sans leading-relaxed">
              Profondément influencé par les maîtres romantiques tels que Chopin
              et Liszt.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline - Formation et Expérience */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-4xl font-serif font-bold text-white mb-12">
          Parcours Professionnel
        </h2>

        <div className="space-y-12 sm:space-y-16">
          {/* Formation */}
          <div className="border-l-4 border-violet-500 pl-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Stage chez Croquenotes
                </h3>
                <p className="text-violet-400 font-sans font-medium mt-2">
                  Février 2023
                </p>
              </div>
              <div className="w-4 h-4 bg-violet-500 rounded-full mt-2 -ml-12"></div>
            </div>
            <p className="text-zinc-300 font-sans leading-relaxed">
              J'ai travailler dans une boutique de partition de musique en
              observation. J'ai pue découvrir un monde qui m'arride au premiere
              temps mais qui m'est dévenue familiere avec l'habitude.
            </p>
          </div>

          {/* Expérience Internationale */}
          <div className="border-l-4 border-violet-500 pl-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Formation au Convertation Henri Duparc
                </h3>
                <p className="text-violet-400 font-sans font-medium mt-2">
                  2023 - 2026
                </p>
              </div>
              <div className="w-4 h-4 bg-violet-500 rounded-full mt-2 -ml-12"></div>
            </div>
            <p className="text-zinc-300 font-sans leading-relaxed">
              Cette formation m'as permis d'évolué mon profils artistique au
              sein d'un environement professionnel et musical. Et d'approfondir
              ma connaissance dans le monde classique et de découvrir celui du
              Jazz.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-violet-500/20 pt-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
          Explorez mon Univers Musical
        </h2>
        <p className="text-lg text-zinc-300 font-sans mb-8 max-w-2xl">
          Découvrez mes albums, compositions originales, et interprétations des
          grands maîtres classiques. Chaque pièce représente un moment de ma vie
          musicale et une invitation à explorer les émotions à travers la
          musique.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/musique"
            className="inline-flex items-center justify-center px-8 py-4 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors font-sans font-medium text-lg"
          >
            Galerie Musicale
          </a>
          <a
            href="/videos"
            className="inline-flex items-center justify-center px-8 py-4 border border-violet-500 text-violet-400 rounded-lg hover:bg-violet-500/10 transition-colors font-sans font-medium text-lg"
          >
            Mes Performances
          </a>
        </div>
      </section>
    </div>
  );
}
