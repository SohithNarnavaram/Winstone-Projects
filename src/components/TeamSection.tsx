import { Card } from "@/components/ui/card";
import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";
import professionalPattern from "@/assets/professional-pattern.jpg";

const TeamSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Learning Through Experience",
      description: "We believe in trial and error methodology, learning from every project and continuously improving our approach."
    },
    {
      icon: Users,
      title: "Growing Talents",
      description: "Building an amazing team by nurturing individual talents and fostering collaborative innovation."
    },
    {
      icon: Target,
      title: "Innovation Focus",
      description: "Strong emphasis on cutting-edge technology and modern design solutions in every project."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Committed to expanding our expertise and market presence while maintaining quality standards."
    }
  ];

  return (
    <section className="py-16 bg-black relative overflow-hidden">
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
        {/* Clean Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">Team & Culture</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-normal">
            Our <span style={{ color: '#ffbf00' }}>Philosophy</span>
          </h2>
          
          {/* Elegant Bar Design */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
            At Winstone Projects, we foster a culture of continuous learning, innovation, and collaboration. 
            Our team grows stronger through shared experiences and collective expertise.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="group bg-gray-700/30 backdrop-blur-xl border border-gray-600/50 rounded-2xl p-8 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 text-center transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="p-4 bg-yellow-400/10 rounded-2xl border border-yellow-400/20 w-fit mx-auto mb-6 shadow-lg">
                <value.icon className="w-8 h-8 text-yellow-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-gray-300 text-base leading-relaxed font-light">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Culture Statement */}
        <div className="mt-20">
          <Card className="bg-gray-700/20 backdrop-blur-xl border border-gray-600/30 p-12 rounded-2xl text-center max-w-5xl mx-auto shadow-2xl">
            <div className="space-y-6">
              <div className="w-16 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Culture</h3>
              <blockquote className="text-xl text-gray-300 leading-relaxed font-light italic">
                "Since inception, we have embraced learning through experience and trial & error. 
                This philosophy has helped us grow talents into an amazing team that drives innovation 
                and excellence in every project we undertake."
              </blockquote>
              <div className="w-16 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;