import React, { useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  Luggage, 
  Sparkles, 
  Check, 
  RotateCcw,
  AlertCircle
} from 'lucide-react';

export default function PackingChecklist({ tripData }) {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalItems = tripData.packingList.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const percentage = Math.round((completedCount / totalItems) * 100);

  const resetList = () => {
    setCheckedItems({});
  };

  return (
    <section id="checklist" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 whitespace-nowrap shrink-0">
            <Luggage className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">First-Timer Packing Guide</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            Interactive Packing Checklist
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Never wonder "what should I pack for my first trip?". Check items off directly on your screen as you pack your bag!
          </p>
        </div>

        {/* Progress Bar Card */}
        <div className="mt-8 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-soft">
          <div className="flex items-center justify-between mb-2 gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-xs sm:text-sm whitespace-nowrap">Packing Readiness</span>
              <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 whitespace-nowrap">
                {completedCount} of {totalItems} Packed
              </span>
            </div>
            <button
              onClick={resetList}
              className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors whitespace-nowrap shrink-0"
            >
              <RotateCcw className="w-3 h-3 shrink-0" />
              <span>Reset</span>
            </button>
          </div>

          {/* Bar */}
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>

          {percentage === 100 && (
            <div className="mt-3 text-xs text-emerald-700 font-bold flex items-center gap-1.5 animate-bounce whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Woohoo! You are 100% ready for the Offbeats weekend adventure!</span>
            </div>
          )}
        </div>

        {/* Interactive Checklist List */}
        <div className="mt-5 sm:mt-6 bg-white border border-slate-200/90 rounded-2xl divide-y divide-slate-100 shadow-soft overflow-hidden">
          {tripData.packingList.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer transition-colors ${
                  isChecked ? 'bg-emerald-50/40' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center border transition-all shrink-0 ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                      : 'border-slate-300 bg-white text-transparent'
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className={`text-xs sm:text-sm font-medium transition-all block ${
                      isChecked ? 'line-through text-slate-400' : 'text-slate-800'
                    }`}>
                      {item.item}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-0.5 block whitespace-nowrap">
                      Category: {item.category}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  {item.required ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 whitespace-nowrap">
                      Must Have
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600 whitespace-nowrap">
                      Optional
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* What We Provide Note */}
        <div className="mt-5 sm:mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-xs text-emerald-900">
          <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <strong>What we already provide (don't buy or carry):</strong> Fresh bedsheets, blankets, pillows, dining utensils, drinking water refills, basic toiletries, and medical aid kit!
          </div>
        </div>
      </div>
    </section>
  );
}
