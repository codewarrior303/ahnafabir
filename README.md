# Portfolio — Ahnaf Shahriar Abir

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3-green?style=flat-square&logo=greensock)](https://gsap.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)

The official personal portfolio of [**Ahnaf Shahriar Abir**](https://github.com/codewarrior303) — Full Stack Web Developer & Software Engineer.

Engineered with **Next.js**, **React**, **GSAP 3**, and **Lenis Smooth Scroll**, featuring custom GPU-accelerated motion choreography, interactive HTML5 canvas simulations, seamless page transitions, and a dark brutalist **Void Emerald** aesthetic.

---

## 🌟 Key Features

- **Kinetic Motion & Smooth Scroll:** Buttery 60fps scrolling orchestrated via [Lenis](https://lenis.darkroom.engineering/) paired with [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) parallax and delta-time physics.
- **Generative HTML5 Canvases:** Dual interactive background simulations:
  - Constellation node mesh (`AmbientGeometry`) with mouse proximity attraction.
  - Perlin noise particle flow field (`FlowField`) with dynamic vector fields.
- **Persistent SVG Curve Navigation:** Fullscreen overlay menu with dynamic cubic bezier curve morphing and GPU-composited drawer transitions.
- **Resilient Contact Pipeline:** Multi-tier delivery engine utilizing **Resend API** with fallback to **Gmail SMTP (Nodemailer)**, honeypot spam filtering, rate limiting, and local development file logging (`messages.txt`).
- **Void Emerald Brutalist Design:** High-contrast palette pairing deep obsidian blacks (`#070A09` / `#0A0F0D`) with radiant emerald accents (`#00ED64` / `#34D399`), paired with Space Grotesk and Instrument Serif typography.
- **Case Study Routing:** Next.js App Router with Static Site Generation (SSG) for all project deep-dives (`/projects/[slug]`) and a custom Void 404 handler.
- **Accessibility & Motion Compliance:** Full `prefers-reduced-motion` detection, semantic markup, keyboard focus traps, and zero third-party render-blocking scripts.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [GSAP 3](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/React)
- **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
- **Page Transitions:** [next-transition-router](https://github.com/madebyconor/next-transition-router)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Typography:** Geist Sans, Geist Mono, Space Grotesk, Instrument Serif
- **Email Delivery:** [Resend](https://resend.com/) & [Nodemailer](https://nodemailer.com/)
- **Analytics:** [@vercel/analytics](https://vercel.com/analytics) & [@next/third-parties (Google Analytics)](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)

---

## 📁 Project Structure

```
├── public/
│   ├── Projects/           # HD 2.5K project case study assets & previews
│   └── tech/               # Normalized official SVG tech stack icons
├── src/
│   ├── app/
│   │   ├── api/contact/    # Contact endpoint (Resend + Nodemailer fallback)
│   │   ├── projects/[slug]/# Static dynamic case study pages
│   │   ├── globals.css     # Tailwind v4 theme tokens and custom layers
│   │   ├── layout.tsx      # Root layout, Google fonts, analytics
│   │   ├── not-found.tsx   # Custom Void Emerald 404 page
│   │   └── page.tsx        # Single-page smooth scroll orchestrator
│   ├── components/
│   │   ├── canvas/         # HTML5 Canvas systems (AmbientGeometry, FlowField)
│   │   ├── home/           # Scroll orchestrator and transition controllers
│   │   ├── project/        # Project showcase details and gallery view
│   │   ├── providers/      # Lenis smooth scroll and transition providers
│   │   ├── sections/       # Hero, About, Projects, TechStack, Services, Contact
│   │   ├── shared/         # Navbar, CustomCursor, Preloader, Footer
│   │   └── ui/             # Reusable interactive primitives & buttons
│   ├── lib/                # Project catalog, site metadata, GSAP configuration
│   └── utils/              # Client storage and helper functions
├── .env.example            # Environment variables template
├── package.json            # Dependencies and npm scripts
└── README.md               # Project documentation
```

---

## 👤 Author

**Ahnaf Shahriar Abir**
- **GitHub:** [@codewarrior303](https://github.com/codewarrior303)
- **LinkedIn:** [Ahnaf Shahriar Abir](https://www.linkedin.com/in/ahnaf-shahriar-abir/)
- **Email:** [abirahnafshahriar@gmail.com](mailto:abirahnafshahriar@gmail.com)

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
Feel free to use this codebase as inspiration for your own portfolio.
