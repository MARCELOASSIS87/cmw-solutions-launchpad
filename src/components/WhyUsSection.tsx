import { CheckCircle, Star, Award, Users, Clock, Shield } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      description: "5+ years of experience in security solutions and software development with a track record of successful implementations."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "All our solutions are built with security as the top priority, ensuring your data and systems are always protected."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support services to ensure your systems are always running optimally."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "A passionate team of experts committed to delivering exceptional results and ongoing partnership."
    },
    {
      icon: Star,
      title: "Quality Guaranteed",
      description: "We stand behind our work with comprehensive warranties and ongoing maintenance support."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Recognized for excellence in both security solutions and custom software development."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 fade-in">
              Why Choose{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CMW Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
              We don't just deliver solutions – we build lasting partnerships that drive 
              your success through innovation, reliability, and exceptional service.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="service-card text-center group fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border fade-in">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Trusted by Educational Institutions
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our solutions protect thousands of students and staff members every day, 
                while our custom software empowers businesses to achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Schools Protected</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Cameras Installed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Custom Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 text-center fade-in">
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic max-w-4xl mx-auto mb-6">
              "CMW Solutions transformed our school's security infrastructure. Their professional 
              approach and ongoing support have given us complete peace of mind."
            </blockquote>
            <div className="text-foreground font-semibold">
              Maria Silva, School Administrator
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;