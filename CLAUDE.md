# 🎨 ETHAN-PORTFOLIO

Ce document fournit les informations essentielles pour le développement et le déploiement du portfolio d'Ethan.

---

## 📋 Vue d'ensemble

**Nom:** Ethan-Portfolio  
**Type:** Portfolio Next.js  
**Stack:** Next.js 14 + React + TypeScript + Tailwind CSS

### Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Nginx Proxy                       │
│         (https://ethan.theo-stoffelbach.fr)         │
└─────────────────────────────────────────────────────┘
                           │
                      webnet network
                           │
                    ┌─────────────┐
                    │   Next.js   │
                    │   :3000     │
                    │  (GHCR)     │
                    └─────────────┘
```

---

## 📁 Structure du projet

```
Ethan-portefolio/
├── app/                     # App Router Next.js
├── components/              # Composants React
├── lib/                     # Utilitaires
├── public/                  # Assets statiques
├── .github/workflows/
│   ├── deploy-ghcr.yml      # 🚀 CI/CD GHCR (recommandé)
│   └── deploy.yml           # CI/CD Self-Hosted (legacy)
│
├── docker-compose.yml       # Développement (build local)
├── docker-compose.prod.yml  # Production (image GHCR + Watchtower)
├── Dockerfile               # Multi-stage build Next.js
├── next.config.ts           # Config Next.js
└── CLAUDE.md                # Ce fichier
```

---

## 🚀 Méthodes de déploiement

### Option 1: GHCR + Watchtower (RECOMMANDÉ) ✅

Build sur GitHub Actions → Image sur GHCR → Watchtower auto-update

```bash
# Sur le NAS - Utiliser docker-compose.prod.yml
cd /volume2/docker/Ethan-portefolio
docker compose -f docker-compose.prod.yml up -d
```

### Option 2: Self-Hosted Runner (Legacy)

```bash
cd /volume2/docker/Ethan-portefolio
docker compose up -d --build
```

---

## 🔧 Configuration

### Fichier `.env` (optionnel)

```bash
PORT=3000
```

---

## 🐳 Commandes Docker essentielles

### Développement (build local)

```bash
cd /volume2/docker/Ethan-portefolio

# Démarrer
docker compose up -d --build

# Voir les logs
docker compose logs -f

# Redémarrer
docker compose restart

# Arrêter
docker compose down
```

### Production (GHCR)

```bash
cd /volume2/docker/Ethan-portefolio

# Démarrer avec les images GHCR
docker compose -f docker-compose.prod.yml up -d

# Forcer la mise à jour
docker compose -f docker-compose.prod.yml pull
docker compose -f docker-compose.prod.yml up -d

# Voir les logs Watchtower
docker logs -f watchtower-central
```

---

## 🌐 Configuration Nginx (Reverse Proxy)

Le fichier est créé : `/volume2/docker/nginx-proxy/nginx/conf.d/ethan-portefolio.conf`

**Domaine:** https://ethan.theo-stoffelbach.fr

---

## 🔒 SSL/TLS (Let's Encrypt)

```bash
cd /volume2/docker/nginx-proxy

# Obtenir le certificat
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  -d ethan.theo-stoffelbach.fr

# Recharger Nginx
docker exec nginx_reverse_proxy nginx -s reload
```

---

## 📝 Notes

- **Next.js standalone:** Le Dockerfile utilise le mode standalone pour une image optimisée
- **Healthcheck:** Vérifie que le serveur répond sur le port 3000
- **Watchtower:** Vérifie les mises à jour toutes les 2 minutes

---

## 🔗 Liens utiles

- **Site:** https://ethan.theo-stoffelbach.fr
- **GitHub Actions:** https://github.com/Theos-projects-ynov/Ethan-portefolio/actions

---

**Dernière mise à jour:** 2025-02-09
