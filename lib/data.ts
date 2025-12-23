export type TrackType = 'Composition' | 'Interprétation';
export type Category = 'Nocturnes' | 'Compositions-Vol-1' | 'Valse' | 'Autre';

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
  'Ethan Desmarest',
  'Frédéric Chopin',
];

// Liste des tags disponibles
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
    artist: 'Ethan Desmarest',
    tags: ['Original', 'Calme'],
    file: '/music/Original/Lettre a mon ami.mp3',
  },
  {
    id: 'Orginal-2',
    title: 'Morphéus',
    duration: '0:22',
    type: 'Composition',
    category: 'Autre',
    artist: 'Ethan Desmarest',
    tags: ['Original', 'Romantique', 'Calme'],
    file: '/music/Original/Morpheus.mp3',
  },
  {
    id: 'Orginal-3',
    title: 'valse souvenir',
    duration: '0:25',
    type: 'Composition',
    category: 'Valse',
    artist: 'Ethan Desmarest',
    tags: ['Classique', 'Romantique', 'Calme'],
    file: '/music/Original/valse souvenir.mp3',
  },
  {
    id: 'Orginal-4',
    title: 'Matin',
    duration: '0:23',
    type: 'Composition',
    category: 'Valse',
    artist: 'Ethan Desmarest',
    tags: ['Classique', 'Romantique', 'Calme'],
    file: '/music/Original/matin.mp3',
  },
  // Compositions
  {
    id: 'comp-1',
    title: 'Rêverie en Bleu',
    duration: '4:22',
    type: 'Composition',
    category: 'Autre',
    artist: 'Ethan Desmarest',
    tags: ['Original', 'Calme', 'Mélancolique'],
    file: '/music/Compositions-Vol-1/reverie-bleu.mp3',
  },
  {
    id: 'comp-2',
    title: 'Aube Silencieuse',
    duration: '3:58',
    type: 'Composition',
    category: 'Compositions-Vol-1',
    artist: 'Ethan Desmarest',
    tags: ['Original', 'Calme'],
    file: '/music/Compositions-Vol-1/aube-silencieuse.mp3',
  },
  {
    id: 'comp-3',
    title: 'Tempête d\'Émotions',
    duration: '5:45',
    type: 'Composition',
    category: 'Compositions-Vol-1',
    artist: 'Ethan Desmarest',
    tags: ['Original', 'Énergique'],
    file: '/music/Compositions-Vol-1/tempete-emotions.mp3',
  },
  {
    id: 'comp-4',
    title: 'Sérénité Cristalline',
    duration: '4:12',
    type: 'Composition',
    category: 'Compositions-Vol-1',
    artist: 'Ethan Desmarest',
    tags: ['Original', 'Calme'],
    file: '/music/Compositions-Vol-1/serenite-cristalline.mp3',
  },
  // Chopin
  {
    id: 'chopin-1',
    title: 'Sonate No. 2 en Si Bémol Mineur - I. Grave',
    duration: '7:30',
    type: 'Interprétation',
    category: 'Chopin-Sonatas',
    artist: 'Frédéric Chopin',
    tags: ['Classique', 'Romantique', 'Sonate', 'Énergique'],
    file: '/music/Chopin-Sonatas/chopin-sonata-1.mp3',
  },
  {
    id: 'chopin-2',
    title: 'Sonate No. 2 en Si Bémol Mineur - II. Scherzo',
    duration: '4:22',
    type: 'Interprétation',
    category: 'Chopin-Sonatas',
    artist: 'Frédéric Chopin',
    tags: ['Classique', 'Romantique', 'Sonate', 'Énergique'],
    file: '/music/Chopin-Sonatas/chopin-sonata-2.mp3',
  },
  {
    id: 'chopin-3',
    title: 'Sonate No. 2 en Si Bémol Mineur - III. Marche Funèbre',
    duration: '6:15',
    type: 'Interprétation',
    category: 'Chopin-Sonatas',
    artist: 'Frédéric Chopin',
    tags: ['Classique', 'Romantique', 'Sonate', 'Mélancolique'],
    file: '/music/Chopin-Sonatas/chopin-sonata-3.mp3',
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
