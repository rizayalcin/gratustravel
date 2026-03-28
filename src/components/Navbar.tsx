import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gratusLogo from "@/assets/gratus-logo.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoReady, setLogoReady] = useState(false);

  useEffect(() => {
    const handler = () => setLogoReady(true);
    window.addEventListener("hero-logo-done", handler);
    return () => window.removeEventListener("hero-logo-done", handler);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 md:px-12 py-6">
        <a href="#" className="z-50 flex items-center gap-4" data-header-logo>
          <motion.img
            src={gratusLogo}
            alt="Gratus Travel"
            className="h-12 md:h-14 w-auto brightness-0 invert opacity-90"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={logoReady ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <motion.div
            className="flex flex-col leading-none"
            initial={{ opacity: 0, x: -10 }}
            animate={logoReady ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          >
            <span className="text-2xl md:text-3xl font-bold text-foreground tracking-[0.2em]" style={{ fontFamily: "'Playfair Display', serif" }}>GRATUS</span>
            <span className="text-[0.65rem] md:text-sm font-light text-primary tracking-[0.4em] uppercase self-end" style={{ fontFamily: "'Raleway', sans-serif" }}>Travel</span>
          </motion.div>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 flex flex-col gap-[6px] group"
          aria-label="Toggle menu"
        >
          <span className={`block w-7 h-[2px] bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`block w-7 h-[2px] bg-foreground transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-7 h-[2px] bg-foreground transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 menu-overlay bg-background/95 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-display text-4xl md:text-6xl font-light text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-6 mt-8"
              >
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body tracking-widest uppercase">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body tracking-widest uppercase">LinkedIn</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
