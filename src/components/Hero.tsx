import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-transport.jpg';
import Logo from '../assets/LogoAzul-Photoroom.png'

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/51999999999?text=Hola, me interesa conocer más sobre los servicios de COAR LOGISTIC', '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mt-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-24">
            <img src={Logo} alt="COAR Logo" className="h-22 w-auto mx-auto" />
          </div>

           {/* Tagline */}
           <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-6 drop-shadow-md">
              Courier y Transporte Internacional para Comercio Exterior
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed drop-shadow-sm">
              Conectamos tu negocio con el mundo a través de servicios logísticos eficientes, 
              confiables y adaptados a las necesidades del comercio internacional.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-in">
            <Button 
              size="lg" 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-secondary to-primary text-white font-semibold px-8 py-4 text-lg hover:shadow-lg hover:from-[#25D366] hover:to-[#128C7E] transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => {
                const element = document.getElementById('servicios');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
            >
              Conocer Servicios
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;