import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/claims', label: 'Claim Assistance' },
    { href: '/partners', label: 'Insurance Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg shadow-primary/20' : 'bg-primary'}`}>
      {/* Top bar */}
      <div className="hidden md:block border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-6 py-2">
            <a href="tel:+918898409592" className="flex items-center gap-1.5 text-xs text-white/70 hover:text-accent transition-colors">
              <Phone size={12} /> +91 8898409592
            </a>
            <a href="mailto:info@corporatebima.in" className="text-xs text-white/70 hover:text-accent transition-colors">
              info@corporatebima.in
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <img
              src="/assets/media/logo-horizontal-696c72eb.jpg"
              alt="Corporate Bima logo"
              className="h-12 md:h-14 w-auto object-contain shrink-0 self-center"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors group ${isActive ? 'text-accent' : 'text-white/80 hover:text-white'}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-accent transition-all duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918898409592"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold bg-accent text-primary hover:bg-accent/90 transition-colors"
            >
              <Phone size={14} /> Get a Quote
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-3 py-3 text-sm font-medium rounded transition-colors ${isActive ? 'text-accent bg-white/5' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="tel:+918898409592"
                className="mt-3 mx-3 py-3 text-center text-sm font-semibold bg-accent text-primary rounded hover:bg-accent/90 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Call +91 8898409592
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
