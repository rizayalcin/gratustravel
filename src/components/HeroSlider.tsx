import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gratusLogo from "@/assets/gratus-logo.png";

const HeroSlider = () => {
  const [showLogo, setShowLogo] = useState(true);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube video background */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/vMzR7Jur5sk?autoplay=1&mute=1&loop=1&playlist=vMzR7Jur5sk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3"
          title="Gratus Travel"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[100vh] w-[177.78vh] h-[56.25vw]"
          style={{ border: 0, pointerEvents: "none" }}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Giant logo intro animation */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center bg-background/80"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.img
              src={gratusLogo}
              alt="Gratus Travel"
              className="w-[60vw] md:w-[40vw] max-w-[600px] brightness-0 invert"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 2.5, opacity: 0 }}
              transition={{
                scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.6, ease: "easeOut" },
              }}
              onAnimationComplete={(def) => {
                if ((def as { scale: number }).scale === 1) {
                  setTimeout(() => setShowLogo(false), 800);
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator - left side */}
      <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-body text-xs text-foreground/60 tracking-widest uppercase rotate-[-90deg] mb-6" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div className="w-[2px] h-24 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-primary animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Bottom left copyright */}
      <div className="absolute bottom-8 left-8 md:left-12 z-10">
        <span className="font-body text-xs text-muted-foreground tracking-widest">©2025</span>
      </div>
    </section>
  );
};

export default HeroSlider;
