import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import imgCorporate from "@/assets/service-corporate.jpg";
import imgCatering from "@/assets/service-catering.jpg";
import imgFair from "@/assets/service-fair.jpg";
import imgCongress from "@/assets/service-congress.jpg";
import imgVip from "@/assets/service-vip.jpg";
import imgDmc from "@/assets/service-dmc.jpg";
import imgAv from "@/assets/service-avmanagement.jpg";
import imgCreative from "@/assets/service-creative.jpg";

const services = [
  {
    num: "01",
    title: "Corporate Events",
    description: "We design and execute large-scale corporate events that leave a lasting impression. From gala dinners and product launches to award ceremonies and brand activations, every detail is meticulously planned to reflect your brand's identity.",
    items: ["Gala Dinners & Award Ceremonies", "Product Launches & Brand Activations", "Annual Meetings & Celebrations", "Team Building Events", "Corporate Retreats", "End-to-End Event Management"],
    image: imgCorporate,
  },
  {
    num: "02",
    title: "Meetings & Incentive",
    description: "We specialize in MICE services — creating impactful meetings, incentive programs, conferences, and exhibitions. Our team handles every aspect from venue selection and logistics to attendee management and on-site coordination.",
    items: ["Conferences & Summits", "Incentive Travel Programs", "Board Meetings & Seminars", "Registration & Accreditation Systems", "Simultaneous Interpretation", "Sponsorship Management"],
    image: imgCongress,
  },
  {
    num: "03",
    title: "Private Travels",
    description: "Bespoke luxury travel experiences for executives, delegations, and private guests. We craft personalized itineraries with premium accommodation, private transfers, and exclusive access to extraordinary destinations.",
    items: ["Private Jet & Helicopter Charters", "Luxury Accommodation", "VIP Airport Services & Protocol", "Personal Concierge", "Tailor-Made Itineraries", "Security & Close Protection"],
    image: imgVip,
  },
  {
    num: "04",
    title: "Catering",
    description: "Premium catering solutions for corporate events, meetings, launch parties, gala nights, and private receptions. We offer world-class cuisine, bespoke menu design, and impeccable service tailored to every occasion.",
    items: ["Corporate Event Catering", "Cocktail & Reception Services", "Fine Dining & Buffet", "Custom Menu Design", "Service Staff & Equipment", "Gala Dinner Catering"],
    image: imgCatering,
  },
  {
    num: "05",
    title: "A/V Management",
    description: "Full-service audiovisual management for events of any scale. We provide cutting-edge sound, lighting, LED displays, live streaming, and stage design to ensure your event delivers maximum impact.",
    items: ["Sound & PA Systems", "Stage & Lighting Design", "LED Walls & Projection", "Live Streaming & Recording", "Technical Direction", "On-Site Technical Support"],
    image: imgAv,
  },
  {
    num: "06",
    title: "Expo & Fair Stands",
    description: "Eye-catching exhibition stand design, production, and installation for national and international trade fairs. We create innovative, functional spaces that elevate your brand presence on the show floor.",
    items: ["Stand Design & 3D Modeling", "Production & Installation", "Graphic & Visual Design", "Lighting & AV Integration", "Logistics & Transportation", "On-Site Technical Support"],
    image: imgFair,
  },
  {
    num: "07",
    title: "Creative",
    description: "Our creative studio delivers compelling visual identities, branded content, and campaign concepts that tell your story. From digital assets to physical installations, we bring bold ideas to life.",
    items: ["Brand Identity & Strategy", "Campaign Concept & Design", "Motion Graphics & Video", "Social Media Content", "Print & Digital Design", "Experiential Installations"],
    image: imgCreative,
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setOpenIndex(i);
          }
        },
        { threshold: 0.6, rootMargin: "-10% 0px -30% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative py-32 md:py-48 px-0 min-h-screen" ref={sectionRef}>
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-light text-foreground mb-20 px-8 md:px-12"
        >
          Services
        </motion.h2>

        <div className="border-t border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              ref={(el) => { itemRefs.current[i] = el; }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="service-item border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 px-8 md:px-12 flex items-center justify-between group"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="font-body text-sm text-primary tracking-widest">{service.num}</span>
                  <h3 className="font-display text-2xl md:text-4xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <ArrowRight
                  className={`w-5 h-5 text-primary transition-transform duration-300 ${
                    openIndex === i ? "rotate-90" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8">
                      <div className="w-full aspect-[21/9] max-h-[250px] overflow-hidden mb-8">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width={1920}
                          height={800}
                        />
                      </div>
                      <div className="px-8 md:px-12 pl-12 md:pl-28 grid md:grid-cols-2 gap-8">
                        <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
                        <ul className="space-y-2">
                          {service.items.map((item) => (
                            <li key={item} className="font-body text-sm text-foreground/80 flex items-center gap-3">
                              <span className="text-primary">//</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
