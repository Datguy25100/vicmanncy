import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi! I'd like to learn more about your solar, security & telecom services."
  );

  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 lg:bottom-6"
    >
      <MessageCircle size={26} strokeWidth={2} fill="currentColor" className="text-white" />
    </a>
  );
}
