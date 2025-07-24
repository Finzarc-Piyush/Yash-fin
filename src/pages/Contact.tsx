import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hello@ai-apps.com",
      link: "mailto:hello@ai-apps.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      content: "123 Innovation Drive, Tech District, SF 94105",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM PST",
      link: "#"
    }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-skin-beige dark:bg-gray-900 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <h1 className="font-futura text-5xl md:text-6xl uppercase tracking-tight text-foreground mb-6">
              Contact Us
            </h1>
            <p className="font-manrope text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how our premium solutions can drive your success.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-manrope text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="font-manrope text-lg text-muted-foreground mb-8">
                We're here to help you unlock your business potential. Reach out to us for a consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-neon transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center text-white mr-4">
                      {info.icon}
                    </div>
                    <h3 className="font-manrope text-lg font-semibold text-foreground">
                      {info.title}
                    </h3>
                  </div>
                  {info.link === "#" ? (
                    <p className="font-manrope text-muted-foreground">
                      {info.content}
                    </p>
                  ) : (
                    <a 
                      href={info.link}
                      className="font-manrope text-muted-foreground hover:text-teal transition-colors duration-300"
                    >
                      {info.content}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Why Choose AI-APPS Section */}
            <div className="bg-gradient-to-br from-teal/10 to-neon-pink/10 rounded-2xl p-8 mt-12">
              <h3 className="font-manrope text-2xl font-bold text-foreground mb-6">
                Why Choose AI-APPS?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal mt-1 mr-3 flex-shrink-0" />
                  <p className="font-manrope text-muted-foreground">
                    <strong>Proven Results:</strong> $16M+ in incremental revenue generated for our clients
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal mt-1 mr-3 flex-shrink-0" />
                  <p className="font-manrope text-muted-foreground">
                    <strong>Rapid Delivery:</strong> Average project completion in under 3 weeks
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal mt-1 mr-3 flex-shrink-0" />
                  <p className="font-manrope text-muted-foreground">
                    <strong>Expert Team:</strong> Specialized in AI automation, web development, and data science
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal mt-1 mr-3 flex-shrink-0" />
                  <p className="font-manrope text-muted-foreground">
                    <strong>Premium Support:</strong> Dedicated account management and ongoing optimization
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-luxury">
            <h2 className="font-manrope text-2xl font-bold text-foreground mb-6">
              Start Your Project
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
                <h3 className="font-manrope text-xl font-semibold text-foreground mb-2">
                  Thank you for your message!
                </h3>
                <p className="font-manrope text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-manrope text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="font-manrope"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-manrope text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="font-manrope"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block font-manrope text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="font-manrope"
                    placeholder="Your Company Inc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-manrope text-sm font-semibold text-foreground mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="font-manrope resize-none"
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-neon text-white hover:shadow-neon transition-all duration-300 font-manrope font-medium"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <section className="py-16 px-8 bg-skin-beige dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-2xl p-8 shadow-luxury">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
            <blockquote className="font-manrope text-lg text-muted-foreground mb-6">
              "AI-APPS transformed our business operations and helped us achieve a 300% increase in efficiency. Their expertise in AI automation is unmatched."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <p className="font-manrope font-semibold text-foreground">Sarah Johnson</p>
                <p className="font-manrope text-sm text-muted-foreground">CEO, TechFlow Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;