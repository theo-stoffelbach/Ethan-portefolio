# Changelog

Toutes les modifications notables du projet sont documentees ici.

## [1.2.0] - 2025-12-27

### Securite

- **next.config.ts** : Ajout des headers de securite
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - X-XSS-Protection: 1; mode=block
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy: camera=(), microphone=(), geolocation=()
  - Strict-Transport-Security (HSTS)
  - Desactivation des source maps en production

- **app/api/contact/route.ts** : Securisation complete de l'API
  - Rate limiting (5 requetes/heure par IP)
  - Validation stricte des entrees (longueur, format)
  - Sanitization des donnees (suppression balises HTML)
  - Protection contre l'injection email
  - Headers X-RateLimit dans les reponses
  - Ne retourne plus les donnees sensibles

### Performance

- **lib/fonts.ts** : Nouveau fichier - Fonts optimisees avec next/font
  - Playfair Display et Inter precharges
  - Variables CSS pour Tailwind
  - Elimination du render-blocking @import

- **app/layout.tsx** : Integration des fonts optimisees
  - Variables CSS sur la balise html
  - Font sans par defaut sur body

- **app/globals.css** : Suppression de l'import Google Fonts bloquant

- **tailwind.config.ts** : Utilisation des variables CSS pour les fonts

- **app/page.tsx** : Optimisation des images
  - Ajout de `sizes` sur l'image portrait
  - Suppression de `unoptimized` sur les miniatures YouTube
  - Ajout de `sizes` responsive sur les miniatures

- **app/videos/page.tsx** : Meme optimisation des miniatures YouTube

- **next.config.ts** : Configuration images amelioree
  - Formats AVIF et WebP
  - Cache TTL de 1 an

### Core Web Vitals

- **components/Header.tsx** : Correction du CLS (Cumulative Layout Shift)
  - Hauteur fixe au lieu de variable au scroll
  - Elimine le saut de layout

- **components/Footer.tsx** : Conversion en Server Component
  - Suppression de "use client" inutile
  - Reduction du bundle JavaScript client

---

## Fichiers modifies (v1.2.0)

| Fichier | Type de modification |
|---------|---------------------|
| `next.config.ts` | Modifie - Headers securite + images |
| `app/api/contact/route.ts` | Modifie - Rate limiting + validation |
| `lib/fonts.ts` | Nouveau - Fonts next/font |
| `app/layout.tsx` | Modifie - Integration fonts |
| `app/globals.css` | Modifie - Suppression @import |
| `tailwind.config.ts` | Modifie - Variables fonts |
| `app/page.tsx` | Modifie - Images optimisees |
| `app/videos/page.tsx` | Modifie - Images optimisees |
| `components/Header.tsx` | Modifie - Hauteur fixe CLS |
| `components/Footer.tsx` | Modifie - Server Component |

---

## [1.1.0] - 2025-12-27

### Performance

- **app/biographie/page.tsx** : Remplacement de `<img>` par `next/image` pour une meilleure optimisation des images
  - Ajout de l'attribut `fill` pour le dimensionnement responsif
  - Ajout de `sizes` pour optimiser le chargement selon la taille d'ecran
  - Ajout de `priority` pour le chargement prioritaire

### SEO

- **app/biographie/page.tsx** : Ajout des metadonnees (title, description, openGraph)
- **app/musique/layout.tsx** : Nouveau fichier avec metadonnees SEO pour la page musique
- **app/videos/layout.tsx** : Nouveau fichier avec metadonnees SEO pour la page videos
- **app/contact/layout.tsx** : Nouveau fichier avec metadonnees SEO pour la page contact
- **app/sitemap.ts** : Nouveau fichier - Generation automatique du sitemap XML
- **app/robots.ts** : Nouveau fichier - Configuration des regles robots.txt

### Accessibilite

- **app/globals.css** : Ajout du support `prefers-reduced-motion`
  - Desactivation des animations pour les utilisateurs sensibles
  - Conservation de l'affichage des elements normalement animes

### Code Quality

- **lib/hooks/useScrollAnimation.ts** : Nouveau hook reutilisable
  - Centralise la logique d'animation au scroll
  - Reduit la duplication de code dans les pages
  - Accepte des dependances pour re-observer les elements

- **lib/types.ts** : Nouveau fichier de types consolides
  - Types pour les tracks (TrackType, Category, Track)
  - Types pour les videos (VideoType, Video, Ambiance)
  - Types pour le formulaire de contact (ContactFormData, SubmitMessage)

### Refactoring

- **app/musique/page.tsx** : Utilisation du hook `useScrollAnimation`
- **app/videos/page.tsx** : Utilisation du hook `useScrollAnimation`
- **app/contact/page.tsx** : Utilisation du hook `useScrollAnimation`

---

## Fichiers modifies

| Fichier | Type de modification |
|---------|---------------------|
| `app/biographie/page.tsx` | Modifie - Image optimisee + SEO |
| `app/musique/page.tsx` | Modifie - Hook useScrollAnimation |
| `app/videos/page.tsx` | Modifie - Hook useScrollAnimation |
| `app/contact/page.tsx` | Modifie - Hook useScrollAnimation |
| `app/globals.css` | Modifie - prefers-reduced-motion |
| `app/musique/layout.tsx` | Nouveau - SEO |
| `app/videos/layout.tsx` | Nouveau - SEO |
| `app/contact/layout.tsx` | Nouveau - SEO |
| `app/sitemap.ts` | Nouveau - Sitemap dynamique |
| `app/robots.ts` | Nouveau - Robots.txt dynamique |
| `lib/hooks/useScrollAnimation.ts` | Nouveau - Hook reutilisable |
| `lib/types.ts` | Nouveau - Types consolides |

---

## Notes

- Le domaine utilise dans sitemap.ts et robots.ts est `https://ethan-desmarest.fr` - a modifier si necessaire
- Les metadonnees Open Graph ameliorent le partage sur les reseaux sociaux
- Le support `prefers-reduced-motion` ameliore l'accessibilite pour les utilisateurs sensibles aux mouvements
