import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappNumber = "5535992181400";
  const message = "Olá! Tenho interesse nos serviços da CMW Solutions. Poderiam fornecer mais informações?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${
            isHovered 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
          >
            Entre em contato pelo WhatsApp
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>

        {/* Button */}
        <div className="whatsapp-float group-hover:shadow-2xl">
          <MessageCircle className="w-6 h-6" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-brand-green rounded-full animate-ping opacity-75"></div>
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;