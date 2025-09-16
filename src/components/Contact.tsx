import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Linkedin, 
  Instagram,
  MessageCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/51999999999?text=Hola, me interesa conocer más sobre COAR LOGISTIC', '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+51 999 999 999",
      action: () => window.open('tel:+51999999999')
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@coarlogistic.com",
      action: () => window.open('mailto:info@coarlogistic.com')
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Lima, Perú",
      action: null
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun - Vie: 8:00 - 18:00",
      action: null
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aquí para ayudarte con todas tus necesidades logísticas. 
            Contáctanos y descubre cómo podemos hacer crecer tu negocio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">Envíanos un mensaje</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Nombre *</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Empresa</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Email *</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+51 999 999 999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Servicio de interés</label>
                  <select className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                    <option value="">Selecciona un servicio</option>
                    <option value="maritimo">Transporte Marítimo</option>
                    <option value="aereo">Transporte Aéreo</option>
                    <option value="courier">Courier Internacional</option>
                    <option value="todos">Todos los servicios</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">Mensaje *</label>
                  <textarea 
                    required 
                    rows={4} 
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Describe tu necesidad logística..."
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-secondary to-primary text-white font-semibold py-3 hover:shadow-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className={`card-gradient border-0 hover:shadow-lg transition-all duration-300 animate-slide-in ${
                      info.action ? 'cursor-pointer hover:-translate-y-1' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={info.action || undefined}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-secondary mb-1 text-sm">{info.title}</h3>
                      <p className="text-muted-foreground text-xs">{info.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 text-center text-white mb-12">
            <MessageCircle className="w-16 h-16 mx-auto mb-4 animate-float" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¡Conversemos por WhatsApp!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              La forma más rápida de obtener información y cotizaciones personalizadas
            </p>
            <Button 
              size="lg"
              onClick={openWhatsApp}
              className="btn-whatsapp text-white font-semibold px-8 py-3 text-lg hover:shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Escribir por WhatsApp
            </Button>
          </div>
            </div>
          </div>


          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-secondary mb-6">
              Síguenos en nuestras redes sociales
            </h3>
            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://linkedin.com/company/coar-logistic', '_blank')}
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://instagram.com/coar_logistic', '_blank')}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;