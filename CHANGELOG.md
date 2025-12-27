# Changelog

Toutes les modifications notables du projet sont documentees ici.

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
