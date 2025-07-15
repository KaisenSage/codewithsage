import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import AudienceSection from "@/components/AudienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <AudienceSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}