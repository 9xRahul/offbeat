export const tripData = {
  name: "Offbeats",
  tagline: "The Ultimate Starter Escape: Cloud Trails, Bonfires & Good Folks",
  heroSubtitle: "Leave city deadlines and burnout behind. A thoughtfully curated weekend journey for beginners and solo seekers to disconnect, hike easy misty peaks, camp under starlit skies, and meet like-minded friends.",
  location: "Kudremukh Foothills & Chikmagalur Valleys",
  duration: "3 Days / 2 Nights",
  nextBatch: "Nov 29 - Dec 01",
  pricePerPerson: 5499,
  originalPrice: 7999,
  rating: 4.94,
  reviewCount: 348,
  soloRatio: "65% Solo Wanderers",
  difficulty: "Beginner Friendly (No prior trekking experience required)",
  
  // High quality Unsplash demo images for testing (easily swapped by user)
  images: {
    hero: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    trekking: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    sightseeing: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80",
    cultural: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80",
    camping: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1000&q=80",
    community: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80",
    food: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    breakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=80",
    rooms: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    glamping: "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1000&q=80",
    medical: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80"
  },

  // 5 Core Highlights of Offbeats
  highlights: [
    {
      id: "trekking",
      title: "Gentle Trekking",
      badge: "Zero Rush",
      icon: "Compass",
      tagline: "Walk amidst clouds, not concrete",
      description: "Designed strictly for beginners! 4-5 km panoramic trail through pine slopes, rolling grasslands, and babbling brooks with plenty of water and snack breaks.",
      features: [
        "Experienced local pathfinder guides",
        "Gentle ascents with photo stops every 20 mins",
        "Trek poles & hydration support provided"
      ],
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sightseeing",
      title: "Offbeat Sightseeing",
      badge: "No Tourist Traps",
      icon: "MapPin",
      tagline: "Hidden viewpoints only locals know",
      description: "Skip overcrowded tourist spots. Visit secluded waterfalls tucked inside evergreen reserves, a secret sunset ridge, and a century-old organic coffee plantation.",
      features: [
        "Hidden cascading jungle waterfall dip",
        "360° panoramic golden sunset ridge",
        "Private heritage estate plantation walk"
      ],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cultural",
      title: "Cultural & Acoustic Evenings",
      badge: "Pure Soul",
      icon: "Music",
      tagline: "Folk music, local folklore & warmth",
      description: "As the sun dips below mountain folds, gather around the warm crackle of the campfire. Experience local folk percussion, acoustic guitar sing-alongs, and heart-to-heart storytelling.",
      features: [
        "Live campfire acoustic jam sessions",
        "Traditional regional folklore & tribal rhythm",
        "Starry open-mic & storytelling circle"
      ],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "camping",
      title: "Starlight Camping",
      badge: "Wilderness Comfort",
      icon: "Tent",
      tagline: "Sleep beneath a million constellations",
      description: "Choose between alpine glamping tents or cozy wood-and-stone estate cottages. Surrounded by mist and birdsong, with warm duvets and safe enclosed campsite grounds.",
      features: [
        "Spacious dual-layer waterproof tents & duvets",
        "Surrounded by pine canopies and valley views",
        "Safe, gated private estate campsite"
      ],
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "community",
      title: "Disconnect to Reconnect",
      badge: "Mindful Vibe",
      icon: "HeartHandshake",
      tagline: "Ditch workplace burnout, find your tribe",
      description: "65% of our travelers join solo! Zero pressure, no corporate talk, just fun icebreaker games, mindful morning forest tea, and genuine conversations with creators, introverts, and dreamers.",
      features: [
        "Thoughtful zero-awkwardness icebreaker games",
        "Designated 'Phone Down, Look Up' sunset hour",
        "Friendly trip captains ensuring everyone feels included"
      ],
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Facilities Provided (Core prompt requirement: BF, Lunch, Dinner, Good rooms, Medical aid)
  facilities: [
    {
      id: "meals",
      category: "All Meals Included",
      title: "Wholesome Farm-to-Table Dining",
      badge: "Breakfast, Lunch & Dinner",
      icon: "Utensils",
      summary: "Never worry about food. Every meal is freshly cooked by local homestay hosts using regional mountain produce.",
      details: [
        {
          meal: "Hot Morning Breakfast",
          desc: "Steaming traditional breakfast (Idlis, poha, parathas, cut fruits, boiled eggs, and estate-fresh filter coffee & chai)."
        },
        {
          meal: "Energizing Mountain Lunch",
          desc: "Wholesome regional lunch (fresh curries, local greens, warm rotis, fragrant rice, salad, and buttermilk) eaten amidst nature."
        },
        {
          meal: "Campfire Barbecue & Feast Dinner",
          desc: "Evening barbecue snacks around the fire followed by a comforting buffet dinner with both Vegetarian & Non-Vegetarian specialties."
        }
      ],
      note: "Hygienic RO purified drinking water stations + unlimited refills throughout the trip. Special dietary requirements supported on request.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rooms",
      category: "Stays & Rest",
      title: "Good Rooms & Mountain Stays",
      badge: "Cleanliness Guaranteed",
      icon: "BedDouble",
      summary: "Rest well after a day in nature. Clean, spacious rooms with private washrooms and 24/7 hot water.",
      details: [
        {
          meal: "Deluxe Hillside Rooms / Cottages",
          desc: "Comfortable twin & triple sharing rooms with plush bedding, clean linens, electric charging points, and private valley balconies."
        },
        {
          meal: "Spotless Western Washrooms",
          desc: "Deep-cleaned private and shared sanitised restrooms with geysers for hot water baths after cool trails."
        },
        {
          meal: "Glamping Option Available",
          desc: "Want to try outdoor camping? Pitch in our weather-sealed Swiss canvas tents with foam mattresses and sleeping bags."
        }
      ],
      note: "Female solo traveler safety protocol: dedicated female trip marshals and secure lockable room options.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "medical",
      category: "Safety & Well-being",
      title: "Certified Medical Aid & Support",
      badge: "24/7 Trek Safety",
      icon: "ShieldAlert",
      summary: "Your safety is non-negotiable. Mountain-trained trip leads equipped for any starter emergency.",
      details: [
        {
          meal: "WFA Certified Trip Leaders",
          desc: "Our captains hold Wilderness First Aid & CPR certifications from recognized mountaineering institutes."
        },
        {
          meal: "Comprehensive Medical Kit",
          desc: "Emergency kit stocked with Pulse Oximeter, digital BP monitor, antiseptic dressings, cramp sprays, ORS, altitude & motion sickness meds."
        },
        {
          meal: "Emergency Evacuation Protocol",
          desc: "Dedicated standby local 4x4 rescue vehicle on ground and direct tie-ups with the nearest district hospital and clinic."
        }
      ],
      note: "1:7 Leader-to-Traveler ratio so no one is left behind or unassisted.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Day-wise Itinerary
  itinerary: [
    {
      day: 1,
      title: "Arrival, Forest Valley Walk & Campfire Acoustic Night",
      subtitle: "Unpack, unwind, and meet your travel family",
      time: "10:30 AM onwards",
      events: [
        { time: "10:30 AM", title: "Campsite Check-in & Welcome Brew", desc: "Arrive at our lush estate. Check into your cozy room or glamping tent with a hot mug of Chikmagalur spiced tea." },
        { time: "11:30 AM", title: "The 'No-Awkwardness' Icebreakers", desc: "Fun casual group games led by trip captains. No awkward formal intros—just easy laughs and nickname tags!" },
        { time: "01:30 PM", title: "Traditional Malnad Lunch", desc: "Enjoy a hearty farm lunch with freshly sourced mountain vegetables and hot ghee rice." },
        { time: "03:30 PM", title: "Hidden Brook & Pine Forest Stroll", desc: "An easy 2km acclimation walk under shaded pine trees to a gentle freshwater stream." },
        { time: "06:30 PM", title: "Golden Hour Tea & Sunset Point", desc: "Watch the sky paint shades of peach and crimson over the distant ridges." },
        { time: "08:00 PM", title: "Campfire, Acoustic Guitars & BBQ", desc: "Gather around the crackling bonfire. Live acoustic jam, folklore stories, barbecue skewers, and buffet dinner." }
      ],
      mealsIncluded: ["Welcome Drink", "Lunch", "Hi-Tea & Snacks", "Barbecue & Dinner"]
    },
    {
      day: 2,
      title: "The Starter Trek, Waterfall Splash & Stargazing Circle",
      subtitle: "The adventure day you'll be telling stories about",
      time: "06:30 AM onwards",
      events: [
        { time: "06:30 AM", title: "Misty Sunrise & Fresh Breakfast", desc: "Wake up to bird chorus. Hot breakfast of piping idlis, eggs, toast, and freshly brewed estate coffee." },
        { time: "08:00 AM", title: "Beginner-Friendly Ridge Trek", desc: "A scenic 4km gentle climb up the misty grassland ridge. Cloud formations, breathtaking valley lookouts, and plenty of photo breaks." },
        { time: "11:30 AM", title: "Secret Forest Waterfall Plunge", desc: "Dip your feet or take a refreshing swim in a natural freshwater pool safely supervised by our guides." },
        { time: "01:30 PM", title: "Stream-side Picnic Lunch", desc: "Enjoy warm meal packs by the cascading water while listening to the wind." },
        { time: "04:30 PM", title: "Cultural Village Walk & Coffee Tasting", desc: "Visit a traditional heritage village, interact with native coffee growers, and sample honey-processed beans." },
        { time: "08:00 PM", title: "Under-The-Stars Storytelling & Feast", desc: "Delicious dinner followed by starlit night session with laser constellation guide and deep conversations." }
      ],
      mealsIncluded: ["Breakfast", "Trail Snacks", "Lunch", "Evening Tea", "Dinner"]
    },
    {
      day: 3,
      title: "Heritage Sightseeing, Souvenir Hunt & Farewell Hugs",
      subtitle: "Take home fresh coffee, happy hearts, and lifelong friends",
      time: "07:30 AM onwards",
      events: [
        { time: "07:30 AM", title: "Mindful Morning Stretch & Heavy Breakfast", desc: "Gentle breathwork amidst misty hills followed by a loaded breakfast feast." },
        { time: "09:30 AM", title: "Heritage Sightseeing Excursion", desc: "Short scenic drive to an ancient mountain lookout and stone temple perched on the edge of the clouds." },
        { time: "12:00 PM", title: "Local Market & Artisan Coffee Roast", desc: "Pick up hand-ground coffee beans, homemade chocolates, spices, and organic mountain honey." },
        { time: "01:30 PM", title: "Grand Farewell Lunch & Group Polaroid", desc: "Final lunch together. Exchange contacts, sign the Offbeats travelers' guestbook, and receive your Offbeats souvenir pin!" },
        { time: "03:30 PM", title: "Departure with a Recharged Heart", desc: "Head back to the city thoroughly refreshed, de-stressed, and connected." }
      ],
      mealsIncluded: ["Breakfast", "Hi-Tea", "Farewell Lunch"]
    }
  ],

  // Batches
  batches: [
    { id: "batch-1", dates: "Nov 29 - Dec 01, 2024", label: "Upcoming Weekend", spotsLeft: 3, status: "filling-fast" },
    { id: "batch-2", dates: "Dec 06 - Dec 08, 2024", label: "Early Dec Breeze", spotsLeft: 6, status: "available" },
    { id: "batch-3", dates: "Dec 13 - Dec 15, 2024", label: "Winter Cloud Batch", spotsLeft: 9, status: "available" },
    { id: "batch-4", dates: "Dec 20 - Dec 22, 2024", label: "Holiday Special", spotsLeft: 4, status: "filling-fast" }
  ],

  // Why it's 100% Starter Friendly
  starterPillars: [
    {
      title: "Zero Fitness Prerequisite",
      desc: "If you can walk up 2 flights of stairs, you can easily complete this trip. No endurance marathon."
    },
    {
      title: "Solo Traveler Safe Haven",
      desc: "More than half of our wanderers sign up alone. By lunch on Day 1, everyone feels like old friends."
    },
    {
      title: "Hygienic Western Toilets",
      desc: "No digging holes in the wild! Clean, running hot water and sanitize-checked private washrooms."
    },
    {
      title: "Trained Trip Lead on Your Side",
      desc: "Patient, welcoming captains who carry your extra water bottle if you feel tired. No one is ever left behind."
    }
  ],

  // Interactive Checklist for Starters
  packingList: [
    { id: "p1", category: "Apparel", item: "Comfortable trekking or sports shoes with good grip", required: true },
    { id: "p2", category: "Apparel", item: "Light jacket / hoodie for chilly evening bonfires (15°C - 18°C)", required: true },
    { id: "p3", category: "Apparel", item: "2 pairs of quick-dry t-shirts and track pants", required: true },
    { id: "p4", category: "Gear", item: "Reusable 1-liter water bottle (save nature!)", required: true },
    { id: "p5", category: "Gear", item: "Small 20-30L daypack for the trail", required: true },
    { id: "p6", category: "Gear", item: "Power bank for charging phones/cameras", required: false },
    { id: "p7", category: "Personal", item: "Personal medicines & insect repellent", required: true },
    { id: "p8", category: "Personal", item: "Flip-flops for walking around the campsite", required: false }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Aanya Sharma",
      role: "Solo Traveler • UX Designer, Bangalore",
      comment: "I was terrified to travel alone for the first time. Offbeats completely melted my anxiety! The rooms were squeaky clean, food was like home, and by Day 2 we were singing 90s songs around the fire. 10/10 starter experience!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      batch: "Oct Batch"
    },
    {
      name: "Rohan & Dev",
      role: "First-Time Campers • Techies, Pune",
      comment: "We work 12 hours a day and desperately needed to unplug from screens. The trek was super easy and so gorgeous. The food—especially the hot breakfast after the morning walk—was unforgettable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      batch: "Nov Batch"
    },
    {
      name: "Meera Krishnan",
      role: "Solo Wanderer • Architect, Chennai",
      comment: "The medical support and female safety protocols are genuine. Our captain noticed I was feeling slightly dizzy from the winding roads and immediately provided an electrolyte drink and acupressure help. Felt so safe!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      batch: "Oct Batch"
    }
  ],

  // FAQs
  faqs: [
    {
      q: "I have never trekked or camped before. Is this suitable for me?",
      a: "Absolutely! Offbeats is specifically engineered as a 'Starter Trip'. The trails are gentle (around 4 km with frequent rest stops), our guides pace the group to the slowest hiker, and tents/rooms come pre-pitched with clean mattresses and blankets. No prior experience is needed."
    },
    {
      q: "Are the meals really included? What kind of food is served?",
      a: "Yes, all meals from Day 1 lunch to Day 3 lunch are 100% included (Breakfast, Lunch, Dinner, plus evening tea and campfire snacks). Food is prepared fresh by local estate hosts featuring delicious regional vegetarian dishes, plus chicken/egg options for dinner."
    },
    {
      q: "How are the rooms and bathroom facilities?",
      a: "We believe adventure shouldn't mean poor hygiene. You stay in comfortable hillside cottage rooms or luxury glamping tents with proper beds. All rooms have clean Western-style attached washrooms with hot water geysers."
    },
    {
      q: "What medical assistance is available if someone gets injured or sick?",
      a: "Every batch is accompanied by Wilderness First-Aid certified leaders. We carry a comprehensive med kit (pain relief, allergy meds, ORS, antiseptic, sprain wraps, pulse oximeter). In case of any serious need, our 4x4 backup vehicle connects to the district hospital within 25 minutes."
    },
    {
      q: "Can I join as a solo traveler? Will I feel awkward?",
      a: "Over 60% of our travelers join solo! From the moment you arrive, our captains introduce fun, non-intrusive icebreakers that break the tension naturally. You'll never eat alone or feel out of place."
    },
    {
      q: "What is the cancellation or batch reschedule policy?",
      a: "We understand that work schedules change! You can reschedule your trip to any upcoming weekend batch up to 5 days before departure with zero penalty, or easily transfer your booking to a friend."
    }
  ]
};
