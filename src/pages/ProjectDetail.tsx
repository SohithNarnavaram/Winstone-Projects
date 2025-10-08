import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Building2, Car, Heart, MapPin, Calendar, Users, Star } from 'lucide-react';
import ProjectNavigation from '@/components/ProjectNavigation';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Project data - in a real app, this would come from an API
  const projects = {
    'affordable-luxury-villas': {
      id: 'affordable-luxury-villas',
      name: 'Affordable Luxury Villas',
      icon: Building2,
      description: 'Premium villas designed with modern aesthetics and cutting-edge technology, creating luxury living experiences at affordable prices across prime Bangalore locations.',
      fullDescription: 'Our Affordable Luxury Villas represent a perfect blend of sophistication and accessibility. These meticulously designed properties offer residents the opportunity to experience premium living without compromising on quality or location. Each villa features contemporary architectural elements, smart home technology, and thoughtfully planned layouts that maximize both comfort and functionality.',
      highlights: [
        'Modern architectural design with clean lines and contemporary aesthetics',
        'Smart home technology integration for enhanced living experience',
        'Prime Bangalore locations with excellent connectivity',
        'Energy-efficient construction with sustainable materials',
        'Landscaped gardens and community amenities',
        '24/7 security and maintenance services'
      ],
      image: '/src/assets/winstone-projects.jpg',
      category: 'Residential',
      status: 'Active',
      year: '2020',
      location: 'Bangalore, India',
      units: '150+',
      priceRange: '₹2.5Cr - ₹4.5Cr',
      amenities: [
        'Swimming Pool',
        'Fitness Center',
        'Children\'s Play Area',
        'Clubhouse',
        'Parking',
        'Security'
      ],
      features: [
        '3-4 Bedroom Villas',
        'Modern Kitchen Design',
        'Master Suite with Walk-in Closet',
        'Private Garden Space',
        'Solar Panel Ready',
        'High-Speed Internet Ready'
      ]
    },
    'farms-lifestyle-properties': {
      id: 'farms-lifestyle-properties',
      name: 'Farms & Lifestyle Properties',
      icon: Car,
      description: 'Unique farm and lifestyle properties that blend luxury with nature, offering premium country living experiences with modern amenities and thoughtful design.',
      fullDescription: 'Experience the perfect harmony between luxury and nature with our Farms & Lifestyle Properties. These exclusive developments offer residents the opportunity to escape the hustle and bustle of city life while enjoying modern conveniences and premium amenities. Each property is designed to respect the natural landscape while providing comfortable, sophisticated living spaces.',
      highlights: [
        'Organic farming opportunities and agricultural plots',
        'Luxury lifestyle amenities in natural settings',
        'Eco-friendly construction and sustainable practices',
        'Private access to natural water bodies',
        'Community events and agricultural workshops',
        'Investment opportunities in agricultural ventures'
      ],
      image: '/src/assets/winstone-motors.jpg',
      category: 'Lifestyle',
      status: 'Active',
      year: '2021',
      location: 'Outskirts of Bangalore',
      units: '75+',
      priceRange: '₹1.8Cr - ₹3.2Cr',
      amenities: [
        'Organic Farm Plots',
        'Community Center',
        'Natural Water Bodies',
        'Walking Trails',
        'Equestrian Facilities',
        'Agricultural Workshops'
      ],
      features: [
        '2-3 Bedroom Farmhouses',
        'Private Agricultural Land',
        'Modern Farm Equipment',
        'Natural Landscaping',
        'Solar Power Systems',
        'Rainwater Harvesting'
      ]
    },
    'residential-townships': {
      id: 'residential-townships',
      name: 'Residential Townships',
      icon: Heart,
      description: 'Comprehensive residential townships featuring integrated communities with world-class amenities, green spaces, and modern infrastructure for sustainable urban living.',
      fullDescription: 'Our Residential Townships represent the future of urban living, combining comprehensive planning with luxury amenities to create self-sufficient communities. These integrated developments offer everything residents need within walking distance, from shopping and dining to healthcare and education, all while maintaining green spaces and sustainable practices.',
      highlights: [
        'Integrated township planning with mixed-use development',
        'World-class amenities and recreational facilities',
        'Green building certifications and sustainable practices',
        'Smart city infrastructure and technology integration',
        'Educational and healthcare facilities within the township',
        'Commercial spaces and retail outlets for convenience'
      ],
      image: '/src/assets/winstone-foundation.jpg',
      category: 'Township',
      status: 'Active',
      year: '2019',
      location: 'Bangalore & UAE',
      units: '500+',
      priceRange: '₹1.2Cr - ₹2.8Cr',
      amenities: [
        'Shopping Mall',
        'International School',
        'Multi-specialty Hospital',
        'Sports Complex',
        'Community Garden',
        'Business Center'
      ],
      features: [
        '1-3 Bedroom Apartments',
        'Penthouse Options',
        'Modern Kitchen & Bathroom',
        'Balcony with City Views',
        'High-Speed Elevators',
        'Underground Parking'
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
            <Link to="/projects">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-yellow-400/10 hover:border-yellow-400/30 hover:text-yellow-400">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20 mb-4">
                  {project.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {project.name}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <MapPin className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="text-lg font-semibold text-white">{project.location}</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <Calendar className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-sm text-gray-400">Year</div>
                  <div className="text-lg font-semibold text-white">{project.year}</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <Users className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-sm text-gray-400">Units</div>
                  <div className="text-lg font-semibold text-white">{project.units}</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <Star className="w-6 h-6 text-yellow-400 mb-2" />
                  <div className="text-sm text-gray-400">Price Range</div>
                  <div className="text-lg font-semibold text-white">{project.priceRange}</div>
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Highlights */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Project Highlights</h2>
              <div className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
              <div className="grid grid-cols-1 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50">
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Amenities & Facilities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {project.amenities.map((amenity, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center hover:border-yellow-400/50 transition-all duration-300">
                  <p className="text-gray-300 font-medium">{amenity}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-500 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-600 text-black font-bold px-12 py-4 rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-105"
              >
                Contact Us for More Information
              </Button>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
