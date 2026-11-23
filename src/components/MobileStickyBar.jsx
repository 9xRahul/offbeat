import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function MobileStickyBar({ tripData, onOpenBooking }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between gap-3">
        {/* Batch Info */}
        <div className="flex flex-col">
          <span className="text-xs font-bold text-slate-900 font-display whitespace-nowrap">
            Upcoming Weekend Escape
          </span>
          <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-1 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Next: {tripData.nextBatch}
          </span>
        </div>

        {/* CTA Button - Enquiry instead of spot booking */}
        <button
          onClick={onOpenBooking}
          className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 active:from-emerald-700 active:to-teal-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Enquire Now</span>
        </button>
      </div>
    </div>
  );
}
