import { useState, useMemo } from "react";
import { Search, Filter, ExternalLink, TrendingUp, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tag, TagGroup, TagList } from "@/components/ui/tag-group";
import { Label } from "@/components/ui/field";
import { Footer } from "@/components/Footer";

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
  }, [searchTerm, selectedCategory, selectedStyle, portfolioItems]);

  return (
    <div className="min-h-screen bg-skin-beige dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-skin-beige dark:bg-gray-900 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="font-futura text-5xl md:text-6xl uppercase tracking-tight text-foreground mb-6">
            Featured Projects
          </h1>
          <p className="font-manrope text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Real results for real businesses across various industries
          </p>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-12 px-8 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search projects by name, tech, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 font-manrope bg-background border-border"
              />
            </div>
          </div>

          {/* Beautiful Tag Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Category Filter */}
            <div className="space-y-3">
              <TagGroup 
                selectionMode="single" 
                selectedKeys={new Set([selectedCategory])}
                onSelectionChange={(keys) => {
                  const selected = Array.from(keys)[0] as string;
                  setSelectedCategory(selected || "All");
                }}
                className="space-y-3"
              >
                <Label className="font-manrope text-lg font-semibold text-foreground">Category:</Label>
                <TagList className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Tag 
                      key={category} 
                      id={category}
                      className={`cursor-pointer font-manrope px-4 py-2 rounded-full border transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-teal text-white border-teal shadow-md transform scale-105'
                          : 'bg-background text-foreground border-border hover:border-teal hover:bg-teal/10'
                      }`}
                    >
                      {category}
                    </Tag>
                  ))}
                </TagList>
              </TagGroup>
            </div>

            {/* Style Filter */}
            <div className="space-y-3">
              <TagGroup 
                selectionMode="single" 
                selectedKeys={new Set([selectedStyle])}
                onSelectionChange={(keys) => {
                  const selected = Array.from(keys)[0] as string;
                  setSelectedStyle(selected || "All");
                }}
                className="space-y-3"
              >
                <Label className="font-manrope text-lg font-semibold text-foreground">Style:</Label>
                <TagList className="flex flex-wrap gap-2">
                  {styles.map((style) => (
                    <Tag 
                      key={style} 
                      id={style}
                      className={`cursor-pointer font-manrope px-4 py-2 rounded-full border transition-all duration-200 ${
                        selectedStyle === style
                          ? 'bg-teal text-white border-teal shadow-md transform scale-105'
                          : 'bg-background text-foreground border-border hover:border-teal hover:bg-teal/10'
                      }`}
                    >
                      {style}
                    </Tag>
                  ))}
                </TagList>
              </TagGroup>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex justify-center mb-8">
            <p className="font-manrope text-muted-foreground">
              Showing {filteredItems.length} of {portfolioItems.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-8 bg-skin-beige dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-neon transition-all duration-500 h-full flex flex-col group">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${item.gradient} text-white font-manrope font-medium shadow-lg`}>
                      {item.category}
                    </Badge>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent-gold text-black font-manrope font-medium shadow-lg">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="font-manrope text-xl font-bold text-foreground mb-3 group-hover:text-teal transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-manrope text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="font-manrope text-xs">
                        {tech}
                      </Badge>
                    ))}
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
        </div>
      </section>

      {/* CTA Section */}
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
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-manrope text-3xl font-bold">100+</h3>
              <p className="font-manrope text-white/90">Successful Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project CTA Section */}
      <section className="py-16 px-8 bg-skin-beige dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-manrope text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="font-manrope text-lg text-muted-foreground mb-8">
            Let's bring your vision to life with our proven expertise
          </p>
          
          <Button className="bg-gradient-neon text-white px-8 py-3 rounded-lg font-manrope font-medium hover:shadow-neon transition-all duration-300">
            Get Started Today
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;