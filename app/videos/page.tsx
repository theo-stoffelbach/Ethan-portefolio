export default function Videos() {
  const videos = [
    {
      id: 1,
      title: 'Concert en solo - Salle Gaveau',
      date: 'Novembre 2023',
      category: 'Concert',
      thumbnail: 'bg-gradient-to-br from-violet-500/20 to-blue-500/20',
    },
    {
      id: 2,
      title: 'Masterclass - Interprétation Chopin',
      date: 'Octobre 2023',
      category: 'Masterclass',
      thumbnail: 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20',
    },
    {
      id: 3,
      title: 'Performance en chambre - Trio',
      date: 'Septembre 2023',
      category: 'Collaboration',
      thumbnail: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20',
    },
    {
      id: 4,
      title: 'Concert d\'orchestre symphonique',
      date: 'Août 2023',
      category: 'Concert',
      thumbnail: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
    },
    {
      id: 5,
      title: 'Récital privé - Collections personnelles',
      date: 'Juillet 2023',
      category: 'Récital',
      thumbnail: 'bg-gradient-to-br from-pink-500/20 to-rose-500/20',
    },
    {
      id: 6,
      title: 'Présentation des compositions originales',
      date: 'Juin 2023',
      category: 'Création',
      thumbnail: 'bg-gradient-to-br from-rose-500/20 to-red-500/20',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">Vidéos & Performances</h1>
        <p className="text-zinc-300 font-sans text-lg">
          Découvrez mes concerts, masterclasses et performances en vidéo
        </p>
        <div className="h-1 w-16 bg-violet-500 mt-6" />
      </div>

      {/* Videos Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group cursor-pointer overflow-hidden rounded-lg border border-violet-500/30 hover:border-violet-500/60 transition-all duration-300"
          >
            {/* Thumbnail */}
            <div
              className={`aspect-video ${video.thumbnail} relative overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-violet-500 group-hover:bg-violet-600 flex items-center justify-center transition-colors">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-zinc-900/50 p-4 sm:p-6">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-lg font-sans font-semibold text-white group-hover:text-violet-400 transition-colors flex-1">
                  {video.title}
                </h3>
              </div>
              <p className="text-zinc-400 font-sans text-sm mb-3">{video.date}</p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full font-sans font-medium">
                  {video.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder Message */}
      <div className="mt-12 sm:mt-16 bg-violet-500/10 border border-violet-500/30 rounded-lg p-8 sm:p-12 text-center">
        <svg
          className="w-16 h-16 text-violet-400/30 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-zinc-400 font-sans">
          Les vidéos seront disponibles bientôt. Intégrez vos performances YouTube ou Vimeo ici.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-16 sm:mt-20 pt-12 border-t border-violet-500/20 grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <p className="text-3xl font-serif font-bold text-violet-400 mb-2">
            {videos.length}
          </p>
          <p className="text-zinc-400 font-sans">Vidéos</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-serif font-bold text-violet-400 mb-2">
            {videos.length * 45}
          </p>
          <p className="text-zinc-400 font-sans">Minutes de contenu</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-serif font-bold text-violet-400 mb-2">
            12K+
          </p>
          <p className="text-zinc-400 font-sans">Vues cumulées</p>
        </div>
      </div>
    </div>
  );
}
