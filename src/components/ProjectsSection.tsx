import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    client: "Four Seasons",
    title: "Bosphorus Escape",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
  },
  {
    client: "Aman Resorts",
    title: "Adriatic Dream",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800",
  },
  {
    client: "Private Safari",
    title: "Serengeti Sunrise",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76b4f95b?w=800",
  },
  {
    client: "Yacht Charter",
    title: "Amalfi Coast",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
  },
  {
    client: "Luxury Rail",
    title: "Orient Express",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800",
  },
  {
    client: "Island Retreat",
    title: "Bali Serenity",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="relative py-32 md:py-48 px-8 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-light text-foreground mb-20"
        >
          Projeler
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden aspect-[4/3] block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-body text-xs text-primary tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.client}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
