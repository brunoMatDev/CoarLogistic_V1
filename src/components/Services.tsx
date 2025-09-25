import { Ship, Plane, Package } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import maritimeIcon from '@/assets/maritime-icon.png';
import airIcon from '@/assets/air-icon.png';
import courierIcon from '@/assets/courier-icon.png';

const Services = () => {
  const services = [
    {
      icon: Ship,
      image: maritimeIcon,
      title: "Transporte Marítimo",
      description: "Servicios de carga marítima internacional con contenedores FCL y LCL. Gestión completa de documentación y trámites portuarios.",
      features: [
        "Contenedores FCL y LCL",
        "Gestión portuaria completa",
        "Seguimiento en tiempo real",
        "Documentación internacional"
      ]
    },
    {
      icon: Plane,
      image: airIcon,
      title: "Transporte Aéreo",
      description: "Envíos aéreos urgentes y regulares. Soluciones rápidas para cargas prioritarias con tracking completo.",
      features: [
        "Envíos urgentes 24-48h",
        "Carga regular programada",
        "Tracking en tiempo real",
        "Manejo de carga especial"
      ]
    },
    {
      icon: Package,
      image: courierIcon,
      title: "Courier Internacional",
      description: "Servicio de paquetería internacional puerta a puerta, confiable y rápido. Ideal para documentos y paquetes de hasta 30 kg.",
      features: [
        "Puerta a puerta",
        "Documentos y paquetes",
        "Entrega garantizada",
        "Cobertura mundial"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones logísticas integrales para el comercio exterior, 
            adaptándonos a las necesidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`${service.title === "Transporte Aéreo" ? 'w-28 h-28' : 'w-24 h-24'} mx-auto group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-secondary mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-secondary/80 to-primary/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Necesitas una solución personalizada?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contáctanos para recibir una cotización adaptada a tus necesidades específicas
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all duration-300"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;