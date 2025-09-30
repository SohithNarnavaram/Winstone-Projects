import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT US", href: "#about-us" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "AWARDS", href: "#awards" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Clean Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        scrolled 
          ? 'bg-transparent backdrop-blur-2xl border-b border-white/10' 
          : 'bg-transparent backdrop-blur-none border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div 
              className="group cursor-pointer"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden relative" 
                     style={{ 
                       background: 'linear-gradient(135deg, #8B0000, #A52A2A)',
                       boxShadow: '0 6px 20px rgba(139, 0, 0, 0.3)',
                       border: 'none'
                     }}>
                  {/* Glitter Effects */}
                  <div className="absolute inset-0 pointer-events-none">
                    <Sparkles className="absolute top-1 left-1 w-2 h-2 text-yellow-300 animate-pulse opacity-70" />
                    <Sparkles className="absolute top-2 right-2 w-1.5 h-1.5 text-yellow-200 animate-bounce opacity-60" />
                    <Sparkles className="absolute bottom-2 left-2 w-1 h-1 text-yellow-400 animate-ping opacity-50" />
                    <Sparkles className="absolute bottom-1 right-1 w-2 h-2 text-yellow-300 animate-pulse opacity-70" />
                    <Sparkles className="absolute top-1/2 left-1 w-1 h-1 text-yellow-200 animate-bounce opacity-60" />
                    <Sparkles className="absolute top-1/2 right-1 w-1.5 h-1.5 text-yellow-400 animate-ping opacity-50" />
                  </div>
                  
                  <img 
                    src="/winstonelogo.jpg" 
                    alt="Winstone Logo" 
                    className="w-12 h-12 object-cover scale-125 -translate-y-0.5 relative z-10"
                    style={{ 
                      filter: 'none',
                      outline: 'none',
                      border: 'none'
                    }}
                  />
                </div>
                
                <div className="flex flex-col">
                  <span className={`font-bold text-xl tracking-tight transition-all duration-300 ${
                    scrolled ? 'text-white' : 'text-white'
                  }`}>
                    WINSTONE<span style={{ color: '#ffbf00' }}>.</span>
                  </span>
                  <span className={`text-xs font-medium tracking-wider uppercase -mt-1 transition-all duration-300 ${
                    scrolled ? 'text-gray-400' : 'text-gray-400'
                  }`}>
                    PROJECTS
                  </span>
                </div>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative text-sm font-medium transition-all duration-300 uppercase tracking-wider cursor-pointer ${
                    scrolled 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.href.substring(1));
                    if (element) {
                      const navHeight = 80; // Navigation bar height
                      const elementPosition = element.offsetTop - navHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Gold underline animation */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#ffbf00' }}></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="group relative px-8 py-3 rounded-lg font-bold text-black transition-all duration-300 hover:scale-105 border-0"
                style={{ 
                  background: '#ffbf00',
                  boxShadow: '0 4px 12px rgba(255, 191, 0, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ffd700';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 191, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffbf00';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 191, 0, 0.2)';
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
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10 rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Clean Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-down">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/10 backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-lg uppercase tracking-wider cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const element = document.getElementById(item.href.substring(1));
                    if (element) {
                      const navHeight = 80; // Navigation bar height
                      const elementPosition = element.offsetTop - navHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Gold underline animation for mobile */}
                  <span className="absolute bottom-0 left-4 w-0 h-0.5 transition-all duration-300 group-hover:w-[calc(100%-2rem)]" style={{ backgroundColor: '#ffbf00' }}></span>
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Button 
                  className="w-full py-4 rounded-lg font-bold text-black transition-all duration-300 hover:scale-105 border-0"
                  style={{ 
                    background: '#ffbf00',
                    boxShadow: '0 4px 12px rgba(255, 191, 0, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#ffd700';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 191, 0, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#ffbf00';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 191, 0, 0.2)';
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
                    setIsOpen(false);
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Navigation Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navigation;