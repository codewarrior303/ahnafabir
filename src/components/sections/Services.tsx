'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const ctx = gsap.context(() => {
      const allSections = servicesRef.current.filter(Boolean);
      const pinOffset = 50;
      allSections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: `top ${pinOffset + index * 100}px`,
          endTrigger: allSections[allSections.length - 1],
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const headingWords = [
    { t: 'WHAT' },
    { t: 'i', serif: true },
    { t: 'DO' },
  ];
  const descriptionText =
    "I specialize in building full-stack web applications that are fast, dependable, and user-centric. With a solid foundation across modern frontend and backend architectures, I transform ideas into production-ready software.";

  const services = [
    {
      id: '01',
      title: 'Full Stack Web Development',
      description:
        'End-to-end development of modern web applications. From intuitive user interfaces to scalable backend APIs and database schemas, I engineer complete systems using Next.js, React, Node.js, and MongoDB.',
      items: [
        'Next.js & React Full-Stack Systems',
        'TypeScript Architecture & Clean Code',
        'REST APIs & Scalable Data Modeling',
      ],
    },
    {
      id: '02',
      title: 'Frontend & UI Engineering',
      description:
        'Crafting responsive, high-contrast, accessible interfaces that deliver snappy user experiences. Focusing on design systems, mobile usability, micro-interactions, and 60fps animations.',
      items: [
        'Tailwind CSS v4, DaisyUI & Modern CSS',
        'Hardware-Accelerated GSAP Animations',
        'Figma to Production Code Implementation',
      ],
    },
    {
      id: '03',
      title: 'Integrations & System Reliability',
      description:
        'Integrating cloud services, APIs, and authentication providers to make applications versatile and secure. Ensuring offline resilience, fast builds, and automated deployments.',
      items: [
        'Cloud Storage & REST API Integrations',
        'OAuth 2.0 (Better Auth, NextAuth) & Argon2id',
        'Vercel Deployment & Performance Optimization',
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen bg-ink text-light pt-24 pb-16 md:pt-32 md:pb-20 px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-20">
          <AnimatedHeading
            words={headingWords}
            className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4"
          />

          <div className="grid md:grid-cols-12 gap-4 md:gap-8">
            <div className="md:col-start-6 md:col-span-7 flex flex-col md:flex-row gap-3 md:gap-10">
              <span className="font-mono text-sm sm:text-base md:text-base text-warm uppercase tracking-[0.3em] font-medium whitespace-nowrap inline-block">
                (Services)
              </span>

              <ScrollWordReveal
                text={descriptionText}
                offset={['start 0.95', 'end 0.65']}
                className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
              />
            </div>
          </div>
        </div>

        <div className="relative pb-8 md:pb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                servicesRef.current[index] = el;
              }}
              className="bg-ink pb-12 md:pb-20"
              style={{ zIndex: index + 1 }}
            >
              <div className="grid md:grid-cols-12 gap-4 items-center py-4 md:py-8 border-t border-border-subtle">
                <h3
                  className="font-display md:col-span-9 md:col-start-2 text-light font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl leading-none"
                  style={{ transform: 'translateY(-0.1em)' }}
                >
                  {service.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-12 gap-4 md:gap-8 pt-4 md:pt-6">
                <div className="md:col-span-7 md:col-start-6 space-y-4 md:space-y-6">
                  <ScrollWordReveal
                    text={service.description}
                    offset={['start 0.95', 'end 0.7']}
                    className="text-gray-soft text-base sm:text-base md:text-lg leading-relaxed font-sans"
                  />

                  <div className="divide-y divide-border-subtle">
                    {service.items.map((item, i) => (
                      <div key={i} className="py-3 flex items-center gap-3 md:gap-4">
                        <span className="text-accent-light text-xs md:text-sm font-mono font-bold">
                          0{i + 1}
                        </span>
                        <span className="text-base sm:text-base md:text-lg font-bold font-sans text-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
