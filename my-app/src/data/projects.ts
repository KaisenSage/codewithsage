export type Project = {
  shortTitle: string;
  category?: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  link: { url: string; label: string } | null;
  unoptimized?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  imageContainerClass?: string;
  imageClass?: string;
};

export const projects: Project[] = [
  {
    shortTitle: "Triple A App",
    category: "Mobile app",
    title: "Triple A African Foods - Food Delivery App",
    description:
      "A modern food delivery app concept focused on authentic Nigerian cuisine, designed with a clean dark UI and intuitive user experience. The app streamlines meal discovery, ordering, and real-time tracking through a visually engaging mobile flow.",
    stack: [
      "Mobile App ",
      "Android",
      "iOS",
      "React Native",
      "Flutter",
      "Order Tracking",
      "Dark UI",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20Jun%2024%2C%202026%2C%2008_52_37%20AM.png",
    link: null,
  },
  {
    shortTitle: "Toréa Fashion",
    category: "Ecommerce website",
    title: "toréa Fashion Commerce Platform",
    description:
      "A modern Nigeria-first fashion commerce platform built with Next.js, Clerk, Prisma, and Paystack. Seamless shopping, beautiful UI, and robust backend for a premium digital retail experience.",
    stack: [
      "Next.js",
      "TypeScript",
      "Clerk Auth",
      "Prisma ORM",
      "Paystack Integration",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    image:
      "https://pub-bd618a9723f54128a9dbd24698f83fba.r2.dev/Screenshot%202026-03-23%20at%2014.12.40.png",
    link: {
      url: "https://www.toréa.com",
      label: "View Project",
    },
  },
  {
    shortTitle: "Tillr",
    category: "Ecommerce website",
    title: "Tillr Commerce Engine",
    description:
      "A connected commerce platform for cafés, restaurants, and retail stores. Tillr unifies menus, catalogs, orders, payments, branch rules, real-time operations, and team access in one dashboard built for fast-moving businesses.",
    stack: [
      "Commerce Platform",
      "Catalog Management",
      "Multi-branch Operations",
      "QR Ordering",
      "Payments",
      "Real-time Orders",
      "Role-based Access",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/ChatGPT%20Image%20Jul%208%2C%202026%2C%2009_27_00%20AM.png",
    link: null,
  },
  {
    shortTitle: "Affadot Studios",
    category: "Portfolio website",
    title: "Affadot Studios — Creative Portfolio",
    description:
      "A dedicated creative portfolio website for Affadot Studios, showcasing high-resolution stills and motion previews through a clean, immersive layout built for visual storytelling.",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lightbox / Gallery",
      "Vimeo / YouTube embeds",
      "Accessibility-first components",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/Screenshot%202025-11-20%20at%2012.55.32.png",
    link: {
      url: "https://ay-faisal.vercel.app/",
      label: "View Project",
    },
  },
  {
    shortTitle: "Tandem Finance",
    category: "Finance app",
    title: "Tandem Finance Workspace - Multi-Currency Fintech & Payout Platform",
    description:
      "An enterprise-grade, full-stack finance platform for businesses to manage multi-currency balances, handle exchange rates, track transactions, and request cross-border payouts. It supports payout approval workflows, role-based permissions, audit logs, idempotent payment operations, webhook processing, and time-zone-aware transaction reporting, with a focus on financial correctness and backend reliability.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/Tandem%20Finance%20Workspace%20Hero.png",
    link: null,
  },
  {
    shortTitle: "MealPlan",
    category: "AI web app",
    title: "AI Powered MealPlan App",
    description:
      "Built a full-stack AI-powered web application that generates personalized weekly meal plans based on user preferences and dietary goals.",
    stack: [
      "Next.js",
      "TypeScript",
      "Clerk Auth",
      "PostgreSQL",
      "Prisma ORM",
      "React Query",
      "TailwindCSS",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/Screenshot%202025-07-07%20at%2020.07.18.png",
    link: { url: "https://mealplan-zeta.vercel.app/", label: "View Project" },
  },
  {
    shortTitle: "VirtualR",
    category: "VR development app",
    title: "VirtualR - VR App Development Tools",
    description:
      "Built scalable backend services with Node.js to support project saving, loading, and collaboration.",
    stack: ["React", "TypeScript", "Node.js", "Three.js"],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/appshunter-io-gh3ZYeUZyYU-unsplash.jpg",
    link: null,
  },
  {
    shortTitle: "Nexus",
    category: "Ecommerce website",
    title: "Nexus Clothing Brand",
    description:
      "Modern E-commerce platform for Nexus clothing brand featuring sleek product showcases, seamless shopping experience, and responsive design optimized for fashion retail.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "E-commerce Integration",
    ],
    image:
      "https://pub-b672d044d71842aeb4efd6d464298367.r2.dev/Screenshot%202026-01-01%20at%2019.10.06.png",
    link: null,
  },
  {
    shortTitle: "E-Commerce",
    category: "Ecommerce web app",
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/roberto-cortese-ejhjSZKTeeg-unsplash.jpg",
    link: null,
  },
  {
    shortTitle: "AirBnB",
    category: "Rental booking app",
    title: "AirBnB App",
    description:
      "Full-stack AirBnB platform to practice scalable web development using the MVC architecture.",
    stack: [
      "Python",
      "Flask",
      "MySQL",
      "HTML/CSS",
      "JavaScript",
      "jQuery",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/oberon-copeland-veryinformed-com-zq0K6AVDtu8-unsplash.jpg",
    link: null,
  },
  {
    shortTitle: "Landing Pages",
    category: "Landing page",
    title: "Landing Pages",
    description:
      "High-converting, fast-loading landing pages built with Next.js and TypeScript. Optimized for SEO and Core Web Vitals, styled with Tailwind CSS, and enhanced with lightweight animations and serverless lead-capture endpoints.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Framer Motion (or CSS animations)",
      "SEO tooling (next-seo, sitemap generation)",
      "Analytics (GA4, Plausible or Fathom)",
    ],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/team-nocoloco-IMuwMQV92zA-unsplash.jpg",
    link: null,
  },
];
