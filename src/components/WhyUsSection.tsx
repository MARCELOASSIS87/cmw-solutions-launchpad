import { CheckCircle, Star, Award, Users, Clock, Shield } from "lucide-react";

const WhyUsSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Expertise Comprovada",
      description: "Mais de 5 anos de experiência em soluções de segurança e desenvolvimento de software com um histórico de implementações bem-sucedidas."
    },
    {
      icon: Shield,
      title: "Segurança em Primeiro Lugar",
      description: "Todas as nossas soluções são construídas com segurança como prioridade máxima, garantindo que seus dados e sistemas estejam sempre protegidos."
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Serviços de monitoramento e suporte 24 horas por dia para garantir que seus sistemas estejam sempre funcionando de forma otimizada."
    },
    {
      icon: Users,
      title: "Equipe Dedicada",
      description: "Uma equipe apaixonada de especialistas comprometida em entregar resultados excepcionais e parceria contínua."
    },
    {
      icon: Star,
      title: "Qualidade Garantida",
      description: "Apoiamos nosso trabalho com garantias abrangentes e suporte de manutenção contínua."
    },
    {
      icon: Award,
      title: "Reconhecimento da Indústria",
      description: "Reconhecidos pela excelência em soluções de segurança e desenvolvimento de software personalizado."
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 fade-in">
              Por Que Escolher a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CMW Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
              Não apenas entregamos soluções – construímos parcerias duradouras que impulsionam 
              seu sucesso através de inovação, confiabilidade e serviço excepcional.
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
                Confiados por Instituições Educacionais
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossas soluções protegem milhares de estudantes e funcionários todos os dias, 
                enquanto nosso software personalizado capacita empresas a alcançar seus objetivos.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Escolas Protegidas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Câmeras Instaladas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Projetos Personalizados</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Garantia de Uptime</div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 text-center fade-in">
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic max-w-4xl mx-auto mb-6">
              "A CMW Solutions transformou a infraestrutura de segurança da nossa escola. Sua abordagem 
              profissional e suporte contínuo nos deram total tranquilidade."
            </blockquote>
            <div className="text-foreground font-semibold">
              Maria Silva, Administradora Escolar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;