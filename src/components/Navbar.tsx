import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-icon.jpg";
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "EMI Calculator", href: "#emi" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3">
  {/* Logo */}
  <div className="w-12 md:w-14 lg:w-16 flex items-center">
    <img
      src={logo}
      alt="Saketh Home Constructions"
      className="w-full object-contain block"
    />
  </div>

  {/* Company Name */}
  <div className="flex flex-col leading-tight">
    <span
      className={`text-xl md:text-2xl font-bold ${
        scrolled ? "text-foreground" : "text-primary-foreground"
      }`}
    >
      SAKETH
    </span>
    <span className="text-xs md:text-sm font-medium text-gold">
      Home Constructions
    </span>
  </div>
</a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? "text-foreground hover:text-gold hover:bg-muted"
                  : "text-primary-foreground/90 hover:text-gold"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/919736939369"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-2 px-5 py-2.5 rounded-lg gold-gradient text-secondary-foreground font-semibold text-sm btn-ripple hover:opacity-90 transition-opacity"
          >
            <Phone size={16} />
            Call Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-card/98 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left text-lg font-medium py-3 px-4 rounded-lg text-foreground hover:bg-muted hover:text-gold transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/919736939369"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-lg gold-gradient text-secondary-foreground font-semibold btn-ripple"
          >
            <Phone size={18} />
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
