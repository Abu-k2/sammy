import React, { useState } from 'react';

const WhatsAppFloat: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/254758070144"
      className="fixed bottom-5 right-5 w-14 h-14 z-50 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulsing animation ring */}
      {isHovered && (
        <span className="absolute inset-0 w-full h-full bg-green-500 rounded-full opacity-75 animate-ping"></span>
      )}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-full h-full rounded-full shadow-lg transition-transform duration-200 ease-in-out group-hover:scale-110 relative z-10"
      />
      {/* Tooltip */}
      {isHovered && (
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20">
          Chat with us
        </span>
      )}
    </a>
  );
};

export default WhatsAppFloat;