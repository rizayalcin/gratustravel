import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Lüks Tatil Planlaması",
    description: "Dünyanın en seçkin destinasyonlarında kişiye özel lüks tatil planları oluşturuyoruz. 5 yıldızlı oteller, özel villalar ve butik konaklama seçenekleri.",
    items: ["Otel & Villa Seçimi", "Uçuş Organizasyonu", "VIP Transfer", "Concierge Hizmeti", "Kişisel Rehber"],
  },
  {
    num: "02",
    title: "Macera & Safari Turları",
    description: "Afrika'dan Patagonya'ya, dünyayı keşfetmek isteyenler için eşsiz macera deneyimleri tasarlıyoruz.",
    items: ["Afrika Safari", "Dağcılık & Trekking", "Dalış Turları", "Kutup Keşifleri", "Yaban Hayatı Fotoğrafçılığı"],
  },
  {
    num: "03",
    title: "Balayı & Romantik Kaçamak",
    description: "Hayatınızın en özel anları için unutulmaz romantik destinasyonlar ve deneyimler planlıyoruz.",
    items: ["Balayı Destinasyonları", "Romantik Yemek Deneyimleri", "Çift Spa & Wellness", "Özel Gün Sürprizleri", "Gün Batımı Yat Turları"],
  },
  {
    num: "04",
    title: "Yat & Özel Jet",
    description: "Denizlerin ve gökyüzünün özgürlüğünü özel yat ve jet kiralama hizmetlerimizle yaşayın.",
    items: ["Yat Kiralama", "Özel Jet Charter", "Helikopter Turları", "Ada Hopping", "Kaptanlı Tekne Turları"],
  },
  {
    num: "05",
    title: "Kültürel Deneyimler",
    description: "Yerel kültürleri derinlemesine keşfetmeniz için özel turlar ve deneyimler organize ediyoruz.",
    items: ["Gastronomi Turları", "Sanat & Müze Turları", "Yerel Atölyeler", "Tarihi Keşif Rotaları", "Şarap Tadımı Turları"],
  },
  {
    num: "06",
    title: "Kurumsal Seyahat",
    description: "Şirketler için motivasyon turları, toplantı organizasyonları ve kurumsal etkinlik planlaması.",
    items: ["İncentive Turlar", "Kongre & Toplantı", "Team Building", "Gala Organizasyonu", "VIP Karşılama"],
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="relative py-32 md:py-48 px-8 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-light text-foreground mb-20"
        >
          Hizmetler
        </motion.h2>

        <div className="border-t border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="service-item border-b border-border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between group"
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
                    <div className="pb-8 pl-12 md:pl-28 grid md:grid-cols-2 gap-8">
                      <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.items.map((item) => (
                          <li key={item} className="font-body text-sm text-foreground/80 flex items-center gap-3">
                            <span className="text-primary">//</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
