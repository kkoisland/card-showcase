# card-showcase

A lightweight greeting card viewer built with React + Vite. Cards are shared via unguessable URL — no login, no database required.

## Features

- View greeting cards (PDF or image) in full screen
- URL-based sharing: `?src=cards/<year>/<random-filename>`
- Print and download support
- Private by design: `noindex/nofollow`, unguessable filenames
- No login required — access via URL only

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Biome (linter / formatter)
- GitHub Pages

## Getting Started

```bash
git clone git@github.com:kkoisland/card-showcase.git
cd card-showcase
pnpm i
pnpm dev
```

## How to Add a Card

1. Generate a random filename: `openssl rand -hex 8`
2. Place the file in `public/cards/<year>/<random>.jpg` (or `.pdf`)
3. Deploy: `pnpm run deploy`
4. Share the URL: `https://www.kkoisland.com/card-showcase/?src=cards/<year>/<random>.jpg`
