import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function ReviewsSection({ tripData }) {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 whitespace-nowrap shrink-0">
            <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400 shrink-0" />
            <span className="whitespace-nowrap">Real Starter Stories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            "I Arrived Solo. I Left With a Family."
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Over 340+ first-time hikers and solo wanderers have trusted Offbeats to unplug from hectic work lives. Here is what they experienced:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {tripData.testimonials.map((review, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-800/70 border border-slate-700/80 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-slate-800 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap shrink-0">
                    {review.batch}
                  </span>
                </div>

                <Quote className="w-7 h-7 text-emerald-500/40 mb-2.5" />

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-xs sm:text-sm whitespace-nowrap">{review.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-400 whitespace-nowrap">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
