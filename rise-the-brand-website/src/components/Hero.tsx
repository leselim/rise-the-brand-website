import React from 'react';
import { ArrowRight, ShieldCheck, Star, Award, CheckCircle2 } from 'lucide-react';
import heroProductsImg from '../assets/hero-products.png';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FAFAFA] via-purple-50/30 to-[#FAFAFA]">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#824DC1]/10 to-[#688114]/10 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-[#824DC1]/5 blur-2xl -z-10 rounded-full pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Numbered Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/80 shadow-xs">
              <span className="text-xs font-black text-[#824DC1] tracking-wider uppercase bg-purple-100 px-2 py-0.5 rounded-md">
                01
              </span>
              <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">
                Hero Section
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#688114]"></span>
              <span className="text-xs font-medium text-gray-500">South Africa's Choice</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.12]">
              Cleaning Made Smarter.{' '}
              <span className="bg-gradient-to-r from-[#824DC1] via-[#945cd7] to-[#688114] bg-clip-text text-transparent">
                Living Made Better.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-2xl">
              Rise creates affordable, high-quality household cleaning products designed to keep homes fresh, hygienic and sparkling every day.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-[#824DC1] hover:bg-[#703cb0] shadow-lg shadow-[#824DC1]/30 hover:shadow-xl hover:shadow-[#824DC1]/40 hover:-translate-y-0.5 transition-all group"
              >
                <span>Shop Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-[#1A1A1A] bg-white border border-gray-200 hover:border-purple-200 hover:bg-purple-50/50 shadow-sm hover:shadow transition-all"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-gray-200/60 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#688114] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">100% Effective</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#824DC1] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">Non-Toxic Formula</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#688114] flex-shrink-0" />
                <span className="text-xs font-semibold text-gray-700">South African Made</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#824DC1]/20 to-[#688114]/20 rounded-3xl blur-xl opacity-70 animate-pulse-glow" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-2xl p-3">
                <img
                  src={heroProductsImg}
                  alt="Rise Household Cleaning Products in a modern pristine kitchen"
                  className="w-full h-auto object-cover rounded-2xl hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                />

                {/* Overlay Badge 1 */}
                <div className="absolute top-6 left-6 glass-panel rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-float-slow">
                  <div className="w-10 h-10 rounded-xl bg-[#824DC1] text-white flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Germ Defense</p>
                    <p className="text-[11px] font-medium text-gray-600">Kills 99.9% Bacteria</p>
                  </div>
                </div>

                {/* Overlay Badge 2 */}
                <div className="absolute bottom-6 right-6 glass-panel rounded-2xl p-3.5 shadow-lg flex items-center gap-3 animate-float-delayed">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-gray-900">4.9/5 Rating</p>
                    <p className="text-[10px] font-semibold text-gray-500">Trusted Nationwide</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
