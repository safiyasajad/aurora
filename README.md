# Aurora Gems

Premium website for Aurora Gems, a Sri Lankan sapphire sourcing, buyer concierge, and bespoke jewelry brand.

## Tech Stack

- React
- TypeScript
- Vite
- TanStack Router / TanStack Start
- Tailwind CSS
- Radix UI
- Lovable TanStack/Vite config

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start local development server |
| `npm run build`   | Build production output        |
| `npm run preview` | Preview production build       |
| `npm run lint`    | Run ESLint                     |
| `npm run format`  | Format files with Prettier     |

## Key Files

| File                          | Purpose                                |
| ----------------------------- | -------------------------------------- |
| `src/routes/index.tsx`        | Main homepage content and layout       |
| `src/routes/__root.tsx`       | Global metadata, root shell, providers |
| `src/styles.css`              | Theme, colors, typography, utilities   |
| `src/routes/sitemap[.]xml.ts` | Sitemap route                          |
| `public/robots.txt`           | Search crawler rules                   |
| `index.html`                  | Vite/TanStack renderer template        |

## Editing Notes

- Edit homepage sections in `src/routes/index.tsx`.
- Edit global metadata in `src/routes/__root.tsx`.
- Edit colors, buttons, and shared styles in `src/styles.css`.
- Avoid putting page content in `index.html`.
- Prefer simple ASCII punctuation in source text to avoid encoding issues.

## Deployment

This project is connected to Lovable. Avoid rewriting published Git history with force pushes, rebases, amended commits, or squashed pushed commits.

Build before deploying:

```bash
npm run build
```

## Contact Details Used On Site

- WhatsApp / Phone: `+94 774 579 076`
- Instagram: `@Rashard_Rifkhan`
- Locations: Beruwala, Colombo, Bangkok


Done by Safiya Sajad August 2026