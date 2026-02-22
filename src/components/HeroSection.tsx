import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { image: hero1, text: "Building Trust Since 2004." },
  { image: hero2, text: "Strong Foundations. Timeless Homes." },
  { image: hero3, text: "Crafting Spaces for Generations." },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center container-custom">
        <p className="text-gold font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4">
          Saketh Home Constructions
        </p>
        <h1
          key={current}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in max-w-4xl"
        >
          {slides[current].text}
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mb-10 font-light">
          Premium construction services in Tirupati — where quality meets commitment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => document.querySelector("#floorplans")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-lg gold-gradient text-secondary-foreground font-semibold text-base btn-ripple hover:opacity-90 transition-opacity"
          >
            Explore Projects
          </button>
          <a
            href="https://wa.me/919736939369"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg border-2 border-primary-foreground/50 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Contact Now
          </a>
        </div>
      </div>

      {/* Slider controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/30 backdrop-blur-sm text-primary-foreground hover:bg-card/50 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-card/30 backdrop-blur-sm text-primary-foreground hover:bg-card/50 transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-gold w-8" : "bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
