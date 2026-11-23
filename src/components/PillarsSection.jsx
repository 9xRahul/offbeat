import React, { useState } from 'react';
import { 
  Mountain, 
  MapPin, 
  Music, 
  Tent, 
  HeartHandshake, 
  Check, 
  Sparkles,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export default function PillarsSection({ tripData, onOpenBooking }) {
  const [activeTab, setActiveTab] = useState(0);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Compass':
        return <Mountain className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Music':
        return <Music className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Tent':
        return <Tent className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            The Offbeats Formula
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Designed for First-Timers. <br />
            <span className="text-emerald-600">Loved by Wild Souls.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            We stripped away the exhausting commercial hustle and created an easy, heart-warming escape that combines nature, authentic culture, and real human connection.
          </p>
        </div>

        {/* Tab Buttons - Fixed alignment: flex-wrap ensures full text for Trekking and all tabs on every screen */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
          {tripData.highlights.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-[1.02]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{item.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {item.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Highlight Card Display */}
        {(() => {
          const activeItem = tripData.highlights[activeTab];
          return (
            <div className="mt-8 bg-slate-50 border border-slate-200/90 rounded-3xl overflow-hidden shadow-card grid grid-cols-1 lg:grid-cols-12 transition-all">
              {/* Left Content Column */}
              <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 text-emerald-700 flex items-center justify-center shrink-0">
                      {getIcon(activeItem.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                        {activeItem.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                        {activeItem.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-3 text-base sm:text-lg font-medium text-emerald-800">
                    "{activeItem.tagline}"
                  </p>

                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {activeItem.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      What makes this stress-free & beginner friendly:
                    </h4>
                    <ul className="space-y-2.5">
                      {activeItem.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>All-inclusive in our starter trip package</span>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 group"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Enquire About Batches</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-full lg:col-span-5 overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    {activeItem.badge}
                  </span>
                  <p className="font-bold text-base">{activeItem.title}</p>
                </div>
              </div>
            </div>
          );
        })()}

        {/* 5-Card Quick Grid for fast scanning - properly aligned */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {tripData.highlights.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                activeTab === idx
                  ? 'bg-emerald-50 border-emerald-300 shadow-sm ring-1 ring-emerald-300'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              } ${idx === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs ${
                  activeTab === idx ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                }`}>
                  {getIcon(item.icon)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  0{idx + 1}
                </span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">{item.title}</h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">{item.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
