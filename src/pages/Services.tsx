import { ServiceCard } from "@/components/ServiceCard";
import aiAutomationImg from "@/assets/ai-automation.jpg";
import webDevelopmentImg from "@/assets/web-development.jpg";
import dataAnalyticsImg from "@/assets/data-analytics.jpg";

const Services = () => {
  const services = [
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that transform your business operations with cutting-edge AI technology",
      features: [
        "Custom AI workflow automation",
        "Process optimization & efficiency",
        "24/7 intelligent monitoring",
        "Seamless integration with existing systems",
        "Machine learning model development",
        "Predictive analytics implementation"
      ],
      price: "From $5K",
      imageSrc: aiAutomationImg,
      gradient: "teal" as const
    },
    {
      title: "Web Application Development",
      description: "Premium web applications built for scale, performance, and exceptional user experience",
      features: [
        "Full-stack development",
        "Modern responsive design",
        "Cloud-native architecture",
        "Advanced security implementations",
        "Progressive Web Apps (PWA)",
        "API development & integration"
      ],
      price: "From $8K",
      imageSrc: webDevelopmentImg,
      gradient: "neon" as const
    },
    {
      title: "Data Science & Analytics",
      description: "Transform raw data into actionable business insights with advanced analytics and visualization",
      features: [
        "Advanced analytics dashboards",
        "Predictive modeling & ML",
        "Real-time data visualization",
        "Custom reporting solutions",
        "Business intelligence platforms",
        "Data pipeline automation"
      ],
      price: "From $6K",
      imageSrc: dataAnalyticsImg,
      gradient: "teal" as const
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            We provide cutting-edge solutions that drive innovation and transform businesses. 
            From AI automation to web development, we deliver excellence in every project.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Custom Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-8 max-w-4xl mx-auto">
              Don't see exactly what you need? We specialize in creating custom solutions tailored to your unique business requirements. 
              Our team of experts will work closely with you to understand your challenges and deliver innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Consultation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Free initial consultation to understand your needs</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Strategy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive project planning and roadmap</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Agile development with regular updates</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-purple-50 dark:from-green-900/20 dark:to-purple-900/20 rounded-xl">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Ongoing maintenance and support services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 