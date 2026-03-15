import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 lg:hidden inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-card-hover hover:bg-primary/90 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppFloat;
