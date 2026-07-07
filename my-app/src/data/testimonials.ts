import { projects } from "./projects";
import type { Project } from "./projects";

export type PortfolioTestimonial = {
  project: Project;
  quote: string;
  clientName: string;
  clientRole: string;
};

/** Testimonials mapped to real portfolio projects */
export const portfolioTestimonials: PortfolioTestimonial[] = [
  {
    project: projects[1],
    quote:
      "Codewithsage understood what toréa needed from day one — a fashion store that feels premium, runs smoothly with Paystack, and gives our customers a shopping experience worth returning to.",
    clientName: "Ekeh Victoria",
    clientRole: "Founder, toréa",
  },
  {
    project: projects[2],
    quote:
      "Before Tillr, our operations were spread across too many tools. Now menus, orders, payments, and branch rules live in one dashboard — built for the pace of food service and retail.",
    clientName: "Amaka Okafor",
    clientRole: "Operations Director, Tillr",
  },
  {
    project: projects[0],
    quote:
      "We wanted an app as bold as our food — dark, polished, and effortless to use. Codewithsage delivered a delivery experience our customers enjoy from discovery to checkout to tracking.",
    clientName: "Chidi Okonkwo",
    clientRole: "Product Lead, Triple A African Foods",
  },
  {
    project: projects[3],
    quote:
      "The site had to feel cinematic before anyone pressed play. Codewithsage built a portfolio that puts the visuals first — clean, immersive, and worthy of the work it showcases.",
    clientName: "Ay Faisal",
    clientRole: "Cinematographer",
  },
  {
    project: projects[6],
    quote:
      "Our brand needed a store with real personality — not a generic template. Codewithsage built a sharp, responsive e-commerce experience that looks like Nexus and performs like it too.",
    clientName: "Daniel Eze",
    clientRole: "Brand Director, Nexus Clothing",
  },
];
