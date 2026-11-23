import React from 'react';
import { X, Calendar, MapPin, Phone, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, tripData }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
              OB
            </div>
            <div>
              <h3 className="font-bold font-display text-sm sm:text-base leading-tight">
                Connect Directly on WhatsApp
              </h3>
              <p className="text-[11px] text-slate-400">
                Mudippara Trip • Dec 9, 10 • Instant Captain Chat
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Trip Summary Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Upcoming Trip
              </span>
              <span className="text-xs font-bold text-slate-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                Rate: {tripData.rate}
              </span>
            </div>

            <h4 className="font-bold font-display text-base text-slate-900">
              OFFBEAT Mudippara Escape
            </h4>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-semibold">{tripData.dateDisplay}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                <span className="font-semibold">{tripData.location}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
              Includes Trekking, Activities, Acoustic Night, Hidden Waterfall, All Meals (BF, Lunch & Dinner), Good Rooms & Medical Aid.
            </p>
          </div>

          {/* Direct WhatsApp Action Buttons */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block text-center">
              Choose a Captain to Message on WhatsApp:
            </span>

            {tripData.whatsAppNumbers.map((wa, idx) => (
              <a
                key={idx}
                href={wa.link}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md flex items-center justify-between transition-all transform hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-medium text-emerald-100 block">
                      {wa.label}
                    </span>
                    <span className="text-base font-bold tracking-wide">
                      {wa.phone}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-emerald-800 group-hover:bg-emerald-50 transition-colors shrink-0">
                  Chat Now →
                </span>
              </a>
            ))}
          </div>

          {/* Quick Call Alternative */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-xs text-slate-500 block mb-1.5">Prefer a direct phone call?</span>
            <div className="flex items-center justify-center gap-4 text-xs font-bold text-emerald-700">
              <a href="tel:+919074833849" className="hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" /> 9074833849
              </a>
              <span className="text-slate-300">•</span>
              <a href="tel:+919746584092" className="hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" /> 9746584092
              </a>
            </div>
          </div>

          <div className="pt-1 text-center">
            <button
              onClick={onClose}
              className="text-xs text-slate-400 hover:text-slate-600 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
