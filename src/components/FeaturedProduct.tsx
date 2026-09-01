import React, { useState } from 'react';
import { Check, Star, ArrowRight, X, Droplet, Flame, Leaf, RefreshCw, Sparkles } from 'lucide-react';
import multipurposeImg from '../assets/multipurpose-cleaner.png';

export const FeaturedProduct: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const benefits = [
    'Removes grease',
    'Fresh fragrance',
    'Suitable for multiple surfaces',
    'Easy to use',
  ];

  return (
    <section id="featured" className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Highlight Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-purple-50/20 to-green-50/20 border border-purple-100/80 p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden">
          
          {/* Subtle Background Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#824DC1]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Numbered Section Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs">
                <span className="text-xs font-black text-[#824DC1] tracking-wider uppercase bg-[#824DC1] text-white px-2 py-0.5 rounded-md">
                  05
                </span>
                <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">
                  Featured Product
                </span>
              </div>

              {/* Tag & Rating */}
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#688114] text-white tracking-wider uppercase">
                  Flagship Formula
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-gray-700 ml-1">5.0 (2,400+ reviews)</span>
                </div>
              </div>

              {/* Product Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
                Rise Multipurpose Cleaner
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 font-normal leading-relaxed">
                Designed for everyday cleaning, the Rise Multipurpose Cleaner removes dirt, grease and everyday stains while leaving surfaces fresh and sparkling.
              </p>

              {/* Benefits Grid Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-gray-200/80 shadow-xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#688114]/15 text-[#688114] flex items-center justify-center flex-shrink-0 font-bold">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Call To Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-[#824DC1] hover:bg-[#703cb0] shadow-lg shadow-[#824DC1]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-[#1A1A1A] bg-white border border-gray-200 hover:bg-gray-50 transition-all"
                >
                  <span>Request Sample</span>
                </a>
              </div>

            </div>

            {/* Right Product Image Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#824DC1]/20 to-[#688114]/20 rounded-3xl blur-2xl transform rotate-3 scale-105 pointer-events-none" />

                <div className="relative rounded-3xl overflow-hidden bg-white p-4 border border-gray-200/80 shadow-2xl">
                  <img
                    src={multipurposeImg}
                    alt="Rise Multipurpose Cleaner Product Bottle"
                    className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Badge overlay */}
                  <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 shadow-lg flex items-center justify-between">
                    <div>
                      <p className="text-xs font-extrabold text-[#824DC1] uppercase">Volumetric Spec</p>
                      <p className="text-sm font-bold text-gray-900">500ml Spray Bottle</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#688114] text-white">
                      Non-Toxic
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Feature Learn More Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl relative border border-gray-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#824DC1] text-xs font-extrabold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Specifications</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-2">
              Rise Multipurpose Cleaner - Deep Dive
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Our flagship formula engineered for maximum stain-fighting power while staying safe for your family and pets.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 flex items-start gap-3">
                <Flame className="w-5 h-5 text-[#824DC1] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]">Grease Dissolve</h4>
                  <p className="text-[11px] text-gray-600">Lifts baked-on kitchen grease in 15s</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-green-50 border border-green-100 flex items-start gap-3">
                <Leaf className="w-5 h-5 text-[#688114] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]">Eco Fragrance</h4>
                  <p className="text-[11px] text-gray-600">Fresh citrus & lavender essential oils</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-green-50 border border-green-100 flex items-start gap-3">
                <Droplet className="w-5 h-5 text-[#688114] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]">Streak-Free</h4>
                  <p className="text-[11px] text-gray-600">Crystal shine on glass & counters</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 flex items-start gap-3">
                <RefreshCw className="w-5 h-5 text-[#824DC1] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1A1A1A]">Refillable Bottle</h4>
                  <p className="text-[11px] text-gray-600">Designed for eco pod concentrates</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setModalOpen(false)}
              className="w-full inline-block text-center py-4 rounded-2xl text-xs font-bold text-white bg-[#824DC1] hover:bg-[#703cb0] shadow-md transition-all"
            >
              Order Wholesale / Distribution Specs
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
