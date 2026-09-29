import React, { useState } from 'react';
import { ArrowRight, CheckCircle, X } from 'lucide-react';

interface ProductItem {
  id: string;
  name: string;
  description: string;
  badge: string;
  tag: string;
  accent: string;
  details: string[];
  isFuture?: boolean;
}

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductItem | null>(null);

  const products: ProductItem[] = [
    {
      id: 'multipurpose',
      name: 'Multipurpose Cleaner',
      description: 'Suitable for kitchens, counters and everyday surfaces. Cuts grease and leaves surfaces sparkling clean.',
      badge: 'Bestseller',
      tag: 'All-in-One Spray',
      accent: '#824DC1',
      details: [
        'Cuts through grease and tough kitchen grime instantly',
        'Streak-free formula on glass, stone, & laminate',
        'Infused with fresh lavender & citrus scent',
        'Non-toxic and safe around family and pets'
      ]
    },
    {
      id: 'footwear',
      name: 'Footwear Cleaner',
      description: 'Advanced foam formula designed to deep-clean sneakers, leather, canvas, and athletic shoes.',
      badge: 'Shoe Care',
      tag: 'Sneakers & Leather',
      accent: '#688114',
      details: [
        'Removes dirt, mud, and scuff marks effortlessly',
        'Safe on leather, suede, mesh, and canvas',
        'No harsh chemicals or bleaching agents',
        'Quick drying foam with fresh shoe aroma'
      ]
    },
    {
      id: 'dishwash',
      name: 'Dishwashing Liquid',
      description: 'Ultra-concentrated dish wash formula that cuts stubborn grease while staying gentle on hands.',
      badge: 'High Suds',
      tag: 'Grease Cutting',
      accent: '#824DC1',
      details: [
        'Powerful active grease-stripping tech',
        'Rich long-lasting foam per drop',
        'Rinses completely clean with zero residue',
        'Dermatologically friendly on skin'
      ]
    },
    {
      id: 'pinegel',
      name: 'Pine Gel',
      description: 'Classic South African multi-surface pine gel cleaner that delivers deep shine and authentic pine freshness.',
      badge: 'Pine Fresh',
      tag: 'Multi-Surface Gel',
      accent: '#688114',
      details: [
        'Concentrated gel formula for floors & counters',
        'Authentic natural pine oil scent',
        'Disinfects and removes tough oil stains',
        'Economical daily cleaning value'
      ]
    },
    {
      id: 'thickbleach',
      name: 'Thick Bleach',
      description: 'Heavy-duty clinging thick bleach formula engineered to kill 99.9% of germs and sanitize deep surfaces.',
      badge: '99.9% Hygiene',
      tag: 'Deep Germ Shield',
      accent: '#824DC1',
      details: [
        'Clinging gel formula coats vertical surfaces',
        'Eliminates mold, mildew, and tough stains',
        'Kills 99.9% of household bacteria & germs',
        'Ideal for toilets, drains, and tiles'
      ]
    },
    {
      id: 'future',
      name: 'Future Products',
      description: 'More innovative household cleaning products coming soon to the Rise range.',
      badge: 'Coming Soon',
      tag: 'Innovation',
      accent: '#688114',
      isFuture: true,
      details: [
        'Eco-pod refill concentrate refills',
        'Automatic dishwashing pods',
        'Fabric softeners & room mists',
        'Commercial bulk hygiene lines'
      ]
    }
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 shadow-xs">
            <span className="text-xs font-black text-[#824DC1] tracking-wider uppercase bg-[#824DC1] text-white px-2 py-0.5 rounded-md">
              04
            </span>
            <span className="text-xs font-bold text-[#824DC1] uppercase tracking-widest">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            The Rise Product Line
          </h2>
          <p className="text-gray-600 max-w-xl text-base sm:text-lg">
            High-performance, affordable South African cleaning solutions engineered for every job in your home.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <div
              key={prod.id}
              className={`group relative p-8 rounded-3xl bg-[#FAFAFA] border ${
                prod.isFuture ? 'border-dashed border-gray-300' : 'border-gray-200/90'
              } shadow-xs rise-card-hover hover:border-[#824DC1]/40 flex flex-col justify-between transition-all duration-300`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#688114] bg-green-50 px-3 py-1 rounded-lg">
                    {prod.tag}
                  </span>
                  <span
                    className={`text-xs font-extrabold px-3 py-1 rounded-full ${
                      prod.badge === 'Bestseller'
                        ? 'bg-[#824DC1] text-white shadow-xs'
                        : prod.isFuture
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-purple-100 text-[#824DC1]'
                    }`}
                  >
                    {prod.badge}
                  </span>
                </div>

                {/* Category Title & Description */}
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#824DC1] transition-colors">
                  {prod.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                  {prod.description}
                </p>
              </div>

              {/* Quick Feature Highlights */}
              <div>
                <ul className="space-y-2 mb-8">
                  {prod.details.slice(0, 2).map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-[#688114] flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Action CTA */}
                <button
                  onClick={() => setSelectedCategory(prod)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    prod.isFuture
                      ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      : 'bg-white text-[#824DC1] border border-purple-200 hover:bg-[#824DC1] hover:text-white shadow-xs'
                  }`}
                >
                  <span>{prod.isFuture ? 'Preview Roadmap' : 'Product Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setSelectedCategory(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-[#824DC1]">
                {selectedCategory.badge}
              </span>
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                Rise Product Overview
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#1A1A1A] mb-2">
              {selectedCategory.name}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              {selectedCategory.description}
            </p>

            <div className="space-y-4 mb-8 bg-[#FAFAFA] p-5 rounded-2xl border border-gray-100">
              <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider">
                Highlights & Specifications:
              </h4>
              <ul className="space-y-2.5">
                {selectedCategory.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#688114] flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                onClick={() => setSelectedCategory(null)}
                className="w-full text-center py-3.5 rounded-xl text-xs font-bold text-white bg-[#824DC1] hover:bg-[#703cb0] shadow-md transition-all"
              >
                Inquire For Wholesale & Stock
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
