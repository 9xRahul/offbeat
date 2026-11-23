import React from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  MessageSquare,
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Youtube, 
  Utensils, 
  Bed, 
  Flame,
  Calendar
} from 'lucide-react';

export default function Footer({ tripData, onOpenBooking }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold font-display text-white whitespace-nowrap">
                OFFBEAT<span className="text-emerald-500">.</span>
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-emerald-300 border border-white/20 whitespace-nowrap">
                {tripData.location}
              </span>
            </div>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              "{tripData.motto}" Join us on Dec 9 & 10 for a weekend to Refresh, Reconnect & Reset with trekking, activities, acoustic campfire nights, hidden waterfalls, good rooms, and all meals.
            </p>

            <div className="mt-5 flex items-center gap-2.5 text-slate-400">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-emerald-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-emerald-500 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-emerald-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-3.5 font-display whitespace-nowrap">
              The Journey
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#experience" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Highlights</a></li>
              <li><a href="#trip-preview" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Video & Poster</a></li>
              <li><a href="#facilities" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Facilities</a></li>
              <li><a href="#itinerary" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Dec 9, 10 Itinerary</a></li>
              <li><a href="#why-starters" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Why Us</a></li>
              <li><a href="#checklist" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Packing Checklist</a></li>
            </ul>
          </div>

          {/* Included In Mudippara Trip */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-3.5 font-display whitespace-nowrap">
              Included In Trip
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="whitespace-nowrap">Mudippara Trekking</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span className="whitespace-nowrap">Acoustic Bonfire Night</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="whitespace-nowrap">Hidden Waterfall Dip</span>
              </li>
              <li className="flex items-center gap-2">
                <Utensils className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">BF, Lunch & Dinner</span>
              </li>
              <li className="flex items-center gap-2">
                <Bed className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="whitespace-nowrap">Good Rooms / Stays</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span className="whitespace-nowrap">Certified Medical Aid</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp Booking Contacts */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-3.5 font-display whitespace-nowrap">
              WhatsApp Booking
            </h4>
            <div className="space-y-2.5">
              <a
                href={tripData.whatsAppNumbers[0].link}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white flex items-center gap-2 text-xs font-semibold transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="whitespace-nowrap">Chat: {tripData.whatsAppNumbers[0].phone}</span>
              </a>

              <a
                href={tripData.whatsAppNumbers[1].link}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-teal-600/90 hover:bg-teal-600 text-white flex items-center gap-2 text-xs font-semibold transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="whitespace-nowrap">Chat: {tripData.whatsAppNumbers[1].phone}</span>
              </a>

              <div className="pt-2 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  <span>Date: {tripData.dateDisplay}</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <span>Rate: {tripData.rate} All-Inclusive</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} OFFBEAT Experiences. All rights reserved.</p>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span>Come as you are. Leave with a story.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
