import { useState } from "react";
import { motion } from "framer-motion";
import gratusLogo from "@/assets/gratus-logo.png";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FooterSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const mailtoBody = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0ASubject: ${form.subject}%0A%0A${form.message}`;
      window.location.href = `mailto:hello@gratustravel.com?subject=${encodeURIComponent(form.subject)}&body=${mailtoBody}`;
      toast({ title: "Opening your email client..." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast({ title: "Something went wrong.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative py-24 md:py-32 px-8 md:px-12 border-t border-border min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src={gratusLogo} alt="Gratus Travel" className="h-28 md:h-36 w-auto" />
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">
              We turn dreams into journeys, journeys into moments, and moments into unforgettable experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-xs text-primary tracking-widest uppercase mb-2">Navigation</span>
            {["About", "Services", "Partners", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                {item}
              </a>
            ))}
            <div className="flex gap-6 mt-4">
              <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase">Instagram</a>
              <a href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase">LinkedIn</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col gap-6">
            <span className="font-body text-xs text-primary tracking-widest uppercase mb-2">Get in Touch</span>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                className="bg-transparent border-border font-body text-sm"
                required
              />
              <div className="grid grid-cols-2 gap-3">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-transparent border-border font-body text-sm"
                  required
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-transparent border-border font-body text-sm"
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject *"
                value={form.subject}
                onChange={handleChange}
                className="bg-transparent border-border font-body text-sm"
                required
              />
              <Textarea
                name="message"
                placeholder="Message *"
                value={form.message}
                onChange={handleChange}
                className="bg-transparent border-border font-body text-sm min-h-[100px]"
                required
              />
              <Button
                type="submit"
                disabled={loading}
                className="font-body text-xs tracking-widest uppercase px-8 py-5 w-fit"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-body text-xs text-muted-foreground">©2025 Gratus Travel. All rights reserved.</span>
          <span className="font-body text-xs text-muted-foreground">Premium travel experiences</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
