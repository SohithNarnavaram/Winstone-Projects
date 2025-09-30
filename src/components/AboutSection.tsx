import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Award, Users, Target } from "lucide-react";
// Using nayaz_hero.jpg from public folder
import professionalPattern from "@/assets/professional-pattern.jpg";
import nayazHero from "@/assets/nayaz_hero.jpg";

const AboutSection = () => {
  const stats = [
    { number: "6+", label: "Years of Excellence", icon: Award },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "2000+", label: "Lives Impacted", icon: Users },
  ];

  const qualities = [
    "Luxury Real Estate",
    "Design-Driven Architecture",
    "Technology Integration",
    "Premium Development",
    "Global Expansion",
    "Award-Winning Projects"
  ];

  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${professionalPattern})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image and Stats */}
          <div className="space-y-6 mt-20">
            {/* Name and Title */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Nayaz Faiyaz Ahmed
              </h3>
              <p className="text-lg text-yellow-400 font-medium">
                Founder & Chairman
              </p>
            </div>
            
            {/* Portrait */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-border/20 shadow-hero">
                <img 
                  src={nayazHero} 
                  alt="Mr. Nayaz Faiyaz Ahmed - Founder & Chairman"
                  className="w-full h-[500px] object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/40 to-transparent"></div>
              </div>
              
              {/* Professional Quote */}
              <Card className="absolute -bottom-6 -right-6 bg-gray-800/95 backdrop-blur-xl border border-gray-600/50 p-6 max-w-sm shadow-2xl">
                <Quote className="w-5 h-5 text-yellow-400 mb-2" />
                <p className="text-sm text-gray-300 font-medium">
                  "Excellence is not a destination, but a journey of continuous innovation and meaningful impact."
                </p>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-24">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 bg-gray-700/30 backdrop-blur-xl border border-gray-600/50 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-500 transform hover:scale-105">
                  <stat.icon className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                  <div className="text-xl font-semibold text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-300 font-medium">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Luxury Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">Executive Profile</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                Visionary <span style={{ color: '#ffbf00' }}>Leadership</span>
              </h2>
              
              {/* Elegant Bar Design */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
                <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
                <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
              </div>
            </div>

            {/* Luxury Story */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed font-normal">
                  Born in Bangalore, Nayaz Faiyaz Ahmed made an early decision to pursue real estate despite having 
                  a different academic background. Since 2017, he has dedicated himself to mastering all aspects of 
                  the real estate business, founding Winstone Projects LLP in 2018.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed font-normal">
                  Through facing competition, fraud, and various challenges, he built remarkable resilience. Today, 
                  he manages property development and township projects in Bangalore while successfully expanding into 
                  the UAE market, with ambitious plans for global growth in luxury real estate development.
                </p>
              </div>
              
              {/* Luxury Divider */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-gray-500 shadow-lg"></div>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
              </div>
            </div>

            {/* Luxury Core Qualities */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Core Leadership Qualities</h3>
              <div className="grid grid-cols-2 gap-3">
                {qualities.map((quality, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm px-4 py-2 border-gray-600/50 text-gray-300 hover:bg-gray-600/20 hover:text-white hover:border-gray-500/50 transition-all duration-500 font-medium backdrop-blur-sm rounded-lg transform hover:scale-105"
                  >
                    {quality}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Luxury Mission Statement */}
            <Card className="bg-gray-700/20 backdrop-blur-xl border border-gray-600/30 p-10 rounded-2xl shadow-2xl">
              <div className="space-y-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                <h3 className="text-xl font-bold text-white mb-4">Mission Statement</h3>
                <blockquote className="text-lg text-gray-300 leading-relaxed font-light italic">
                  "Homes should be more than just spaces to live in; they should be architectural experiences. 
                  We deliver modern and thoughtful design combined with cutting-edge technology to create 
                  premium properties that stand the test of time."
                </blockquote>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;