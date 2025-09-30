import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
      {/* Cinematic Background with Enhanced Visual Effects */}
      <div className="absolute inset-0">
        {/* Background video with image fallback */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover scale-105"
            src="/6467633-uhd_4096_2160_25fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster={heroBg}
            style={{ 
              position: 'absolute',
              top: '-80px', // Extend video behind navigation bar
              height: 'calc(100% + 80px)' // Add extra height to cover navigation area
            }}
          />
        </div>
        {/* Enhanced gradient overlays for depth and atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30"></div>
        
        {/* Enhanced animated particles and light effects */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full animate-float shadow-lg" style={{ backgroundColor: 'rgba(255, 191, 0, 0.7)', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 rounded-full animate-float" style={{ backgroundColor: 'rgba(255, 191, 0, 0.5)', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 rounded-full animate-float" style={{ backgroundColor: 'rgba(255, 191, 0, 0.6)', animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 rounded-full animate-float" style={{ backgroundColor: 'rgba(255, 191, 0, 0.4)', animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 rounded-full animate-float" style={{ backgroundColor: 'rgba(255, 191, 0, 0.5)', animationDelay: '4s' }}></div>
        </div>
        
        {/* Subtle architectural light streaks */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 191, 0, 0.3), transparent)' }}></div>
          <div className="absolute top-0 right-1/3 w-px h-full" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 191, 0, 0.2), transparent)' }}></div>
        </div>
      </div>

      {/* Main Content with Enhanced Typography */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Premium Badge */}
        <div className="mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
            <Sparkles className="w-4 h-4 mr-3 animate-pulse" style={{ color: '#ffbf00' }} />
            <span className="text-sm font-medium text-white/90 uppercase tracking-[0.2em]">
              Since 2018 - Luxury Real Estate Development
            </span>
          </div>
        </div>

        {/* Premium Main Title */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            <span className="block font-serif font-bold">Winstone</span>
            <span className="block font-serif font-bold" style={{ color: '#ffbf00' }}>Projects</span>
          </h1>
          
          {/* Elegant Bar Design */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
          </div>
          
          <div className="space-y-4">
            <p className="text-xl text-white font-medium">
              Premium Real Estate Developers
            </p>
            
            {/* Catchy Phrase */}
            <div className="mt-6">
              <p className="text-lg md:text-xl text-gray-200 font-light italic leading-relaxed max-w-3xl mx-auto">
                "Where architectural dreams meet reality, creating spaces that inspire and endure."
              </p>
            </div>
            
            <div className="mt-8">
              <p className="text-lg text-gray-300 font-normal">
                India & UAE Markets
              </p>
            </div>
          </div>
        </div>

        {/* Premium Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="group text-black font-bold px-10 py-4 rounded-xl shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            style={{ 
              background: 'linear-gradient(to right, #be9b3f, #ffbf00, #d4af37)',
              boxShadow: '0 25px 50px rgba(190, 155, 63, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #ffbf00, #e6c547, #ffbf00)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(255, 191, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #be9b3f, #ffbf00, #d4af37)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(190, 155, 63, 0.25)';
            }}
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                const navHeight = 80;
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <span className="flex items-center gap-3">
              View Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 rounded-xl backdrop-blur-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 191, 0, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const navHeight = 80;
                const elementPosition = element.offsetTop - navHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <span className="flex items-center gap-3">
              Get in Touch
              <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </span>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;