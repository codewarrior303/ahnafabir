'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  icon: string;
}

export interface StackCategory {
  id: string;
  title: string;
  technologies: TechItem[];
}

export const STACK_SECTIONS: StackCategory[] = [
  {
    id: 'frontend',
    title: 'FRONTEND DEVELOPMENT',
    technologies: [
      { name: 'JavaScript', category: 'frontend', icon: '/tech/javascript.svg' },
      { name: 'TypeScript', category: 'frontend', icon: '/tech/typescript.svg' },
      { name: 'React', category: 'frontend', icon: '/tech/react.svg' },
      { name: 'Next.js', category: 'frontend', icon: '/tech/nextjs.svg' },
      { name: 'Tailwind CSS', category: 'frontend', icon: '/tech/tailwindcss.svg' },
      { name: 'DaisyUI', category: 'frontend', icon: '/tech/daisyui.svg' },
      { name: 'HTML5', category: 'frontend', icon: '/tech/html5.svg' },
      { name: 'CSS3', category: 'frontend', icon: '/tech/css3.svg' },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND & LOGIC',
    technologies: [
      { name: 'Node.js', category: 'backend', icon: '/tech/nodejs.svg' },
      { name: 'Express.js', category: 'backend', icon: '/tech/express.svg' },
      { name: 'Python', category: 'backend', icon: '/tech/python.svg' },
      { name: 'C++', category: 'backend', icon: '/tech/cplusplus.svg' },
    ],
  },
  {
    id: 'database',
    title: 'DATABASE & DATA MODELING',
    technologies: [
      { name: 'MongoDB', category: 'database', icon: '/tech/mongodb.svg' },
      { name: 'Supabase', category: 'database', icon: '/tech/supabase.svg' },
    ],
  },
  {
    id: 'devops',
    title: 'ENVIRONMENT & DEVOPS',
    technologies: [
      { name: 'Docker', category: 'devops', icon: '/tech/docker.svg' },
      { name: 'Linux', category: 'devops', icon: '/tech/linux.svg' },
      { name: 'Ubuntu', category: 'devops', icon: '/tech/ubuntu.svg' },
      { name: 'Git', category: 'devops', icon: '/tech/git.svg' },
      { name: 'GitHub', category: 'devops', icon: '/tech/github.svg' },
      { name: 'Vercel', category: 'devops', icon: '/tech/vercel.png' },
    ],
  },
  {
    id: 'tools',
    title: 'DEV TOOLS & DESIGN',
    technologies: [
      { name: 'Postman', category: 'tools', icon: '/tech/postman.svg' },
      { name: 'Figma', category: 'tools', icon: '/tech/figma.svg' },
      { name: 'Penpot', category: 'tools', icon: '/tech/penpot.svg' },
    ],
  },
];

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const headingWords = [
    { t: 'MY' },
    { t: 'TECH' },
    { t: 'stack', serif: true },
  ];
  const descriptionText =
    'A curated selection of modern technologies and tools I employ to design, architect, and deploy full-stack web applications.';

  const filterOptions = [
    { id: 'all', label: 'All Categories' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'devops', label: 'DevOps & Linux' },
    { id: 'tools', label: 'Dev Tools' },
  ];

  const visibleSections =
    activeFilter === 'all'
      ? STACK_SECTIONS
      : STACK_SECTIONS.filter((sec) => sec.id === activeFilter);

  useGSAP(
    () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const items = section.querySelectorAll('.tech-item');
        const title = titleRefs.current[index];

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                end: 'top 70%',
                scrub: 0.5,
              },
            },
          );
        }

        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.05,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                end: 'top 70%',
                scrub: 0.5,
              },
            },
          );
        }
      });
    },
    { scope: containerRef, dependencies: [activeFilter] },
  );

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      className="bg-ink text-light pt-24 pb-16 md:pt-32 md:pb-20 rounded-b-4xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 md:mb-14 hidden md:block">
          <AnimatedHeading
            words={headingWords}
            className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4"
          />
          <ScrollWordReveal
            text={descriptionText}
            offset={['start 0.95', 'end 0.7']}
            className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
          />
        </div>

        <div className="mb-8 md:hidden">
          <AnimatedHeading
            words={[{ t: 'MY' }, { t: 'stack', serif: true }]}
            className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4"
          />
        </div>

        <div className="mb-12 flex flex-wrap gap-2 sm:gap-3 items-center">
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveFilter(option.id)}
                className={`text-xs sm:text-sm font-mono tracking-wider px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-cream text-ink border-cream font-semibold shadow-md'
                    : 'bg-elevated-dark/60 text-gray-soft border-white/10 hover:border-accent/40 hover:text-cream'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-16 md:space-y-24">
          {visibleSections.map((stack, index) => (
            <div
              key={stack.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
            >
              <div className="md:w-1/3">
                <h3
                  ref={(el) => {
                    titleRefs.current[index] = el;
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-light tracking-tight font-display uppercase"
                >
                  {stack.title}
                </h3>
                <span className="font-mono text-xs text-warm tracking-widest uppercase block mt-2">
                  {stack.technologies.length} Technologies
                </span>
              </div>

              <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {stack.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="tech-item flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-elevated-dark/80 border border-white/[0.05] hover:border-accent/40 bg-surface/50 min-w-0 overflow-hidden group shadow-sm"
                  >
                    <div className="w-8 h-8 flex items-center justify-center relative flex-shrink-0">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-mono font-bold text-cream truncate">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
