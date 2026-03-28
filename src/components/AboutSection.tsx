import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import aboutImg1 from "@/assets/service-corporate.jpg";
import aboutImg2 from "@/assets/service-catering.jpg";
import aboutImg3 from "@/assets/service-fair.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen flex items-center" ref={ref}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: Text content */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-20 py-32">
          {/* Large watermark text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.03 } : {}}
            transition={{ duration: 1.5 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[12rem] md:text-[18rem] font-bold leading-none select-none pointer-events-none text-foreground"
            style={{ writingMode: "vertical-rl" }}
          >
            GRATUS
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="w-8 h-[2px] bg-primary mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground mb-6"
          >
            Kurumsal turizm, catering
            <br />
            <span className="text-primary">&</span> fuar çözümleri
            <br />
            ajansıyız
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mt-4"
          >
            <span className="font-semibold text-foreground">Fikirleri</span> deneyimlere,{" "}
            <span className="font-semibold text-foreground">deneyimleri</span> anılara,{" "}
            anıları <span className="font-semibold text-foreground">başarı hikayelerine</span> dönüştürüyoruz.
          </motion.p>
        </div>

        {/* Right: Overlapping image collage like Shadow */}
        <div className="relative hidden lg:flex items-center justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full h-[80vh] max-w-xl"
          >
            {/* Image 1 - top right */}
            <div className="absolute top-0 right-0 w-[65%] aspect-[4/3] overflow-hidden z-10">
              <img src={aboutImg1} alt="Corporate event" className="w-full h-full object-cover" loading="lazy" width={600} height={450} />
            </div>
            {/* Image 2 - center overlapping */}
            <div className="absolute top-[25%] left-[5%] w-[60%] aspect-[3/4] overflow-hidden z-20">
              <img src={aboutImg2} alt="Catering service" className="w-full h-full object-cover" loading="lazy" width={450} height={600} />
            </div>
            {/* Image 3 - bottom right */}
            <div className="absolute bottom-[5%] right-[5%] w-[55%] aspect-[4/3] overflow-hidden z-10">
              <img src={aboutImg3} alt="Fair stand" className="w-full h-full object-cover" loading="lazy" width={600} height={450} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll circle indicator bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-8 md:right-12 z-10"
      >
        <div className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center cursor-pointer hover:border-primary transition-colors">
          <svg width="12" height="12" viewBox="0 0 12 12" className="text-foreground/60">
            <path d="M6 0v10M1 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
