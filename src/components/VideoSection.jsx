import React, { useRef, useState } from 'react';
import { Play, Pause, Sparkles, MessageSquare, ExternalLink } from 'lucide-react';

export default function VideoSection({ tripData, onOpenWhatsApp }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="trip-preview" className="py-16 sm:py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-3 whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="whitespace-nowrap">Dec 9 & 10 • Mudippara Escape</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Feel The Mudippara Vibe. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              "Come as you are. Leave with a story."
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Watch the video teaser and explore the official trip flyer below. Both video and flyer are directly from the Mudippara grounds.
          </p>
        </div>

        {/* Both Video & Image cards have the EXACT SAME SIZE & PROPORTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          {/* 1. Video Player Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full">
            {/* Top Bar */}
            <div className="px-5 py-3.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                Official Trip Video
              </span>
              <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">Dec 9 & 10</span>
            </div>

            {/* Media Container - Exact aspect-square matching the Image card */}
            <div className="relative aspect-square w-full bg-black flex items-center justify-center overflow-hidden group">
              <video
                ref={videoRef}
                src={tripData.media.video}
                poster={tripData.media.poster}
                playsInline
                preload="metadata"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover sm:object-contain bg-black"
              />

              {/* Play Overlay if paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center cursor-pointer transition-all hover:bg-slate-950/25"
                >
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110">
                    <Play className="w-8 h-8 fill-slate-950 ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar with WhatsApp Captain 1 */}
            <div className="p-4 bg-slate-900/95 border-t border-slate-800 mt-auto flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-xs text-white font-bold whitespace-nowrap">Mudippara Trail Teaser</span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">Reel & Campfire Highlights</span>
              </div>
              <a
                href={tripData.whatsAppNumbers[0].link}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp: {tripData.whatsAppNumbers[0].phone}</span>
              </a>
            </div>
          </div>

          {/* 2. Official Flyer Image Card - EXACT SAME SIZE AS VIDEO */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full">
            {/* Top Bar */}
            <div className="px-5 py-3.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                Official Trip Flyer
              </span>
              <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 whitespace-nowrap">
                Rate: {tripData.rate}
              </span>
            </div>

            {/* Media Container - EXACT SAME aspect-square matching the Video card */}
            <div className="relative aspect-square w-full bg-black flex items-center justify-center overflow-hidden group">
              <img
                src={tripData.media.poster}
                alt="OFFBEAT Mudippara Trip Poster"
                className="w-full h-full object-cover sm:object-contain bg-black group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                onClick={() => window.open(tripData.media.poster, '_blank')}
              />

              {/* Click to expand overlay on hover */}
              <div
                onClick={() => window.open(tripData.media.poster, '_blank')}
                className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer pointer-events-none"
              >
                <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" /> Tap to view full size
                </span>
              </div>
            </div>

            {/* Bottom Bar with WhatsApp Captain 2 */}
            <div className="p-4 bg-slate-900/95 border-t border-slate-800 mt-auto flex items-center justify-between gap-3">
              <div className="flex flex-col">
                <span className="text-xs text-white font-bold whitespace-nowrap">Official Poster Flyer</span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">Dec 9 & 10 • All-Inclusive</span>
              </div>
              <a
                href={tripData.whatsAppNumbers[1].link}
                target="_blank"
                rel="noreferrer"
                className="py-2 px-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp: {tripData.whatsAppNumbers[1].phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
