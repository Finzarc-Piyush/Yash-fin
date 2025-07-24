import { useState, useMemo } from "react";
import { Search, Filter, ExternalLink, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStyle, setSelectedStyle] = useState("All");

  const portfolioItems = [
    {
      id: 1,
      title: "Kurmanchal Tours & Travels",
      description: "Comprehensive tours and travels platform for exploring Uttarakhand with taxi services, bike rentals, and travel blog",
      category: "Travel & Tourism",
      style: "Modern",
      image: "/Thumbnails/Kurmanchal.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://www.kurmanchal.com/",
      featured: true,
      gradient: "from-teal to-teal"
    },
    {
      id: 2,
      title: "VastuSangam Project",
      description: "Professional Vastu consultation and architectural guidance platform with modern design principles",
      category: "Real Estate",
      style: "Professional",
      image: "/Thumbnails/VastuSangam.png",
      tech: ["React", "TypeScript", "Tailwind", "Vite"],
      liveUrl: "https://preview-vastusangam-project-kzmjjhqis7ghnxw4k7dh.vusercontent.net/",
      featured: true,
      gradient: "from-accent-gold to-yellow-500"
    },
    {
      id: 3,
      title: "Alpine Peak Prep",
      description: "Comprehensive preparation platform for alpine adventures and mountaineering training programs",
      category: "Education",
      style: "Adventure",
      image: "/Thumbnails/Skiing.png",
      tech: ["React", "Next.js", "Tailwind", "CSS3"],
      liveUrl: "https://preview--alpine-peak-prep.lovable.app/",
      featured: true,
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      id: 4,
      title: "Conference Aesthetic Bloom",
      description: "Elegant conference and event management platform with beautiful aesthetic design and comprehensive features",
      category: "Event Management",
      style: "Elegant",
      image: "/Thumbnails/Conference.png",
      tech: ["React", "CSS3", "JavaScript", "Node.js"],
      liveUrl: "https://preview--conference-aesthetic-bloom.lovable.app/",
      featured: false,
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      id: 5,
      title: "Camp Monthly Theme",
      description: "Dynamic camping and outdoor recreation platform with monthly themed activities and booking system",
      category: "Recreation",
      style: "Vibrant",
      image: "/Thumbnails/Camping.png",
      tech: ["React", "Modern CSS", "JavaScript", "Express"],
      liveUrl: "https://preview--camp-monthly-theme.lovable.app/",
      featured: false,
      gradient: "from-teal to-teal"
    }
  ];

  const categories = ["All", ...new Set(portfolioItems.map(item => item.category))];
  const styles = ["All", ...new Set(portfolioItems.map(item => item.style))];

  const filteredItems = useMemo(() => {
    return portfolioItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesStyle = selectedStyle === "All" || item.style === selectedStyle;
      
      return matchesSearch && matchesCategory && matchesStyle;
    });
  }, [searchTerm, selectedCategory, selectedStyle]);

  const stats = [
    { icon: TrendingUp, value: "$16M+", label: "Incremental Revenue Generated" },
    { icon: Zap, value: "< 3 Weeks", label: "Average Delivery Time" },
    { icon: Users, value: "100+", label: "Successful Projects" }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-skin-beige dark:bg-gray-900 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <h1 className="font-futura text-5xl md:text-6xl uppercase tracking-tight text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="font-manrope text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing exceptional results across industries with our premium solutions
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-8 bg-teal dark:bg-electric-blue text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-manrope text-3xl font-bold">
                  {stat.value}
                </h3>
                <p className="font-manrope text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-16 px-8 bg-skin-beige dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-manrope text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="font-manrope text-lg text-muted-foreground">
              Real results for real businesses across various industries
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search projects by name, tech, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 bg-card border-border rounded-xl font-manrope"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-manrope text-sm font-semibold text-foreground mr-2">Category:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full font-manrope"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Style Filters */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="font-manrope text-sm font-semibold text-foreground mr-2">Style:</span>
              {styles.map((style) => (
                <Button
                  key={style}
                  variant={selectedStyle === style ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStyle(style)}
                  className="rounded-full font-manrope"
                >
                  {style}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mt-6">
            <p className="font-manrope text-muted-foreground">
              Showing {filteredItems.length} of {portfolioItems.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-8 bg-skin-beige dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-2xl shadow-luxury hover:shadow-neon transition-all duration-500 overflow-hidden h-full flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-manrope font-medium`}>
                      {item.category}
                      {item.featured && (
                        <span className="ml-2">✦</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project Title */}
                  <h3 className="font-manrope text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-manrope text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-manrope text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-manrope text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto">
                    <Button
                      variant="ghost"
                      className="w-full justify-between font-manrope text-foreground hover:bg-muted group-hover:text-teal transition-all duration-300"
                      asChild
                    >
                      <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                <Filter className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="font-manrope text-xl font-semibold text-foreground mb-2">
                No projects found
              </h3>
              <p className="font-manrope text-muted-foreground max-w-md mx-auto">
                Try adjusting your search term or filters to find what you're looking for.
              </p>
              <Button
                variant="outline"
                className="mt-4 font-manrope"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedStyle("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-skin-beige dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope text-4xl font-bold text-foreground mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="font-manrope text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our portfolio of successful clients and transform your business with our premium solutions
          </p>
          
          <Button className="bg-gradient-neon text-white px-8 py-3 rounded-lg font-manrope font-medium hover:shadow-neon transition-all duration-300">
            Start Your Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;