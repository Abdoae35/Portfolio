# Abdelrahman — Developer Portfolio

A clean, dark-mode personal portfolio built with **Next.js 15** (App Router), **Tailwind CSS v4**, and **TypeScript**. Statically exported for zero-config deployment on Vercel.

## Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | Next.js 15 (App Router, static export) |
| Styling   | Tailwind CSS v4                         |
| Language  | TypeScript                              |
| Fonts     | Geist Sans & Geist Mono (via `next/font`) |
| Hosting   | Vercel (free tier, git integration)     |

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This generates a fully static site in the `out/` directory.

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Design system (colors, animations, utilities)
│   ├── layout.tsx      # Root layout with SEO metadata
│   └── page.tsx        # Main page composing all sections
├── components/
│   ├── Navbar.tsx      # Fixed nav with mobile hamburger
│   ├── Hero.tsx        # Full-viewport hero with CTAs
│   ├── Projects.tsx    # Project cards with details
│   ├── Skills.tsx      # Categorized skill groups
│   ├── About.tsx       # Short bio section
│   ├── Contact.tsx     # Social/contact links
│   └── Footer.tsx      # Minimal footer
├── data/
│   └── portfolio.ts    # All content data (edit this to update content)
└── hooks/
    └── useScrollReveal.ts  # Intersection Observer for scroll animations
```

## Customization Checklist

Before deploying, update the following placeholders:

- [ ] **Resume**: Place your resume PDF at `public/resume.pdf`
- [ ] **GitHub URL**: Update in `src/data/portfolio.ts` → `GITHUB_URL` and `SOCIAL_LINKS`
- [ ] **LinkedIn URL**: Update in `src/data/portfolio.ts` → `LINKEDIN_URL` and `SOCIAL_LINKS`
- [ ] **Email**: Update in `src/data/portfolio.ts` → `SOCIAL_LINKS`
- [ ] **Project URLs**: Update `sourceUrl` / `liveUrl` in the `PROJECTS` array
- [ ] **Project 3**: Fill in or remove the placeholder project card
- [ ] **Open Graph URL**: Update the `url` field in `src/app/layout.tsx` metadata
- [ ] **Favicon**: Replace `src/app/favicon.ico` with your own

## Deployment

Push to a GitHub repository and connect it to [Vercel](https://vercel.com). The `output: "export"` config in `next.config.ts` ensures it builds as a static site automatically. No additional configuration needed.

## License

MIT
