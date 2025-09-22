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
              Nossos{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Serviços
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
              Soluções abrangentes adaptadas às suas necessidades. Do monitoramento de segurança avançado 
              ao desenvolvimento de software de ponta, nós temos tudo que você precisa.
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
                    Monitoramento por Câmeras IP
                  </h3>
                  <p className="text-muted-foreground">
                    Soluções avançadas de segurança para escolas e instituições
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Sistemas de câmeras de alta definição</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Monitoramento 24/7 em tempo real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Acesso mobile e alertas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Armazenamento seguro na nuvem</span>
                </div>
              </div>

              <div className="bg-brand-light/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Perfeito para:</h4>
                <p className="text-muted-foreground text-sm">
                  Escolas, universidades, creches e instituições educacionais 
                  que necessitam de soluções abrangentes de monitoramento de segurança.
                </p>
              </div>

              <Button className="btn-hero-outline w-full group-hover:bg-primary group-hover:text-white">
                Saiba Mais Sobre Monitoramento
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
                    Desenvolvimento de Software Personalizado
                  </h3>
                  <p className="text-muted-foreground">
                    Soluções de software sob medida para suas necessidades de negócio
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Aplicações web & mobile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Server className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Sistemas backend & APIs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Arquitetura segura & escalável</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Stack tecnológico moderno</span>
                </div>
              </div>

              <div className="bg-brand-light/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Perfeito para:</h4>
                <p className="text-muted-foreground text-sm">
                  Empresas que buscam soluções personalizadas, ferramentas de automação, sistemas de gestão 
                  ou iniciativas de transformação digital.
                </p>
              </div>

              <Button className="btn-hero-outline w-full group-hover:bg-primary group-hover:text-white">
                Discuta Seu Projeto
              </Button>
            </div>
          </div>

          {/* Additional Services */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8 fade-in">
              Serviços Adicionais
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-brand-md transition-all duration-300 fade-in">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Consultoria em Segurança</h4>
                <p className="text-muted-foreground text-sm">
                  Consultoria especializada em infraestrutura de segurança e melhores práticas
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-brand-md transition-all duration-300 fade-in">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Server className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Integração de Sistemas</h4>
                <p className="text-muted-foreground text-sm">
                  Integração perfeita de sistemas existentes com novas soluções
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border hover:shadow-brand-md transition-all duration-300 fade-in">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Manutenção & Suporte</h4>
                <p className="text-muted-foreground text-sm">
                  Suporte contínuo e manutenção para todas as nossas soluções
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