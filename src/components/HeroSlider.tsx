import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gratusLogo from "@/assets/gratus-logo.png";

const HeroSlider = () => {
  const [phase, setPhase] = useState<"zoom-in" | "fly-to-header" | "done">("zoom-in");
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (phase === "done") {
      window.dispatchEvent(new CustomEvent("hero-logo-done"));
    }
  }, [phase]);

  // Calculate target position (header logo area)
  const getHeaderTarget = () => {
    const headerLogo = document.querySelector("[data-header-logo]");
    if (headerLogo) {
      const rect = headerLogo.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - window.innerWidth / 2,
        y: rect.top + rect.height / 2 - window.innerHeight / 2,
      };
    }
    return { x: -window.innerWidth / 2 + 80, y: -window.innerHeight / 2 + 40 };
  };

  const [headerPos, setHeaderPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Pre-calculate header position
    const timer = setTimeout(() => {
      setHeaderPos(getHeaderTarget());
    }, 100);
    return () => clearTimeout(timer);
  }, []);

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
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Giant logo → flies to header */}
      {phase !== "done" && (
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        >
          <motion.img
            ref={logoRef}
            src={gratusLogo}
            alt="Gratus Travel"
            className=""
            initial={{ scale: 3, opacity: 0 }}
            animate={
              phase === "zoom-in"
                ? { scale: 1, opacity: 1, x: 0, y: 0 }
                : {
                    scale: 0.08,
                    opacity: 0,
                    x: headerPos.x,
                    y: headerPos.y,
                  }
            }
            transition={
              phase === "zoom-in"
                ? { scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.6 } }
                : { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }
            onAnimationComplete={() => {
              if (phase === "zoom-in") {
                setTimeout(() => setPhase("fly-to-header"), 400);
              } else if (phase === "fly-to-header") {
                setPhase("done");
              }
            }}
            style={{ width: "min(60vw, 500px)" }}
          />
        </motion.div>
      )}

      {/* Scroll indicator - left side */}
      <motion.div
        className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "done" ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <span className="font-body text-xs text-foreground/60 tracking-widest uppercase rotate-[-90deg] mb-6" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div className="w-[2px] h-24 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-primary animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>

      {/* Bottom left copyright */}
      <div className="absolute bottom-8 left-8 md:left-12 z-10">
        <span className="font-body text-xs text-muted-foreground tracking-widest">©2025</span>
      </div>
    </section>
  );
};

export default HeroSlider;
