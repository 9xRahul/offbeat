import React, { useState } from 'react';
import { 
  Utensils, 
  BedDouble, 
  ShieldAlert, 
  Check, 
  HeartPulse, 
  Droplet, 
  Flame, 
  Thermometer, 
  BadgeCheck,
  PhoneCall
} from 'lucide-react';

export default function FacilitiesSection({ tripData }) {
  const [activeCategory, setActiveCategory] = useState('meals');

  return (
    <section id="facilities" className="py-16 sm:py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 whitespace-nowrap shrink-0">
            <BadgeCheck className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap">Guaranteed Comfort & Care</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Facilities You Can Count On. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              No Compromises on Essentials.
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
            Starter trips fail when the food is bad, rooms are dirty, or safety is neglected. We obsess over the three things that make or break your trip:
          </p>
        </div>

        {/* 3 Major Facility Tabs - generous spacing and clean alignment */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <button
            onClick={() => setActiveCategory('meals')}
            className={`p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
              activeCategory === 'meals'
                ? 'bg-gradient-to-br from-emerald-950/80 to-slate-900 border-emerald-500 shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-500'
                : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                <Utensils className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 whitespace-nowrap shrink-0">
                All Included
              </span>
            </div>
            <div className="mt-5">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white whitespace-nowrap">
                Breakfast, Lunch & Dinner
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                Freshly cooked local Malnad meals, high-protein options, trail snacks & campfire barbecue.
              </p>
            </div>
          </button>

          <button
            onClick={() => setActiveCategory('rooms')}
            className={`p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
              activeCategory === 'rooms'
                ? 'bg-gradient-to-br from-teal-950/80 to-slate-900 border-teal-500 shadow-lg shadow-teal-950/60 ring-1 ring-teal-500'
                : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                <BedDouble className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 whitespace-nowrap shrink-0">
                Hygienic & Cozy
              </span>
            </div>
            <div className="mt-5">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white whitespace-nowrap">
                Good Rooms & Stays
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                Valley-view cottages & weather-proof glamping tents with spotless attached western washrooms.
              </p>
            </div>
          </button>

          <button
            onClick={() => setActiveCategory('medical')}
            className={`p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
              activeCategory === 'medical'
                ? 'bg-gradient-to-br from-rose-950/80 to-slate-900 border-rose-500 shadow-lg shadow-rose-950/60 ring-1 ring-rose-500'
                : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 whitespace-nowrap shrink-0">
                Certified 24/7
              </span>
            </div>
            <div className="mt-5">
              <h3 className="text-lg sm:text-xl font-bold font-display text-white whitespace-nowrap">
                Certified Medical Aid
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 leading-relaxed">
                Wilderness First Aid certified leads, emergency med kit, pulse oximeter, and standby 4x4 vehicle.
              </p>
            </div>
          </button>
        </div>

        {/* Detailed Showcase for the Selected Facility */}
        <div className="mt-8 bg-slate-800/90 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md">
          {activeCategory === 'meals' && (
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 whitespace-nowrap">
                    <Utensils className="w-4 h-4 shrink-0" />
                    <span>Never Stay Hungry • Zero Hidden Food Bills</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white">
                    Farm-Fresh Breakfast, Lunch & Dinner Included
                  </h3>
                  <p className="mt-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Food is the soul of any trip. We skip bland commercial hotel buffets and serve authentic, nourishing meals cooked fresh by local homestay families using organic hill produce.
                  </p>

                  {/* Meals Breakdown Cards */}
                  <div className="mt-6 space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs whitespace-nowrap">
                        BF
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white whitespace-nowrap">Piping Hot Breakfast</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Soft idlis, poha / hot parathas, sambar & coconut chutney, boiled eggs, fresh fruit bowls, and freshly brewed Malnad filter coffee & ginger tea.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs whitespace-nowrap">
                        LUN
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white whitespace-nowrap">Energizing Mountain Lunch</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Nutritious traditional meals with hot dal, ghee rice, fresh valley greens, vegetable stir fry, rotis, curd, and papad. Stream-side picnic packs on trek day!
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs whitespace-nowrap">
                        DIN
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white whitespace-nowrap">Campfire BBQ & Grand Buffet Dinner</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Evening charcoal-grilled starters around the bonfire, followed by a lavish dinner with both comforting Vegetarian curries and regional Chicken specialties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 whitespace-nowrap">
                    <Droplet className="w-4 h-4 text-sky-400 shrink-0" /> Safe RO purified drinking water refills always available
                  </span>
                  <span className="text-emerald-400 font-semibold whitespace-nowrap">Veg & Non-Veg separate prep</span>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src={tripData.images.food}
                  alt="Delicious food feast"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider whitespace-nowrap">Fresh & Unlimited</span>
                  <p className="font-bold text-xs sm:text-sm">"The homestyle food alone is worth the entire trip!" — Oct batch review</p>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'rooms' && (
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider mb-2 whitespace-nowrap">
                    <BedDouble className="w-4 h-4 shrink-0" />
                    <span>Comfortable Sleep • Hygiene First</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white">
                    Clean, Good Rooms & Valley Glamping
                  </h3>
                  <p className="mt-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    A bad night's sleep ruins outdoor adventures. We partner with vetted, scenic mountain estates providing spotlessly clean rooms, high-thread-count cotton linens, and proper beds.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white whitespace-nowrap">Deluxe Hillside Homestay Rooms</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Twin and triple sharing rooms with balcony views over the coffee valleys. Clean mattresses, warm blankets, and bedside charging ports for all your devices.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Thermometer className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white whitespace-nowrap">Deep-Cleaned Western Restrooms & Hot Water</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Private attached and sanitized washrooms with hot water geysers. Clean towels and gentle hand-wash soaps provided.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white whitespace-nowrap">Premium Weather-Proof Canvas Tents</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Want the authentic camping thrill? Pitch in our heavy-duty alpine tents with ground foam insulation, clean sleeping bags, and warm duvets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span className="text-teal-400 font-semibold whitespace-nowrap">Solo female friendly security locks</span>
                  <span className="whitespace-nowrap">Power backup available</span>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src={tripData.images.rooms}
                  alt="Comfortable rooms"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider whitespace-nowrap">Rest Guaranteed</span>
                  <p className="font-bold text-xs sm:text-sm">Wake up to misty hill horizons right outside your window</p>
                </div>
              </div>
            </div>
          )}

          {activeCategory === 'medical' && (
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2 whitespace-nowrap">
                    <HeartPulse className="w-4 h-4 shrink-0" />
                    <span>Safety First • 24/7 Rapid Response</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-display text-white">
                    Certified Medical Aid & On-Ground Support
                  </h3>
                  <p className="mt-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Venturing into the outdoors for the first time can feel intimidating. We eliminate anxiety with professional medical equipment, certified first responders, and emergency transport.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                        <BadgeCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white whitespace-nowrap">Wilderness First Aid (WFA) Certified Leads</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Every batch is guided by leads trained in wilderness emergency response, basic life support, heat/cold exhaustion, and sprain immobilization.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <HeartPulse className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white whitespace-nowrap">Fully Stocked Emergency Medical Kit</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                          Carried on all trails: Pulse oximeter, digital BP apparatus, muscle pain sprays, antiseptic solutions, burn gels, blister patches, ORS electrolytes, and antihistamines.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/70 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-white whitespace-nowrap">Standby 4x4 Vehicle & Hospital Tie-up</h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                          A dedicated backup vehicle stays on site. Direct coordination with local clinics and district hospital within a 25-minute drive.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-700 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                  <span className="text-rose-400 font-semibold whitespace-nowrap">1:7 Guide-to-traveler supervision</span>
                  <span className="whitespace-nowrap">Zero trekker left behind guarantee</span>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-full">
                <img
                  src={tripData.images.medical}
                  alt="Medical safety aid"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider whitespace-nowrap">Peace of Mind</span>
                  <p className="font-bold text-xs sm:text-sm">Trained professionals watching your back at every step</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
