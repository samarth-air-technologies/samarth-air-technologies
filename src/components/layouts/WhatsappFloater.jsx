import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloater = () => {
  const phoneNumber = "918169728188";

  const message = encodeURIComponent(
    "Hello, I would like to know more about your services.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14
        items-center justify-center rounded-full bg-[#25D366]
        text-white shadow-lg transition-all duration-300
        hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-4 focus:ring-[#25D366]/40
        sm:bottom-8 sm:right-8"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppFloater;
