# Abdelrahman — Developer Portfolio

A personal portfolio built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **TypeScript**. It is statically exported for deployment.

## Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | Next.js 16 (App Router, static export) |
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

## Updating the CV and portfolio content

1. Replace the PDF in `cv/` with the latest CV. Keep exactly one PDF in that folder; its filename can change. Include it in the repository/deployment source.
2. Update the structured professional information in `src/data/portfolio.ts` and, when the summary changes, the text in `src/components/Hero.tsx` and `src/components/About.tsx`. Update metadata in `src/app/layout.tsx` if needed. The PDF is the reference; it is **not** parsed automatically into website content.
3. Run `npm run dev` or `npm run build`. Their npm lifecycle hooks run `npm run sync:cv` first, copying the source to the ignored, generated `public/generated/cv.pdf`. Both CV links use this stable URL. The build includes the generated file in the static export.

If the development server is already running when you replace the PDF, run `npm run sync:cv` or restart `npm run dev`. Do not edit the generated copy. The sync fails if `cv/` has no PDF, more than one PDF, or a file without a PDF header, so a build cannot silently use an old CV. Direct `next dev` or `next build` commands bypass npm lifecycle hooks; use the npm scripts above.

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
│   ├── Experience.tsx  # Experience, education and certifications
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

- [ ] **CV and content**: Follow the update workflow above.
- [ ] **Project URLs**: Add verified `sourceUrl` / `liveUrl` values in `PROJECTS` when available.
- [ ] **Open Graph URL**: Update the `url` field in `src/app/layout.tsx` metadata
- [ ] **Favicon**: Replace `src/app/favicon.ico` with your own

## Deployment

Push to a GitHub repository and connect it to [Vercel](https://vercel.com). The `output: "export"` config in `next.config.ts` ensures it builds as a static site automatically. No additional configuration needed.

## License

MIT
