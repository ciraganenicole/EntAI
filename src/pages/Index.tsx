
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LanguageToggle from "@/components/LanguageToggle";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <LanguageToggle />
        <Hero />
        <Features />
        <Partners />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
