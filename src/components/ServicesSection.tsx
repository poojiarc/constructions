import { Building, PaintBucket, PenTool, Sofa, ClipboardList, HardHat } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import sConstruction from "@/assets/service-construction.jpg";
import sRenovation from "@/assets/service-renovation.jpg";
import sPlanning from "@/assets/service-planning.jpg";
import sInterior from "@/assets/service-interior.jpg";
import sManagement from "@/assets/service-management.jpg";
import sPrecon from "@/assets/service-preconstruction.jpg";

const services = [
  { icon: Building, title: "Construction", desc: "End-to-end residential and commercial construction with premium materials.", image: sConstruction },
  { icon: PaintBucket, title: "Renovation", desc: "Transform existing spaces with modern upgrades and expert craftsmanship.", image: sRenovation },
  { icon: PenTool, title: "Planning & Design", desc: "Architectural planning and design tailored to your vision and lifestyle.", image: sPlanning },
  { icon: Sofa, title: "Interior Work", desc: "Elegant interior solutions that reflect your taste and personality.", image: sInterior },
  { icon: ClipboardList, title: "Project Management", desc: "Seamless project coordination from concept to completion.", image: sManagement },
  { icon: HardHat, title: "Pre-Construction", desc: "Site assessment, feasibility studies, and project planning.", image: sPrecon },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted">
    <div className="container-custom">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 100}>
            <div className="bg-card rounded-xl overflow-hidden shadow-lg card-hover group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                  <s.icon size={22} className="text-secondary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
