import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Phone, MessageSquare } from 'lucide-react';

export default function VideoSection({ tripData, onOpenWhatsApp }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="trip-preview" className="py-16 sm:py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-3 whitespace-nowrap">
            <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="whitespace-nowrap">Official Trip Teaser • Dec 9, 10</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Feel The Mudippara Vibe. <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              "Come as you are. Leave with a story."
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Catch a glimpse of the misty hills, warm campfire acoustics, and wild natural trails waiting for you.
          </p>
        </div>

        {/* Video & Official Poster Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Video Player Column */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative group">
            <div className="relative aspect-[9/16] sm:aspect-video w-full max-h-[580px] bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src={tripData.media.video}
                poster={tripData.media.poster}
                playsInline
                preload="metadata"
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover sm:object-contain"
              />

              {/* Play Overlay if not playing */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all hover:bg-slate-950/30"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-slate-950 ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Video footer bar */}
            <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="font-semibold text-white whitespace-nowrap">Mudippara Trail Teaser</span>
              </div>
              <span className="text-slate-400 text-xs whitespace-nowrap">Dec 9 & 10, 2024</span>
            </div>
          </div>

          {/* Official Flyer Poster Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 whitespace-nowrap">
                  Official Trip Flyer
                </span>
                <span className="text-xs font-bold text-amber-300 whitespace-nowrap">
                  Rate: {tripData.rate}
                </span>
              </div>

              {/* Poster image preview */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-md aspect-square bg-slate-950 flex items-center justify-center">
                <img
                  src={tripData.media.poster}
                  alt="OFFBEAT Mudippara Trip Poster"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => window.open(tripData.media.poster, '_blank')}
                />
              </div>

              {/* Quick WhatsApp Action Box */}
              <div className="mt-5 pt-4 border-t border-slate-800 space-y-2.5">
                <span className="text-xs text-slate-300 font-medium block text-center">
                  Book directly with our captains on WhatsApp:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tripData.whatsAppNumbers.map((wa, i) => (
                    <a
                      key={i}
                      href={wa.link}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm whitespace-nowrap"
                    >
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0"></span>
                      <span>{wa.phone}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
