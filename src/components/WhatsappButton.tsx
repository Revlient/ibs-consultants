import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string; // E.g., '919876543210'
  message?: string;
  label?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = "",
  label = "Chat with us on WhatsApp",
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center mt-8 p-8 gap-2 px-4 py-2 bg-blue-600 hover:bg-green-600 text-white rounded-lg transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
};

export default WhatsAppButton;
