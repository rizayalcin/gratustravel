import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ClientsSection from "@/components/ClientsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ClientsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
