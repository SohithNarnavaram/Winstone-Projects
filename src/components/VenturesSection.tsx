import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Car, Heart, Sparkles, Play, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import winstoneProjectsImg from "@/assets/winstone-projects.jpg";
import winstoneMotorsImg from "@/assets/winstone-motors.jpg";
import winstoneFoundationImg from "@/assets/winstone-foundation.jpg";
import professionalPattern from "@/assets/professional-pattern.jpg";

const VenturesSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const ventures = [
    {
      id: 'affordable-luxury-villas',
      name: "Affordable Luxury Villas",
      icon: Building2,
      description: "Premium villas designed with modern aesthetics and cutting-edge technology, creating luxury living experiences at affordable prices across prime Bangalore locations.",
      highlights: ["Modern architectural design", "Technology integration", "Prime Bangalore locations"],
      image: winstoneProjectsImg,
      category: "Residential",
      status: "Active",
      year: "2020"
    },
    {
      id: 'farms-lifestyle-properties',
      name: "Farms & Lifestyle Properties",
      icon: Car,
      description: "Unique farm and lifestyle properties that blend luxury with nature, offering premium country living experiences with modern amenities and thoughtful design.",
      highlights: ["Farm developments", "Lifestyle communities", "Premium country living"],
      image: winstoneMotorsImg,
      category: "Lifestyle",
      status: "Active",
      year: "2021"
    },
    {
      id: 'residential-townships',
      name: "Residential Townships",
      icon: Heart,
      description: "Comprehensive residential townships around Bangalore featuring modern amenities, sustainable planning, and community-focused development with luxury standards.",
      highlights: ["Township planning", "Modern amenities", "Community focus"],
      image: winstoneFoundationImg,
      category: "Township",
      status: "Active",
      year: "2019"
    },
  ];

  return (
    <section id="projects" className="py-16 bg-black relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-normal">
            Our <span style={{ color: '#ffbf00' }}>Projects</span>
          </h2>
          
          {/* Elegant Bar Design */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
          </div>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Specialized portfolio of luxury real estate developments across India and UAE, focusing on 
            residential, commercial, and leisure properties with premium design-driven architecture.
          </p>
        </div>

        {/* Cinematic Project Showcase */}
        <div className="mb-16">
          {/* Featured Project Display */}
          <div className="relative mb-12">
            <Card className="group relative overflow-hidden bg-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-96 lg:h-[500px] overflow-hidden">
                  <img 
                    src={ventures[activeProject].image} 
                    alt={`${ventures[activeProject].name} showcase`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      size="lg"
                      className="w-16 h-16 bg-yellow-400/20 backdrop-blur-xl border border-yellow-400/30 rounded-full hover:bg-yellow-400/30 transition-all duration-300 group/play"
                    >
                      <Play className="w-6 h-6 text-yellow-400 group-hover/play:scale-110 transition-transform" />
                    </Button>
                  </div>

                  {/* Project Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-yellow-400/20 backdrop-blur-xl border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full font-medium">
                      {ventures[activeProject].category}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
                          {(() => {
                            const IconComponent = ventures[activeProject].icon;
                            return <IconComponent className="w-6 h-6 text-yellow-400" />;
                          })()}
                        </div>
                        <div>
                          <span className="text-sm text-gray-400 font-medium">{ventures[activeProject].year}</span>
                          <span className="text-sm text-green-400 font-medium ml-2">• {ventures[activeProject].status}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                        {ventures[activeProject].name}
                      </h3>
                      
                      <p className="text-lg text-gray-300 leading-relaxed font-light">
                        {ventures[activeProject].description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-3">
                      {ventures[activeProject].highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-300 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Link to={`/project/${ventures[activeProject].id}`}>
                        <Button 
                          className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
                        >
                          <span className="flex items-center gap-2">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </Button>
                      </Link>
                      <Button 
                        variant="outline"
                        className="border border-gray-600 text-gray-300 hover:bg-yellow-400/10 hover:border-yellow-400/30 hover:text-yellow-400 px-6 py-3 rounded-xl transition-all duration-300"
                      >
                        <span className="flex items-center gap-2">
                          View Details
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Project Navigation */}
          <div className="flex justify-center gap-4">
            {ventures.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject 
                    ? 'bg-yellow-400 shadow-lg shadow-yellow-400/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ventures.map((venture, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer bg-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-6 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 relative overflow-hidden ${
                index === activeProject ? 'ring-2 ring-yellow-400/30' : ''
              }`}
              onClick={() => setActiveProject(index)}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
                    <venture.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-600 shadow-lg">
                    <img 
                      src={venture.image} 
                      alt={`${venture.name} showcase`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {venture.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm font-light">
                      {venture.description}
                    </p>
                  </div>

                  {/* Category Badge */}
                  <Badge className="bg-gray-700/50 text-gray-300 border-gray-600 text-xs">
                    {venture.category}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Luxury Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <Link to="/projects">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-600 text-black font-bold px-12 py-4 rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                View All Projects
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </Link>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenturesSection;