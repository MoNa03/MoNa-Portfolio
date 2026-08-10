import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const phoneNumber = "4915163997134";

const message = encodeURIComponent(
  "Hello Mohan, I visited your portfolio and would like to connect."
);

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Let's connect on WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        group
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        border
        border-green-400/30
        bg-slate-900/95
        p-3
        text-sm
        font-semibold
        text-white
        shadow-xl
        shadow-black/30
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-green-400/60
        hover:shadow-green-500/20
        md:bottom-8
        md:right-8
      "
    >
      {/* WhatsApp Icon */}
      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-green-500
          text-white
          transition-all
          duration-300
          group-hover:bg-green-400
        "
      >
        <MessageCircle size={20} strokeWidth={2.2} />
      </span>

      {/* Hover Label */}
      <span
        className="
          max-w-0
          overflow-hidden
          whitespace-nowrap
          opacity-0
          transition-all
          duration-300
          group-hover:max-w-[220px]
          group-hover:opacity-100
        "
      >
        Let's connect
        <span className="ml-1 text-green-400">
          on WhatsApp
        </span>
      </span>
    </motion.a>
  );
}