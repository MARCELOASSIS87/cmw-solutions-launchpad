import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Por favor, preencha todos os campos obrigatórios",
        description: "Nome, e-mail e mensagem são obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Retornaremos em até 24 horas.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding bg-brand-light/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 fade-in">
              Entre em{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Contato
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
              Pronto para melhorar sua segurança ou dar vida à sua visão de software? 
              Vamos discutir como podemos ajudá-lo a alcançar seus objetivos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="slide-in-left">
              <Card className="bg-card border-border shadow-brand-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Envie-nos uma mensagem
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Nome *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          E-mail *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Telefone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="+55 35 99218-1400"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Serviço de Interesse
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Selecione um serviço</option>
                          <option value="ip-monitoring">Monitoramento por Câmeras IP</option>
                          <option value="custom-software">Desenvolvimento de Software Personalizado</option>
                          <option value="security-consulting">Consultoria em Segurança</option>
                          <option value="system-integration">Integração de Sistemas</option>
                          <option value="other">Outro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full h-32"
                        placeholder="Conte-nos sobre seu projeto ou requisitos..."
                        required
                      />
                    </div>

                    <Button type="submit" className="btn-hero w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 slide-in-right">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <p className="text-muted-foreground mb-8">
                  Entre em contato conosco através de qualquer um destes canais. Estamos aqui para ajudar 
                  você a encontrar a solução perfeita para suas necessidades.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-card border-border hover:shadow-brand-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Telefone & WhatsApp</h4>
                        <p className="text-muted-foreground">+55 35 99218-1400</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-brand-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                        <p className="text-muted-foreground">contact@cmwsolutions.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border hover:shadow-brand-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                        <p className="text-muted-foreground">
                          Minas Gerais, Brasil<br />
                          Serviços remotos disponíveis em todo o país
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-card rounded-xl p-6 border border-border">
                <h4 className="font-bold text-foreground mb-4">Horário de Funcionamento</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Apenas emergências</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    * Serviços de monitoramento 24/7 disponíveis para clientes existentes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;