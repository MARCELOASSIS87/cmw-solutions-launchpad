const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 fade-in">
              Sobre a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                CMW Solutions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
              Seu parceiro confiável para soluções de segurança inovadoras e desenvolvimento de software personalizado.
              Especializamo-nos em proteger ambientes educacionais enquanto construímos a tecnologia do futuro.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Nossa Missão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Na CMW Solutions, estamos comprometidos em criar ambientes educacionais mais seguros 
                  através de sistemas avançados de monitoramento por câmeras IP, oferecendo soluções de software 
                  personalizadas que impulsionam o crescimento e a inovação dos negócios.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Nossa Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Com anos de experiência em tecnologia de segurança e desenvolvimento de software, 
                  nossa equipe combina conhecimento técnico profundo com uma compreensão genuína dos 
                  desafios únicos e requisitos de nossos clientes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground text-sm">Anos de Excelência</div>
                </div>
                <div className="text-center p-6 bg-gradient-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">150+</div>
                  <div className="text-muted-foreground text-sm">Projetos Concluídos</div>
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
                      Foco em Segurança
                    </h4>
                    <p className="text-muted-foreground">
                      Especializados em segurança de instituições educacionais com soluções 
                      abrangentes de monitoramento por câmeras IP.
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
                      Desenvolvimento Personalizado
                    </h4>
                    <p className="text-muted-foreground">
                      Soluções de software sob medida construídas com tecnologias de ponta 
                      para atender às suas necessidades específicas de negócio.
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
                      Abordagem de Parceria
                    </h4>
                    <p className="text-muted-foreground">
                      Trabalhamos em estreita colaboração com nossos clientes como verdadeiros parceiros, 
                      garantindo sucesso a longo prazo e suporte contínuo.
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