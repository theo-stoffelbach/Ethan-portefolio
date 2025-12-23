# 🎹 Guide de démarrage - Portfolio Musicien

Félicitations ! Votre portfolio de pianiste est prêt. Voici comment le mettre en place et le personnaliser.

## Étape 1 : Installation des dépendances

```bash
npm install
```

Cela installera :
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- PostCSS et Autoprefixer

## Étape 2 : Lancer le projet en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Étape 3 : Personnaliser le contenu

### 3.1 Mettre à jour les informations principales

**Fichier : `app/page.tsx` (Accueil)**
- Modifiez "Musicien Pianiste" par votre nom
- Changez le sous-titre "Pianiste, Compositeur, Interprète"
- Ajustez la description

**Fichier : `lib/data.ts`**
- Remplacez les noms d'albums
- Mettez à jour les titres des pistes
- Changez les descriptions

### 3.2 Ajouter votre photo

1. Placez votre portrait dans `/public/portrait.jpg`
2. Modifiez `app/page.tsx` ligne ~30 pour utiliser votre image au lieu du placeholder

```tsx
<Image
  src="/portrait.jpg"
  alt="Portrait"
  width={400}
  height={400}
  className="w-full h-full object-cover"
/>
```

### 3.3 Ajouter vos fichiers musicaux

1. Créez un dossier `/public/music/`
2. Placez vos fichiers MP3 dedans
3. Mettez à jour `/lib/data.ts` avec les chemins corrects

Exemple :
```typescript
tracks: [
  {
    id: 'ma-piece',
    title: 'Ma Pièce Musicale',
    duration: '5:30',
    type: 'Composition',
    file: '/music/ma-piece.mp3',
  },
]
```

### 3.4 Ajouter les images de couverture d'album

1. Créez un dossier `/public/albums/`
2. Placez vos images de couverture (JPG/PNG)
3. Mettez à jour les `coverImage` dans `/lib/data.ts`

Exemple :
```typescript
coverImage: '/albums/mon-album.jpg'
```

### 3.5 Personnaliser la biographie

**Fichier : `app/biographie/page.tsx`**
- Remplacez le contenu de chaque section
- Modifiez les dates
- Ajoutez vos propres distinctions

### 3.6 Ajouter des vidéos

**Fichier : `app/videos/page.tsx`**

Pour intégrer vos vidéos YouTube/Vimeo :

```tsx
// À la place du div avec le placeholder
<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title={video.title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

## Étape 4 : Configurer le formulaire de contact

### Option A : Affichage en console (développement)

Le formulaire affiche actuellement les messages dans la console serveur. C'est parfait pour tester.

### Option B : Intégrer un vrai service d'email

#### Avec Resend (Recommandé)

1. Installez Resend :
```bash
npm install resend
```

2. Créez un compte sur [resend.com](https://resend.com)

3. Ajoutez votre clé API à `.env.local` :
```
RESEND_API_KEY=your_api_key_here
```

4. Modifiez `/app/api/contact/route.ts` :

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

#### Avec SendGrid

1. Installez SendGrid :
```bash
npm install @sendgrid/mail
```

2. Créez un compte sur [sendgrid.com](https://sendgrid.com)

3. Ajoutez votre clé API à `.env.local`

4. Utilisez un code similaire dans votre API Route

#### Avec Nodemailer

1. Installez Nodemailer :
```bash
npm install nodemailer
```

2. Configurez vos identifiants email

## Étape 5 : Personaliser le design

### Changement de couleurs

Modifiez `tailwind.config.ts` :

```typescript
theme: {
  extend: {
    colors: {
      accent: '#your-color-code', // Remplacez le violet
    },
  },
}
```

Puis remplacez `violet-500` par votre couleur partout dans le code.

### Changement de polices

Modifiez `tailwind.config.ts` :

```typescript
fontFamily: {
  serif: ['Your Serif Font', 'serif'], // Pour les titres
  sans: ['Your Sans Font', 'sans-serif'], // Pour le texte
}
```

Et mettez à jour l'import dans `app/globals.css` :

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

## Étape 6 : Vérifier la responsivité

- Testez sur différentes tailles d'écran (mobile, tablette, desktop)
- Utilisez les DevTools du navigateur (F12)
- Vérifiez que tout s'affiche correctement

## Étape 7 : Build et déploiement

### Build local

```bash
npm run build
npm start
```

### Déployer sur Vercel (Recommandé)

1. Installez Vercel CLI :
```bash
npm install -g vercel
```

2. Déployez :
```bash
vercel
```

3. Suivez les instructions

### Déployer sur Netlify

1. Poussez votre code sur GitHub
2. Connectez votre repo Netlify
3. Configurez le build command : `npm run build`
4. Configurez le dossier publié : `.next`

### Domaine personnalisé

- Achetez un domaine (Namecheap, Google Domains, etc.)
- Pointez les DNS vers votre plateforme d'hébergement
- Configurez le HTTPS

## Étape 8 : SEO et méta-données

Modifiez `app/layout.tsx` pour vos informations :

```typescript
export const metadata: Metadata = {
  title: 'Votre Nom - Pianiste Classique',
  description: 'Portfolio professionnel d\'un pianiste classique...',
  keywords: ['pianiste', 'musique classique', 'vos keywords'],
  authors: [{ name: 'Votre Nom' }],
};
```

## Étape 9 : Analytics et monitoring

### Google Analytics

1. Créez un compte sur [analytics.google.com](https://analytics.google.com)
2. Installez `next-gtag` :
```bash
npm install next-gtag
```

3. Intégrez dans `app/layout.tsx`

### Vercel Analytics

Si vous utilisez Vercel, les analytics sont automatiques.

## Checklist de finition

- [ ] Mise à jour du contenu (biographie, albums, pistes)
- [ ] Ajout de photos et images
- [ ] Configuration du formulaire de contact
- [ ] Test sur mobile/tablet/desktop
- [ ] Vérification des liens
- [ ] Optimisation des images
- [ ] Configuration SEO
- [ ] Déploiement

## Fichiers clés à modifier

| Fichier | Contenu |
|---------|---------|
| `app/page.tsx` | Contenu de l'accueil |
| `app/biographie/page.tsx` | Biographie personnelle |
| `lib/data.ts` | Albums et pistes |
| `app/layout.tsx` | Titre et description du site |
| `tailwind.config.ts` | Couleurs et polices |
| `app/contact/page.tsx` | Informations de contact |

## Commandes utiles

```bash
# Développement
npm run dev

# Build
npm run build

# Production
npm start

# Linter
npm run lint

# Nettoyer
rm -rf .next node_modules
npm install
```

## Questions fréquentes

**Q: Comment ajouter un nouvel album ?**
A: Modifiez `/lib/data.ts` et ajoutez un objet à l'array `albums`.

**Q: Comment changer la couleur principale ?**
A: Modifiez le violet dans `tailwind.config.ts` et remplacez les classes CSS.

**Q: Comment faire un formulaire fonctionnel ?**
A: Intégrez un service comme Resend (voir section "Configurer le formulaire").

**Q: Comment tester localement avant de déployer ?**
A: Utilisez `npm run dev` et ouvrez http://localhost:3000.

**Q: Mon site est trop lent ?**
A: Optimisez les images, utilisez Next.js Image component, et envisagez un CDN.

## Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Hooks](https://react.dev/reference/react/hooks)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vercel Deployment](https://vercel.com/docs)

---

**Vous avez des questions ?** Consultez les fichiers code directement, tout est commenté et bien structuré ! 🎵
