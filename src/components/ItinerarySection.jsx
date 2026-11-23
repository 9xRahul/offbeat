import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Utensils,
  Sparkles,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

export default function ItinerarySection({ tripData, onOpenBooking }) {
  const [selectedDay, setSelectedDay] = useState(1);

  const currentDayData = tripData.itinerary.find((d) => d.day === selectedDay);

  return (
    <section id="itinerary" className="py-16 sm:py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Effortless Flow
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            The 3-Day Starter Itinerary
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            A relaxed balance of gentle morning outdoor activities, peaceful afternoons, and lively campfire evenings. No 4 AM forced alarms or grueling rushes.
          </p>
        </div>

        {/* Day Selectors - properly centered and aligned */}
        <div className="mt-8 sm:mt-12 flex justify-center gap-2 sm:gap-4 max-w-xl mx-auto">
          {tripData.itinerary.map((day) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`flex-1 py-3 px-3 sm:px-4 rounded-2xl border text-center transition-all duration-200 ${selectedDay === day.day
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-[1.02]'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/80'
                }`}
            >
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider opacity-90">
                Day 0{day.day}
              </div>
              <div className="font-display font-bold text-xs sm:text-sm mt-0.5 truncate">
                {day.day === 1 ? 'Arrival & Camp' : day.day === 2 ? 'Trail & Falls' : 'Heritage & Home'}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Day Content Card */}
        {currentDayData && (
          <div className="mt-8 bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-soft transition-all">
            {/* Day Header Banner */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Day 0{currentDayData.day} Plan</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-slate-900">
                  {currentDayData.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  {currentDayData.subtitle}
                </p>
              </div>

              {/* Meals Included in this day */}
              <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-3 sm:p-4 shrink-0 flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5 text-emerald-600" />
                  Meals Included:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentDayData.mealsIncluded.map((meal, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-2 py-0.5 bg-white text-emerald-800 rounded-md border border-emerald-200"
                    >
                      {meal}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline of events */}
            <div className="mt-8 relative">
              {/* Vertical timeline line */}
              <div className="absolute left-3.5 sm:left-5 top-3 bottom-3 w-0.5 bg-slate-200" />

              <div className="space-y-6 sm:space-y-8">
                {currentDayData.events.map((evt, idx) => (
                  <div key={idx} className="relative flex items-start gap-3.5 sm:gap-5 pl-1 sm:pl-2">
                    {/* Timestamp bullet */}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-emerald-600 text-emerald-700 flex items-center justify-center shrink-0 z-10 shadow-sm">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>

                    {/* Event details card */}
                    <div className="flex-1 bg-slate-50/80 hover:bg-slate-50 border border-slate-100 hover:border-slate-200 rounded-2xl p-3.5 sm:p-5 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md w-fit">
                          {evt.time}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 font-display">
                          {evt.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                        {evt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 text-center sm:text-left">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Paced comfortably for beginner stamina. Want to skip any trail? Totally fine!</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Enquire About Batches</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
