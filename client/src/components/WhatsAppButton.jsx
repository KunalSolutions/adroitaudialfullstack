import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "919511609437"; 
  const message = "Hello, I would like to know more about your products.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center">

        {/* WhatsApp Button */}
        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 animate-bounce">
          <FaWhatsapp className="text-white text-4xl" />
        </div>

      </div>
    </a>
  );
};

export default WhatsAppButton;