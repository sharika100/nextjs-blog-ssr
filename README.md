# Next.js Blog SSR

A high-fidelity, server-rendered Next.js blog application based on the [Beyond UI Dribbble design](https://dribbble.com/shots/23491039-Blog-page-UI-design-Beyond-UI).

## Features

- **Server-Side Rendering (SSR)**: The homepage is a React Server Component that fetches initial blog posts during server render time, ensuring instant First Contentful Paint and full search engine indexing.
- **Dynamic Routing**: Built with Next.js App Router dynamic routes (`/posts/[id]`) for individual blog articles with dynamic SEO metadata generation via `generateMetadata()`.
- **TanStack React Query**: Intelligent client-side caching, live query synchronization, and hydration with `initialData` from SSR.
- **Live Search & Dynamic Filtering**: Instant case-insensitive search across titles, excerpts, tags, and authors, paired with multi-category and tag filtering.
- **Mock API**: Built-in Next.js Route Handlers (`/api/posts` and `/api/posts/[id]`) supporting query parameters for search, category, and tags, with optional external MockAPI override support.
- **Strict Visual Fidelity**: Exact attention to spacing, Inter typography, 4:3 card aspect ratios, custom pastel pill badges, and 3-column equal proportion layout.
- **Responsive Design**: Mobile-first architecture tested across 1440px, 1280px, 1024px, 768px, 430px, 390px, and 375px viewports with zero horizontal overflow.
- **Accessibility (a11y)**: Semantic HTML5 structure, ARIA landmarks, keyboard navigation support, and WCAG AA contrast compliance.
- **SEO & Social Sharing**: Complete Open Graph, Twitter Cards, canonical metadata, and dynamic metadata generation per post.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **State & Data Fetching**: TanStack React Query v5
- **Styling**: Tailwind CSS v4
- **Typography**: Inter via `next/font/google`
- **Icons**: Lucide React
- **Language**: TypeScript 5

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` to configure optional overrides:

```env
# API Base URL (optional override for external MockAPI endpoint)
NEXT_PUBLIC_API_URL=
```

## Deployment

The application is configured for continuous deployment on [Vercel](https://vercel.com).
Automatic deployments trigger on pushes to the `main` branch.
