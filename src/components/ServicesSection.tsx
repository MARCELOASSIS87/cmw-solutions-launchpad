import { Button } from "@/components/ui/button";
import { Shield, Code, Camera, Smartphone, Server, Lock } from "lucide-react";
import cameraIcon from "@/assets/camera-icon.jpg";
import softwareIcon from "@/assets/software-icon.jpg";

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-brand-light/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 fade-in">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
              Comprehensive solutions tailored to your needs. From advanced security monitoring 
              to cutting-edge software development, we've got you covered.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* IP Camera Monitoring */}
            <div className="service-card group slide-in-left">
              <div className="flex items-center mb-6">
                <img
                  src={cameraIcon}
                  alt="IP Camera Monitoring"
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    IP Camera Monitoring
                  </h3>
                  <p className="text-muted-foreground">
                    Advanced security solutions for schools and institutions
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-foreground">High-definition camera systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-foreground">24/7 real-time monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Mobile access and alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Secure cloud storage</span>
                </div>
              </div>

              <div className="bg-brand-light/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Perfect for:</h4>
                <p className="text-muted-foreground text-sm">
                  Schools, universities, daycare centers, and educational facilities 
                  requiring comprehensive security monitoring solutions.
                </p>
              </div>

              <Button className="btn-hero-outline w-full group-hover:bg-primary group-hover:text-white">
                Learn More About Monitoring
              </Button>
            </div>

            {/* Custom Software Development */}
            <div className="service-card group slide-in-right">
              <div className="flex items-center mb-6">
                <img
                  src={softwareIcon}
                  alt="Custom Software Development"
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Custom Software Development
                  </h3>
                  <p className="text-muted-foreground">
                    Tailored software solutions for your business needs
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Web & mobile applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Server className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Backend systems & APIs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Secure & scalable architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Modern tech stack</span>
                </div>
              </div>

              <div className="bg-brand-light/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Perfect for:</h4>
                <p className="text-muted-foreground text-sm">
                  Businesses seeking custom solutions, automation tools, management systems, 
                  or digital transformation initiatives.
                </p>
              </div>

              <Button className="btn-hero-outline w-full group-hover:bg-primary group-hover:text-white">
                Discuss Your Project
              </Button>
            </div>
          </div>

          {/* Additional Services */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8 fade-in">
              Additional Services
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-brand-md transition-all duration-300 fade-in">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Security Consulting</h4>
                <p className="text-muted-foreground text-sm">
                  Expert advice on security infrastructure and best practices
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-brand-md transition-all duration-300 fade-in">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">System Integration</h4>
                <p className="text-muted-foreground text-sm">
                  Seamless integration of existing systems with new solutions
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-brand-md transition-all duration-300 fade-in">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Maintenance & Support</h4>
                <p className="text-muted-foreground text-sm">
                  Ongoing support and maintenance for all our solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;