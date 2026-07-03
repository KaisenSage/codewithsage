import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AudienceSection from "@/components/AudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import TechMarqueeFM from "@/components/TechMarqueeFM";
import AppearOnScroll from "@/components/AppearOnScroll";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Codewithsage - Build your dream website",
  description:
    "Building smart, beautiful digital products for tomorrow's businesses.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedWorks />
      <AppearOnScroll>
        <ServicesSection />
      </AppearOnScroll>
      <AppearOnScroll delay={0.04}>
        <PricingSection />
      </AppearOnScroll>
      <AppearOnScroll delay={0.06}>
        <AudienceSection />
      </AppearOnScroll>
      <AppearOnScroll delay={0.08}>
        <TestimonialsSection />
      </AppearOnScroll>
      <AppearOnScroll delay={0.1}>
        <TechMarqueeFM/>
      </AppearOnScroll>
      <AppearOnScroll delay={0.06}>
        <Footer />
      </AppearOnScroll>
      <CookieConsent />
      
    </div>
  );
}