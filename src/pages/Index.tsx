import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import aiAutomationImg from "@/assets/ai-automation.jpg";
import webDevelopmentImg from "@/assets/web-development.jpg";
import dataAnalyticsImg from "@/assets/data-analytics.jpg";
import { MarketLeadersSection } from "@/components/MarketLeadersSection";
import { MeetCoFoundersSection } from "@/components/MeetCoFoundersSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const services = [
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that transform your business operations",
      features: [
        "Custom AI workflow automation",
        "Process optimization & efficiency",
        "24/7 intelligent monitoring",
        "Seamless integration with existing systems"
      ],
      price: "From $5K",
      imageSrc: aiAutomationImg,
      gradient: "teal" as const
    },
    {
      title: "Web Application Development",
      description: "Premium web applications built for scale and performance",
      features: [
        "Full-stack development",
        "Modern responsive design",
        "Cloud-native architecture",
        "Advanced security implementations"
      ],
      price: "From $8K",
      imageSrc: webDevelopmentImg,
      gradient: "neon" as const
    },
    {
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable business insights",
      features: [
        "Advanced analytics dashboards",
        "Predictive modeling & ML",
        "Real-time data visualization",
        "Custom reporting solutions"
      ],
      price: "From $6K",
      imageSrc: dataAnalyticsImg,
      gradient: "teal" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative h-[90vh] md:h-screen w-full overflow-hidden">
        {/* Background with gradient fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            style={{ objectPosition: 'center center' }}
            onError={(e) => {
              // Hide video if it fails to load
              const target = e.target as HTMLVideoElement;
              target.style.display = 'none';
            }}
          >
            <source 
              src="https://res.cloudinary.com/dpe5a0j6g/video/upload/v1752554492/Finzarc_Hero_1080p_ij1kfn.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          {/* Animated particles effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-pink rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-teal rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Hero Content - Left Side */}
        <div className="relative z-10 max-w-2xl pt-32 md:pt-40 px-4 sm:px-8">
          <div className="space-y-6">
            <h1 className="font-futura text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] uppercase">
              AI-APPS
            </h1>
            <p className="font-manrope text-base sm:text-lg text-white/90 font-normal max-w-lg">
              Marketing Automation · WebApp Dev · Data Science & Analytics
            </p>
            <Button className="bg-white text-black px-5 py-2 rounded-lg font-manrope text-sm font-medium uppercase hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto">
              3x My Revenue →
            </Button>
          </div>
        </div>

        {/* Right Side Vertical Text */}
        <div className="hidden sm:block absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 rotate-90">
          <p className="font-manrope uppercase tracking-widest text-xs sm:text-sm text-white/80 whitespace-nowrap">
            USD 16M in Incremental Revenue for Clients · Avg Delivery Time &lt; 3 Weeks
          </p>
        </div>

        {/* Bottom Footer Labels */}
        <div className="absolute bottom-4 left-4 sm:left-6">
          <p className="font-manrope text-xs text-white/75">
            ✦ Founded to Upgrade Businesses, 2023
          </p>
        </div>
        <div className="absolute bottom-4 right-4 sm:right-6">
          <p className="font-manrope text-xs text-white/80">
            ©️ AI-APPS
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 sm:px-8 bg-skin-beige dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Premium Services
            </h2>
            <p className="font-manrope text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Elevate your business with our cutting-edge solutions designed for the modern enterprise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Market Leaders Section */}
      <MarketLeadersSection />

      {/* Stats Section */}
      <section className="py-24 px-8 bg-teal dark:bg-electric-blue text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-manrope text-3xl font-bold">$16M+</h3>
              <p className="font-manrope text-white/90">Incremental Revenue Generated</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-manrope text-3xl font-bold">&lt; 3 Weeks</h3>
              <p className="font-manrope text-white/90">Average Delivery Time</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-manrope text-3xl font-bold">100+</h3>
              <p className="font-manrope text-white/90">Successful Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Co-Founders Section */}
      <MeetCoFoundersSection />

      {/* CTA Section */}
      <section className="py-24 px-8 bg-skin-beige dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope text-4xl font-bold text-foreground mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="font-manrope text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the elite businesses already transforming their operations with our premium solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-neon text-white px-8 py-3 rounded-lg font-manrope font-medium hover:shadow-neon transition-all duration-300">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-manrope font-medium hover:bg-primary hover:text-white transition-all duration-300">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
