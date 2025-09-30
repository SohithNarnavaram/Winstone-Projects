import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Star, Building2, Home, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Property Investor",
      company: "Kumar Holdings",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Winstone Projects has been an exceptional experience. Their attention to detail and commitment to quality is unmatched. The luxury villa they delivered exceeded all our expectations.",
      project: "Luxury Villa Development",
      icon: Home
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Business Owner",
      company: "Sharma Enterprises",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The team at Winstone Projects transformed our vision into reality. Their innovative approach to design and technology integration made our commercial space stand out in the market.",
      project: "Commercial Complex",
      icon: Building2
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Real Estate Developer",
      company: "Patel Developers",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Professional, reliable, and innovative. Winstone Projects delivered our township project on time and within budget. Their expertise in luxury real estate development is truly remarkable.",
      project: "Township Development",
      icon: Briefcase
    },
    {
      id: 4,
      name: "Dr. Sunita Reddy",
      role: "Medical Professional",
      company: "Reddy Medical Group",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From concept to completion, Winstone Projects ensured every detail was perfect. Our medical facility now serves as a benchmark for modern healthcare infrastructure in the region.",
      project: "Medical Facility",
      icon: Building2
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Tech Entrepreneur",
      company: "Singh Technologies",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The smart home technology integration in our project was flawless. Winstone Projects understands the future of real estate and delivers cutting-edge solutions.",
      project: "Smart Home Development",
      icon: Home
    },
    {
      id: 6,
      name: "Meera Joshi",
      role: "Investment Advisor",
      company: "Joshi Capital",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Exceptional ROI and premium quality construction. Our clients who invested in Winstone Projects have seen remarkable returns. Highly recommended for serious investors.",
      project: "Investment Portfolio",
      icon: Briefcase
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        // If we've reached the end, loop back to the beginning
        return nextSlide >= Math.ceil(testimonials.length / 3) ? 0 : nextSlide;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      return nextSlide >= Math.ceil(testimonials.length / 3) ? 0 : nextSlide;
    });
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlide = prev - 1;
      return prevSlide < 0 ? Math.ceil(testimonials.length / 3) - 1 : prevSlide;
    });
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Stop auto-play when user interacts
  };

  const stats = [
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "150+", label: "Happy Clients", icon: Building2 },
    { number: "4.9/5", label: "Average Rating", icon: Star },
  ];

  return (
    <section id="testimonials" className="py-16 bg-black relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        
        {/* Subtle architectural light streaks */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 191, 0, 0.3), transparent)' }}></div>
          <div className="absolute top-0 right-1/3 w-px h-full" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 191, 0, 0.2), transparent)' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-yellow-400 uppercase tracking-wider">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            What Our <span style={{ color: '#ffbf00' }}>Clients Say</span>
          </h2>
          
          {/* Elegant Bar Design */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
          </div>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Discover why industry leaders and investors trust Winstone Projects for their 
            most important real estate ventures.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-8 bg-gray-700/30 backdrop-blur-xl border border-gray-600/50 hover:border-yellow-400/50 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-500 transform hover:scale-105">
              <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-2">
                  <Card className="group bg-gray-800/50 backdrop-blur-xl border border-gray-600/50 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden h-96">
                    <div className="p-6 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-4 text-center">
                        <Quote className="w-6 h-6 text-yellow-400 opacity-60 mx-auto" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current mx-0.5" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-sm text-gray-300 leading-relaxed mb-4 font-medium text-center flex-grow">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Project Badge */}
                      <div className="mb-4 text-center">
                        <Badge 
                          variant="outline" 
                          className="text-xs px-2 py-1 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 font-medium"
                        >
                          <testimonial.icon className="w-3 h-3 mr-1" />
                          {testimonial.project}
                        </Badge>
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center space-x-3 mt-auto">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-600/50"
                          />
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-yellow-400 rounded-full border-2 border-gray-800"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-semibold text-sm truncate">{testimonial.name}</h4>
                          <p className="text-gray-400 text-xs truncate">{testimonial.role}</p>
                          <p className="text-yellow-400 text-xs font-medium truncate">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800/80 backdrop-blur-xl border-gray-600/50 text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gray-800/80 backdrop-blur-xl border-gray-600/50 text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300 z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / 3) === index
                    ? 'bg-yellow-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                onClick={() => goToSlide(index * 3)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gray-700/20 backdrop-blur-xl border border-gray-600/30 p-12 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
              <p className="text-lg text-gray-300 leading-relaxed font-light italic max-w-3xl mx-auto">
                "Experience the Winstone difference. Let us transform your vision into an architectural masterpiece 
                that stands the test of time."
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto"></div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
