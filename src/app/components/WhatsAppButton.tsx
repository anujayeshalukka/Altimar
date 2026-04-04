import { motion } from "framer-motion";

export function WhatsAppButton() {
  const phoneNumber = "919995575730";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed z-[160] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-shadow duration-300 bottom-24 right-6 lg:bottom-8 lg:right-8 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Subtle Pulse Animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[#25D366]"
      />
      
      {/* WhatsApp Icon (SVG) */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8 text-white relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.166 2.234-.58c1.012.609 2.037.931 3.102.931h.001c3.181 0 5.767-2.587 5.768-5.766 0-3.181-2.587-5.766-5.767-5.766zm3.369 8.174c-.15.424-.75.773-1.036.819-.283.047-.534.195-2.023-.391-1.488-.585-2.905-1.554-3.611-2.488-.073-.1-.611-.813-.611-1.551s.385-1.101.523-1.249c.14-.147.303-.184.403-.184l.288.006c.093 0 .221-.037.346.262.126.3.43 1.047.467 1.121.037.074.062.16.012.261-.05.101-.074.212-.15.299l-.227.272c-.074.07-.156.147-.066.303.091.157.404.667.865 1.077.593.528 1.092.69 1.25.773.159.083.252.069.345-.038.093-.106.398-.462.505-.619.106-.157.212-.132.356-.079.145.053.918.433 1.076.512.157.078.261.117.3.185.039.066.039.387-.113.811z" />
        <path d="M12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm0 18.5c-1.306 0-2.529-.356-3.578-.975l-.427-.251-2.658.692.709-2.6-.275-.436c-.663-1.055-1.041-2.311-1.041-3.66 0-3.719 3.012-6.73 6.73-6.73s6.73 3.011 6.73 6.73-3.012 6.73-6.73 6.73z" />
      </svg>

      {/* Tooltip on Hover */}
      <div className="absolute right-full mr-4 px-3 py-1.5 bg-white text-[#264740] text-sm font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
        Chat with us
      </div>
    </motion.a>
  );
}
