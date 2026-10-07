import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Plus, 
  Minus, 
  Sparkles,
  ArrowRight,
  Compass
} from 'lucide-react';

export default function Hero({ 
  searchQuery, 
  setSearchQuery, 
  checkInDate, 
  setCheckInDate, 
  checkOutDate, 
  setCheckOutDate, 
  guestCount, 
  setGuestCount, 
  onPerformSearch 
}) {
  const [activeTab, setActiveTab] = useState(null); // 'where', 'checkIn', 'checkOut', 'guests'
  const [adults, setAdults] = useState(guestCount > 0 ? guestCount : 2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const containerRef = useRef(null);

  // Close popup if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveTab(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalGuests = adults + children;

  const handleApplyGuests = () => {
    setGuestCount(totalGuests);
    setActiveTab(null);
  };

  const popularLocations = [
    { name: 'Bali, Indonesia', tag: 'Tropical Villas' },
    { name: 'Swiss Alps, Switzerland', tag: 'Alpine Chalets' },
    { name: 'Santorini, Greece', tag: 'Caldera Cave Stays' },
    { name: 'Kerala, India', tag: 'Backwaters & Forest Cabins' },
    { name: 'Kyoto, Japan', tag: 'Machiya Tea Homes' },
    { name: 'Dubai, UAE', tag: 'Desert Oases' }
  ];

  const handleSelectLocation = (loc) => {
    setSearchQuery(loc);
    setActiveTab('checkIn');
  };

  return (
    <section className="relative pt-24 lg:pt-28 pb-20 md:pb-28 overflow-hidden">
      
      {/* Background Cinematic Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85"
          alt="Luxury architectural sanctuary"
          className="w-full h-full object-cover object-center filter brightness-[0.88] scale-105 transform animate-fadeIn transition-transform duration-1000 ease-out"
        />
        {/* Editorial Gradients & Overlays for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-black/25 to-black/45" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-14 pb-4">
        
        {/* Curated Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-soft-sm mb-6 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-airbnb animate-ping" />
          <span className="text-xs uppercase tracking-widest font-bold text-charcoal">
            Airbnb Stays Worldwide
          </span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl font-normal tracking-tight text-white drop-shadow-md max-w-4xl mx-auto leading-[1.08]">
          Find a place that feels like yours.
        </h1>

        {/* Supporting Text */}
        <p className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl text-stone-100 font-light max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
          “Discover distinctive stays, beautiful destinations, and unforgettable escapes.”
        </p>

        {/* Search Interface Container */}
        <div 
          ref={containerRef}
          className="mt-10 sm:mt-12 max-w-5xl mx-auto relative"
        >
          {/* Desktop & Tablet Search Bar */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl lg:rounded-full p-2.5 sm:p-3 shadow-soft-xl border border-white/80 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 items-center gap-1">
              
              {/* Field 1: Where */}
              <div 
                onClick={() => setActiveTab(activeTab === 'where' ? null : 'where')}
                className={`lg:col-span-4 text-left px-5 py-3 rounded-2xl lg:rounded-full cursor-pointer transition-all duration-200 ${
                  activeTab === 'where' ? 'bg-stone-100 shadow-soft-sm' : 'hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-airbnb" />
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-deep">Where</span>
                </div>
                <input
                  type="text"
                  placeholder="Search destinations"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  onFocus={() => setActiveTab('where')}
                  className="w-full bg-transparent text-sm sm:text-base font-semibold text-charcoal placeholder-charcoal-light focus:outline-none mt-0.5 truncate"
                />
              </div>

              {/* Field 2: Check in */}
              <div 
                onClick={() => setActiveTab(activeTab === 'checkIn' ? null : 'checkIn')}
                className={`lg:col-span-2.5 text-left px-5 py-3 rounded-2xl lg:rounded-full cursor-pointer transition-all duration-200 border-t md:border-t-0 md:border-l border-stone-200/80 ${
                  activeTab === 'checkIn' ? 'bg-stone-100 shadow-soft-sm' : 'hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-airbnb" />
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-deep">Check in</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-charcoal mt-0.5 truncate">
                  {checkInDate || <span className="text-charcoal-light font-normal">Add dates</span>}
                </p>
              </div>

              {/* Field 3: Check out */}
              <div 
                onClick={() => setActiveTab(activeTab === 'checkOut' ? null : 'checkOut')}
                className={`lg:col-span-2.5 text-left px-5 py-3 rounded-2xl lg:rounded-full cursor-pointer transition-all duration-200 border-t md:border-t-0 md:border-l border-stone-200/80 ${
                  activeTab === 'checkOut' ? 'bg-stone-100 shadow-soft-sm' : 'hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-airbnb" />
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal-deep">Check out</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-charcoal mt-0.5 truncate">
                  {checkOutDate || <span className="text-charcoal-light font-normal">Add dates</span>}
                </p>
              </div>

              {/* Field 4: Guests & Search Action */}
              <div className="lg:col-span-3 flex items-center justify-between border-t md:border-t-0 md:border-l border-stone-200/80 pl-4 pr-1.5 py-1.5">
                <div 
                  onClick={() => setActiveTab(activeTab === 'guests' ? null : 'guests')}
                  className={`flex-1 text-left px-2 py-2 rounded-2xl cursor-pointer transition-all duration-200 ${
                    activeTab === 'guests' ? 'bg-stone-100' : 'hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-airbnb" />
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal-deep">Guests</span>
                  </div>
                  <p className="text-sm font-semibold text-charcoal mt-0.5 truncate">
                    {totalGuests > 0 ? `${totalGuests} guest${totalGuests > 1 ? 's' : ''}` : <span className="text-charcoal-light font-normal">Add guests</span>}
                  </p>
                </div>

                {/* Search Button: Authentic Airbnb Rausch Gradient Button */}
                <button
                  onClick={() => {
                    setActiveTab(null);
                    onPerformSearch();
                  }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF385C] to-[#E00B41] hover:from-[#E00B41] hover:to-[#D70466] active:scale-95 text-white font-medium text-sm sm:text-base px-5 sm:px-6 py-3.5 rounded-full shadow-soft hover:shadow-soft-lg transition-all duration-300 ml-2 group"
                  aria-label="Search accommodations"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
                  <span className="font-bold tracking-wide hidden sm:inline">Search</span>
                </button>
              </div>

            </div>
          </div>

          {/* Interactive Popover Panels */}
          
          {/* Destination Dropdown */}
          {activeTab === 'where' && (
            <div className="absolute left-0 right-0 md:left-4 md:w-96 mt-3 bg-white rounded-3xl p-5 shadow-soft-xl border border-stone-200 z-50 text-left animate-fadeIn">
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-airbnb" />
                Popular Curated Destinations
              </p>
              <div className="space-y-1">
                {popularLocations.map((loc) => (
                  <button
                    key={loc.name}
                    onClick={() => handleSelectLocation(loc.name)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-stone-100 transition-colors group text-left"
                  >
                    <div>
                      <p className="text-sm font-semibold text-charcoal group-hover:text-airbnb transition-colors">
                        {loc.name}
                      </p>
                      <p className="text-xs text-charcoal-muted">{loc.tag}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-charcoal group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Date Picker Popover */}
          {(activeTab === 'checkIn' || activeTab === 'checkOut') && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white rounded-3xl p-6 shadow-soft-xl border border-stone-200 z-50 text-left w-[90vw] max-w-md animate-fadeIn">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
                <h4 className="font-semibold text-charcoal text-sm">
                  {activeTab === 'checkIn' ? 'Select Check-in Date' : 'Select Check-out Date'}
                </h4>
                <span className="text-xs text-airbnb font-bold uppercase tracking-wider">Flexible Dates</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <label className="text-xs text-charcoal-muted font-medium">Check in</label>
                  <input
                    type="date"
                    value={checkInDate || '2026-10-15'}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-stone-200 rounded-xl text-sm font-semibold focus:ring-1 focus:ring-airbnb focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-muted font-medium">Check out</label>
                  <input
                    type="date"
                    value={checkOutDate || '2026-10-20'}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-stone-200 rounded-xl text-sm font-semibold focus:ring-1 focus:ring-airbnb focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2 border-t border-stone-100">
                <button
                  onClick={() => {
                    setCheckInDate('15 Oct');
                    setCheckOutDate('20 Oct');
                    setActiveTab(activeTab === 'checkIn' ? 'checkOut' : 'guests');
                  }}
                  className="px-4 py-2 bg-airbnb text-white text-xs font-bold rounded-full hover:bg-airbnb-hover transition-colors"
                >
                  Confirm Dates
                </button>
              </div>
            </div>
          )}

          {/* Guest Count Popover */}
          {activeTab === 'guests' && (
            <div className="absolute right-0 md:right-4 md:w-80 mt-3 bg-white rounded-3xl p-5 shadow-soft-xl border border-stone-200 z-50 text-left animate-fadeIn">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-4">
                Travel Party
              </h4>
              
              {/* Adults Counter */}
              <div className="flex items-center justify-between py-2 border-b border-stone-100">
                <div>
                  <p className="text-sm font-semibold text-charcoal">Adults</p>
                  <p className="text-xs text-charcoal-muted">Ages 13 or above</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    disabled={adults <= 1}
                    onClick={() => setAdults(adults - 1)}
                    className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-charcoal hover:border-charcoal disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-5 text-center text-sm font-semibold">{adults}</span>
                  <button
                    onClick={() => setAdults(adults + 1)}
                    className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-charcoal hover:border-charcoal"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Children Counter */}
              <div className="flex items-center justify-between py-2 border-b border-stone-100">
                <div>
                  <p className="text-sm font-semibold text-charcoal">Children</p>
                  <p className="text-xs text-charcoal-muted">Ages 2–12</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    disabled={children <= 0}
                    onClick={() => setChildren(children - 1)}
                    className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-charcoal hover:border-charcoal disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-5 text-center text-sm font-semibold">{children}</span>
                  <button
                    onClick={() => setChildren(children + 1)}
                    className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-charcoal hover:border-charcoal"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Infants Counter */}
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-semibold text-charcoal">Infants</p>
                  <p className="text-xs text-charcoal-muted">Under 2</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    disabled={infants <= 0}
                    onClick={() => setInfants(infants - 1)}
                    className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-charcoal hover:border-charcoal disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-5 text-center text-sm font-semibold">{infants}</span>
                  <button
                    onClick={() => setInfants(infants + 1)}
                    className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-charcoal hover:border-charcoal"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex justify-end">
                <button
                  onClick={handleApplyGuests}
                  className="px-5 py-2 rounded-full bg-charcoal text-white text-xs font-bold hover:bg-airbnb transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Quick Suggestion Chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-stone-200">
          <span className="text-white font-semibold">Trending Escapes:</span>
          {['Bali', 'Santorini', 'Swiss Alps', 'Kerala', 'Kyoto', 'Dubai'].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSearchQuery(tag);
                onPerformSearch();
              }}
              className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/40 text-white font-medium transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
