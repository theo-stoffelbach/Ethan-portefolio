export type TrackType = 'Composition' | 'Interprétation';
export type Category = 'Nocturnes' | 'Compositions-Vol-1' | 'Valse' | 'Chopin-Sonatas' | 'Autre';

export interface Track {
  id: string;
  title: string;
  duration: string;
  type: TrackType;
  category: Category;
  artist: string;
  tags: string[];
  file: string;
}

// Liste des artistes disponibles
export const artists: string[] = [
  'Ethan Stoffelbach Desmarest',
  'Frédéric Chopin',
  'Jean-Sébastien Bach',
  'Edvard Grieg',
  'Jean Sibelius',
];

// Liste des ambiances disponibles
export const ambiances: string[] = [
  'Calme',
  'Énergique',
  'Mélancolique',
  'Nostalgique',
  'Joyeux',
];

// Liste des tags disponibles (pour filtrage interne)
export const availableTags: string[] = [
  'Classique',
  'Romantique',
  'Nocturne',
  'Sonate',
  'Original',
  'Mélancolique',
  'Énergique',
  'Calme',
];

export const tracks: Track[] = [
  {
    id: 'Orginal-1',
    title: 'Lettre a mon ami',
    duration: '0:56',
    type: 'Composition',
    category: 'Autre',
    artist: 'Ethan Stoffelbach Desmarest',
    tags: ['Mélancolique', 'Nostalgique'],
    file: '/music/Original/Lettre a mon ami.mp3',
  },
  {
    id: 'Orginal-2',
    title: 'Morphéus',
    duration: '0:22',
    type: 'Composition',
    category: 'Autre',
    artist: 'Ethan Stoffelbach Desmarest',
    tags: ['Calme', 'Nostalgique'],
    file: '/music/Original/Morpheus.mp3',
  },
  {
    id: 'Orginal-3',
    title: 'valse souvenir',
    duration: '0:25',
    type: 'Composition',
    category: 'Valse',
    artist: 'Ethan Stoffelbach Desmarest',
    tags: ['Nostalgique', 'Calme'],
    file: '/music/Original/valse souvenir.mp3',
  },
  {
    id: 'Orginal-4',
    title: 'Matin',
    duration: '0:23',
    type: 'Composition',
    category: 'Valse',
    artist: 'Ethan Stoffelbach Desmarest',
    tags: ['Joyeux', 'Calme'],
    file: '/music/Original/matin.mp3',
  },
  {
    id: 'Bach-1',
    title: 'Invention no 8',
    duration: '1:20',
    type: 'Interprétation',
    category: 'Autre',
    artist: 'Jean-Sébastien Bach',
    tags: ['Calme', 'Joyeux'],
    file: '/music/Bach/invention no 8.mp3',
  },
];

export const categories: { id: Category; label: string }[] = [
  { id: 'Nocturnes', label: 'Nocturnes' },
  { id: 'Compositions-Vol-1', label: 'Compositions' },
  { id: 'Chopin-Sonatas', label: 'Chopin' },
  { id: 'Autre', label: 'Autre' },
];

export function getTracksByCategory(category: Category): Track[] {
  return tracks.filter((track) => track.category === category);
}

export function getTracksByArtist(artist: string): Track[] {
  return tracks.filter((track) => track.artist === artist);
}

export function getTracksByTag(tag: string): Track[] {
  return tracks.filter((track) => track.tags.includes(tag));
}

export function getAllTracks(): Track[] {
  return tracks;
}

// ===== VIDEOS =====

export type VideoType = 'Composition' | 'Interprétation';

export interface Video {
  id: string;
  title: string;
  duration: string;
  type: VideoType;
  artist: string;
  tags: string[];
  file: string;
  poster?: string;
  date: string;
}

export const videos: Video[] = [
  // Ajoute tes videos ici, exemple:
  // {
  //   id: 'video-1',
  //   title: 'Chopin - Prelude Op.28 No.20',
  //   duration: '0:58',
  //   type: 'Interprétation',
  //   artist: 'Frédéric Chopin',
  //   tags: ['Calme', 'Mélancolique'],
  //   file: '/videos/chopin-prelude.mp4',
  //   poster: '/videos/thumbnails/chopin-prelude.jpg',
  //   date: '21 décembre 2024',
  // },
];

export function getVideosByType(type: VideoType): Video[] {
  return videos.filter((video) => video.type === type);
}

export function getVideosByArtist(artist: string): Video[] {
  return videos.filter((video) => video.artist === artist);
}

export function getVideosByTag(tag: string): Video[] {
  return videos.filter((video) => video.tags.includes(tag));
}

export function getAllVideos(): Video[] {
  return videos;
}
