import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      question: "Are Rise products safe?",
      answer: "Yes! All Rise formulas are carefully crafted, non-toxic, and tested for safe daily use around your home, children, and pets when used according to instructions."
    },
    {
      question: "Where can I buy Rise products?",
      answer: "Rise products are currently available exclusively through direct inquiry with our sales team. Reach out via our contact form below or call us directly to place an order or inquire about stock."
    },
    {
      question: "Do you supply businesses?",
      answer: "Absolutely. We supply commercial volume orders for offices, hospitality guesthouses, restaurants, schools, and professional cleaning companies with bulk pricing."
    },
    {
      question: "Are your products environmentally conscious?",
      answer: "Yes. We prioritize biodegradable surfactants, eco-conscious formulation chemistry, and 100% recyclable bottles to minimize our environmental footprint."
    },
    {
      question: "Can I become a reseller?",
      answer: "We warmly welcome new retail partners and regional wholesalers. Simply reach out via our contact section to speak with our distribution department."
    }
  ];

  const toggleFAQ = (index: number) => {
    // Single open accordion rule: if clicking current, close it; else open only that index
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 shadow-xs">
            <span className="text-xs font-black text-[#824DC1] tracking-wider uppercase bg-[#824DC1] text-white px-2 py-0.5 rounded-md">
              08
            </span>
            <span className="text-xs font-bold text-[#824DC1] uppercase tracking-widest">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-gray-600 max-w-xl text-base sm:text-lg">
            Everything you need to know about our products, safety, distribution, and reseller options.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#FAFAFA] border-[#824DC1]/40 shadow-md'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 rounded-2xl focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#824DC1]' : 'text-[#1A1A1A]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'bg-[#824DC1] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 animate-in fade-in slide-in-from-top-1">
                    <div className="pt-3 border-t border-gray-200/60">
                      <p className="text-gray-600 text-base leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
