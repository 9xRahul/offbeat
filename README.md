# 🌲 Offbeats — Starter Trip Web App

> **Disconnect from stress. Reconnect with your tribe.**  
> A mobile-first, responsive React web application designed for curated starter trips, solo travelers, and first-time adventurers.

---

## 🌟 Key Features

1. **Curated Starter Trip Pillars**:
   - 🥾 **Gentle Trekking**: 4-5 km panoramic, beginner-friendly trails with photo breathers and zero rush.
   - 🌄 **Offbeat Sightseeing**: Hidden cascading waterfalls, secret sunset ridges, and heritage coffee estate walks.
   - 🎭 **Cultural & Acoustic Nights**: Campfire acoustic jams, local folk percussion, and starlight storytelling circles.
   - ⛺ **Starlight Camping**: Cozy Swiss glamping tents or wood-and-stone cottage rooms.
   - 🧘 **Disconnect & Reconnect**: Digital detox sunset hour, non-awkward icebreakers (65% solo traveler ratio).

2. **Guaranteed Facilities Provided**:
   - 🍳 **All Meals (Breakfast, Lunch & Dinner)**: Farm-to-table breakfast with hot coffee/tea, energizing mountain lunch, and campfire barbecue buffet dinner (separate Veg & Non-Veg prep).
   - 🛏️ **Good Rooms & Stays**: Deluxe hillside rooms & weather-proof glamping with attached sanitized Western washrooms and hot water geysers.
   - 🩺 **Certified Medical Aid**: Wilderness First Aid (WFA) certified trek captains, fully stocked medical kits (oximeter, BP monitor, allergy & altitude medication), and standby 4x4 ambulance backup.

3. **Interactive Tools & Experience**:
   - 📅 **3-Day Day-wise Itinerary**: Interactive timeline breakdown with time slots, activities, and included meals.
   - 🎒 **Interactive Packing Checklist**: Live checklist with progress bar for first-time campers.
   - 🎫 **Multi-step Booking Modal**: Batch selector, room preference, guest counter with live price calculations, dietary preferences, and instant confirmation ticket.
   - 📱 **Mobile-First Responsive Design**: Sticky mobile bottom action bar (`Reserve Spot`), responsive hamburger drawer, and fluid grid layouts optimized for smartphones, tablets, laptops, and ultra-wide screens.

---

## 📸 Replacing Demo Images With Your Real Photos

Currently, the web app uses high-resolution Unsplash demo images for testing and previewing.
To replace them with your actual trip photography:

Open `src/data/tripData.js` and update the `images` object:

```javascript
// src/data/tripData.js
export const tripData = {
  // ...
  images: {
    hero: "YOUR_HERO_IMAGE_URL_OR_PATH",
    trekking: "YOUR_TREK_IMAGE_URL_OR_PATH",
    sightseeing: "YOUR_WATERFALL_IMAGE_URL_OR_PATH",
    cultural: "YOUR_CAMPFIRE_IMAGE_URL_OR_PATH",
    camping: "YOUR_TENTS_IMAGE_URL_OR_PATH",
    community: "YOUR_COMMUNITY_PHOTO_URL_OR_PATH",
    food: "YOUR_FOOD_BUFFET_IMAGE_URL_OR_PATH",
    breakfast: "YOUR_BREAKFAST_IMAGE_URL_OR_PATH",
    rooms: "YOUR_ROOM_IMAGE_URL_OR_PATH",
    glamping: "YOUR_GLAMPING_IMAGE_URL_OR_PATH",
    medical: "YOUR_SAFETY_LEADER_IMAGE_URL_OR_PATH"
  },
  // ...
};
```

You can also place local images in the `public/` directory (e.g. `public/images/hero.jpg`) and reference them directly as `"/images/hero.jpg"`.

---

## 🚀 Running the Project

### Prerequisites
- Node.js (v18+)
- npm or pnpm

### Development Server
```bash
npm run dev
```
Runs at `http://localhost:3000` (or `http://localhost:5173`).

### Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
offbeat/
├── index.html                  # HTML5 entry with Outfit & Plus Jakarta Sans typography
├── vite.config.js              # Vite bundler configuration
├── tailwind.config.js          # Tailwind CSS theme & custom color system
├── package.json                # Dependencies (React 18, Lucide Icons, Tailwind CSS)
└── src/
    ├── main.jsx                # Application root entry
    ├── App.jsx                 # Master page orchestrator & modal state
    ├── index.css               # Tailwind directives & glassmorphic styling
    ├── data/
    │   └── tripData.js         # Comprehensive trip details, facilities, batches, FAQs, checklist
    └── components/
        ├── Navbar.jsx          # Glassmorphic header & mobile navigation drawer
        ├── Hero.jsx            # Impactful visual hero, starter badges & CTA
        ├── PillarsSection.jsx  # Trekking, Sightseeing, Cultural, Camping, Disconnect
        ├── FacilitiesSection.jsx # Detailed BF, Lunch, Dinner, Rooms & Medical Aid showcase
        ├── ItinerarySection.jsx # Interactive 3-day day-wise timeline tabs
        ├── StarterWhySection.jsx # Side-by-side comparison with commercial trips
        ├── PackingChecklist.jsx# Interactive packing progress checklist
        ├── GallerySection.jsx  # Categorized photo gallery with lightbox modal
        ├── ReviewsSection.jsx  # Beginner & solo traveler testimonials
        ├── FAQSection.jsx      # Expandable accordion for beginner FAQs
        ├── BookingModal.jsx    # 3-step booking flow & instant reservation hold
        ├── MobileStickyBar.jsx # Fixed bottom dock for mobile smartphones
        └── Footer.jsx          # Brand footer, emergency hotline, links
```
