# Portfolio de Musicien Pianiste

Un portfolio moderne et élégant pour un pianiste classique, construit avec **Next.js 15**, **TypeScript** et **Tailwind CSS**.

## Caractéristiques

- **Design sombre et minimaliste** : Thème noir et violet professionnel
- **Responsive** : Entièrement optimisé pour mobile, tablette et desktop
- **Système d'albums** : Gestion des compositions et interprétations
- **Lecteur audio personnalisé** : Composant React pour écouter la musique
- **Pages dynamiques** : Routes paramétrées pour les albums individuels
- **Formulaire de contact** : API Route Next.js pour recevoir les messages
- **Typographies personnalisées** : Playfair Display pour les titres, Inter pour le corps

## Pages incluses

- **Accueil** (`/`) : Héro section avec appel à l'action
- **Biographie** (`/biographie`) : Parcours professionnel et formation
- **Musique** (`/musique`) : Galerie des albums
- **Album détail** (`/musique/[slug]`) : Tracklist avec lecteur audio
- **Vidéos** (`/videos`) : Galerie des performances et concerts
- **Contact** (`/contact`) : Formulaire de contact avec API Route

## Installation

### Prérequis
- Node.js 18+
- npm ou yarn

### Étapes

1. **Cloner et installer les dépendances**
```bash
cd pianist-portfolio
npm install
```

2. **Lancer le serveur de développement**
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

3. **Build pour la production**
```bash
npm run build
npm start
```

## Structure du projet

```
pianist-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API Route pour le formulaire
│   ├── biographie/
│   │   └── page.tsx              # Page biographie
│   ├── musique/
│   │   ├── page.tsx              # Galerie d'albums
│   │   └── [slug]/
│   │       └── page.tsx          # Page album dynamique
│   ├── videos/
│   │   └── page.tsx              # Galerie vidéos
│   ├── contact/
│   │   └── page.tsx              # Formulaire de contact
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Accueil
│   └── globals.css               # Styles globaux
├── components/
│   ├── Header.tsx                # Composant navigation
│   └── AudioPlayer.tsx           # Lecteur audio personnalisé
├── lib/
│   └── data.ts                   # Données des albums et types TypeScript
├── tailwind.config.ts            # Configuration Tailwind
├── tsconfig.json                 # Configuration TypeScript
└── package.json
```

## Configuration Tailwind

Les polices personnalisées sont configurées dans `tailwind.config.ts` :

- **Serif (Titres)** : Playfair Display
- **Sans-serif (Texte)** : Inter
- **Couleur d'accent** : Violet (#8B5CF6)
- **Fond principal** : Zinc-950 (#111111)

## Ajouter de la musique

1. Placez vos fichiers MP3 dans `/public/music/`
2. Modifiez `/lib/data.ts` pour ajouter les albums et pistes :

```typescript
const albums: Album[] = [
  {
    id: 'mon-album',
    title: 'Mon Album',
    slug: 'mon-album',
    year: 2024,
    coverImage: '/albums/cover.jpg',
    description: 'Description...',
    tracks: [
      {
        id: 'track-1',
        title: 'Titre de la piste',
        duration: '5:30',
        type: 'Composition',
        file: '/music/track.mp3',
      },
    ],
  },
];
```

## Configurer l'API de contact

L'API Route `/app/api/contact/route.ts` simule actuellement l'envoi d'email via `console.log()`.

Pour un vrai service d'email, intégrez :
- **SendGrid**
- **Mailgun**
- **Resend**
- **Nodemailer**

Exemple avec Resend :
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'noreply@musicien.fr',
  to: 'contact@musicien.fr',
  subject: `Nouveau message: ${subject}`,
  html: `<p>${message}</p><p>De: ${name} (${email})</p>`,
});
```

## Personnalisation

### Couleurs
Modifiez les couleurs dans `tailwind.config.ts` ou utilisez les classes Tailwind directement :
- `bg-violet-500` : Accent violet
- `bg-zinc-950` : Fond sombre
- `text-zinc-100` : Texte clair

### Contenu statique
Modifiez le contenu dans :
- `/app/page.tsx` : Accueil
- `/app/biographie/page.tsx` : Biographie
- `/lib/data.ts` : Albums et pistes

### Images de couverture
Remplacez les placeholders par vos images dans `/public/albums/`

## Technologies utilisées

- **Next.js 15** : Framework React
- **React 19** : Bibliothèque UI
- **TypeScript** : Typage statique
- **Tailwind CSS** : Utility-first CSS
- **PostCSS** : Traitement CSS
- **Autoprefixer** : Support navigateur

## Performance

- **Optimisation d'images** : Next.js Image component
- **Code splitting** : Routes automatiques
- **Static generation** : Pré-rendu des pages
- **CSS minifié** : Tailwind production

## Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Autres plateformes
- GitHub Pages
- Netlify
- AWS Amplify
- Railway

## Licence

Ce projet est libre d'utilisation pour usage personnel et commercial.

---

**Pour toute question ou modification, consultez la documentation :**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
