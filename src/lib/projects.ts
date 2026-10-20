export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  type: string;
  role: string;
  tech: string[];
  description: string;
  overview: string;
  architecture: string;
  implementation: string;
  stats: ProjectStat[];
  accent: string;
  myRole: string[];
  images: string[];
  hoverImage: string;
  github: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    slug: 'exammate',
    title: 'ExamMate',
    type: 'Academic Schedule & Routine Platform',
    role: 'Full Stack Developer',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'DaisyUI',
      'Better Auth',
      'MongoDB',
      'SheetJS',
      'jsPDF',
    ],
    description:
      'ExamMate turns university exam routines into a clear, personalized schedule. Upload an Excel routine or paste a Google Drive link, select your courses, and generate your schedule with one click, PDF export, or Google Calendar synchronization.',
    overview:
      'An academic productivity platform built to eliminate the stress of navigating massive multi-batch university exam schedules. Instead of manually cross-referencing multi-page spreadsheets, students upload their spreadsheet or provide a Google Drive link to immediately receive a filtered, student-specific exam calendar with instant cloud synchronization.',
    architecture:
      'Engineered with Next.js App Router and React. The file parsing pipeline utilizes SheetJS (xlsx) for rapid in-memory processing of XLSX, XLS, and CSV spreadsheets with intelligent course code and section matching. Google Drive API integration handles automated scanning of university shared routine files, while Better Auth manages Google OAuth 2.0 with calendar and drive scopes.',
    implementation:
      'Integrated Google Calendar API to allow students to sync exam sessions directly to their personal devices with automatic notifications. Built client-side high-fidelity export routines using jsPDF and HTML5 Canvas API for printing and PNG generation. Implemented case-insensitive course code search with chip filtering and zero persistent server file storage.',
    stats: [
      { value: '1-Click', label: 'Calendar sync' },
      { value: 'XLSX/CSV', label: 'In-memory parsing' },
      { value: 'PDF/PNG', label: 'Instant export' },
    ],
    accent: '#34D399',
    myRole: [
      'Designed and engineered the complete Next.js full-stack application with TypeScript and React.',
      'Implemented in-memory spreadsheet parsing supporting XLSX, XLS, and CSV files using SheetJS.',
      'Integrated Google Drive API and Google Calendar API for automated routine scanning and 1-click calendar sync.',
      'Configured secure OAuth 2.0 authentication flows using Better Auth with targeted scopes.',
      'Built custom client-side PDF generation using jsPDF and high-resolution PNG canvas rendering.',
      'Designed responsive dark editorial UI with accessible course filtering and chip management.',
    ],
    images: [
      '/Projects/exammate/1.webp',
      '/Projects/exammate/2.webp',
      '/Projects/exammate/3.webp',
    ],
    hoverImage: '/Projects/exammate/1.webp',
    github: 'https://github.com/codewarrior303/exammate',
    liveUrl: 'https://exammate-one.vercel.app/',
  },
  {
    id: 2,
    slug: 'bazardor',
    title: 'BazarDor',
    type: 'Daily Market Analytics Platform',
    role: 'Full Stack Developer',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Better Auth',
      'MongoDB',
    ],
    description:
      'A daily commodity price intelligence platform for Bangladesh, tracking real-time prices of essential goods, highlighting market price fluctuations, and categorizing market trends in a native Bengali user experience.',
    overview:
      'BazarDor brings market transparency to everyday grocery and commodity buyers in Bangladesh. It catalogs essential food items—rice, lentils, cooking oil, fish, meat, and vegetables—providing daily price benchmarks and identifying significant price hikes or drops.',
    architecture:
      'Built using Next.js App Router with server-rendered commodity lists and real-time category filtering. MongoDB stores timestamped commodity entries and category hierarchies. The authentication layer uses Better Auth with MongoDB adapter supporting Google SSO, GitHub SSO, and credential accounts.',
    implementation:
      'Engineered automatic price delta algorithms that highlight the top gainers and decliners on the front page. Created localized Bangla number formatting and clean statistical visualizations comparing minimum, average, and maximum retail prices across municipal wet markets.',
    stats: [
      { value: 'Daily', label: 'Market updates' },
      { value: '100%', label: 'Bangla-native UI' },
      { value: 'Multi-Auth', label: 'Better Auth (Google & GitHub)' },
    ],
    accent: '#F59E0B',
    myRole: [
      'Architected the full-stack web application using Next.js, React, and Tailwind CSS.',
      'Modeled MongoDB collections for categorized commodities, daily price updates, and price-change audits.',
      'Implemented server-rendered search, category filtering, and sorting by price trends.',
      'Built user authentication using Better Auth supporting OAuth (Google, GitHub) and email credentials.',
      'Created localized Bengali numerical parsing and dynamic market price comparison indicators.',
    ],
    images: [
      '/Projects/bazardor/1.webp',
      '/Projects/bazardor/2.webp',
      '/Projects/bazardor/3.webp',
      '/Projects/bazardor/4.webp',
      '/Projects/bazardor/5.webp',
    ],
    hoverImage: '/Projects/bazardor/1.webp',
    github: 'https://github.com/codewarrior303/BazarDor',
    liveUrl: 'https://bazardor-dun.vercel.app/',
  },
  {
    id: 3,
    slug: 'fitlog',
    title: 'FitLog',
    type: 'Fitness Tracker & Exercise Library',
    role: 'Frontend & Full Stack Engineer',
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS v4',
      'DaisyUI',
      'Cloudflare Workers',
      'LocalStorage Sync',
    ],
    description:
      'A high-performance dark gym companion to browse exercises across muscle groups, build your daily workout plan, and track training metrics in real-time.',
    overview:
      'FitLog is a dark-themed gym companion engineered for zero-friction lifting sessions. Users explore major compound and isolation movements, review step-by-step form cues, organize their daily routine (up to 5 key lifts), and monitor workout duration and caloric burn.',
    architecture:
      'Built with Next.js and React on Tailwind CSS v4. Leverages custom serverless Cloudflare Workers API endpoints for exercise catalog data, complemented by an offline-first caching mechanism to ensure workout routines never stall even in low-reception gym basements.',
    implementation:
      'Implemented responsive localStorage state management with cross-component custom event notifications (`fitlog-state-change`). Designed an athletic dark interface inspired by Figma design systems, featuring custom typography and animated stat counters.',
    stats: [
      { value: '0ms', label: 'Offline fallback' },
      { value: 'Edge API', label: 'Cloudflare Workers' },
      { value: 'Real-Time', label: 'Workout metrics' },
    ],
    accent: '#EF4444',
    myRole: [
      'Engineered the client architecture using Next.js, React, and Tailwind CSS v4.',
      'Constructed serverless API endpoints using Cloudflare Workers with resilient client fallbacks.',
      'Implemented reactive localStorage state synchronization with custom DOM event dispatchers.',
      'Designed the high-contrast dark gym interface adhering to Figma design tokens and mobile ergonomics.',
      'Created dynamic workout plan organizers with quotas, duration counters, and caloric estimation.',
    ],
    images: [
      '/Projects/fitlog/1.webp',
      '/Projects/fitlog/2.webp',
      '/Projects/fitlog/3.webp',
      '/Projects/fitlog/4.webp',
    ],
    hoverImage: '/Projects/fitlog/1.webp',
    github: 'https://github.com/codewarrior303/fitlog',
    liveUrl: 'https://fitlog-coral.vercel.app',
  },
  {
    id: 4,
    slug: 'devstack',
    title: 'DevStack',
    type: 'Developer Tooling & Stack Builder',
    role: 'Frontend Engineer',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'DaisyUI',
      'State Architecture',
    ],
    description:
      'An interactive web application designed for developers to discover modern software tools across Frontend, Backend, Databases, and DevOps, allowing them to compare technologies and assemble their personal development stack in real time.',
    overview:
      'DevStack helps developers overcome choice paralysis when planning their tech stacks. Users can browse categorized software technologies, evaluate pros and cons, assemble customized toolsets in real time, and share their architectural blueprints.',
    architecture:
      'Built as a client-side single page application with React, TypeScript, and Vite. Implements clean component separation between category filters, interactive tool selectors, and live stack summarizers with reactive state management.',
    implementation:
      'Designed responsive tool cards with category badges, interactive selection states, and live tech stack counter metrics. Styled with DaisyUI and Tailwind CSS v4 for clean contrast and fast render performance.',
    stats: [
      { value: '4+', label: 'Tech domains' },
      { value: 'React', label: 'Modern concurrent state' },
      { value: 'Instant', label: 'Interactive curation' },
    ],
    accent: '#3B82F6',
    myRole: [
      'Developed the interactive tool curation interface using React and TypeScript.',
      'Implemented dynamic filtering across frontend, backend, database, and DevOps domains.',
      'Engineered live stack summary state management and clipboard export features.',
      'Styled responsive components using Tailwind CSS v4 and DaisyUI.',
    ],
    images: [
      '/Projects/devstack/1.webp',
      '/Projects/devstack/2.webp',
      '/Projects/devstack/3.webp',
    ],
    hoverImage: '/Projects/devstack/1.webp',
    github: 'https://github.com/codewarrior303/devstack',
    liveUrl: 'https://devstack-pi.vercel.app',
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: projects[(idx - 1 + projects.length) % projects.length],
    next: projects[(idx + 1) % projects.length],
  };
}
