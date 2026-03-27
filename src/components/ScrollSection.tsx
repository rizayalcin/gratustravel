import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollSectionProps {
  children: ReactNode;
  index: number;
  total: number;
  className?: string;
  id?: string;
}

const ScrollSection = ({ children, index, total, className = "", id }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // As the section scrolls out, it scales down and fades
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0.3]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Don't apply exit effect to the last section
  const isLast = index === total - 1;

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        zIndex: index,
        // Each section needs enough height for the sticky effect
        marginBottom: isLast ? 0 : "-5vh",
      }}
    >
      <motion.div
        id={id}
        style={
          isLast
            ? {}
            : {
                scale,
                opacity,
                borderRadius,
                y,
              }
        }
        className={`sticky top-0 min-h-screen overflow-hidden origin-center bg-background ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollSection;
