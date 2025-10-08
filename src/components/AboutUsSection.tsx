import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Globe, Award, Users, Target, TrendingUp, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import winstoneFoundation from "@/assets/winstone-foundation.jpg";
import winstoneMotors from "@/assets/winstone-motors.jpg";
import winstoneProjects from "@/assets/winstone-projects.jpg";
import nayazHero from "@/assets/nayaz_hero.jpg";

const AboutUsSection = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(2); // Start with middle member featured
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const teamMembers = [
    {
      name: "Soukaina Benchadli",
      title: "PROPERTY CONSULTANT",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face&auto=format&q=80",
      description: "Expert in luxury real estate with over 8 years of experience in premium property development."
    },
    {
      name: "Ahmed Al-Rashid", 
      title: "SENIOR PROJECT MANAGER",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face&auto=format&q=80",
      description: "Leading complex development projects with a focus on innovative design and sustainable practices."
    },
    {
      name: "Priya Sharma",
      title: "ARCHITECTURAL DESIGNER", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face&auto=format&q=80",
      description: "Creative visionary specializing in luxury residential and commercial architectural solutions."
    },
    {
      name: "Michael Chen",
      title: "INVESTMENT ADVISOR",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face&auto=format&q=80", 
      description: "Strategic advisor with expertise in real estate investment and market analysis across India and UAE."
    },
    {
      name: "Sarah Johnson",
      title: "CLIENT RELATIONS DIRECTOR",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face&auto=format&q=80",
      description: "Building lasting relationships with high-net-worth clients and ensuring exceptional service delivery."
    }
  ];

  const nextTeamSlide = () => {
    setCurrentTeamIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
  };

  const prevTeamSlide = () => {
    setCurrentTeamIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
    setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
  };

  const goToTeamSlide = (index: number) => {
    setCurrentTeamIndex(index);
    setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentTeamIndex((prevIndex) => 
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500); // Change slide every 1.5 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, teamMembers.length]);

  // Resume auto-scroll after user interaction
  useEffect(() => {
    if (!isAutoScrolling) {
      const timeout = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 8000); // Resume auto-scroll after 8 seconds of inactivity

      return () => clearTimeout(timeout);
    }
  }, [isAutoScrolling]);

  const getVisibleTeamMembers = () => {
    const visibleCount = 5;
    const members = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentTeamIndex - 2 + i + teamMembers.length) % teamMembers.length;
      members.push({
        ...teamMembers[index],
        originalIndex: index,
        position: i
      });
    }
    
    return members;
  };

  const groupCompanies = [
    {
      name: "Winstone Projects LLP",
      description: "Premium real estate development and township projects",
      icon: Building2,
      image: winstoneProjects,
      focus: "Real Estate Development"
    },
    {
      name: "Winstone Motors",
      description: "Luxury automotive dealership and services",
      icon: TrendingUp,
      image: winstoneMotors,
      focus: "Automotive Excellence"
    },
    {
      name: "Winstone Foundation",
      description: "Social impact and community development initiatives",
      icon: Users,
      image: winstoneFoundation,
      focus: "Social Impact"
    }
  ];

  const achievements = [
    { number: "6+", label: "Years of Excellence", icon: Award },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "3", label: "Group Companies", icon: Building2 },
    { number: "2", label: "Countries", icon: Globe },
  ];

  const values = [
    "Innovation & Technology",
    "Quality Excellence",
    "Customer-Centric Approach",
    "Sustainable Development",
    "Global Expansion",
    "Community Impact"
  ];

  return (
    <section id="about-us" className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        
        {/* Subtle architectural light streaks */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 191, 0, 0.3), transparent)' }}></div>
          <div className="absolute top-0 right-1/3 w-px h-full" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 191, 0, 0.2), transparent)' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">About Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            The <span style={{ color: '#ffbf00' }}>Winstone Group</span>
          </h2>
          
          {/* Elegant Bar Design */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            A diversified conglomerate committed to excellence across multiple industries, 
            creating lasting value and meaningful impact in every venture we undertake.
          </p>
        </div>

        {/* Group Overview */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Building Tomorrow's <span style={{ color: '#ffbf00' }}>Legacy</span>
                </h3>
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Founded in 2018, the Winstone Group has rapidly evolved into a dynamic 
                    conglomerate with a clear vision: to redefine excellence across diverse 
                    industries while maintaining our core values of innovation, quality, and 
                    customer satisfaction.
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    From premium real estate development to luxury automotive services and 
                    community-focused social initiatives, we believe in creating comprehensive 
                    value that extends beyond business success to meaningful community impact.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Our Core Values</h4>
                <div className="grid grid-cols-2 gap-3">
                  {values.map((value, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-sm px-4 py-2 border-gray-600/50 text-gray-300 hover:bg-gray-600/20 hover:text-white hover:border-gray-500/50 transition-all duration-500 font-medium backdrop-blur-sm rounded-lg transform hover:scale-105"
                    >
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-8 bg-gray-700/30 backdrop-blur-xl border border-gray-600/50 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-500 transform hover:scale-105">
                  <achievement.icon className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-sm text-gray-300 font-medium">{achievement.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Group Companies */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Our <span style={{ color: '#ffbf00' }}>Companies</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Three distinct entities, one unified vision of excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groupCompanies.map((company, index) => (
              <Card key={index} className="group bg-gray-800/50 backdrop-blur-xl border border-gray-600/50 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={company.image} 
                    alt={company.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <company.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-yellow-400 uppercase tracking-wider">
                      {company.focus}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{company.name}</h4>
                  <p className="text-gray-300 leading-relaxed">{company.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="bg-gray-700/20 backdrop-blur-xl border border-gray-600/30 p-12 rounded-2xl shadow-2xl text-center">
          <div className="space-y-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto"></div>
            <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
            <blockquote className="text-xl text-gray-300 leading-relaxed font-light italic max-w-4xl mx-auto">
              "To create exceptional value across diverse industries through innovation, 
              quality, and unwavering commitment to excellence. We strive to build not just 
              businesses, but legacies that inspire and endure for generations to come."
            </blockquote>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto"></div>
          </div>
        </Card>

        {/* Executive Profile Section */}
        <div className="mt-16">
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
                <Card className="text-center p-6 bg-gray-700/30 backdrop-blur-xl border border-gray-600/50 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-500 transform hover:scale-105">
                  <Award className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                  <div className="text-xl font-semibold text-white mb-1">6+</div>
                  <div className="text-xs text-gray-300 font-medium">Years of Excellence</div>
                </Card>
                <Card className="text-center p-6 bg-gray-700/30 backdrop-blur-xl border border-gray-600/50 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-500 transform hover:scale-105">
                  <Target className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                  <div className="text-xl font-semibold text-white mb-1">50+</div>
                  <div className="text-xs text-gray-300 font-medium">Projects Completed</div>
                </Card>
                <Card className="text-center p-6 bg-gray-700/30 backdrop-blur-xl border border-gray-600/50 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-500 transform hover:scale-105">
                  <Users className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                  <div className="text-xl font-semibold text-white mb-1">2000+</div>
                  <div className="text-xs text-gray-300 font-medium">Lives Impacted</div>
                </Card>
              </div>

              {/* Know More Button */}
              <div className="text-center mt-8">
                <Button 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 border-0"
                  size="lg"
                  onClick={() => window.open('https://www.nayazfaiyazahmed.com', '_blank')}
                >
                  Know More
                </Button>
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
                  {[
                    "Luxury Real Estate",
                    "Design-Driven Architecture",
                    "Technology Integration",
                    "Premium Development",
                    "Global Expansion",
                    "Award-Winning Projects"
                  ].map((quality, index) => (
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

        {/* Meet Our Team Section */}
        <div className="mt-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">Meet Our Team</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Our <span style={{ color: '#ffbf00' }}>Expert Team</span>
            </h2>
            
            {/* Elegant Bar Design */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
              <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
              <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Meet the dedicated professionals who bring expertise, innovation, and passion to every project we undertake.
            </p>
          </div>

          {/* Team Carousel with Overlapping Cards */}
          <div className="relative">
            <div className="flex items-center justify-center min-h-[500px]">
              {getVisibleTeamMembers().map((member, displayIndex) => {
                const isCurrent = displayIndex === 2; // Center position
                const isLeft = displayIndex < 2;
                const isRight = displayIndex > 2;
                
                // Scaling based on distance from center
                let scale = 'scale-100';
                if (isCurrent) {
                  scale = 'scale-125';
                } else if (displayIndex === 1 || displayIndex === 3) {
                  scale = 'scale-90';
                } else {
                  scale = 'scale-75';
                }
                
                const zIndex = isCurrent ? 50 : 40 - Math.abs(displayIndex - 2) * 10;
                const opacity = isCurrent ? 'opacity-100' : 'opacity-80';
                const grayscale = isCurrent ? 'grayscale-0' : 'grayscale';
                
                // Calculate horizontal offset for overlapping effect
                let translateX = 0;
                if (isLeft) {
                  translateX = (displayIndex - 2) * 140; // Left side
                } else if (isRight) {
                  translateX = (displayIndex - 2) * 140; // Right side
                }

                // Slight vertical offset for depth
                const translateY = isCurrent ? 0 : 10;

                return (
                  <div
                    key={`${member.originalIndex}-${displayIndex}`}
                    className={`absolute transition-all duration-700 ease-out cursor-pointer ${scale} ${opacity} transform-gpu`}
                    style={{ 
                      transform: `translateX(${translateX}px) translateY(${translateY}px)`,
                      zIndex: zIndex
                    }}
                    onClick={() => goToTeamSlide(member.originalIndex)}
                  >
                    {/* Team Member Card */}
                    <Card className={`overflow-hidden shadow-2xl relative border-gray-600/30 transition-all duration-700 ease-out transform-gpu ${
                      isCurrent 
                        ? 'w-80 h-96 border-yellow-400/50 shadow-yellow-400/20' 
                        : 'w-72 h-80 border-gray-600/20'
                    }`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover transition-all duration-700 ease-out ${grayscale}`}
                      />
                      
                      {/* Subtle overlay for non-current slides */}
                      {!isCurrent && (
                        <div className="absolute inset-0 bg-black/20 transition-all duration-700"></div>
                      )}
                      
                      {/* Gradient overlay for consistency */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-800/40 to-transparent"></div>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* Team Member Info - Only show for current member */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#ffbf00' }}>
                {teamMembers[currentTeamIndex].name}
              </h3>
              <p className="text-white text-sm font-medium uppercase tracking-wider">
                {teamMembers[currentTeamIndex].title}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTeamSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 hover:bg-gray-600/50 transition-all duration-300 z-40"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTeamSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-black transition-all duration-300 z-40 shadow-lg"
              style={{ 
                backgroundColor: '#ffbf00',
                boxShadow: '0 0 20px rgba(255, 191, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 191, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 191, 0, 0.3)';
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-12 space-x-3">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTeamSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTeamIndex 
                      ? 'scale-125' 
                      : 'hover:bg-gray-400'
                  }`}
                  style={{ 
                    backgroundColor: index === currentTeamIndex ? '#ffbf00' : 'rgb(75, 85, 99)' 
                  }}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="px-8 py-3 bg-transparent border-2 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ 
                borderColor: '#ffbf00',
                boxShadow: '0 0 20px rgba(255, 191, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#ffbf00';
                e.currentTarget.style.color = 'black';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 191, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 191, 0, 0.1)';
              }}
            >
              View All Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
