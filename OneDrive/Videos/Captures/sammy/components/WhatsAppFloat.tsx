
import React from 'react';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/254758070144"
      className="fixed bottom-5 right-5 w-14 h-14 z-50 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-full h-full rounded-full shadow-lg transition-transform duration-200 ease-in-out group-hover:scale-110"
      />
    </a>
  );
};

export default WhatsAppFloat;