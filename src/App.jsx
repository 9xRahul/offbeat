import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar tripData={tripData} onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero tripData={tripData} onOpenBooking={handleOpenBooking} />

        {/* 5 Core Pillars: Trekking, Sightseeing, Cultural, Camping, Disconnect */}
        <PillarsSection tripData={tripData} onOpenBooking={handleOpenBooking} />

        {/* Facilities Provided: All Meals (BF, Lunch, Dinner), Good Rooms, Medical Aid */}
        <FacilitiesSection tripData={tripData} />

        {/* 3-Day Starter Itinerary */}
        <ItinerarySection tripData={tripData} onOpenBooking={handleOpenBooking} />

        {/* Why Starters: Side-by-side comparison */}
        <StarterWhySection tripData={tripData} onOpenBooking={handleOpenBooking} />

        {/* Interactive Packing Checklist */}
        <PackingChecklist tripData={tripData} />

        {/* High-res Photo Gallery (with demo replacement note) */}
        <GallerySection tripData={tripData} />

        {/* Community & Solo Traveler Reviews */}
        <ReviewsSection tripData={tripData} />

        {/* FAQs */}
        <FAQSection tripData={tripData} onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer tripData={tripData} onOpenBooking={handleOpenBooking} />

      {/* Mobile Sticky Bottom Dock */}
      <MobileStickyBar tripData={tripData} onOpenBooking={handleOpenBooking} />

      {/* Multi-step Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        tripData={tripData}
      />
    </div>
  );
}
