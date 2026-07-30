import React from 'react';
import { ShieldCheck, Tag, HeartHandshake, Lightbulb, CheckCircle2 } from 'lucide-react';

export const PromiseSection: React.FC = () => {
  const promises = [
    {
      title: 'Quality Products',
      description: 'We adhere to rigorous testing and premium formulation standards so every spray and wipe delivers maximum effectiveness.',
      icon: ShieldCheck,
      color: '#824DC1',
      accentBg: 'bg-[#824DC1]/10 text-[#824DC1]',
      borderHover: 'hover:border-[#824DC1]/40',
    },
    {
      title: 'Affordable Prices',
      description: 'Premium cleaning performance shouldn’t come with a high price tag. We keep our prices accessible to every South African family.',
      icon: Tag,
      color: '#688114',
      accentBg: 'bg-[#688114]/10 text-[#688114]',
      borderHover: 'hover:border-[#688114]/40',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your peace of mind is our highest priority. We listen, continuously refine, and back our products with 100% satisfaction commitment.',
      icon: HeartHandshake,
      color: '#824DC1',
      accentBg: 'bg-[#824DC1]/10 text-[#824DC1]',
      borderHover: 'hover:border-[#824DC1]/40',
    },
    {
      title: 'Continuous Innovation',
      description: 'From eco-conscious packaging to smarter grime-lifting chemistry, we are constantly pioneering better ways to clean.',
      icon: Lightbulb,
      color: '#688114',
      accentBg: 'bg-[#688114]/10 text-[#688114]',
      borderHover: 'hover:border-[#688114]/40',
    },
  ];

  return (
    <section id="promise" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 shadow-xs">
            <span className="text-xs font-black text-[#824DC1] tracking-wider uppercase bg-[#824DC1] text-white px-2 py-0.5 rounded-md">
              06
            </span>
            <span className="text-xs font-bold text-[#824DC1] uppercase tracking-widest">
              Our Promise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Our Commitment
          </h2>
          <p className="text-gray-600 max-w-xl text-base sm:text-lg">
            The core principles that guide how we formulate, price, and support every product we bring to your home.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative p-8 rounded-3xl bg-[#FAFAFA] border border-gray-200/90 shadow-xs rise-card-hover ${item.borderHover} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.accentBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#824DC1] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200/60 flex items-center gap-2 text-xs font-bold text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-[#688114]" />
                  <span>Guaranteed Pledge</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
