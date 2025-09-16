import { 
  Zap, 
  Shield, 
  Lightbulb, 
  Leaf, 
  Eye, 
  Heart 
} from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Zap,
      title: "Eficiencia",
      description: "Procesos rápidos y optimizados para garantizar entregas puntuales"
    },
    {
      icon: Shield,
      title: "Confiabilidad",
      description: "Una marca en la que puedes confiar, cumpliendo siempre con los plazos"
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Tecnologías de vanguardia para mejorar nuestros servicios logísticos"
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Prácticas responsables minimizando nuestro impacto ambiental"
    },
    {
      icon: Eye,
      title: "Transparencia",
      description: "Comunicación clara y abierta en cada momento del proceso"
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Dedicados a la calidad y mejora continua en nuestros servicios"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Nuestros Valores
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Los principios que nos guían para ofrecer el mejor servicio logístico 
            y construir relaciones duraderas con nuestros clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                <value.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent h-px"></div>
          <div className="flex justify-center">
            <div className="bg-background px-8">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;