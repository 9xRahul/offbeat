import React, { useState } from 'react';
import { Camera, Sparkles, X } from 'lucide-react';

export default function GallerySection({ tripData }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeImageModal, setActiveImageModal] = useState(null);

  const galleryItems = [
    {
      url: tripData.media.poster,
      category: 'vibe',
      title: 'Official Mudippara Trip Flyer',
      desc: 'Dec 9, 10 • Refresh, Reconnect & Reset • Rate: 2500/-'
    },
    {
      url: tripData.images.trekking,
      category: 'trek',
      title: 'Mudippara Ridge Walk',
      desc: 'Gentle slope surrounded by rolling green hills'
    },
    {
      url: tripData.images.camping,
      category: 'camp',
      title: 'Starlight Campfire Ground',
      desc: 'Cozy tents pitched under pine canopies'
    },
    {
      url: tripData.images.breakfast,
      category: 'food',
      title: 'Morning Breakfast Spread',
      desc: 'Freshly made idlis, fruits and estate coffee'
    },
    {
      url: tripData.images.cultural,
      category: 'vibe',
      title: 'Bonfire Acoustic Jam',
      desc: 'Guitar tunes and warm laughter under the stars'
    },
    {
      url: tripData.images.rooms,
      category: 'rooms',
      title: 'Hillside Cottage Stays',
      desc: 'Clean, airy rooms with valley-facing balconies'
    },
    {
      url: tripData.images.sightseeing,
      category: 'sightseeing',
      title: 'Secret Forest Waterfall',
      desc: 'Refreshing crystal-clear natural stream plunge'
    },
    {
      url: tripData.images.glamping,
      category: 'camp',
      title: 'Alpine Glamping Setup',
      desc: 'Comfortable mattresses and insulated sleeping bags'
    },
    {
      url: tripData.images.community,
      category: 'vibe',
      title: 'Solo Wanderers Becoming Friends',
      desc: 'Warm connections made along the winding trail'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'trek', label: 'Trekking' },
    { id: 'camp', label: 'Camping' },
    { id: 'food', label: 'Meals (BF, Lunch, Din)' },
    { id: 'rooms', label: 'Rooms & Stays' },
    { id: 'vibe', label: 'Culture & Vibe' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 whitespace-nowrap">
            Moments & Memories
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Glimpses of Your Upcoming Trip
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Real scenes of misty trails, peaceful bonfire nights, cozy beds, and delicious feasts waiting for you.
          </p>

        </div>

        {/* Filter Buttons - properly wrapped and centered, single line labels */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageModal(item)}
              className="group relative h-60 sm:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 whitespace-nowrap">
                  {item.category.toUpperCase()}
                </span>
                <h4 className="font-bold text-sm sm:text-base leading-snug whitespace-nowrap truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImageModal.url}
                alt={activeImageModal.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 text-white bg-slate-900">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider whitespace-nowrap">
                {activeImageModal.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display mt-0.5 whitespace-nowrap">
                {activeImageModal.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {activeImageModal.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
