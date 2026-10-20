import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedWorks, { MoreSelectedWorks } from "@/components/FeaturedWorks";
import WhyCodewithsage from "@/components/WhyCodewithsage";
import HowWeWork from "@/components/HowWeWork";
import FounderStory from "@/components/FounderStory";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeFaq from "@/components/HomeFaq";
import Footer from "@/components/Footer";
import TechMarqueeFM from "@/components/TechMarqueeFM";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Codewithsage - Build your dream website",
  description:
    "Codewithsage designs and builds thoughtful websites, web apps, and digital products around real business needs.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedWorks />
      <WhyCodewithsage />
      <HowWeWork />
      <MoreSelectedWorks />
      <FounderStory />
      <TestimonialsSection />
      <TechMarqueeFM />
      <HomeFaq />
      <Footer />
    </div>
  );
}