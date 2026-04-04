# Professional Portfolio

This repository contains my professional portfolio site. It is built as a fast, motion-forward single page with dedicated sections for my story, skills, selected work, and a contact flow.

## About This Project
This portfolio is designed to present my work with clarity and personality while staying focused on performance and craftsmanship. The structure is intentionally simple: a single-page experience with strong visual pacing, clear sectioning, and a direct path to contact. The UI emphasizes legibility, contrast, and motion to create a modern, confident first impression.

The codebase is organized by section components so it is easy to update copy, swap projects, and refine visuals without touching the overall layout. Each section is meant to be edited independently, which keeps iteration fast as my experience and work evolve.

## Highlights
- Purpose-built sections: `Hero`, `About`, `Skills`, `Projects`, `Contact`, and `Footer`
- Motion and smooth scrolling powered by GSAP, Framer Motion, and Lenis
- 3D-ready stack with React Three Fiber and Drei
- Clean, modular UI components in `components/ui`

## Tech Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP, Framer Motion, Lenis
- Three.js, React Three Fiber, Drei

## Local Development
1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts
- `npm run dev` Start the development server
- `npm run build` Create a production build
- `npm run start` Run the production server
- `npm run lint` Lint the codebase

## Project Structure
- `app/page.tsx` Main page composition
- `components/ui` Section-level UI blocks
- `app/globals.css` Global styles
- `public` Static assets

## Personalization Guide
Update copy and content in these components:
- `components/ui/Hero.tsx`
- `components/ui/About.tsx`
- `components/ui/Skills.tsx`
- `components/ui/Projects.tsx`
- `components/ui/Contact.tsx`

Replace or add images in `public` and update references in the components above.

## Deployment
Build and deploy with any platform that supports Next.js. A typical flow is:

```bash
npm run build
npm run start
```

If you are deploying to Vercel or Netlify, use their Next.js presets.

## License
All content and design in this portfolio are my own unless otherwise noted. Please do not reuse without permission.
