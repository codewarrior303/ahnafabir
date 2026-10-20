import { Metadata } from 'next';
import { site } from './site';

export const siteMetadata: Metadata = {
  title: {
    default: `${site.name} — Full Stack Web Developer`,
    template: `%s | ${site.name}`,
  },
  description:
    'Portfolio of Ahnaf Shahriar Abir, Full Stack Web Developer and Backend Enthusiast specializing in React, Next.js, Node.js, and modern web applications.',
  keywords: [
    'Ahnaf Shahriar Abir',
    'Abir',
    'codewarrior303',
    'Web Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Portfolio',
    'Bangladesh',
  ],
  authors: [
    {
      name: site.name,
    },
  ],
  creator: site.name,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.webp',
  },
  openGraph: {
    title: `${site.name} — Full Stack Web Developer`,
    description:
      'Portfolio of Ahnaf Shahriar Abir, Full Stack Web Developer specializing in React, Next.js, TypeScript, and robust backend systems.',
    url: site.url,
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: '/logo.webp',
        width: 800,
        height: 800,
        alt: `${site.name} — Full Stack Web Developer`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Full Stack Web Developer`,
    description:
      'Portfolio of Ahnaf Shahriar Abir, Full Stack Web Developer specializing in React, Next.js, TypeScript, and robust backend systems.',
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};
