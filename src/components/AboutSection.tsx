import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 md:py-48 px-8 md:px-12">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
            Biz bir lüks seyahat
          </h2>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
            & deneyim ajansıyız
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Hayalleri rotaya, rotaları anlara, anları unutulmaz deneyimlere dönüştürüyoruz.
        </motion.p>

        {/* Image grid like Shadow */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=600" alt="Beach resort" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="aspect-[3/4] overflow-hidden mt-12">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" alt="Luxury hotel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="aspect-[3/4] overflow-hidden hidden md:block">
            <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600" alt="Mountain view" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
