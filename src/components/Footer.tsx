import { Home, Wrench, Info, Phone, Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Wrench, label: "Services", href: "#services" },
  { icon: Info, label: "About", href: "#about" },
  { icon: Phone, label: "Contact", href: "#contact" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="navy-gradient">
      {/* Follow Us */}
      <div className="container-custom pt-12 pb-6">
        <div className="text-center mb-8">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">Follow Us</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/sakethhomeconstructions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/share/1HuETdzJQc/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <div className="flex justify-center gap-6 mb-6">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link.href)}
                className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
              >
                <link.icon size={14} />
                <span className="hidden sm:inline">{link.label}</span>
              </button>
            ))}
          </div>

          <div className="text-center space-y-1">
            <p className="text-primary-foreground/60 text-sm">
              Made with ❤️ by <span className="text-gold font-semibold">StaffArc</span>
            </p>
            <p className="text-primary-foreground/40 text-xs">
              © 2026 Saketh Constructions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
