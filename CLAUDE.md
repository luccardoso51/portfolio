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

- **Production URL**: https://portfolio-one-sandy-84.vercel.app
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
| `/circles.ico` | Circles (circleapp.com.br) |
| `/aucto.png` | Aucto (aucto.com) |
| `/vibe.png` | Vibe Tecnologia |
| `/me.png` | Avatar — replace with real photo |

Logos still missing (blocked/defunct): Pertinho de Casa, Aua.
To add: save as `/public/pertinho.png` and `/public/aua.png`, then set `logoUrl` in `resume.tsx`.

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

- [ ] Replace `/public/me.png` with real avatar photo
- [ ] Fill in education (school, degree, dates)
- [ ] Verify/correct work experience dates
- [ ] Add X and YouTube handles to `contact.social` (currently `navbar: false`)
- [ ] Add missing logos: Pertinho de Casa, Aua
- [ ] Set personal email in `contact.email`
- [ ] Set a custom Vercel domain (optional)

## Common commands

```bash
pnpm dev          # local dev server → http://localhost:3000
pnpm build        # production build check
pnpm lint         # ESLint
pnpm lint:fix     # auto-fix lint issues
git push origin main  # deploy to production
```
