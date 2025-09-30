import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Linkedin, Instagram, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@winstoneprojects.in",
      link: "mailto:info@winstoneprojects.in"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (80) 4567-8901",
      link: "tel:+918045678901"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India & UAE",
      link: null
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/winstoneprojects", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/winstoneprojects", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Luxury Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 backdrop-blur-sm border rounded-full px-4 py-1.5 mb-6" style={{ backgroundColor: 'rgba(255, 191, 0, 0.1)', borderColor: 'rgba(255, 191, 0, 0.2)' }}>
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#ffbf00' }}>Contact</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
            Let's Build Something <span style={{ color: '#ffbf00' }}>Exceptional</span>
          </h2>
          
          {/* Elegant Bar Design */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
            <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: '#ffbf00', boxShadow: '0 0 20px rgba(255, 191, 0, 0.5)' }}></div>
            <div className="w-24 h-px" style={{ background: 'linear-gradient(to right, transparent, #ffbf00, transparent)' }}></div>
          </div>
          
          <p className="text-base text-gray-300 max-w-2xl mx-auto font-normal">
            Ready to create your dream property? Connect with Winstone Projects to discuss 
            luxury real estate development, investments, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-700/30 border-gray-600/50 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(190, 155, 63, 0.5)';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(190, 155, 63, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.5)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-700/30 border-gray-600/50 text-white placeholder:text-gray-400 backdrop-blur-sm transition-all duration-300"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(190, 155, 63, 0.5)';
                        e.currentTarget.style.boxShadow = '0 0 0 2px rgba(190, 155, 63, 0.2)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(75, 85, 99, 0.5)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="company"
                    placeholder="Company/Organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px] resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full text-black font-bold shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                  style={{ 
                    background: 'linear-gradient(to right, #be9b3f, #ffbf00, #d4af37)',
                    boxShadow: '0 25px 50px rgba(190, 155, 63, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #ffbf00, #e6c547, #ffbf00)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(190, 155, 63, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #be9b3f, #ffbf00, #d4af37)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(190, 155, 63, 0.25)';
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(190, 155, 63, 0.1)' }}>
                        <info.icon className="w-5 h-5" style={{ color: '#ffbf00' }} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-white transition-colors duration-300 font-medium"
                            onMouseEnter={(e) => e.currentTarget.style.color = '#ffbf00'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect on Social
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-700/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffbf00';
                        e.currentTarget.style.color = 'black';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
                        e.currentTarget.style.color = 'rgb(209, 213, 219)';
                      }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-4 pl-8 py-6 backdrop-blur-xl rounded-r-2xl shadow-xl" style={{ borderColor: '#ffbf00', backgroundColor: 'rgba(255, 191, 0, 0.05)' }}>
                <blockquote className="text-lg text-gray-300 font-medium italic leading-relaxed">
                  "Homes should be more than just spaces to live in; they should be architectural experiences 
                  that blend luxury with innovation."
                </blockquote>
                <cite className="font-semibold mt-2 block" style={{ color: '#ffbf00' }}>— Winstone Projects Philosophy</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;