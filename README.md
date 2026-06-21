# Swarnali Roy — Portfolio

My personal developer portfolio, built to showcase my work as a Senior Software Engineer specializing in React Native, React, Next.js, and TypeScript. Live, animated, and built the same way I build production apps.

🔗 **Live site:** [https://swarnali-roy-portfolio.vercel.app/](https://swarnali-roy-portfolio.vercel.app/)

## About

This site covers my professional background, the products I've shipped (mobile and web), my skill set, certifications, and education, with a one-click resume download. It's built with the App Router, fully typed with TypeScript, and styled with Tailwind CSS.

## Tech stack

- **Framework:** [Next.js](https://nextjs.org) 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion (including a custom animated starfield background)
- **Theming:** next-themes (light/dark mode)
- **Icons:** Lucide React

## Features

- Animated hero with a custom canvas-based starfield background
- Light/dark theme toggle
- Experience timeline across Younode, Codeware Innovations, and freelance work
- Project showcase: Pulp, Sportsdemy, HireCraft, TripTailor, Blood Bank App, and Exam Taker App, with live links, GitHub links, and screenshots
- Filterable skills section grouped by Frontend & Mobile, Backend, State, and Workflow & AI
- Certifications gallery with certificate previews
- One-click resume download

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/SwarnaliRoy94/swarnali-roy-portfolio.git
cd swarnali-roy-portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page hot-reloads as you edit files.

### Other scripts

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Project structure

```
src/
├── app/                  # Next.js App Router entry (layout, page, global styles)
├── components/
│   ├── portfolio-page.tsx   # Main page composition
│   ├── starfield.tsx        # Animated canvas background
│   ├── theme-provider.tsx   # next-themes provider
│   └── theme-switcher.tsx   # Light/dark toggle
└── lib/
    └── portfolio-data.ts    # All content: profile, experience, projects, skills, education
public/
├── images/               # Site images
├── projects/             # Project screenshots
├── certificates/         # Certification preview images
└── resume/               # Downloadable resume PDF
```

Most content updates (experience, projects, skills, certifications) only require editing `src/lib/portfolio-data.ts`.

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new), from the creators of Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

## Contact

- **Email:** swarnali.roy093@gmail.com
- **LinkedIn:** [royswarnali](https://www.linkedin.com/in/royswarnali/)
- **GitHub:** [SwarnaliRoy94](https://github.com/SwarnaliRoy94)
- **DEV Community:** [swarnaliroy94](https://dev.to/swarnaliroy94)
