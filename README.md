# Maha Attié — Private Real Estate Advisory

A production-quality marketing website built with Vite + React + TypeScript + Tailwind CSS + Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy (Vercel)

1. Push to GitHub
2. Import the repo in [vercel.com](https://vercel.com)
3. Framework preset: **Vite** (auto-detected)
4. Deploy

## Formspree (Contact Form)

Replace the `FORMSPREE_ENDPOINT` constant in two files:

- `src/pages/Contact.tsx`
- `src/components/Footer.tsx`

With your Formspree form URL, e.g. `https://formspree.io/f/xYourFormId`.

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (design tokens in `src/index.css`)
- **Framer Motion** (scroll reveals, page transitions, parallax)
- **react-router-dom** (8 routes)
- **react-helmet-async** (per-page SEO)
- **Cormorant Garamond** + **Inter** (self-hosted via @fontsource)
