import React from 'react';
import { Award, Wallet, ShieldCheck, ClockCheck, ArrowUpRight } from 'lucide-react';

export const WhyChoose: React.FC = () => {
  const features = [
    {
      id: '01',
      title: 'Quality',
      description: 'Carefully formulated products that deliver consistent cleaning performance.',
      icon: Award,
      color: '#824DC1',
      badge: 'Premium Grade',
      bgGradient: 'from-purple-500/5 to-purple-500/10',
      borderColor: 'hover:border-[#824DC1]/40',
      iconBg: 'bg-[#824DC1]/10 text-[#824DC1]',
    },
    {
      id: '02',
      title: 'Affordable',
      description: 'Excellent value without sacrificing effectiveness.',
      icon: Wallet,
      color: '#688114',
      badge: 'Best Value',
      bgGradient: 'from-green-500/5 to-green-500/10',
      borderColor: 'hover:border-[#688114]/40',
      iconBg: 'bg-[#688114]/10 text-[#688114]',
    },
    {
      id: '03',
      title: 'Trusted',
      description: 'Built around customer satisfaction and long-lasting relationships.',
      icon: ShieldCheck,
      color: '#824DC1',
      badge: 'Verified Care',
      bgGradient: 'from-purple-500/5 to-purple-500/10',
      borderColor: 'hover:border-[#824DC1]/40',
      iconBg: 'bg-[#824DC1]/10 text-[#824DC1]',
    },
    {
      id: '04',
      title: 'Reliable',
      description: 'Products designed to perform every single day.',
      icon: ClockCheck,
      color: '#688114',
      badge: 'Daily Defense',
      bgGradient: 'from-green-500/5 to-green-500/10',
      borderColor: 'hover:border-[#688114]/40',
      iconBg: 'bg-[#688114]/10 text-[#688114]',
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs">
            <span className="text-xs font-black text-[#824DC1] tracking-wider uppercase bg-[#824DC1] text-white px-2 py-0.5 rounded-md">
              03
            </span>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">
              Why Choose Rise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Built For South African Homes
          </h2>
          <p className="text-gray-600 max-w-xl text-base sm:text-lg">
            We prioritize quality, value, and reliability in every bottle we produce.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group relative p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm rise-card-hover ${item.borderColor} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-purple-50 group-hover:text-[#824DC1] transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Content */}
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#824DC1] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Indicator */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-[#824DC1] transition-colors">
                  <span>Pillar {item.id}</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
