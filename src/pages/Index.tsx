import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import FooterSection from "@/components/FooterSection";
import ScrollSection from "@/components/ScrollSection";

const sections = [
  { id: undefined, Component: HeroSlider },
  { id: "about", Component: AboutSection },
  { id: "services", Component: ServicesSection },
  { id: "partners", Component: ClientsSection },
  { id: "contact", Component: FooterSection },
];

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      {sections.map((section, i) => (
        <ScrollSection key={i} index={i} total={sections.length} id={section.id}>
          <section.Component />
        </ScrollSection>
      ))}
    </div>
  );
};

export default Index;
