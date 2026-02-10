# BR Lin - Personal Portfolio

A modern, high-performance personal portfolio website built with **Next.js 16**, **Tailwind CSS v4**, **shadcn/ui**, and **Motion (Framer Motion)**.

🌐 **Live Site**: [brlin.org](https://brlin.org)

## 🚀 Features

- **Fully Static** - Serverless deployment on Vercel
- **SEO Optimized** - Dynamic OG images, sitemap, robots.txt, JSON-LD structured data
- **Performance** - WebP images, optimized fonts, lazy-loaded animations
- **Responsive** - Mobile-first design with dark mode support
- **Accessible** - Built with Radix UI primitives

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [Next.js 16 (App Router)](https://nextjs.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Animations | [Motion (Framer Motion)](https://motion.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |

## 📂 Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── layout.tsx          # Root layout with metadata & JSON-LD
│   ├── page.tsx            # Homepage
│   ├── resume/             # Resume page (localized)
│   ├── opengraph-image.tsx # Dynamic OG image generation
│   ├── twitter-image.tsx   # Dynamic Twitter card image
│   ├── robots.ts           # robots.txt generation
│   └── sitemap.ts          # sitemap.xml generation
├── components/
│   ├── layout/             # Navbar, Footer, Logo
│   ├── sections/           # Hero, About, Experience, Projects, Awards
│   ├── resume/             # Resume-specific components
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── constants.ts        # Site configuration (URL, metadata)
│   └── utils.ts            # Utility functions
├── public/
│   ├── awards/             # Award images (WebP)
│   ├── badges/             # Certification badges (WebP)
│   └── documents/          # Downloadable PDFs
└── scripts/            # Build & deployment scripts
```

## 🔧 Environment Variables

This project supports Vercel's system environment variables for preview deployments:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Override site URL | No |
| `VERCEL_URL` | Auto-set by Vercel for previews | Auto |
| `VERCEL_PROJECT_PRODUCTION_URL` | Auto-set by Vercel for production | Auto |

The site URL is resolved in this order:
1. `NEXT_PUBLIC_SITE_URL` (manual override)
2. `VERCEL_URL` (preview deployments)
3. `VERCEL_PROJECT_PRODUCTION_URL` (production)
4. Fallback: `https://brlin.org`

## 🔍 SEO Features

- **Metadata API** - Title, description, keywords, Open Graph, Twitter Cards
- **Dynamic OG Images** - Server-rendered 1200×630 images with personal branding
- **Structured Data** - JSON-LD schemas for Person and WebSite
- **Sitemap** - Auto-generated `/sitemap.xml`
- **Robots** - Auto-generated `/robots.txt`
- **Favicons** - PNG icons for modern browsers and Apple devices
- **Google Search Console** - Verification meta tag configured

## 🧞 Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:3000` |
| `npm run build` | Build production site (Vercel - SSR) |
| `npm run build:cf` | Build production site (Cloudflare - Static) |
| `npm run start` | Preview production build locally |

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with Hero, About, Experience, Projects, Awards |
| `/resume` | Resume (localized) |

## 🚀 Deployment

This project supports a **Hybrid Deployment Strategy**:

### 1. Vercel (Recommended)
By default, the project is optimized for Vercel (SSR, Image Optimization).
1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Next.js settings
3. Done!

### 2. Cloudflare Pages / Workers
The project supports pure static export for Cloudflare.
1. Connect your GitHub repository to Cloudflare Pages
2. **Build Settings**:
   - **Build command**: `npm run build:cf` (Crucial: static export + 404 fix)
   - **Build output directory**: `out`
   - **Framework preset**: None / Custom
3. Done!

> **Note**: `npm run build:cf` sets `IS_EXPORT=true`, which disables Image Optimization and forces static output.

### Deployment Commands

| Platform | Command | Notes |
|----------|---------|-------|
| **Vercel** | `npm run build` | Default, SSR enabled |
| **Cloudflare** | `npm run build:cf` | Static Export, Fixes 404 |
| **Manual** | `npm run deploy` | Builds static site & deploys via Wrangler |

## 📝 License

This project is for personal use.
