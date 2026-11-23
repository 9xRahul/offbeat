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
  Play
} from 'lucide-react';

export default function Hero({ tripData, onOpenBooking }) {
  return (
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 lg:py-32 overflow-hidden bg-slate-950 text-white">
        {/* Background Image - stretched across entire screen */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={tripData.media.poster}
            alt="OFFBEAT Mudippara trip"
            className="w-full h-full object-fill absolute inset-0 opacity-40 sm:opacity-50 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-900/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-transparent to-transparent" />
        </div>

            {/* Main Container - Generous px-5 mobile margin ensures content NEVER touches phone screen edges */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
              {/* Date & Location Banner Pill - Wraps naturally on small mobile screens with proper margin */}
              <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 rounded-2xl sm:rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md text-emerald-300 text-[11px] sm:text-sm font-semibold mb-5 shadow-md max-w-full">
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>DATE: <strong>{tripData.dateDisplay}</strong></span>
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="flex items-center gap-1 whitespace-nowrap">
                  <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>LOCATION: <strong>{tripData.location.toUpperCase()}</strong></span>
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span className="text-amber-300 font-bold whitespace-nowrap px-1.5 py-0.5 rounded bg-amber-500/20 sm:bg-transparent">
                  RATE: {tripData.rate}
                </span>
              </div>

              {/* Main Catchy Heading from Official Poster */}
                <p className="text-xs sm:text-base text-emerald-300 font-semibold tracking-wider uppercase mb-1">
                  For everyone who needs a ...
                </p>
                  <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight font-display max-w-4xl leading-tight px-2">
                    <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Refresh.</span>{' '}
                    <span className="text-white">Reconnect.</span>{' '}
                    <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">Reset.</span>
                  </h1>

                  {/* Poster Motto */}
                    <p className="mt-2.5 sm:mt-3 text-sm sm:text-xl font-medium text-emerald-200/90 italic px-2">
                      "{tripData.motto}"
                    </p>

                      {/* Subtitle with mobile side margin */}
                      <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed px-3">
                        {tripData.heroSubtitle}
                      </p>

                          {/* 4 Poster Inclusions Quick Badges - wrapped with comfortable spacing */}
                          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center items-center gap-1.5 sm:gap-2.5 max-w-2xl px-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-[11px] sm:text-xs text-slate-200 whitespace-nowrap shrink-0">
                              <Mountain className="w-3 h-3 text-emerald-400 shrink-0" />
                              <span>Trekking</span>
                            </span>
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-[11px] sm:text-xs text-slate-200 whitespace-nowrap shrink-0">
                                <Sparkles className="w-3 h-3 text-teal-400 shrink-0" />
                                <span>Activities</span>
                              </span>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-[11px] sm:text-xs text-slate-200 whitespace-nowrap shrink-0">
                                  <Flame className="w-3 h-3 text-amber-400 shrink-0" />
                                  <span>Acoustic Night</span>
                                </span>
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-[11px] sm:text-xs text-slate-200 whitespace-nowrap shrink-0">
                                    <MapPin className="w-3 h-3 text-sky-400 shrink-0" />
                                    <span>Hidden Waterfall</span>
                                  </span>
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-[11px] sm:text-xs text-slate-200 whitespace-nowrap shrink-0">
                                      <Utensils className="w-3 h-3 text-orange-400 shrink-0" />
                                      <span>BF, Lunch & Dinner</span>
                                    </span>
                                      <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-[11px] sm:text-xs text-slate-200 whitespace-nowrap shrink-0">
                                        <Bed className="w-3 h-3 text-indigo-400 shrink-0" />
                                        <span>Good Rooms</span>
                                      </span>
                                        <span className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-[11px] sm:text-xs text-slate-200 whitespace-nowrap shrink-0">
                                          <ShieldCheck className="w-3 h-3 text-rose-400 shrink-0" />
                                          <span>Medical Aid</span>
                                        </span>
                                      </div>

                                        {/* WhatsApp Direct Connect CTA Section - max-w-xs on mobile gives clean 24px margins */}
                                        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-none mx-auto">
                                          <a
                                            href={tripData.whatsAppNumbers[0].link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full sm:w-auto px-5 py-3 rounded-2xl sm:rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                                          >
                                            <MessageSquare className="w-4 h-4 shrink-0" />
                                            <span>WhatsApp: {tripData.whatsAppNumbers[0].phone}</span>
                                          </a>

                                          <a
                                            href={tripData.whatsAppNumbers[1].link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full sm:w-auto px-5 py-3 rounded-2xl sm:rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-teal-600/30 hover:shadow-xl transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                                          >
                                            <MessageSquare className="w-4 h-4 shrink-0" />
                                            <span>WhatsApp: {tripData.whatsAppNumbers[1].phone}</span>
                                          </a>

                                          <a
                                            href="#trip-preview"
                                            className="w-full sm:w-auto px-5 py-3 rounded-2xl sm:rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                                          >
                                            <Play className="w-3.5 h-3.5 fill-current shrink-0" />
                                            <span>Watch Video & Poster</span>
                                          </a>
                                        </div>

                                        {/* Trust & Micro-Stats Bar */}
                                          <div className="mt-8 sm:mt-12 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-3xl w-full px-2">
                                            <div className="flex flex-col items-center">
                                                <div className="flex items-center gap-1 text-amber-400 font-bold text-sm sm:text-base whitespace-nowrap">
                                                  <Star className="w-3.5 h-3.5 fill-amber-400 shrink-0" />
                                                  <span>{tripData.rating}</span>
                                                  <span className="text-[10px] text-slate-400 font-normal">/ 5.0</span>
                                                </div>
                                                <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">380+ Reviews</span>
                                              </div>

                                              <div className="flex flex-col items-center">
                                                  <div className="flex items-center gap-1 text-white font-bold text-sm sm:text-base whitespace-nowrap">
                                                    <Users className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                                                    <span className="whitespace-nowrap">{tripData.soloRatio}</span>
                                                  </div>
                                                  <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Solo Friendly</span>
                                                </div>

                                                <div className="flex flex-col items-center">
                                                    <div className="flex items-center gap-1 text-white font-bold text-sm sm:text-base whitespace-nowrap">
                                                      <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                                      <span className="whitespace-nowrap">{tripData.dateDisplay}</span>
                                                    </div>
                                                    <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Weekend Escape</span>
                                                  </div>

                                                  <div className="flex flex-col items-center">
                                                      <div className="flex items-center gap-1 text-white font-bold text-sm sm:text-base whitespace-nowrap">
                                                        <ShieldCheck className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                                                        <span className="whitespace-nowrap">Medical Aid</span>
                                                      </div>
                                                      <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 whitespace-nowrap">Trained Captains</span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                              );
}
