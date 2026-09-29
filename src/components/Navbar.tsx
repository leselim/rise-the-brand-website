import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Products', href: '#products' },
    { name: 'Featured', href: '#featured' },
    { name: 'Promise', href: '#promise' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center group py-0.5">
            <img
              src={logoImg}
              alt="Rise - Elevate Your Clean"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-200/80 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-gray-700 hover:text-[#824DC1] rounded-full hover:bg-gray-100/70 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#824DC1] hover:bg-[#703cb0] shadow-md shadow-[#824DC1]/25 hover:shadow-lg hover:shadow-[#824DC1]/35 hover:-translate-y-0.5 transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Shop Products</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-4 pb-6 mt-3 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-purple-50 hover:text-[#824DC1] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl text-xs font-bold text-white bg-[#824DC1] hover:bg-[#703cb0] shadow-md"
              >
                Shop Products
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
