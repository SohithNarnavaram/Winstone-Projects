import React from 'react';

const InfiniteScrollLogos = () => {
  // Company logos data based on provided images
  const companies = [
    { 
      name: 'ALDAR', 
      logo: '/logos/aldar-logo-png_seeklogo-425039.png',
      description: 'Property Development',
      website: 'https://www.aldar.com'
    },
    { 
      name: 'BINGHATTI', 
      logo: '/logos/binghatti.webp',
      description: 'Real Estate',
      website: 'https://www.binghatti.com'
    },
    { 
      name: 'DAMAC', 
      logo: '/logos/damac.png',
      description: 'Luxury Development',
      website: 'https://www.damacproperties.com'
    },
    { 
      name: 'DANUBE', 
      logo: '/logos/Danube_Properties.png',
      description: 'Real Estate Development',
      website: 'https://www.danubeproperties.com'
    },
    { 
      name: 'ELLINGTON', 
      logo: '/logos/Ellington-Logo_Black-2.png',
      description: 'Property Development',
      website: 'https://www.ellingtonproperties.com'
    },
    { 
      name: 'EMAAR', 
      logo: '/logos/emaar.png',
      description: 'Master Developer',
      website: 'https://www.emaar.com'
    },
    { 
      name: 'MAG', 
      logo: '/logos/mag.png',
      description: 'Real Estate',
      website: 'https://www.mag.ae'
    },
    { 
      name: 'MERAAS', 
      logo: '/logos/meraas.png',
      description: 'Diversified Holdings',
      website: 'https://www.meraas.com'
    },
    { 
      name: 'NAKHEEL', 
      logo: '/logos/nakheel.png',
      description: 'Master Developer',
      website: 'https://www.nakheel.com'
    },
    { 
      name: 'OMNIYAT', 
      logo: '/logos/ominyat.png',
      description: 'Property Development',
      website: 'https://www.omniyat.com'
    },
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-8 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/5 to-transparent"></div>
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/20"></div>
      </div>
      
      <div className="relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">Strategic Partnerships</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Trusted by <span className="text-yellow-400">Industry Leaders</span>
          </h2>
          
          {/* Enhanced Elegant Bar Design */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="w-32 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 25px rgba(255, 191, 0, 0.6)' }}></div>
            <div className="w-32 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Collaborating with leading companies across the Middle East and beyond, 
            delivering excellence in every partnership
          </p>
        </div>

        {/* Enhanced Infinite Scroll Container */}
        <div className="relative">
          {/* Enhanced gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-900 via-gray-900/80 to-transparent z-20"></div>
          
          {/* Scrolling logos with enhanced styling */}
          <div className="flex animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-4 flex items-center justify-center"
                style={{ minWidth: '200px' }}
              >
                <div className="group relative">
                  {/* Enhanced logo container */}
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-56 h-32 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:border-yellow-400/60 group-hover:bg-gray-800/50 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-yellow-400/10 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={`w-auto h-auto object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300 ${
                        company.name === 'ELLINGTON' ? 'max-h-20 max-w-40' : 'max-h-36 max-w-72'
                      }`}
                      loading="lazy"
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    <span className="sr-only">{company.name}</span>
                  </a>
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-yellow-400/10 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{ boxShadow: '0 0 30px rgba(255, 191, 0, 0.1)' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Enhanced CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 39s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        /* Smooth transitions for all elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default InfiniteScrollLogos;
