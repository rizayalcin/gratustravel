import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [
  { image: hero1, title: "Santorini", subtitle: "Eşsiz Ege Deneyimi" },
  { image: hero2, title: "Maldivler", subtitle: "Tropikal Cennet" },
  { image: hero3, title: "Afrika Safari", subtitle: "Vahşi Doğa Macerası" },
  { image: hero4, title: "Norveç Fiyortları", subtitle: "Lüks Yat Deneyimi" },
  { image: hero5, title: "Tokyo", subtitle: "Kültürel Keşif" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/40" />
        </motion.div>
      </AnimatePresence>

      {/* Slide counter - right side like Shadow */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-[2px] transition-all duration-500 ${
              i === current ? "h-8 bg-primary" : "h-4 bg-foreground/30 hover:bg-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Bottom pagination like Shadow: 01 ——— 05 */}
      <div className="absolute bottom-8 right-8 md:right-12 z-10 flex items-center gap-3">
        <span className="font-body text-sm text-foreground tracking-widest">
          {String(current + 1).padStart(2, "0")}
        </span>
        <div className="w-16 h-[1px] bg-foreground/20 relative">
          <div
            className="absolute top-0 left-0 h-full bg-primary slide-progress"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="font-body text-sm text-muted-foreground tracking-widest">
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom left copyright */}
      <div className="absolute bottom-8 left-8 md:left-12 z-10">
        <span className="font-body text-xs text-muted-foreground tracking-widest">©2025</span>
      </div>
    </section>
  );
};

export default HeroSlider;
