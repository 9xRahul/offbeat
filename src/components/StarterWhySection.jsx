import React from 'react';
import { 
  Users, 
  Smile, 
  ShieldCheck, 
  CheckCircle, 
  XCircle,
  MessageSquare
} from 'lucide-react';

export default function StarterWhySection({ tripData, onOpenBooking }) {
  const comparison = [
    {
      feature: "Pacing & Trail Difficulty",
      normal: "High-rush 15km exhausting hike; slow hikers feel left behind.",
      offbeat: "Comfortable 4-5km scenic route with frequent breathers, photos, and zero pressure."
    },
    {
      feature: "Meals Provided",
      normal: "Often self-arranged or basic dry bread/maggi.",
      offbeat: "All 3 meals included (Breakfast, Lunch, Dinner + Campfire BBQ) freshly cooked and hot."
    },
    {
      feature: "Rooms & Washroom Hygiene",
      normal: "Cramped dorms or pitching tents on rocks with no washroom.",
      offbeat: "Deluxe hillside rooms or clean glamping with spotlessly sanitised western washrooms & hot water."
    },
    {
      feature: "Medical & Safety Care",
      normal: "Basic first aid kit (if any); untrained drivers as guides.",
      offbeat: "Wilderness First Aid certified leads, full medical kit, pulse oximeter, and standby 4x4 ambulance."
    },
    {
      feature: "Vibe for Solo Travelers",
      normal: "Big loud groups sticking to themselves; awkward to socialize.",
      offbeat: "65% join solo! Welcoming icebreaker games, community campfire acoustic circle, and warm inclusive leaders."
    }
  ];

  return (
    <section id="why-starters" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Why We Are Different
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            The "Starter Trip" Philosophy
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Most adventure travel is either an extreme survival test or an overpriced luxury resort where you stare at walls. Offbeats is the sweet spot in between.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tripData.starterPillars.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 hover:shadow-soft transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mb-3">
                0{index + 1}
              </div>
              <h3 className="font-bold font-display text-base sm:text-lg text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Table: Normal Trip vs Offbeats */}
        <div className="mt-14 sm:mt-16 bg-slate-900 text-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Honest Side-by-Side
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold font-display mt-1">
              Typical Commercial Trip vs. <span className="text-emerald-400">Offbeats</span>
            </h3>
          </div>

          <div className="divide-y divide-slate-800">
            {comparison.map((row, idx) => (
              <div key={idx} className="py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
                <div className="md:col-span-4 font-bold text-xs sm:text-sm text-slate-200">
                  {row.feature}
                </div>
                
                {/* Normal commercial trip */}
                <div className="md:col-span-4 bg-slate-800/40 p-3 rounded-xl border border-rose-900/30 flex items-start gap-2.5 text-xs text-slate-400">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-rose-300 block mb-0.5">Typical Trip:</span>
                    <span>{row.normal}</span>
                  </div>
                </div>

                {/* Offbeats trip */}
                <div className="md:col-span-4 bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30 flex items-start gap-2.5 text-xs text-emerald-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-emerald-300 block mb-0.5">Offbeats:</span>
                    <span>{row.offbeat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <button
              onClick={onOpenBooking}
              className="px-6 sm:px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold text-xs sm:text-sm rounded-full shadow-md transition-all inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire About Upcoming Batches</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
