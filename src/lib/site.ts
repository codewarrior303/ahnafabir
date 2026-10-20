export const site = {
  name: 'Ahnaf Shahriar Abir',
  firstName: 'Ahnaf',
  lastName: 'Abir',
  handle: 'codewarrior303',
  brand: 'ahnaf.dev',
  email: 'abirahnafshahriar@gmail.com',
  location: 'Gazipur, Dhaka, Bangladesh',
  timeZone: 'Asia/Dhaka',
  timeZoneLabel: 'BST',
  url: 'https://codewarrior303.github.io/abir',
  tagline: 'Full Stack Web Developer & Backend Enthusiast crafting fast, responsive digital products.',
  roles: [
    'Full Stack Developer',
    'React & Next.js Engineer',
    'Backend Enthusiast',
  ],
} as const;

export type SocialKey = 'github' | 'linkedin' | 'instagram' | 'source';

export const socials: Record<SocialKey, { label: string; href: string }> = {
  github: { label: 'GitHub', href: 'https://github.com/codewarrior303' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahnaf-shahriar-abir/' },
  instagram: { label: 'Instagram', href: 'https://instagram.com/' },
  source: { label: 'Source Code', href: 'https://github.com/codewarrior303' },
};

export const socialList: Array<{ label: string; href: string }> = [
  socials.linkedin,
  socials.github,
  socials.instagram,
  socials.source,
];

export const navLinks = [
  { name: 'Home', href: '/#top', menuOnly: true },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
] as const;
