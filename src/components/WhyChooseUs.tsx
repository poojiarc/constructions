import { Users, Eye, ShieldCheck, Award, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  { icon: Users, title: "Customer First", desc: "Your vision drives every decision we make." },
  { icon: Eye, title: "Transparency", desc: "Open communication at every stage of construction." },
  { icon: ShieldCheck, title: "Trust", desc: "Two decades of integrity and dependable delivery." },
  { icon: Award, title: "Quality Construction", desc: "Premium materials and meticulous craftsmanship." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your timelines and deliver on schedule." },
];

const WhyChooseUs = () => (
  <section className="section-padding navy-gradient">
    <div className="container-custom">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Our Promise</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            5 Reasons to Choose Saketh Home Construction
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 100}>
            <div className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 card-hover">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                <r.icon size={24} className="text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">{r.title}</h3>
              <p className="text-primary-foreground/70 text-sm">{r.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
