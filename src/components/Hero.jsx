import React from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Utensils, 
  Bed, 
  ArrowRight, 
  Star, 
  Flame, 
  Tent, 
  Mountain, 
  MessageSquare 
} from 'lucide-react';

export default function Hero({ tripData, onOpenBooking }) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Background Image with layered gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={tripData.images.hero}
          alt="Offbeats mountain misty landscape"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Starter Tag Pill - strictly single line */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-semibold mb-6 animate-pulse-subtle shadow-md whitespace-nowrap shrink-0">
          <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="whitespace-nowrap">Curated Starter Trips for First-Timers & Solo Seekers</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display max-w-4xl leading-tight">
          Disconnect From Stress. <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            Reconnect With Like-Minded Souls.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
          {tripData.heroSubtitle}
        </p>

        {/* 5 Core Inclusions Quick Badges - all single line pills with generous spacing */}
        <div className="mt-7 flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <Mountain className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Gentle Trekking</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>Hidden Sightseeing</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Cultural Campfire</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <Tent className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Starlight Camping</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <Utensils className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span>BF, Lunch & Dinner</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <Bed className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span>Good Rooms</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>Certified Medical Aid</span>
          </span>
        </div>

        {/* CTA Section - properly spaced single line buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap">Enquire About Batches</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          <a
            href="#itinerary"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">View 3-Day Itinerary</span>
          </a>
        </div>

        {/* Trust & Micro-Stats Bar */}
        <div className="mt-10 sm:mt-12 pt-7 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-3xl w-full">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-amber-400 font-bold text-base sm:text-lg whitespace-nowrap">
              <Star className="w-4 h-4 fill-amber-400 shrink-0" />
              <span>{tripData.rating}</span>
              <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-1 whitespace-nowrap">340+ Beginner Reviews</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-white font-bold text-base sm:text-lg whitespace-nowrap">
              <Users className="w-4 h-4 text-teal-400 shrink-0" />
              <span className="whitespace-nowrap">{tripData.soloRatio}</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-1 whitespace-nowrap">Solo Traveler Friendly</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-white font-bold text-base sm:text-lg whitespace-nowrap">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="whitespace-nowrap">{tripData.duration}</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-1 whitespace-nowrap">Weekend Gateway</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-white font-bold text-base sm:text-lg whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
              <span className="whitespace-nowrap">100% Safe</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-1 whitespace-nowrap">Medical Aid On-Ground</span>
          </div>
        </div>

        {/* Next Batch notice pill - single line */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm whitespace-nowrap shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
          <span className="whitespace-nowrap">Next Batch: <strong>{tripData.nextBatch}</strong> — Enquiries Open</span>
        </div>
      </div>
    </section>
  );
}
