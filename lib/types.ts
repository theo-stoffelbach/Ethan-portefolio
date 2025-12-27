// ===== TYPES MUSIQUE =====

export type TrackType = "Composition" | "Interpretation";

export type Category =
  | "Nocturnes"
  | "Compositions-Vol-1"
  | "Valse"
  | "Chopin-Sonatas"
  | "Autre";

export type Ambiance =
  | "Calme"
  | "Energique"
  | "Melancolique"
  | "Nostalgique"
  | "Joyeux";

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

// ===== TYPES VIDEO =====

export type VideoType = "Composition" | "Interpretation";

export interface Video {
  id: number;
  title: string;
  date: string;
  duration: string;
  type: VideoType;
  artist: string;
  tags: Ambiance[];
  thumbnail: string;
  url?: string;
}

// ===== TYPES CONTACT =====

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SubmitMessage {
  type: "success" | "error";
  text: string;
}
