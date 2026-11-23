import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, ArrowRight, MessageSquare, Phone } from 'lucide-react';

export default function Navbar({ onOpenBooking, tripData }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Highlights', href: '#experience' },
    { name: 'Video & Poster', href: '#trip-preview' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Itinerary', href: '#itinerary' },
    { name: 'Why Us', href: '#why-starters' },
    { name: 'Checklist', href: '#checklist' },
    { name: 'FAQs', href: '#faqs' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-soft border-b border-slate-200/60 py-2.5'
            : 'bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent py-3 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo - Single line matching official flyer */}
            <a href="#" className="flex items-center gap-2 group shrink-0">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <Compass className="w-4 h-4 animate-spin-slow" />
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xl font-extrabold tracking-tight font-display whitespace-nowrap ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}>
                  OFFBEAT<span className="text-emerald-500">.</span>
                </span>
                <span className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${
                  isScrolled
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-white/10 text-emerald-300 border-white/20'
                }`}>
                  {tripData.location}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6 lg:gap-7 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-semibold tracking-normal whitespace-nowrap transition-colors hover:text-emerald-500 ${
                    isScrolled ? 'text-slate-600' : 'text-slate-200'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right WhatsApp Connect Actions */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <div className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 ${
                isScrolled
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-white/10 text-emerald-200 backdrop-blur-md border border-white/20'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="whitespace-nowrap">{tripData.dateDisplay}</span>
              </div>

              {/* Direct WhatsApp connect button */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp Connect</span>
              </button>
            </div>

            {/* Mobile / Tablet Menu Button & WhatsApp Pill */}
            <div className="flex items-center gap-2 xl:hidden shrink-0">
              <button
                onClick={onOpenBooking}
                className="sm:hidden bg-emerald-600 text-white font-semibold text-xs px-3 py-1.5 rounded-full shadow-sm whitespace-nowrap flex items-center gap-1"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col p-6 z-10 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <Compass className="w-4 h-4" />
                </div>
                <span className="text-base font-bold font-display text-slate-900 whitespace-nowrap">
                  OFFBEAT • {tripData.location}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-4">
              <div className="bg-emerald-50 text-emerald-800 rounded-xl p-3 text-xs font-medium border border-emerald-100 flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="whitespace-nowrap">Date: <strong>{tripData.dateDisplay}</strong> • Rate: <strong>{tripData.rate}</strong></span>
              </div>

              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="px-3 py-2.5 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50 font-medium text-sm transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp Connects on Mobile Drawer */}
            <div className="mt-auto pt-5 border-t border-slate-100 flex flex-col gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 text-center">
                Direct WhatsApp Booking
              </span>
              <a
                href={tripData.whatsAppNumbers[0].link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 bg-emerald-600 text-white rounded-xl font-bold text-xs text-center shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {tripData.whatsAppNumbers[0].phone}</span>
              </a>
              <a
                href={tripData.whatsAppNumbers[1].link}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 bg-teal-600 text-white rounded-xl font-bold text-xs text-center shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {tripData.whatsAppNumbers[1].phone}</span>
              </a>
              <p className="text-[10px] text-center text-slate-500 mt-1 whitespace-nowrap">
                ⚡ 100% Starter & Solo Traveler Friendly
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
