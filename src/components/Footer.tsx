// import {
//   Home, Wrench, Info, Phone, Instagram, Facebook,
//   Building, PaintBucket, PenTool, Sofa, ClipboardList, HardHat,
//   Mail, MapPin, Clock, ChevronRight, MessageCircle,
//   CalculatorIcon
// } from "lucide-react";
// import logo from "@/assets/logo-icon.jpg";

// const services = [
//   { icon: Building, label: "Construction", href: "#services" },
//   { icon: PaintBucket, label: "Renovation", href: "#services" },
//   { icon: PenTool, label: "Planning & Design", href: "#services" },
//   { icon: Sofa, label: "Interior Work", href: "#services" },
//   { icon: ClipboardList, label: "Project Management", href: "#services" },
//   { icon: HardHat, label: "Pre-Construction", href: "#services" },
// ];

// const quickLinks = [
//   { icon: Home, label: "Home", href: "#home" },
//   { icon: Wrench, label: "Services", href: "#services" },
//   { icon: Info, label: "About Us", href: "#about" },
//   { icon: CalculatorIcon, label: "EMI Calculator", href: "#emi" },
//   { icon: Phone, label: "Contact Us", href: "#contact" },
// ];

// const Footer = () => {
//   const handleClick = (href: string) => {
//     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <footer className="navy-gradient">
//       <div className="container-custom pt-16 pb-8">
//         {/* Main footer grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
//           {/* Column 1: Logo + description + socials */}
//           <div>
//             <img
//               src={logo}
//               alt="Saketh Home Constructions"
//               className="h-24 md:h-28 w-auto brightness-0 invert mb-5"
//             />
//             <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
//               Building trust since 2004. Premium residential construction, renovation, and interior design services in Tirupati.
//             </p>
//             <div className="flex gap-3">
//               <a
//                 href="https://www.instagram.com/sakethhomeconstructions"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
//               >
//                 <Instagram size={18} />
//               </a>
//               <a
//                 href="https://www.facebook.com/share/1HuETdzJQc/?mibextid=wwXIfr"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
//               >
//                 <Facebook size={18} />
//               </a>
//               <a
//                 href="https://wa.me/918305829999"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
//               >
//                 <MessageCircle size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Column 2: Services */}
//           <div>
//             <h4 className="font-heading text-lg font-bold text-primary-foreground mb-5">
//               Our Services
//             </h4>
//             <ul className="space-y-3">
//               {services.map((s) => (
//                 <li key={s.label}>
//                   <button
//                     onClick={() => handleClick(s.href)}
//                     className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-gold transition-colors text-sm group"
//                   >
//                     <s.icon size={15} className="text-gold/70 group-hover:text-gold transition-colors" />
//                     {s.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Quick Links */}
//           <div>
//             <h4 className="font-heading text-lg font-bold text-primary-foreground mb-5">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <button
//                     onClick={() => handleClick(link.href)}
//                     className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-gold transition-colors text-sm group"
//                   >
//                     <ChevronRight size={14} className="text-gold/70 group-hover:text-gold transition-colors" />
//                     <link.icon size={15} className="text-gold/70 group-hover:text-gold transition-colors" />
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Contact Details */}
//           <div>
//             <h4 className="font-heading text-lg font-bold text-primary-foreground mb-5">
//               Contact Us
//             </h4>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <Phone size={16} className="text-gold mt-0.5 shrink-0" />
//                 <div>
//                   <p className="text-xs text-primary-foreground/50 mb-0.5">Phone</p>
//                   <a href="tel:+918305829999" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors">
//                     +918305829999
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Mail size={16} className="text-gold mt-0.5 shrink-0" />
//                 <div>
//                   <p className="text-xs text-primary-foreground/50 mb-0.5">Email</p>
//                   <a href="mailto:sakethhomeconstructions@gmail.com" className="text-sm text-primary-foreground/80 hover:text-gold transition-colors break-all">
//                     sakethhomeconstructions@gmail.com
//                   </a>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
//                 <div>
//                   <p className="text-xs text-primary-foreground/50 mb-0.5">Address</p>
//                   <p className="text-sm text-primary-foreground/80">
//                     Opposite Agriculture College, Srinivasa Enclave, Tirupati
//                   </p>
//                 </div>
//               </li>
//               <li className="flex items-start gap-3">
//                 <Clock size={16} className="text-gold mt-0.5 shrink-0" />
//                 <div>
//                   <p className="text-xs text-primary-foreground/50 mb-0.5">Business Hours</p>
//                   <p className="text-sm text-primary-foreground/80">
//                     Mon – Sat: 9AM – 7PM
//                   </p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="border-t border-primary-foreground/10 pt-6">
//           <div className="text-center space-y-1">
//             <p className="text-primary-foreground/60 text-sm">
//               Made with ❤️ by <span className="text-gold font-semibold">StaffArc</span>
//             </p>
//             <p className="text-primary-foreground/40 text-xs">
//               © 2026 Saketh Constructions. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import {
  Home, Wrench, Info, Phone, Instagram, Facebook,
  Building, PaintBucket, PenTool, Sofa, ClipboardList, HardHat,
  Mail, MapPin, Clock, MessageCircle,
  Calculator,
  CalculatorIcon
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/logo-icon.jpg";
import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";

const services = [
  { icon: Building, label: "Construction", href: "#services" },
  { icon: PaintBucket, label: "Renovation", href: "#services" },
  { icon: PenTool, label: "Planning & Design", href: "#services" },
  { icon: Sofa, label: "Interior Work", href: "#services" },
  { icon: ClipboardList, label: "Project Management", href: "#services" },
  { icon: HardHat, label: "Pre-Construction", href: "#services" },
];

const quickLinks = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Wrench, label: "Services", href: "#services" },
  { icon: Info, label: "About Us", href: "#about" },
  {icon: CalculatorIcon, label: "EMI Calculator", href: "#emi" },
  { icon: Phone, label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="navy-gradient">
      <div className="container-custom pt-16 pb-8">
        
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Logo + description + socials */}
          <div>
            <img
              src={logo}
              alt="Saketh Home Constructions"
              className="h-24 md:h-28 w-auto mb-5 object-contain"
            />

            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Building trust since 2004. Premium residential construction, renovation, and interior design services in Tirupati.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/sakethhomeconstructions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/1HuETdzJQc/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://wa.me/918305829999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp size={18} className="text-green-500" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <button
                    onClick={() => handleClick(s.href)}
                    className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-gold transition-colors text-sm group"
                  >
                    <s.icon
                      size={15}
                      className="text-gold/70 group-hover:text-gold transition-colors"
                    />
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (No Arrows) */}
          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-gold transition-colors text-sm group"
                  >
                    <link.icon
                      size={16}
                      className="text-gold/70 group-hover:text-gold transition-colors"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="font-heading text-lg font-bold text-primary-foreground mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-primary-foreground/50 mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+918305829999"
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    +918305829999
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-primary-foreground/50 mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:sakethhomeconstructions@gmail.com"
                    className="text-sm text-primary-foreground/80 hover:text-gold transition-colors break-all"
                  >
                    sakethhomeconstructions@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-primary-foreground/50 mb-0.5">
                    Address
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    Opposite Agriculture College, Srinivasa Enclave, Tirupati
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-primary-foreground/50 mb-0.5">
                    Business Hours
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    Mon – Sat: 9AM – 7PM
                  </p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6">
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