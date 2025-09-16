import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-blur border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-primary">COAR</span>
              <span className="text-secondary ml-1">LOGISTIC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            
            {/* Enlaces externos */}
            <a 
              href="https://www.bcrp.gob.pe/docs/Estadisticas/Cuadros-Estadisticos/NC_007.xls"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Conversiones</span>
            </a>
            
            <a 
              href="https://www.apn.gob.pe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
            >
              <Anchor className="w-4 h-4" />
              <span>Puertos</span>
            </a>
            
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Servicios
              </button>
              <a 
                href="https://www.bcrp.gob.pe/docs/Estadisticas/Cuadros-Estadisticos/NC_007.xls"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Conversiones
              </a>
              <a 
                href="https://www.apn.gob.pe/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Puertos
              </a>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;