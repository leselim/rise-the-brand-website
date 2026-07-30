import React from 'react';
import { Flag, HeartHandshake, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#824DC1]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Numbering */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 shadow-xs">
            <span className="text-xs font-black text-[#824DC1] tracking-wider uppercase bg-[#824DC1] text-white px-2 py-0.5 rounded-md">
              02
            </span>
            <span className="text-xs font-bold text-[#824DC1] uppercase tracking-widest">
              About Rise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Who We Are
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#824DC1] to-[#688114] rounded-full mt-2" />
        </div>

        {/* Centered Brand Story */}
        <div className="space-y-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-green-50 text-[#688114] text-xs font-bold">
            <Flag className="w-4 h-4" />
            <span>Proudly South African</span>
          </div>

          <p className="text-xl sm:text-2xl font-semibold text-[#1A1A1A] leading-snug">
            Rise is a proudly South African household cleaning brand committed to delivering effective, reliable and affordable cleaning products for homes and businesses.
          </p>

          <p className="text-gray-600 leading-relaxed font-normal text-base sm:text-lg">
            We believe that every family deserves products that make cleaning easier without compromising on quality.
          </p>

          <p className="text-gray-600 leading-relaxed font-normal text-base sm:text-lg">
            Whether you're cleaning kitchens, bathrooms, offices or living spaces, Rise provides solutions you can trust every day.
          </p>

          {/* Mission & Vision Callout Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-left">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FAFAFA] to-purple-50/50 border border-purple-100 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#824DC1]/10 text-[#824DC1] flex items-center justify-center font-bold mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#1A1A1A] mb-1">Our Mission</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Provide high-quality, affordable cleaning solutions that help every family maintain a cleaner, healthier living environment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FAFAFA] to-green-50/50 border border-green-100 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-[#688114]/10 text-[#688114] flex items-center justify-center font-bold mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#1A1A1A] mb-1">Our Vision</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To become South Africa's most trusted household cleaning brand combining quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
