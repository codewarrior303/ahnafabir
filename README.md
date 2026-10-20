# Portfolio — Ahnaf Shahriar Abir

The personal portfolio of [**Ahnaf Shahriar Abir**](https://github.com/codewarrior303). Built with **Next.js**, **React**, **GSAP 3**, and **Lenis**, featuring hardware-accelerated motion choreography, interactive HTML5 canvas simulations, seamless page transitions, and an emerald-accented dark editorial design.

**Live Site:** [codewarrior303.github.io/abir](https://codewarrior303.github.io/abir)

---

## Features

- **Kinetic Motion & Smooth Scroll:** 60fps buttery scrolling powered by Lenis, coupled with ScrollTrigger parallax and delta-time compensated physics.
- **Persistent Curve Navigation:** Full-screen menu with dynamic SVG curve morphing and GPU-composited drawer transitions.
- **Generative HTML5 Canvases:** Dual interactive canvas backgrounds including a constellation node mesh (`AmbientGeometry`) and a Perlin noise particle flow field (`FlowField`).
- **Resilient Contact Form:** Multi-channel email delivery using Resend API with Gmail SMTP fallback, honeypot spam protection, rate limiting, and a local dev file-logger (`messages.txt`).
- **Editorial Brutalist Design:** Void Emerald high-contrast palette pairing deep forest inky blacks (`#0A0F0D`) with radiant emerald highlights (`#34D399`) and Space Grotesk / Instrument Serif typography tokens.
- **Type-Safe Dynamic Routing:** Next.js App Router with Static Site Generation (SSG) for all project case studies (`/projects/[slug]`).
- **Accessible & Performance-First:** Native `prefers-reduced-motion` compliance, accessible keyboard drawer traps, and zero third-party render-blocking dependencies.

---

## Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Core Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [GSAP 3](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/React)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Page Transitions:** [next-transition-router](https://github.com/madebyconor/next-transition-router)
- **Typography:** Geist Sans, Geist Mono, Space Grotesk, Instrument Serif
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Email Delivery:** [Nodemailer](https://nodemailer.com/) & [Resend](https://resend.com/)
- **Analytics:** [@vercel/analytics](https://vercel.com/analytics) & [@next/third-parties (Google Analytics)](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)

---


## Project Structure

```
src/
├── app/
│   ├── api/contact/        # Contact form endpoint (Resend + Nodemailer)
│   ├── projects/[slug]/    # Dynamic SSG project showcase routes
│   ├── globals.css         # Tailwind v4 @theme tokens & layer styles
│   ├── layout.tsx          # Root layout, typography, analytics
│   └── page.tsx            # Main single-page scroll orchestrator
├── components/
│   ├── canvas/             # HTML5 Canvas visual systems (AmbientGeometry, FlowField)
│   ├── home/               # Section orchestrator & transition controllers
│   ├── project/            # Project showcase details & gallery modals
│   ├── providers/          # Smooth scroll (Lenis) context providers
│   ├── sections/           # Modular page sections (Banner, About, Projects, etc.)
│   ├── shared/             # Global components (Navbar, CustomCursor, Preloader)
│   └── ui/                 # Atomic animated primitives (Buttons, Dividers, Links)
├── lib/                    # Configuration, project catalog, GSAP setup
└── utils/                  # Client storage & helper utilities
```

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
