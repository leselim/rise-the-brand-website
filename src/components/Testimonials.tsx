import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Rise products have completely changed the way I clean my home.",
      author: "Thandiwe M.",
      location: "Johannesburg, GP",
      role: "Homeowner & Parent",
      rating: 5,
      avatarBg: "bg-[#824DC1]",
    },
    {
      id: 2,
      quote: "I love how effective and affordable the products are.",
      author: "Sipho K.",
      location: "Cape Town, WC",
      role: "Guesthouse Manager",
      rating: 5,
      avatarBg: "bg-[#688114]",
    },
    {
      id: 3,
      quote: "My kitchen has never looked this clean.",
      author: "Annelize van Zyl",
      location: "Durban, KZN",
      role: "Verified Customer",
      rating: 5,
      avatarBg: "bg-[#824DC1]",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs">
            <span className="text-xs font-black text-[#824DC1] tracking-wider uppercase bg-[#824DC1] text-white px-2 py-0.5 rounded-md">
              07
            </span>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Loved By Homes Across South Africa
          </h2>
          <p className="text-gray-600 max-w-xl text-base sm:text-lg">
            Read what real customers have to say about switching to Rise.
          </p>
        </div>

        {/* 3 Customer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative p-8 rounded-3xl bg-white border border-gray-200/90 shadow-sm rise-card-hover hover:border-purple-300 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-purple-200 group-hover:text-[#824DC1] transition-colors" />
                </div>

                {/* Main Quote Text */}
                <p className="text-lg font-semibold text-[#1A1A1A] italic leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${item.avatarBg} text-white flex items-center justify-center font-extrabold text-sm shadow-xs`}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#1A1A1A]">{item.author}</h4>
                    <p className="text-xs text-gray-500 font-medium">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-[#688114] bg-green-50 px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
