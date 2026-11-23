import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Users, 
  Bed, 
  Tent, 
  ShieldCheck, 
  Utensils, 
  Check, 
  ArrowRight, 
  MessageSquare,
  Sparkles, 
  CheckCircle2, 
  Phone
} from 'lucide-react';

export default function BookingModal({ isOpen, onClose, tripData }) {
  const [step, setStep] = useState(1);
  const [selectedBatch, setSelectedBatch] = useState(tripData.batches[0].id);
  const [stayPreference, setStayPreference] = useState('cottage');
  const [travelerCount, setTravelerCount] = useState(1);
  const [isSoloTraveler, setIsSoloTraveler] = useState(true);

  // Traveler Details Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Bangalore',
    dietPreference: 'veg',
    medicalNotes: ''
  });

  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  if (!isOpen) return null;

  const currentBatchObj = tripData.batches.find((b) => b.id === selectedBatch) || tripData.batches[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitEnquiry = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and WhatsApp phone number.");
      return;
    }
    setEnquirySubmitted(true);
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[92vh]">
        {/* Modal Top Header - Single line clean title */}
        <div className="px-5 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
              OB
            </div>
            <div>
              <h3 className="font-bold font-display text-sm sm:text-base leading-tight">
                {enquirySubmitted ? 'Enquiry Received!' : 'Trip Enquiry & Itinerary Request'}
              </h3>
              <p className="text-[11px] text-slate-400">
                Offbeats Starter Trips • All meals, stays & medical aid included
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

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* STEP 1: Form */}
          {step === 1 && (
            <form onSubmit={handleSubmitEnquiry} className="space-y-4">
              {/* Batch Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Interested Weekend Batch
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tripData.batches.map((b) => (
                    <div
                      key={b.id}
                      onClick={() => setSelectedBatch(b.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        selectedBatch === b.id
                          ? 'border-emerald-600 bg-emerald-50/60 shadow-sm ring-1 ring-emerald-600'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{b.dates}</span>
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          Enquiries Open
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 block mt-0.5">{b.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stay Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  2. Room / Stay Type
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <div
                    onClick={() => setStayPreference('cottage')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      stayPreference === 'cottage'
                        ? 'border-emerald-600 bg-emerald-50/60 ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Bed className="w-4 h-4 text-emerald-600" />
                      <div>
                        <h4 className="font-bold text-xs text-slate-900">Hillside Room</h4>
                        <span className="text-[10px] text-slate-500">Twin/Triple Sharing</span>
                      </div>
                    </div>
                  </div>

                  <div
                    onClick={() => setStayPreference('glamping')}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      stayPreference === 'glamping'
                        ? 'border-emerald-600 bg-emerald-50/60 ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Tent className="w-4 h-4 text-teal-600" />
                      <div>
                        <h4 className="font-bold text-xs text-slate-900">Glamping Tent</h4>
                        <span className="text-[10px] text-slate-500">Under Starlight</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Number of Wanderers & Solo option */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Number of Wanderers</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setTravelerCount(Math.max(1, travelerCount - 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 font-bold text-xs hover:bg-slate-100 flex items-center justify-center"
                      disabled={travelerCount <= 1}
                    >
                      -
                    </button>
                    <span className="font-bold text-xs text-slate-900 w-4 text-center">{travelerCount}</span>
                    <button
                      type="button"
                      onClick={() => setTravelerCount(Math.min(10, travelerCount + 1))}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-300 font-bold text-xs hover:bg-slate-100 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div
                  onClick={() => setIsSoloTraveler(!isSoloTraveler)}
                  className="p-3 rounded-xl bg-teal-50/50 border border-teal-200 cursor-pointer flex items-center gap-2"
                >
                  <div className={`w-4 h-4 rounded flex items-center justify-center border text-xs ${
                    isSoloTraveler ? 'bg-teal-600 border-teal-600 text-white' : 'border-slate-300 bg-white'
                  }`}>
                    {isSoloTraveler && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="text-xs font-semibold text-teal-900">
                    Traveling Solo? (65% wanderers are solo!)
                  </span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Meal Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Food Preference (Breakfast, Lunch & Dinner Included)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'veg', label: 'Vegetarian' },
                    { id: 'non-veg', label: 'Non-Vegetarian' },
                    { id: 'jain', label: 'Jain Meal' },
                  ].map((meal) => (
                    <button
                      key={meal.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, dietPreference: meal.id })}
                      className={`py-1.5 px-2 rounded-lg border text-xs font-semibold text-center transition-all ${
                        formData.dietPreference === meal.id
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-600'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {meal.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Trip Enquiry</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  No instant payment required. We will message you batch details & answer all questions!
                </p>
              </div>
            </form>
          )}

          {/* STEP 2: Enquiry Confirmation */}
          {step === 2 && (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Enquiry Successfully Sent
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1">
                  Thank You, {formData.name || 'Wanderer'}!
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-sm mx-auto">
                  We have received your interest for the <strong>{currentBatchObj.dates}</strong> batch.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left max-w-sm mx-auto text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Batch:</span>
                  <span className="font-bold text-slate-800">{currentBatchObj.dates}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Stay Type:</span>
                  <span className="font-bold text-slate-800">
                    {stayPreference === 'cottage' ? 'Hillside Room' : 'Glamping Tent'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dietary:</span>
                  <span className="font-bold text-emerald-700">{formData.dietPreference} (BF, Lunch, Dinner)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Medical Aid:</span>
                  <span className="font-semibold text-slate-800">WFA Certified Lead Included</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 max-w-sm mx-auto">
                Our trip captain will connect with you on WhatsApp (<strong>{formData.phone}</strong>) with the complete itinerary PDF and answers to any questions.
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                >
                  Close & Explore Website
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
