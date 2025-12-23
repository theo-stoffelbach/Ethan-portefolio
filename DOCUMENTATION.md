# 🎹 Portfolio de Musicien Pianiste

Un portfolio moderne et élégant pour un pianiste classique, construit avec **Next.js 15**, **TypeScript** et **Tailwind CSS**.

---

## 📍 Table des matières

- [Accueil](#accueil)
- [Biographie](#biographie)
- [Musique](#musique)
- [Vidéos](#vidéos)
- [Contact](#contact)
- [Installation & Configuration](#installation--configuration)
- [Déploiement](#déploiement)

---

## Accueil

### Description
La page d'accueil (`/`) présente une **héro section élégante** avec votre portrait et un appel à l'action. C'est la première impression de votre portfolio.

### Contenu principal
- **Portrait professionnel** : Image centrée avec effet élégant
- **Titre** : "Musicien Pianiste" (à personnaliser avec votre nom)
- **Sous-titre** : "Pianiste, Compositeur, Interprète"
- **Description** : Courte présentation de votre art musical
- **Appel à l'action** : Bouton de navigation vers les autres sections

### Fichier à personnaliser
**`app/page.tsx`**

```tsx
// Modifiez ces informations:
- Remplacez "Musicien Pianiste" par votre nom
- Changez le sous-titre
- Ajustez la description
- Ajoutez votre portrait en `/public/portrait.jpg`
```

### Caractéristiques visuelles
- **Thème sombre** : Fond zinc-950 (#111111)
- **Accent violet** : Couleur principale (#8B5CF6)
- **Typographie élégante** : Playfair Display pour les titres
- **Responsive** : S'adapte à tous les écrans

---

## Biographie

### Description
La page biographie (`/biographie`) raconte votre **parcours professionnel**, votre formation et vos réalisations musicales.

### Structure des sections

#### 1. Introduction
Court résumé de qui vous êtes et votre passion pour la musique.

#### 2. Formation
- Écoles/conservatoires fréquentés
- Professeurs importants
- Années d'études
- Diplômes et certifications

#### 3. Carrière professionnelle
- Débuts musicaux
- Concerts importants
- Collaborations
- Tournées

#### 4. Distinctions & Prix
- Concours remportés
- Reconnaissances
- Awards musicaux
- Publications

#### 5. Influences musicales
- Compositeurs favoris
- Artistes inspirants
- Style musical personnel

### Fichier à personnaliser
**`app/biographie/page.tsx`**

```tsx
// Remplacez:
- Chaque section de biographie
- Les dates
- Votre parcours spécifique
- Les distinctions
```

### Conseil
Rendez votre biographie personnelle et authentique. Les lecteurs apprécient les détails humains et les histoires.

---

## Musique

### Description
La section musique affiche votre **galerie d'albums** avec un système complet de gestion musicale.

### Pages associées
- **Galerie** (`/musique`) : Grille responsive de tous vos albums
- **Album détail** (`/musique/[slug]`) : Détails d'un album avec tracklist et lecteur audio

### Structure d'un album

```typescript
{
  id: 'mon-album',
  title: 'Titre de l\'Album',
  slug: 'mon-album',
  year: 2024,
  coverImage: '/albums/cover.jpg',
  description: 'Description de l\'album...',
  tracks: [
    {
      id: 'track-1',
      title: 'Titre de la piste',
      duration: '5:30',
      type: 'Composition', // ou 'Interprétation'
      file: '/music/track.mp3',
    },
  ],
}
```

### Ajouter votre musique

#### Étape 1 : Créer les dossiers
```bash
/public/music/        # Fichiers MP3
/public/albums/       # Images de couverture
```

#### Étape 2 : Placer vos fichiers
- Fichiers MP3 → `/public/music/`
- Images JPG/PNG → `/public/albums/`

#### Étape 3 : Ajouter les données
Modifiez `/lib/data.ts` et ajoutez vos albums à l'array `albums`.

### Fichiers à modifier
- **`/lib/data.ts`** : Données albums + pistes
- **`/app/musique/page.tsx`** : Galerie d'albums
- **`/app/musique/[slug]/page.tsx`** : Page détail album
- **`/public/music/`** : Vos fichiers MP3
- **`/public/albums/`** : Couvertures d'albums

### Lecteur audio personnalisé
Composant `AudioPlayer.tsx` avec:
- Barre de progression
- Contrôles play/pause
- Durée totale et position
- Volume réglable
- Design élégant intégré au thème

### Albums pré-configurés (à remplacer)
1. **Nocturnes - Interprétations** (2023) - 3 pistes
2. **Compositions Vol. 1** (2024) - 4 pistes
3. **Sonates de Chopin** (2022) - 3 pistes

---

## Vidéos

### Description
La section vidéos (`/videos`) affiche vos **performances et concerts** enregistrés.

### Contenu
- Performances live
- Enregistrements de studio
- Concerts importants
- Masterclasses
- Interviews

### Intégration YouTube/Vimeo

Pour chaque vidéo, remplacez le placeholder par:

```tsx
<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Titre de la vidéo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

### Fichier à personnaliser
**`app/videos/page.tsx`**

```tsx
// Remplacez les VIDEO_ID par vos vraies vidéos YouTube/Vimeo
// Ajoutez plus de vidéos dans le layout
// Personnalisez les titres et descriptions
```

### Organisation recommandée
```
Vidéos
├── Performances live
├── Enregistrements studio
├── Concerts importants
└── Autres contenus
```

---

## Contact

### Description
La page contact (`/contact`) permet aux visiteurs de vous **envoyer des messages** directement.

### Fonctionnalités
- Formulaire avec champs : Nom, Email, Sujet, Message
- Validation des données côté client
- API Route pour traitement backend
- Design élégant et responsive

### Fichiers concernés
- **`/app/contact/page.tsx`** : Formulaire HTML
- **`/app/api/contact/route.ts`** : API Route de traitement

### Configuration du service d'email

#### Option A : Console (Développement)
Le formulaire affiche actuellement les messages dans la console serveur.

#### Option B : Resend (Recommandé)

1. **Installer Resend**
```bash
npm install resend
```

2. **Créer un compte** sur [resend.com](https://resend.com)

3. **Ajouter la clé API à `.env.local`**
```
RESEND_API_KEY=your_api_key_here
```

4. **Modifier `/app/api/contact/route.ts`**
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    await resend.emails.send({
      from: 'contact@yourdomain.com', // Remplacez
      to: 'your-email@example.com', // Votre email
      subject: `Nouveau contact: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>De:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ message: 'Email envoyé!' });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur' }, { status: 500 });
  }
}
```

#### Option C : SendGrid

1. **Installer SendGrid**
```bash
npm install @sendgrid/mail
```

2. **Créer un compte** sur [sendgrid.com](https://sendgrid.com)

3. **Ajouter la clé API à `.env.local`**

4. **Utiliser un code similaire** dans votre API Route

#### Option D : Nodemailer

1. **Installer Nodemailer**
```bash
npm install nodemailer
```

2. **Configurer vos identifiants email**

### Personnalisation du formulaire
- Modifier les champs si nécessaire
- Ajuster les messages de validation
- Changer les textes de boutons
- Personnaliser les styles

---

## Installation & Configuration

### Prérequis
- **Node.js 18+**
- **npm ou yarn**

### Étapes d'installation

#### 1. Installer les dépendances
```bash
npm install
```

Cela installera:
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- PostCSS et Autoprefixer

#### 2. Lancer en développement
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

#### 3. Build pour production
```bash
npm run build
npm start
```

### Structure du projet

```
pianist-portfolio/
├── app/                                    # Dossier principal Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts                   # API Route pour le formulaire de contact
│   ├── biographie/
│   │   └── page.tsx                       # Page de biographie et parcours
│   ├── contact/
│   │   └── page.tsx                       # Formulaire de contact avec validation
│   ├── musique/
│   │   ├── page.tsx                       # Galerie d'albums (grille responsive)
│   │   └── [slug]/
│   │       └── page.tsx                   # Page d'album avec lecteur audio
│   ├── videos/
│   │   └── page.tsx                       # Galerie de vidéos et performances
│   ├── layout.tsx                         # Layout global avec Header et Footer
│   ├── page.tsx                           # Page d'accueil avec Hero section
│   ├── not-found.tsx                      # Page 404 personnalisée
│   └── globals.css                        # Styles globaux + Google Fonts
├── components/
│   ├── Header.tsx                         # Navigation avec menu mobile
│   └── AudioPlayer.tsx                    # Lecteur audio personnalisé
├── lib/
│   └── data.ts                            # Données albums + types TypeScript
├── public/                                # Fichiers statiques
│   ├── music/                             # Fichiers MP3 à ajouter
│   ├── albums/                            # Images de couverture à ajouter
│   └── portrait.jpg                       # Photo portrait (à ajouter)
├── tailwind.config.ts                     # Config Tailwind avec polices
├── postcss.config.js                      # Config PostCSS
├── tsconfig.json                          # Config TypeScript
├── package.json                           # Dépendances du projet
├── next.config.ts                         # Config Next.js
├── .gitignore                             # Fichiers à ignorer dans Git
├── .env.example                           # Variables d'environnement (exemple)
└── README.md                              # Documentation principale
```

### Personnalisation du design

#### Changement de couleurs

Modifiez `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      accent: '#your-color-code', // Remplacez le violet
    },
  },
}
```

Puis remplacez `violet-500` par votre couleur dans le code.

#### Changement de polices

Modifiez `tailwind.config.ts`:

```typescript
fontFamily: {
  serif: ['Your Serif Font', 'serif'],     // Pour les titres
  sans: ['Your Sans Font', 'sans-serif'],  // Pour le texte
}
```

Et mettez à jour dans `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Palette de couleurs

| Couleur | Code | Utilisation |
|---------|------|-------------|
| Fond | `#111111` (zinc-950) | Background principal |
| Accent | `#8B5CF6` (violet-500) | Liens, boutons, highlights |
| Texte | `#E4E4E7` (zinc-100) | Texte principal |
| Gris | `#A1A1AA` (zinc-400) | Texte secondaire |
| Sombre | `#27272A` (zinc-900) | Cards, containers |

### Configuration SEO

Modifiez `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Votre Nom - Pianiste Classique',
  description: 'Portfolio professionnel d\'un pianiste classique...',
  keywords: ['pianiste', 'musique classique', 'vos keywords'],
  authors: [{ name: 'Votre Nom' }],
};
```

### Google Analytics

1. **Créer un compte** sur [analytics.google.com](https://analytics.google.com)

2. **Installer next-gtag**
```bash
npm install next-gtag
```

3. **Intégrer dans `app/layout.tsx`**

---

## Déploiement

### Vercel (Recommandé)

#### Étape 1 : Installer Vercel CLI
```bash
npm install -g vercel
```

#### Étape 2 : Déployer
```bash
vercel
```

#### Étape 3 : Suivre les instructions

Vercel détectera automatiquement votre projet Next.js et le configurera.

### Netlify

#### Étape 1 : Pousser sur GitHub
```bash
git push origin main
```

#### Étape 2 : Connecter Netlify
1. Allez sur [netlify.com](https://netlify.com)
2. Connectez votre repo GitHub
3. Configurez le build :
   - Build command: `npm run build`
   - Publish directory: `.next`

#### Étape 3 : Déployer
Netlify construira et déploiera automatiquement.

### Autres plateformes
- **AWS Amplify**
- **Railway**
- **Render**
- **GitHub Pages**

### Domaine personnalisé

1. **Acheter un domaine**
   - Namecheap, Google Domains, etc.

2. **Pointer les DNS**
   - Vers votre plateforme d'hébergement

3. **Configurer le HTTPS**
   - Automatique sur Vercel/Netlify

---

## Commandes utiles

```bash
# Développement
npm run dev              # Lance le serveur (http://localhost:3000)

# Build
npm run build            # Compile pour la production
npm start               # Lance la version compilée

# Linting
npm run lint            # Vérifie le code

# Nettoyage
rm -rf .next node_modules
npm install
```

---

## Checklist de personnalisation

### Contenu
- [ ] Remplacer "Musicien Pianiste" par votre nom
- [ ] Mettre à jour la biographie (`/app/biographie/page.tsx`)
- [ ] Ajouter vos albums dans `/lib/data.ts`
- [ ] Ajouter vos pistes musicales dans `/public/music/`

### Images
- [ ] Portrait personnel dans `/public/portrait.jpg`
- [ ] Images de couverture dans `/public/albums/`

### Vidéos
- [ ] Ajouter les vidéos YouTube/Vimeo dans `/app/videos/page.tsx`

### Contact
- [ ] Configurer un service d'email (Resend, SendGrid, etc.)
- [ ] Mettre à jour l'email de contact

### Design
- [ ] Modifier les couleurs dans `tailwind.config.ts`
- [ ] Changer les polices si souhaité
- [ ] Personnaliser le logo/initiales

### SEO
- [ ] Mettre à jour metadata dans `app/layout.tsx`
- [ ] Ajouter Open Graph images
- [ ] Configurer Google Analytics

### Déploiement
- [ ] Déployer sur Vercel/Netlify
- [ ] Configurer domaine personnalisé
- [ ] Tester sur mobile/tablet/desktop

---

## Ressources utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [React Hooks](https://react.dev/reference/react/hooks)
- [Vercel Deployment](https://vercel.com/docs)

---

## État du Projet

| Élément | Statut |
|---------|--------|
| Structure Next.js | ✅ Complète |
| Pages | ✅ 7 pages créées |
| Composants | ✅ 2 composants (Header, AudioPlayer) |
| Données | ✅ 3 albums + 10 pistes |
| Styles | ✅ Tailwind CSS configuré |
| Typographie | ✅ Google Fonts intégrées |
| Formulaire | ✅ Formulaire + API Route |
| Build | ✅ Compilation réussie |
| TypeScript | ✅ Typage strict |

---

**Vous avez des questions ?** Consultez les fichiers code directement, tout est commenté et bien structuré ! 🎵
