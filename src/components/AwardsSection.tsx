import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Medal, MapPin, Calendar } from "lucide-react";
import awardsShowcase from "@/assets/awards-showcase.jpg";
import professionalPattern from "@/assets/professional-pattern.jpg";

const AwardsSection = () => {
  const awards = [
    {
      year: "2023",
      title: "Excellence in Real Estate Development",
      organization: "NAR India (National Association of Realtors)",
      description: "Recognition for outstanding achievements in luxury real estate development and innovative architectural solutions.",
      icon: Trophy,
      featured: true,
      location: "Mumbai, India",
      category: "Real Estate"
    },
    {
      year: "2022",
      title: "Sustainable Development Excellence",
      organization: "CREDAI (Confederation of Real Estate Developers' Associations of India)",
      description: "Recognized for implementing eco-friendly practices and sustainable construction methodologies in luxury developments.",
      icon: Star,
      featured: false,
      location: "New Delhi, India",
      category: "Sustainability"
    },
    {
      year: "2021",
      title: "Innovation in Design Excellence",
      organization: "Karnataka Real Estate Regulatory Authority",
      description: "Acknowledged for pioneering design-driven architecture and technology-integrated development projects.",
      icon: Award,
      featured: false,
      location: "Bangalore, India",
      category: "Innovation"
    },
    {
      year: "2020",
      title: "Young Entrepreneur Award",
      organization: "Bangalore Chamber of Commerce",
      description: "Recognized for establishing successful real estate ventures and contributing to urban development.",
      icon: Medal,
      featured: false,
      location: "Bangalore, India",
      category: "Leadership"
    },
  ];

  return (
    <section id="awards" className="py-16 bg-black relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${professionalPattern})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>
      
      {/* Awards Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 opacity-8">
        <img 
          src={awardsShowcase} 
          alt="Professional awards and recognition"
          className="w-full h-full object-cover rounded-l-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">Recognition</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-normal">
            Awards & <span style={{ color: '#ffbf00' }}>Achievements</span>
          </h2>
          
          {/* Elegant Bar Design */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Recognition for exceptional achievements in luxury real estate development, innovative design, 
            and outstanding contributions to the industry by leading organizations including NAR India and CREDAI.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border rounded-xl transition-all duration-300 ${
                award.featured 
                  ? 'lg:col-span-2 bg-gray-800/30 backdrop-blur-xl border-yellow-400/50 p-10 shadow-2xl' 
                  : 'bg-gray-800/30 backdrop-blur-xl border-gray-700/50 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10 p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2'
              }`}
            >
              {/* Background glow for featured award */}
              {award.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-50"></div>
              )}
              
              <div className="relative z-10">
                <div className="flex items-start gap-5">
                  {/* Icon and Year */}
                  <div className="flex flex-col items-center space-y-2.5">
                    <div className={`p-4 rounded-2xl border shadow-lg ${
                      award.featured 
                        ? 'bg-yellow-400/10 border-yellow-400/30' 
                        : 'bg-yellow-400/10 border-yellow-400/20'
                    }`}>
                      {(() => {
                        const IconComponent = award.icon;
                        return <IconComponent className={`text-yellow-400 ${award.featured ? 'w-8 h-8' : 'w-6 h-6'}`} />;
                      })()}
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`border-gray-600/50 text-gray-300 font-medium backdrop-blur-sm ${
                        award.featured ? 'text-sm px-4 py-2' : 'text-xs px-3 py-1'
                      }`}
                    >
                      {award.year}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className={`font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300 ${
                        award.featured ? 'text-3xl' : 'text-xl'
                      }`}>
                        {award.title}
                      </h3>
                      <p className={`text-yellow-400 font-semibold mb-3 ${
                        award.featured ? 'text-lg' : 'text-base'
                      }`}>
                        {award.organization}
                      </p>
                    </div>
                    
                    <p className={`text-gray-300 leading-relaxed font-light ${
                      award.featured ? 'text-lg' : 'text-base'
                    }`}>
                      {award.description}
                    </p>

                    <div className="flex items-center gap-6 text-sm text-gray-400 pt-2">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {award.category}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {award.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Luxury Recognition Stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-3 p-6 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-xl">
              <div className="text-4xl font-black text-yellow-400">6+</div>
              <div className="text-sm text-gray-400 uppercase tracking-[0.2em] font-medium">Industry Awards</div>
            </div>
            <div className="space-y-3 p-6 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-xl">
              <div className="text-4xl font-black text-yellow-400">50+</div>
              <div className="text-sm text-gray-400 uppercase tracking-[0.2em] font-medium">Projects Delivered</div>
            </div>
            <div className="space-y-3 p-6 bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-xl">
              <div className="text-4xl font-black text-yellow-400">2</div>
              <div className="text-sm text-gray-400 uppercase tracking-[0.2em] font-medium">Market Regions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;