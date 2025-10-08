import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import InfiniteScrollLogos from "@/components/InfiniteScrollLogos";
import VenturesSection from "@/components/VenturesSection";
import AboutUsSection from "@/components/AboutUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Impact Metrics */}
      <ImpactMetrics />
      
      {/* Company Logos - Infinite Scroll */}
      <InfiniteScrollLogos />
      
      {/* Projects */}
      <VenturesSection />
      
      {/* About Us - Winstone Group & Executive Profile */}
      <AboutUsSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Team & Culture */}
      <TeamSection />
      
      {/* Awards */}
      <AwardsSection />
      
      {/* Contact */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold text-white">
                WINSTONE<span className="text-yellow-400">.</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Creating architectural experiences. Building tomorrow.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Winstone Projects LLP. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
