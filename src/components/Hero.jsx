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
  Star, 
  Flame, 
  Tent, 
  Mountain, 
  MessageSquare,
  Play,
  Image as ImageIcon
} from 'lucide-react';

export default function Hero({ tripData, onOpenBooking }) {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-slate-950 text-white">
      {/* Background Image - stretched across entire screen and shown completely */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={tripData.media.poster}
          alt="OFFBEAT Mudippara trip"
          className="w-full h-full object-fill absolute inset-0 opacity-40 sm:opacity-50 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/25 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Date & Location Banner Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md text-emerald-300 text-xs sm:text-sm font-semibold mb-5 shadow-md whitespace-nowrap shrink-0">
          <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="whitespace-nowrap">DATE: <strong>{tripData.dateDisplay}</strong></span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
          <span className="whitespace-nowrap">LOCATION: <strong>{tripData.location.toUpperCase()}</strong></span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="text-amber-300 font-bold whitespace-nowrap">RATE: {tripData.rate}</span>
        </div>

        {/* Main Catchy Heading from Official Poster */}
        <p className="text-sm sm:text-lg text-emerald-300 font-semibold tracking-wide uppercase mb-1">
          For everyone who needs a ...
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight font-display max-w-4xl leading-tight">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Refresh.</span>{' '}
          <span className="text-white">Reconnect.</span>{' '}
          <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Reset.</span>
        </h1>

        {/* Poster Motto */}
        <p className="mt-3 text-base sm:text-xl font-medium text-emerald-200/90 italic">
          "{tripData.motto}"
        </p>

        {/* Subtitle */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
          {tripData.heroSubtitle}
        </p>

        {/* 4 Poster Inclusions Quick Badges */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <Mountain className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Trekking</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>Activities</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Acoustic Night</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-slate-200 whitespace-nowrap shrink-0 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Hidden Waterfall</span>
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
            <span>Medical Aid</span>
          </span>
        </div>

        {/* WhatsApp Direct Connect CTA Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href={tripData.whatsAppNumbers[0].link}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>WhatsApp: {tripData.whatsAppNumbers[0].phone}</span>
          </a>

          <a
            href={tripData.whatsAppNumbers[1].link}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-600/30 hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>WhatsApp: {tripData.whatsAppNumbers[1].phone}</span>
          </a>

          <a
            href="#trip-preview"
            className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <Play className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>Watch Video & Poster</span>
          </a>
        </div>

        {/* Trust & Micro-Stats Bar */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl w-full">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-amber-400 font-bold text-base whitespace-nowrap">
              <Star className="w-4 h-4 fill-amber-400 shrink-0" />
              <span>{tripData.rating}</span>
              <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">380+ Community Reviews</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-white font-bold text-base whitespace-nowrap">
              <Users className="w-4 h-4 text-teal-400 shrink-0" />
              <span className="whitespace-nowrap">{tripData.soloRatio}</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Solo Traveler Friendly</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-white font-bold text-base whitespace-nowrap">
              <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="whitespace-nowrap">{tripData.dateDisplay}</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Weekend Escape</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-white font-bold text-base whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
              <span className="whitespace-nowrap">Medical Aid</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Trained Captains</span>
          </div>
        </div>
      </div>
    </section>
  );
}
