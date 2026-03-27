import GratusLogo from "@/components/GratusLogo";

const FooterSection = () => {
  return (
    <footer className="relative py-24 md:py-32 px-8 md:px-12 border-t border-border min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <GratusLogo size="lg" />
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              Hayalleri rotaya, rotaları anlara, anları unutulmaz deneyimlere dönüştürüyoruz.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-xs text-primary tracking-widest uppercase mb-2">Navigasyon</span>
            {["Hakkımızda", "Hizmetler", "Projeler", "Catering", "Fuar Standı", "İletişim"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-xs text-primary tracking-widest uppercase mb-2">İletişim</span>
            <a href="mailto:hello@gratustravel.com" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              hello@gratustravel.com
            </a>
            <span className="font-body text-sm text-muted-foreground">+90 212 555 00 00</span>
            <span className="font-body text-sm text-muted-foreground">Istanbul, Turkey</span>
            <div className="flex gap-6 mt-4">
              <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase">Instagram</a>
              <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-body text-xs text-muted-foreground">©2025 Gratus Travel. Tüm hakları saklıdır.</span>
          <span className="font-body text-xs text-muted-foreground">Lüks seyahat deneyimleri</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
