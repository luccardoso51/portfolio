# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

Portfolio is live and personalized with Lucas Cardoso's profile data.

## Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS v4 + Shadcn/UI + Magic UI
- **Animations**: Framer Motion (`motion` package)
- **Blog**: MDX via Content Collections
- **Package manager**: pnpm

## Deployment

- **Production URL**: https://lucascardoso.com (also https://portfolio-one-sandy-84.vercel.app)
- **GitHub**: https://github.com/luccardoso51/portfolio
- Auto-deploys on every push to `main` via Vercel GitHub integration.
- Manual deploy: `vercel --prod` (CLI already authenticated)

## Content — single source of truth

All site content lives in **`src/data/resume.tsx`**. Edit only this file to update:

- Personal info (`name`, `description`, `summary`, `location`)
- Social links (`contact.social`) — GitHub and LinkedIn are filled; X/YouTube need handles
- Work experience (`work[]`) — dates are estimates, verify against LinkedIn
- Education (`education[]`) — placeholder, needs real data
- Projects (`projects[]`)
- Skills (`skills[]`) — must use imported SVG components from `src/components/ui/svgs/`

## Assets

Company logos are in `/public/`:

| File | Company |
|---|---|
| `/hubble.png` | hubble (hubble.social) |
| `/aucto.png` | Aucto (aucto.com) |
| `/pertinho_de_casa_logo.jpeg` | Pertinho de Casa |
| `/Aua-logo.jpeg` | AUA - Compre do Pequeno |
| `/bitx_logo.jpeg` | BitX Software House |
| `/me.jpg` | Avatar photo |

## Blog

Add `.mdx` files to `/content/` with frontmatter:
```
---
title: "Post Title"
publishedAt: "YYYY-MM-DD"
summary: "Short description"
---
```

## Known TODOs

- [x] Replace avatar with real photo (`/public/me.jpg`)
- [x] Fill in education (Federal University of Pará, Computer Engineering, 2017–2021)
- [x] Verify/correct work experience dates (confirmed via résumé)
- [x] Add missing logos: Pertinho de Casa, AUA, BitX
- [x] Set personal email in `contact.email`
- [ ] Add X and YouTube handles to `contact.social` (currently `navbar: false`)
- [ ] Add UFPA logo to `/public/` and set `logoUrl` in education entry
- [ ] Set a custom Vercel domain (optional)

## Common commands

```bash
pnpm dev          # local dev server → http://localhost:3000
pnpm build        # production build check
pnpm lint         # ESLint
pnpm lint:fix     # auto-fix lint issues
git push origin main  # deploy to production
```
