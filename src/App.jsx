import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import PillarsSection from './components/PillarsSection';
import FacilitiesSection from './components/FacilitiesSection';
import ItinerarySection from './components/ItinerarySection';
import StarterWhySection from './components/StarterWhySection';
import PackingChecklist from './components/PackingChecklist';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import FAQSection from './components/FAQSection';
import BookingModal from './components/BookingModal';
import MobileStickyBar from './components/MobileStickyBar';
import Footer from './components/Footer';
import { tripData } from './data/tripData';

export default function App() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleOpenWhatsApp = () => {
    setIsWhatsAppModalOpen(true);
  };

  const handleCloseWhatsApp = () => {
    setIsWhatsAppModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar tripData={tripData} onOpenBooking={handleOpenWhatsApp} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero tripData={tripData} onOpenBooking={handleOpenWhatsApp} />

        {/* Video & Official Poster Showcase Section */}
        <VideoSection tripData={tripData} onOpenWhatsApp={handleOpenWhatsApp} />

        {/* 4 Core Pillars: Trekking, Activities, Acoustic Night, Hidden Waterfall */}
        <PillarsSection tripData={tripData} onOpenBooking={handleOpenWhatsApp} />

        {/* Facilities Provided: All Meals (BF, Lunch, Dinner), Good Rooms, Medical Aid */}
        <FacilitiesSection tripData={tripData} />

        {/* 2-Day Mudippara Itinerary */}
        <ItinerarySection tripData={tripData} onOpenBooking={handleOpenWhatsApp} />

        {/* Why Starters: Refresh, Reconnect, Reset */}
        <StarterWhySection tripData={tripData} onOpenBooking={handleOpenWhatsApp} />

        {/* Interactive Packing Checklist */}
        <PackingChecklist tripData={tripData} />

        {/* Photo Gallery */}
        <GallerySection tripData={tripData} />

        {/* Community Reviews */}
        <ReviewsSection tripData={tripData} />

        {/* FAQs */}
        <FAQSection tripData={tripData} onOpenBooking={handleOpenWhatsApp} />
      </main>

      {/* Footer */}
      <Footer tripData={tripData} onOpenBooking={handleOpenWhatsApp} />

      {/* Mobile Sticky Bottom Dock with direct WhatsApp buttons */}
      <MobileStickyBar tripData={tripData} onOpenBooking={handleOpenWhatsApp} />

      {/* Direct WhatsApp Quick Connect Modal */}
      <BookingModal
        isOpen={isWhatsAppModalOpen}
        onClose={handleCloseWhatsApp}
        tripData={tripData}
      />
    </div>
  );
}
