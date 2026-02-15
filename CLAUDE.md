# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fla Fla is a landing page for artisanal Mozambican cookies built with Next.js.

## Commands

```bash
# Development
pnpm dev          # Start dev server at localhost:3000

# Build & Production
pnpm build        # Build for production
pnpm start        # Start production server

# Linting
pnpm lint         # Run ESLint
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **Tailwind CSS v4** (uses `@import "tailwindcss"` syntax)
- **TypeScript** (strict mode)
- **pnpm** as package manager

## Architecture

### App Structure (`app/`)
- `layout.tsx` - Root layout with Poppins/Inter fonts
- `page.tsx` - Homepage composing all sections
- `globals.css` - Tailwind imports and CSS variables

### Components (`app/components/`)
- `ui/` - Reusable primitives (Button, ProductCard, ResponsiveImage, SectionHeader)
- `sections/` - Page sections (Header, Hero, Sabores, Barrinhas, Historia, etc.)
- `brand/` - Brand elements (FlaFlaLogo, CapulanaStrip)

### Data Layer (`app/data/`)
- `site.ts` - Site config (WhatsApp, social links)
- `products.ts` - Products data (cookies, barrinhas)
- `navigation.ts` - Nav links
- `testimonials.ts` - Customer testimonials

## Design System Variables

CSS custom properties in `globals.css`:
- `--accent-green`, `--accent-honey`, `--accent-terracotta` - Accent colors
- `--bg-cream`, `--bg-dark`, `--bg-white` - Background colors
- `--text-dark`, `--text-body`, `--text-muted` - Text colors
- `--flafla-orange` (#f46535) - Primary brand color
- `--flafla-dark-brown` (#2d1b14) - Dark brown for buttons/footer
