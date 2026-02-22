import { Building2, Award, Calendar, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import aboutImg from "@/assets/about-building.jpg";

const highlights = [
  { icon: Calendar, label: "Since 2004" },
  { icon: Building2, label: "100+ Projects" },
  { icon: Award, label: "20+ Years" },
  { icon: MapPin, label: "Tirupati" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Saketh Home Constructions"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 gold-gradient rounded-xl p-5 shadow-lg hidden md:block">
              <p className="text-4xl font-heading font-bold text-secondary-foreground">20+</p>
              <p className="text-sm font-semibold text-secondary-foreground/80">Years of Excellence</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Since 2004 — Building Homes with Trust.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded by <strong className="text-foreground">G. V. Ramesh Babu</strong>, Saketh Home Constructions has been delivering quality and dependable construction in Tirupati for over two decades.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Today, under the leadership of <strong className="text-foreground">G. V. Saketh Ram</strong>, the legacy continues with fresh vision, disciplined execution, and commitment to excellence. Our goal is simple — to build homes that stand strong for generations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <h.icon className="text-gold shrink-0" size={18} />
                <span className="text-sm font-medium text-foreground">{h.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
