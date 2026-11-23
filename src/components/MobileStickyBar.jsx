import React from 'react';
import { MessageSquare, Calendar, MapPin } from 'lucide-react';

export default function MobileStickyBar({ tripData, onOpenBooking }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between gap-2.5">
        {/* Trip Info */}
        <div className="flex flex-col shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-900 font-display whitespace-nowrap">
              {tripData.location}
            </span>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.2 rounded whitespace-nowrap">
              {tripData.rate}
            </span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            {tripData.dateDisplay}
          </span>
        </div>

        {/* Both WhatsApp Direct Connect Buttons on Mobile Dock */}
        <div className="flex items-center gap-1.5 flex-1 justify-end">
          <a
            href={tripData.whatsAppNumbers[0].link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 max-w-[125px] py-2 px-2 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-[11px] shadow-sm flex items-center justify-center gap-1 whitespace-nowrap"
          >
            <MessageSquare className="w-3 h-3 shrink-0" />
            <span>9074833849</span>
          </a>

          <a
            href={tripData.whatsAppNumbers[1].link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 max-w-[125px] py-2 px-2 rounded-xl bg-teal-600 active:bg-teal-700 text-white font-bold text-[11px] shadow-sm flex items-center justify-center gap-1 whitespace-nowrap"
          >
            <MessageSquare className="w-3 h-3 shrink-0" />
            <span>9746584092</span>
          </a>
        </div>
      </div>
    </div>
  );
}
