import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const phoneNumber = "+919986689669";
  const message = encodeURIComponent(
    "Hello, I'm interested in learning more about Chavadi Estates. Can you provide more details?"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
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
