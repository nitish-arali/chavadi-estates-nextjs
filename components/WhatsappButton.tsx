import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+917019380835"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
