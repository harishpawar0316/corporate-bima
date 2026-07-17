import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/claims', label: 'Claim Assistance' },
    { href: '/partners', label: 'Insurance Partners' },
    { href: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="h-1 bg-accent" />
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src="/assets/media/logo-horizontal-696c72eb.jpg" alt="Corporate Bima" className="h-12 w-auto object-contain" />
            </Link>
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Your complete insurance solution — from personal coverage to corporate risk management. Trusted by 20,000+ customers across India.
            </p>
            <p className="text-xs text-white/40">Co-partner: K Vision – The Insurance World</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/65 hover:text-accent transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admin Office */}
          <div>
            <h4 className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">Admin Office</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-white/65 leading-relaxed">E-403 Arambh, W.E. Highway,<br />Malad East, Mumbai</p>
              </div>
              <div className="flex gap-3">
                <Phone size={15} className="text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918898409592" className="text-sm text-white/65 hover:text-accent transition-colors">+91 8898409592</a>
                  <a href="tel:+917304330180" className="text-sm text-white/65 hover:text-accent transition-colors">+91 73043 30180</a>
                  <a href="tel:+912240142404" className="text-sm text-white/65 hover:text-accent transition-colors">+91 22 40142404</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">Get In Touch</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-white/65 leading-relaxed">Corporate Office:<br />Goregaon, Mumbai</p>
              </div>
              <div className="flex gap-3">
                <Mail size={15} className="text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:rohit@corporatebima.in" className="text-sm text-white/65 hover:text-accent transition-colors">rohit@corporatebima.in</a>
                  <a href="mailto:info@corporatebima.in" className="text-sm text-white/65 hover:text-accent transition-colors">info@corporatebima.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© {currentYear} Corporate Bima. All rights reserved. | IRDAI Registered Insurance Advisor</p>
          <p className="text-xs text-white/30">Established 2015 | Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}
