import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'm ${form.name}.\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/919736939369?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Contact Us
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "9736939369", href: "tel:+919736939369" },
                { icon: Mail, label: "Email", value: "sakethhomeconstructions@gmail.com", href: "mailto:sakethhomeconstructions@gmail.com" },
                { icon: MapPin, label: "Address", value: "Opposite Agriculture College, Srinivasa Enclave" },
                { icon: Clock, label: "Business Hours", value: "9AM – 7PM" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 p-4 bg-muted rounded-xl">
                  <div className="w-11 h-11 shrink-0 rounded-full gold-gradient flex items-center justify-center">
                    <item.icon size={18} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-semibold hover:text-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/919736939369"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 transition-colors text-primary-foreground font-semibold text-lg"
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>

              {/* Map placeholder */}
              <div className="w-full h-56 rounded-xl overflow-hidden bg-muted">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.1!2d79.42!3d13.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM4JzA0LjQiTiA3OcKwMjUnMjQuMyJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl shadow-xl space-y-5">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Send us a message</h3>
              {[
                { key: "name", label: "Full Name", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "phone", label: "Phone Number", type: "tel" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-sm font-medium text-foreground mb-1 block">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all resize-none"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg gold-gradient text-secondary-foreground font-semibold text-base btn-ripple hover:opacity-90 transition-opacity"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
