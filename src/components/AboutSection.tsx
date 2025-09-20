const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 fade-in">
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CMW Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
              Your trusted partner for innovative security solutions and custom software development.
              We specialize in protecting educational environments while building tomorrow's technology.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  At CMW Solutions, we're committed to creating safer educational environments 
                  through advanced IP camera monitoring systems while delivering custom software 
                  solutions that drive business growth and innovation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With years of experience in both security technology and software development, 
                  our team combines deep technical knowledge with a genuine understanding of our 
                  clients' unique challenges and requirements.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground text-sm">Years of Excellence</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground text-sm">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 slide-in-right">
              <div className="service-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Security Focus
                    </h4>
                    <p className="text-muted-foreground">
                      Specialized in educational institution security with comprehensive 
                      IP camera monitoring solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">💻</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Custom Development
                    </h4>
                    <p className="text-muted-foreground">
                      Tailored software solutions built with cutting-edge technologies 
                      to meet your specific business needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="service-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      Partnership Approach
                    </h4>
                    <p className="text-muted-foreground">
                      We work closely with our clients as true partners, ensuring 
                      long-term success and ongoing support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;