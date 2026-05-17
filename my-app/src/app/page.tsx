import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AudienceSection from "@/components/AudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import TechMarqueeFM from "@/components/TechMarqueeFM";
import AppearOnScroll from "@/components/AppearOnScroll";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <HeroSection />
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