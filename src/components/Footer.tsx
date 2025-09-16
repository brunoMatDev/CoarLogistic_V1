import { Linkedin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openWhatsApp = () => {
    window.open('https://wa.me/51999999999?text=Hola, me interesa conocer más sobre COAR LOGISTIC', '_blank');
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl font-bold">
                <span className="text-white">COAR</span>
                <span className="text-primary ml-1">LOGISTIC</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Especialistas en courier y transporte internacional para comercio exterior. 
              Conectamos tu negocio con el mundo de manera eficiente y confiable.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://linkedin.com/company/coar-logistic', '_blank')}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => window.open('https://instagram.com/coar_logistic', '_blank')}
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              
              <button
                onClick={openWhatsApp}
                className="bg-[#25D366] hover:bg-[#128C7E] p-2 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('servicios');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Transporte Marítimo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('servicios');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Transporte Aéreo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('servicios');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Courier Internacional
                </button>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-white/80">
              <p>Lima, Perú</p>
              <p>
                <a 
                  href="tel:+51999999999" 
                  className="hover:text-primary transition-colors"
                >
                  +51 999 999 999
                </a>
              </p>
              <p>
                <a 
                  href="mailto:info@coarlogistic.com" 
                  className="hover:text-primary transition-colors"
                >
                  info@coarlogistic.com
                </a>
              </p>
              <p className="text-sm">Lun - Vie: 8:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} COAR LOGISTIC. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => {
                  const element = document.getElementById('inicio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/60 hover:text-primary text-sm transition-colors"
              >
                Política de Privacidad
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('inicio');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/60 hover:text-primary text-sm transition-colors"
              >
                Términos y Condiciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;