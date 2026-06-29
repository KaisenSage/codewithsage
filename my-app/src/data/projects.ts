export const projects = [
  {
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
    image: "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/IMG_5760.PNG",
    unoptimized: true,
    imageWidth: 1122,
    imageHeight: 1402,
    imageContainerClass:
      "relative flex h-80 sm:h-[22rem] w-full items-start justify-center overflow-hidden bg-[#0a100d] px-3 pt-3 sm:px-4 sm:pt-4",
    imageClass:
      "h-full w-auto max-w-[min(100%,300px)] object-contain object-top drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]",
    link: null,
  },
  {
    title: "Cinematography — Client Portfolio",
    description:
      "A dedicated cinematography & showreel portfolio website showcasing high-resolution stills and motion previews for a professional cinematographer. Clean, immersive layout optimized for visuals and storytelling.",
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
    title: "VirtualR - VR App Development Tools",
    description:
      "Built scalable backend services with Node.js to support project saving, loading, and collaboration.",
    stack: ["React", "TypeScript", "Node.js", "Three.js"],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/appshunter-io-gh3ZYeUZyYU-unsplash.jpg",
    link: {
      url: "https://virtual-r-seven.vercel.app/",
      label: "View Project",
    },
  },
  {
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
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    image:
      "https://pub-323e019863a3440ba6f23aaf494422d3.r2.dev/roberto-cortese-ejhjSZKTeeg-unsplash.jpg",
    link: null,
  },
  {
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

export type Project = (typeof projects)[number];
