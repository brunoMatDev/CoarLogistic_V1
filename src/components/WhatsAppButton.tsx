import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/51999999999?text=Hola, me interesa conocer más sobre los servicios de COAR LOGISTIC', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 btn-whatsapp text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Pulso animado */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Escríbenos!
      </div>
    </button>
  );
};

export default WhatsAppButton;