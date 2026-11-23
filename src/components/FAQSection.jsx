import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQSection({ tripData, onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Clear, honest answers so you can embark on your first trip with total confidence.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-8 sm:mt-10 space-y-3">
          {tripData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-emerald-600 text-white rounded-3xl text-center shadow-lifted">
          <h3 className="text-lg sm:text-2xl font-bold font-display">
            Still feeling unsure about your first trip?
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-2 max-w-xl mx-auto leading-relaxed">
            Talk to a real trip captain! We will answer any questions about trails, food, rooms, or solo traveler safety without any pressure.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-white text-emerald-800 font-bold text-xs sm:text-sm rounded-full hover:bg-emerald-50 transition-colors shadow-md inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire About Batches</span>
            </button>
            <a
              href="https://wa.me/?text=Hi%20Offbeats!%20I%20have%20questions%20about%20the%20starter%20trip."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 bg-emerald-700/80 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-full border border-emerald-500 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
