import React from 'react';
import { Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import logoImg from '../assets/logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-12 relative overflow-hidden border-t border-gray-800">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#824DC1] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Logo Container */}
            <div className="inline-block bg-white px-5 py-3 rounded-2xl shadow-md border border-gray-100">
              <img
                src={logoImg}
                alt="Rise - Elevate Your Clean"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Rise is a proudly South African household cleaning brand committed to delivering high-quality, reliable, and affordable cleaning solutions for homes and businesses.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#688114]">
              <ShieldCheck className="w-4 h-4" />
              <span>Proudly Formulated & Distributed in South Africa</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-300">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <a href="#products" className="text-gray-400 hover:text-[#824DC1] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#824DC1] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-[#824DC1] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#featured" className="text-gray-400 hover:text-[#824DC1] transition-colors">
                  Featured Spray
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#824DC1] transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#824DC1] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#824DC1] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#824DC1] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-300">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#824DC1] text-gray-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#824DC1] text-gray-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-[#824DC1] text-gray-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-xs font-bold text-gray-300 hover:text-white transition-all"
              >
                <ArrowUp className="w-4 h-4 text-[#824DC1]" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Rise. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>for South African Homes</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

