import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import imgCorporate from "@/assets/service-corporate.jpg";
import imgCatering from "@/assets/service-catering.jpg";
import imgFair from "@/assets/service-fair.jpg";
import imgCongress from "@/assets/service-congress.jpg";
import imgVip from "@/assets/service-vip.jpg";
import imgDmc from "@/assets/service-dmc.jpg";

const services = [
  {
    num: "01",
    title: "Kurumsal Turizm & Organizasyon",
    description: "Şirketler ve kurumlar için uçtan uca seyahat ve organizasyon çözümleri sunuyoruz. MICE hizmetlerinden VIP transferlere, konaklama planlamasından uçak biletlemeye kadar tüm süreçleri profesyonelce yönetiyoruz.",
    items: ["MICE Hizmetleri (Toplantı, Teşvik, Kongre, Fuar)", "Konaklama & Otel Rezervasyonu", "Uçak Bileti & Charter", "VIP Transfer & Limuzin", "VIP Karşılama & Protokol", "Organizasyon & Etkinlik Yönetimi", "Incentive & Motivasyon Turları"],
    image: imgCorporate,
  },
  {
    num: "02",
    title: "Catering Hizmetleri",
    description: "Kurumsal etkinlikler, toplantılar, lansman partileri, gala geceleri ve özel davetler için premium catering çözümleri. Dünya mutfağından seçkin menüler ve profesyonel servis.",
    items: ["Kurumsal Toplantı Catering", "Gala & Davet Organizasyonu", "Kokteyl & Resepsiyon", "Açık Büfe & Fine Dining", "Özel Menü Tasarımı", "Servis Personeli & Ekipman"],
    image: imgCatering,
  },
  {
    num: "03",
    title: "Fuar Standı Tasarım & Kurulum",
    description: "Ulusal ve uluslararası fuarlar için etkileyici stand tasarımı, üretim ve kurulum hizmetleri. Markanızı en iyi şekilde temsil eden yaratıcı ve fonksiyonel stand çözümleri.",
    items: ["Stand Tasarım & 3D Modelleme", "Stand Üretim & Kurulum", "Grafik & Görsel Tasarım", "Aydınlatma & AV Sistemleri", "Lojistik & Nakliye", "Fuar Süresince Teknik Destek"],
    image: imgFair,
  },
  {
    num: "04",
    title: "Kongre & Toplantı Organizasyonu",
    description: "Ulusal ve uluslararası kongre, seminer, sempozyum ve kurumsal toplantılar için eksiksiz organizasyon hizmetleri.",
    items: ["Mekan Seçimi & Rezervasyon", "Teknik Altyapı & Sahne", "Simultane Tercüme", "Kayıt & Akreditasyon Sistemi", "Sosyal Program Planlaması", "Sponsorluk Yönetimi"],
    image: imgCongress,
  },
  {
    num: "05",
    title: "VIP & Özel Hizmetler",
    description: "Üst düzey yöneticiler, delegasyonlar ve özel misafirler için kişiye özel lüks seyahat ve hizmet çözümleri.",
    items: ["Özel Jet & Helikopter", "Lüks Araç Kiralama", "Kişisel Concierge", "Güvenlik & Koruma", "Özel Rehberlik", "Protokol Hizmetleri"],
    image: imgVip,
  },
  {
    num: "06",
    title: "Destinasyon Yönetimi (DMC)",
    description: "Türkiye ve dünya genelinde destinasyon yönetim hizmetleri. Gruplar ve bireysel misafirler için yerel deneyimler ve lojistik koordinasyon.",
    items: ["Şehir Turları & Kültür Gezileri", "Gastronomi Deneyimleri", "Team Building Aktiviteleri", "Gala & Özel Akşam Yemekleri", "Yerel Deneyim Tasarımı", "Lojistik Koordinasyon"],
    image: imgDmc,
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-driven accordion: open when item enters viewport
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
    <div className="relative py-32 md:py-48 px-8 md:px-12 min-h-screen" ref={sectionRef}>
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
              ref={(el) => { itemRefs.current[i] = el; }}
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
                    <div className="pb-8">
                      {/* Full-width image */}
                      <div className="w-full aspect-[21/9] overflow-hidden mb-8">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          width={1920}
                          height={800}
                        />
                      </div>
                      <div className="pl-12 md:pl-28 grid md:grid-cols-2 gap-8">
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
