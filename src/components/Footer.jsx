import React from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Youtube, 
  Utensils, 
  Bed, 
  Flame
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
                Offbeats<span className="text-emerald-500">.</span>
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-emerald-300 border border-white/20 whitespace-nowrap">
                Starter Trips
              </span>
            </div>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Thoughtfully curated starter journeys for beginners and solo travelers. We take care of everything—trekking, hidden sightseeing, acoustic cultural bonfires, meals, comfortable rooms, and certified medical safety.
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
              <li><a href="#facilities" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Facilities</a></li>
              <li><a href="#itinerary" className="hover:text-emerald-400 transition-colors whitespace-nowrap">3-Day Itinerary</a></li>
              <li><a href="#why-starters" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Why Starters</a></li>
              <li><a href="#checklist" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Packing Checklist</a></li>
              <li><a href="#gallery" className="hover:text-emerald-400 transition-colors whitespace-nowrap">Photo Gallery</a></li>
            </ul>
          </div>

          {/* Included Facilities */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-3.5 font-display whitespace-nowrap">
              What's Included
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Utensils className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="whitespace-nowrap">BF, Lunch & Dinner</span>
              </li>
              <li className="flex items-center gap-2">
                <Bed className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="whitespace-nowrap">Good Rooms / Glamping</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span className="whitespace-nowrap">Certified Medical Aid</span>
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span className="whitespace-nowrap">Campfire & Acoustic Nights</span>
              </li>
              <li className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="whitespace-nowrap">Gentle Guided Trekking</span>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm uppercase tracking-wider mb-3.5 font-display whitespace-nowrap">
              Talk to a Captain
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium whitespace-nowrap">+91 98765 43210</span>
                  <span className="text-[10px] text-slate-500 whitespace-nowrap">Coordinators (9 AM - 9 PM)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium whitespace-nowrap">hello@offbeats.travel</span>
                  <span className="text-[10px] text-slate-500 whitespace-nowrap">Response within 2 hours</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium whitespace-nowrap">Bangalore Base & Trails</span>
                  <span className="text-[10px] text-slate-500 whitespace-nowrap">Karnataka, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Offbeats Travel Experiences. All rights reserved.</p>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span>Built for first-time adventurers & solo seekers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
