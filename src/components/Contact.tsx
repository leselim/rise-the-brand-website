import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 shadow-xs">
            <span className="text-xs font-black text-[#824DC1] tracking-wider uppercase bg-[#824DC1] text-white px-2 py-0.5 rounded-md">
              09
            </span>
            <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">
              Contact Section
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            Let's Talk
          </h2>
          <p className="text-gray-600 max-w-xl text-base sm:text-lg">
            Whether you have a product question, wholesale inquiry, or reseller proposal, our South African support team is here to assist you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side Column */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-3xl bg-[#1A1A1A] text-white shadow-xl space-y-8 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#824DC1]/30 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#688114] bg-green-950/60 px-3 py-1 rounded-md border border-green-800">
                  Direct Channels
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-4">
                  Get In Touch Directly
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Our friendly team responds within 24 business hours.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#824DC1]/20 text-[#824DC1] flex items-center justify-center flex-shrink-0 font-bold border border-[#824DC1]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Email</h4>
                    <a href="mailto:info@rise.co.za" className="text-base font-bold text-white hover:text-[#824DC1] transition-colors">
                      info@rise.co.za
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#688114]/20 text-[#688114] flex items-center justify-center flex-shrink-0 font-bold border border-[#688114]/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Phone</h4>
                    <a href="tel:+27118492026" className="text-base font-bold text-white hover:text-[#688114] transition-colors">
                      +27 XX XXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#824DC1]/20 text-[#824DC1] flex items-center justify-center flex-shrink-0 font-bold border border-[#824DC1]/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase">Location</h4>
                    <p className="text-base font-bold text-white">
                      South Africa
                    </p>
                  </div>
                </div>

              </div>

              {/* Business Hours */}
              <div className="pt-6 border-t border-gray-800 flex items-center gap-3 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-[#688114]" />
                <span>Mon – Fri: 08:00 – 17:00 SAST</span>
              </div>

            </div>

          </div>

          {/* Form Side Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-lg">
              
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-[#688114] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1A1A1A]">
                    Message Received!
                  </h3>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Rise. A member of our South African team will respond to your message shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#824DC1] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="you@example.co.za"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#824DC1] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+27 (0) XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#824DC1] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#824DC1] focus:bg-white transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl text-xs font-bold text-white bg-[#824DC1] hover:bg-[#703cb0] shadow-lg shadow-[#824DC1]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
