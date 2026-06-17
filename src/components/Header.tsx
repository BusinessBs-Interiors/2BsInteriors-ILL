import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Who We Are', href: '#who-we-are' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        scrolled
          ? 'bg-white shadow-md border-b border-brand-light-gray py-2.5'
          : 'bg-white/95 backdrop-blur-md border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo on the left with clear breathing space */}
          <a href="#" className="flex items-center focus:outline-none py-1" id="logo-link">
            <Logo className="w-[130px] sm:w-[180px] h-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-bold tracking-wide transition-colors duration-150 py-1.5 px-1 text-brand-black hover:text-brand-blue"
                  id={`nav-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
            
            {/* Safety Yellow Request a Bid primary CTA */}
            <a
              href="#contact"
              className="bg-brand-yellow text-brand-black hover:bg-amber-400 active:bg-amber-500 font-extrabold px-6 py-3 rounded-md text-xs tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/30 border-2 border-brand-black"
              id="cta-head-request-bid"
            >
              Request a Bid
            </a>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-black hover:text-brand-blue p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-brand-light-gray px-4 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200" id="mobile-drawer">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-lg text-brand-black font-extrabold hover:bg-brand-light-gray hover:text-brand-blue text-sm transition-all focus:outline-none"
                id={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>
          
          <hr className="border-brand-light-gray my-2" />
          
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-brand-yellow hover:bg-amber-400 text-brand-black font-extrabold py-3.5 px-4 rounded-md text-center text-xs tracking-wider uppercase transition-colors duration-200 flex items-center justify-center border-2 border-brand-black shadow-md focus:outline-none"
            id="mobile-cta-request-bid"
          >
            Request a Bid
          </a>
        </div>
      )}
    </nav>
  );
}
