import { Home } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import floor1bhk from "@/assets/floor-1bhk.jpg";
import floor2bhk from "@/assets/floor-2bhk.jpg";
import floor3bhk from "@/assets/floor-3bhk.jpg";

const plans = [
  { image: floor1bhk, type: "1 BHK", price: "₹23 Lakhs", desc: "Compact & efficient living" },
  { image: floor2bhk, type: "2 BHK", price: "₹40 Lakhs", desc: "Spacious family comfort" },
  { image: floor3bhk, type: "3 BHK", price: "₹45 Lakhs", desc: "Luxury premium living" },
];

const FloorPlans = () => (
  <section id="floorplans" className="section-padding bg-muted">
    <div className="container-custom">
      <ScrollReveal>
        <div className="text-center mb-14">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Our Properties</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Spilon Squat Property Floor Plans
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.type} delay={i * 150}>
            <div className="bg-card rounded-xl overflow-hidden shadow-lg card-hover group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 gold-gradient px-4 py-1.5 rounded-full">
                  <span className="text-sm font-bold text-secondary-foreground">{plan.price}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Home className="text-gold" size={20} />
                  <h3 className="font-heading text-xl font-bold text-foreground">{plan.type}</h3>
                </div>
                <p className="text-muted-foreground mb-5">{plan.desc}</p>
                <a
                  href="https://wa.me/919736939369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 rounded-lg gold-gradient text-secondary-foreground font-semibold btn-ripple hover:opacity-90 transition-opacity"
                >
                  Start Now
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FloorPlans;
