import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  "Four Seasons", "Aman Resorts", "Ritz-Carlton", "Mandarin Oriental",
  "Belmond", "Rosewood", "Peninsula", "Six Senses",
  "One&Only", "Bulgari Hotels", "Park Hyatt", "St. Regis",
  "Emirates", "Turkish Airlines", "Qatar Airways", "Lufthansa",
];

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="destinations" className="relative py-32 md:py-48" ref={ref}>
      <div className="px-8 md:px-12 max-w-7xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-light text-foreground mb-8"
        >
          Partnerler
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-muted-foreground max-w-lg"
        >
          Dünyanın en prestijli otel zincirleri, havayolları ve deneyim sağlayıcılarıyla çalışıyoruz.
        </motion.p>
      </div>

      {/* Marquee logo scroller */}
      <div className="overflow-hidden border-t border-b border-border py-12">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="font-display text-2xl md:text-3xl text-muted-foreground/40 hover:text-foreground transition-colors duration-300 mx-8 md:mx-12 cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>

      {/* Category tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="px-8 md:px-12 max-w-7xl mx-auto mt-16 flex flex-wrap gap-4"
      >
        {["Lüks Oteller", "Havayolları", "Yat & Tekne", "Özel Jet", "Wellness & Spa"].map((cat) => (
          <span key={cat} className="font-body text-xs tracking-widest uppercase text-muted-foreground border border-border px-4 py-2">
            {cat}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientsSection;
