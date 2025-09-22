import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-monitoring.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional monitoring solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <div className="inline-flex items-center bg-brand-light/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 fade-in">
            <span className="text-sm font-medium text-white">
              🎯 Especializados em Segurança Escolar & Desenvolvimento Personalizado
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 fade-in">
            Monitoramento Avançado &
            <span className="block bg-gradient-to-r from-brand-light-blue to-brand-green bg-clip-text text-transparent">
              Soluções Personalizadas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed fade-in">
            A CMW Solutions oferece monitoramento avançado por câmeras IP de última geração para instituições de ensino
            e desenvolvimento de software personalizado que transforma sua visão em realidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <Button
              onClick={scrollToContact}
              className="btn-hero text-lg px-8 py-4"
            >
              Entre em Contato Hoje
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-hero-outline text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-brand-navy"
            >
              Nossos Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-sm">Escolas Protegidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Monitoramento</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300 text-sm">Projetos Personalizados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">5</div>
                <div className="text-gray-300 text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;