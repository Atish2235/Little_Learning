import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function FloatingContactButtons() {
  const whatsappNumber = "9373004289"; 
  const callNumber = "+919373004289";  

  return (
    <>
      {/* Top-right social buttons */}
      <div className="fixed top-24 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://www.facebook.com/littlelearningss"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-blue-600 shadow-xl flex items-center justify-center hover:scale-110 transition"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-white text-2xl" />
        </a>

        <a
          href="https://www.instagram.com/littlelearningss"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 shadow-xl flex items-center justify-center hover:scale-110 transition"
          aria-label="Instagram"
        >
          <FaInstagram className="text-white text-2xl" />
        </a>
      </div>

      {/* Bottom-right contact buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-green-500 shadow-xl flex items-center justify-center hover:scale-110 transition"
        >
          <FaWhatsapp className="text-white text-3xl" />
        </a>

        {/* Call Button */}
        <a
          href={`tel:${callNumber}`}
          className="w-10 h-10 rounded-full bg-blue-600 shadow-xl flex items-center justify-center hover:scale-110 transition"
        >
          <FaPhoneAlt className="text-white text-2xl" />
        </a>

      </div>
    </>
  );
}
