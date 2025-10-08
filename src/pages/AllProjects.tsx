import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, Car, Heart, MapPin, Calendar, Users, Star } from 'lucide-react';
import ProjectNavigation from '@/components/ProjectNavigation';

const AllProjects = () => {
  const projects = [
    {
      id: 'affordable-luxury-villas',
      name: 'Affordable Luxury Villas',
      icon: Building2,
      description: 'Premium villas designed with modern aesthetics and cutting-edge technology, creating luxury living experiences at affordable prices across prime Bangalore locations.',
      image: '/src/assets/winstone-projects.jpg',
      category: 'Residential',
      status: 'Active',
      year: '2020',
      location: 'Bangalore, India',
      units: '150+',
      priceRange: '₹2.5Cr - ₹4.5Cr',
      highlights: ['Modern architectural design', 'Technology integration', 'Prime Bangalore locations']
    },
    {
      id: 'farms-lifestyle-properties',
      name: 'Farms & Lifestyle Properties',
      icon: Car,
      description: 'Unique farm and lifestyle properties that blend luxury with nature, offering premium country living experiences with modern amenities and thoughtful design.',
      image: '/src/assets/winstone-motors.jpg',
      category: 'Lifestyle',
      status: 'Active',
      year: '2021',
      location: 'Outskirts of Bangalore',
      units: '75+',
      priceRange: '₹1.8Cr - ₹3.2Cr',
      highlights: ['Farm developments', 'Lifestyle communities', 'Premium country living']
    },
    {
      id: 'residential-townships',
      name: 'Residential Townships',
      icon: Heart,
      description: 'Comprehensive residential townships featuring integrated communities with world-class amenities, green spaces, and modern infrastructure for sustainable urban living.',
      image: '/src/assets/winstone-foundation.jpg',
      category: 'Township',
      status: 'Active',
      year: '2019',
      location: 'Bangalore & UAE',
      units: '500+',
      priceRange: '₹1.2Cr - ₹2.8Cr',
      highlights: ['Integrated township planning', 'World-class amenities', 'Green building certifications']
    },
    {
      id: 'luxury-apartments-dubai',
      name: 'Luxury Apartments Dubai',
      icon: Building2,
      description: 'Exclusive luxury apartments in prime Dubai locations, featuring panoramic city views, premium finishes, and world-class amenities for discerning residents.',
      image: '/src/assets/winstone-projects.jpg',
      category: 'Residential',
      status: 'Active',
      year: '2022',
      location: 'Dubai, UAE',
      units: '200+',
      priceRange: 'AED 2.5M - AED 5.5M',
      highlights: ['Prime Dubai locations', 'Panoramic city views', 'Premium finishes']
    },
    {
      id: 'commercial-spaces',
      name: 'Commercial Spaces',
      icon: Building2,
      description: 'Modern commercial developments featuring office spaces, retail outlets, and mixed-use facilities designed for business success and growth.',
      image: '/src/assets/winstone-motors.jpg',
      category: 'Commercial',
      status: 'Active',
      year: '2021',
      location: 'Bangalore & Dubai',
      units: '100+',
      priceRange: '₹50L - ₹2Cr',
      highlights: ['Modern office spaces', 'Retail outlets', 'Mixed-use facilities']
    },
    {
      id: 'smart-city-project',
      name: 'Smart City Project',
      icon: Heart,
      description: 'Innovative smart city development featuring IoT integration, sustainable energy solutions, and intelligent infrastructure for the future of urban living.',
      image: '/src/assets/winstone-foundation.jpg',
      category: 'Smart City',
      status: 'Planning',
      year: '2024',
      location: 'Bangalore',
      units: '1000+',
      priceRange: '₹1Cr - ₹3Cr',
      highlights: ['IoT integration', 'Sustainable energy', 'Intelligent infrastructure']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <ProjectNavigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-yellow-400/10 hover:border-yellow-400/30 hover:text-yellow-400">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Back to Homepage
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-8">
              <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">Our Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              All <span className="text-yellow-400">Projects</span>
            </h1>
            
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="w-32 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
              <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 25px rgba(255, 191, 0, 0.6)' }}></div>
              <div className="w-32 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            </div>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Explore our comprehensive portfolio of innovative real estate developments across India and UAE, 
              delivering excellence in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group bg-gray-800/30 backdrop-blur-xl border border-gray-600/50 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <project.icon className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm font-light mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-gray-400">Location</span>
                      </div>
                      <div className="text-sm font-semibold text-white">{project.location}</div>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-gray-400">Year</span>
                      </div>
                      <div className="text-sm font-semibold text-white">{project.year}</div>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-gray-400">Units</span>
                      </div>
                      <div className="text-sm font-semibold text-white">{project.units}</div>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-gray-400">Price</span>
                      </div>
                      <div className="text-sm font-semibold text-white">{project.priceRange}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
                    <div className="space-y-1">
                      {project.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to={`/project/${project.id}`}>
                    <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 rounded-xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-12 border border-gray-600/50">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Invest in Your Future?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have chosen Winstone Projects for their real estate investments. 
                Contact us today to learn more about our upcoming projects and investment opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-600 text-black font-bold px-12 py-4 rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-105"
                >
                  Contact Us Today
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border border-gray-600 text-gray-300 hover:bg-yellow-400/10 hover:border-yellow-400/30 hover:text-yellow-400 px-12 py-4 rounded-xl transition-all duration-300"
                >
                  Schedule Site Visit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
