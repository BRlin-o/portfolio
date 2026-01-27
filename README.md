# BR Lin - Personal Portfolio

A modern, high-performance personal portfolio website built with **Next.js 15**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

## 🚀 Data-Driven & Static
This project is designed to be fully static for serverless deployment (Vercel, Cloudflare Pages, etc.).

## 🛠️ Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Motion (Framer Motion)](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks & Context

## 📂 Project Structure
```
src/
├── app/                  # App Router pages and layout
├── components/          # React components
│   ├── layout/          # Global layout components (Navbar, Footer)
│   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   └── ui/              # Reusable UI components (shadcn)
├── lib/                 # Utilities
└── public/              # Static assets
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at `localhost:3000` |
| `npm run build` | Build your production site to `./out/` |
| `npm run start` | Preview your build locally (if not using static export) |

## 📝 License
This project is for personal use.
