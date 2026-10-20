'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { site } from '@/lib/site';

export default function ResumePage() {
  useEffect(() => {
    // Check if auto-print was requested
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('print') === 'true') {
        setTimeout(() => {
          window.print();
        }, 500);
      }
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#070A09] text-[#E2E8E4] py-8 px-4 sm:px-6 lg:px-8">
      <style jsx global>{`
        @media print {
          @page {
            margin: 12mm 15mm 12mm 15mm;
            size: A4 portrait;
          }
          html, body {
            background: #ffffff !important;
            color: #111827 !important;
            font-size: 11pt !important;
          }
          .no-print {
            display: none !important;
          }
          .print-sheet {
            background: #ffffff !important;
            color: #111827 !important;
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
          .print-sheet h1, .print-sheet h2, .print-sheet h3, .print-sheet h4, .print-sheet strong {
            color: #0f172a !important;
          }
          .print-sheet p, .print-sheet span, .print-sheet li {
            color: #334155 !important;
          }
          .print-sheet a {
            color: #0f172a !important;
            text-decoration: none !important;
          }
          .print-sheet .border-subtle {
            border-color: #cbd5e1 !important;
          }
          .print-sheet .badge-tag {
            background: #f1f5f9 !important;
            color: #0f172a !important;
            border: 1px solid #cbd5e1 !important;
          }
        }
      `}</style>

      {/* Top Action Bar (Hidden on print) */}
      <div className="no-print max-w-4xl mx-auto mb-6 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121A16] border border-[#1C2923] text-gray-300 hover:text-white hover:border-[#34D399] transition-all text-sm font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#34D399] text-[#0A0F0D] font-mono text-sm font-bold hover:bg-[#6EE7B7] transition-all shadow-[0_0_15px_rgba(52,211,153,0.3)] cursor-pointer"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save PDF</span>
        </button>
      </div>

      {/* Main Resume Sheet */}
      <main className="print-sheet max-w-4xl mx-auto bg-[#0D1411] border border-[#1C2923] rounded-2xl p-8 sm:p-12 shadow-2xl">
        {/* Header */}
        <header className="border-b border-[#1C2923] pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-sans">
                Ahnaf Shahriar Abir
              </h1>
              <p className="text-sm sm:text-base font-mono text-[#34D399] font-medium mt-1">
                Full-Stack Software Engineer • CSE Scholar
              </p>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-mono text-gray-300">
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#34D399]" />
              <a href={`mailto:${site.email}`} className="hover:underline text-gray-300">
                {site.email}
              </a>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#34D399]" />
              <span>{site.location}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FaGithub className="w-3.5 h-3.5 text-[#34D399]" />
              <a href="https://github.com/codewarrior303" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                github.com/codewarrior303
              </a>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FaLinkedin className="w-3.5 h-3.5 text-[#34D399]" />
              <a href="https://www.linkedin.com/in/ahnaf-shahriar-abir/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                linkedin.com/in/ahnaf-shahriar-abir
              </a>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#34D399]" />
              <a href="https://codewarrior303.github.io/abir/" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                codewarrior303.github.io/abir
              </a>
            </span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#34D399] font-bold mb-2">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-300 font-sans">
            Full-Stack Software Engineer and Computer Science & Engineering undergraduate at Southeast University with a passion for designing scalable web architectures, resilient RESTful APIs, and responsive, accessible interfaces. Experienced in modern JavaScript/TypeScript, React, Next.js, Node.js, Express, and MongoDB, with a demonstrated ability to architect and deploy production web platforms that solve real-world user problems.
          </p>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#34D399] font-bold mb-3">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white font-sans">
                Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)
              </h3>
              <p className="text-xs font-mono text-gray-300">
                Southeast University (SEU) • Dhaka, Bangladesh
              </p>
            </div>
            <span className="text-xs font-mono text-[#34D399] font-semibold whitespace-nowrap">
              2025 – Present
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1.5">
            Key Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Software Engineering, System Analysis & Web Technologies.
          </p>
        </section>

        {/* Technical Proficiencies */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#34D399] font-bold mb-3">
            Technical Proficiencies
          </h2>
          <div className="space-y-2 text-xs sm:text-sm font-sans">
            <div>
              <strong className="text-white font-mono text-xs">Frontend: </strong>
              <span className="text-gray-300">JavaScript (ES6+), TypeScript, React, Next.js (App Router), Tailwind CSS v4, DaisyUI, HTML5, CSS3, GSAP.</span>
            </div>
            <div>
              <strong className="text-white font-mono text-xs">Backend & APIs: </strong>
              <span className="text-gray-300">Node.js, Express.js, Python, Flask, C/C++, RESTful API Architecture, JWT, OAuth 2.0, Argon2id.</span>
            </div>
            <div>
              <strong className="text-white font-mono text-xs">Databases & ORM: </strong>
              <span className="text-gray-300">MongoDB, Mongoose ODM, Supabase, SQLite.</span>
            </div>
            <div>
              <strong className="text-white font-mono text-xs">DevOps & Tools: </strong>
              <span className="text-gray-300">Linux / Ubuntu, Git, GitHub, Docker, Postman, Vercel, npm, Figma.</span>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-6">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#34D399] font-bold mb-4">
            Featured Projects & Engineering Work
          </h2>

          <div className="space-y-5">
            {/* Project 1 */}
            <div className="border-l-2 border-[#1C2923] pl-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-2">
                  <span>ExamMate</span>
                  <span className="text-xs font-mono font-normal text-gray-400">| Academic Schedule & Calendar Integration</span>
                </h3>
                <span className="text-xs font-mono text-[#34D399]">
                  <a href="https://exammate-one.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </a>
                </span>
              </div>
              <p className="text-xs font-mono text-gray-400 mt-0.5">Next.js, React, TypeScript, Tailwind CSS, DaisyUI, Better Auth, MongoDB, SheetJS, jsPDF</p>
              <ul className="list-disc list-inside mt-2 text-xs sm:text-sm text-gray-300 space-y-1">
                <li>Architected an in-memory spreadsheet extraction pipeline processing XLSX, XLS, and CSV routines with course and section matching.</li>
                <li>Integrated Google Calendar API to sync personal examination timetables directly to student mobile calendars.</li>
                <li>Implemented client-side PDF routine generation using jsPDF and high-resolution PNG rendering via HTML5 Canvas.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="border-l-2 border-[#1C2923] pl-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-2">
                  <span>BazarDor (বাজার দর)</span>
                  <span className="text-xs font-mono font-normal text-gray-400">| Commodity Price Intelligence</span>
                </h3>
                <span className="text-xs font-mono text-[#34D399]">
                  <a href="https://bazardor-dun.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </a>
                </span>
              </div>
              <p className="text-xs font-mono text-gray-400 mt-0.5">Next.js, React, TypeScript, Tailwind CSS, Better Auth, MongoDB</p>
              <ul className="list-disc list-inside mt-2 text-xs sm:text-sm text-gray-300 space-y-1">
                <li>Engineered daily market analytics tracking prices of grocery staples, vegetables, and proteins across Bangladesh.</li>
                <li>Implemented price fluctuation delta algorithms highlighting major market increases and reductions on the homepage.</li>
                <li>Designed localized Bangla typography and number formatting with OAuth 2.0 user authentication.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="border-l-2 border-[#1C2923] pl-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-2">
                  <span>FitLog</span>
                  <span className="text-xs font-mono font-normal text-gray-400">| High-Performance Dark Workout Companion</span>
                </h3>
                <span className="text-xs font-mono text-[#34D399]">
                  <a href="https://fitlog-coral.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </a>
                </span>
              </div>
              <p className="text-xs font-mono text-gray-400 mt-0.5">Next.js, React, TypeScript, Tailwind CSS v4, DaisyUI, Cloudflare Workers</p>
              <ul className="list-disc list-inside mt-2 text-xs sm:text-sm text-gray-300 space-y-1">
                <li>Built serverless edge API endpoints using Cloudflare Workers with resilient offline caching for zero gym downtime.</li>
                <li>Implemented reactive localStorage synchronization with custom DOM event dispatching across components.</li>
                <li>Constructed high-contrast dark gym user interfaces based on Figma design tokens with real-time volume counters.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="border-l-2 border-[#1C2923] pl-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm sm:text-base font-bold text-white font-sans flex items-center gap-2">
                  <span>DevStack</span>
                  <span className="text-xs font-mono font-normal text-gray-400">| Tech Stack Curation Builder</span>
                </h3>
                <span className="text-xs font-mono text-[#34D399]">
                  <a href="https://devstack-pi.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    Live Demo <ExternalLink className="w-3 h-3" />
                  </a>
                </span>
              </div>
              <p className="text-xs font-mono text-gray-400 mt-0.5">React, TypeScript, Vite, Tailwind CSS v4, DaisyUI</p>
              <ul className="list-disc list-inside mt-2 text-xs sm:text-sm text-gray-300 space-y-1">
                <li>Developed an interactive software tooling explorer across Frontend, Backend, Database, and DevOps categories.</li>
                <li>Engineered real-time stack blueprint calculators and one-click architectural manifest exports.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
