import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Wifi, 
  Sparkles, 
  Bed, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Maximize2,
  ChevronRight
} from 'lucide-react';

export default function PropertyModal({ 
  property, 
  onClose, 
  isFavorite, 
  onToggleFavorite, 
  onReserve,
  currency = 'INR'
}) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [nights, setNights] = useState(4);
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState('2026-10-15');
  const [checkOut, setCheckOut] = useState('2026-10-19');

  if (!property) return null;

  const images = property.images && property.images.length > 0 ? property.images : [];
  const basePrice = property.price;
  const subtotal = basePrice * nights;
  const cleaningFee = Math.round(basePrice * 0.15);
  const serviceFee = Math.round(basePrice * 0.12);
  const total = subtotal + cleaningFee + serviceFee;

  const formatPrice = (val) => {
    if (currency === 'INR') return `₹${val.toLocaleString('en-IN')}`;
    if (currency === 'USD') return `$${Math.round(val / 83).toLocaleString()}`;
    return `€${Math.round(val / 90).toLocaleString()}`;
  };

  const handleReserveClick = () => {
    onReserve({
      property,
      nights,
      guests,
      checkIn,
      checkOut,
      total,
      currency
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex justify-center items-start sm:p-4 md:p-6 lg:p-8 animate-fadeIn">
      
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl bg-white sm:rounded-4xl shadow-soft-xl overflow-hidden my-auto min-h-screen sm:min-h-0 border border-stone-200">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-airbnb bg-airbnb/10 px-2.5 py-1 rounded-full">
              {property.badge || 'Guest favourite'}
            </span>
            <span className="text-sm font-semibold text-charcoal-muted hidden sm:inline">
              {property.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(property.id)}
              className="p-2 rounded-full hover:bg-stone-100 text-charcoal transition-colors"
              title="Save to wishlist"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-airbnb text-airbnb' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-100 text-charcoal transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8 text-left">
          
          {/* Title & Top Ratings */}
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4.5xl text-charcoal font-normal">
              {property.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-charcoal-muted">
              <div className="flex items-center gap-1 font-bold text-charcoal">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{property.rating}</span>
                <span className="font-normal text-charcoal-light">({property.reviewCount} reviews)</span>
              </div>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="w-4 h-4 text-airbnb" />
                {property.location}, {property.country}
              </span>
              <span>•</span>
              <span className="text-cypress-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                Airbnb Verified Stay
              </span>
            </div>
          </div>

          {/* Large Curated Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-3xl overflow-hidden relative">
            <div 
              onClick={() => setLightboxOpen(true)}
              className="md:col-span-2 md:row-span-2 h-72 md:h-96 relative cursor-pointer group overflow-hidden bg-stone-100"
            >
              <img
                src={images[0]}
                alt={property.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>

            {images.slice(1, 5).map((img, idx) => (
              <div
                key={idx}
                onClick={() => { setActivePhotoIndex(idx + 1); setLightboxOpen(true); }}
                className="h-36 md:h-46.5 relative cursor-pointer group overflow-hidden bg-stone-100 hidden sm:block"
              >
                <img
                  src={img}
                  alt={`${property.title} detail ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
            ))}

            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-charcoal shadow-soft flex items-center gap-2 hover:bg-white"
            >
              <Maximize2 className="w-3.5 h-3.5 text-airbnb" />
              <span>Show all photos</span>
            </button>
          </div>

          {/* Main Content Layout: Two-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column (7 cols): Property Details & Story */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Host Profile Card */}
              <div className="flex items-center justify-between p-6 rounded-3xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-4">
                  <img
                    src={property.host.avatar}
                    alt={property.host.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-soft-sm"
                  />
                  <div>
                    <h3 className="font-serif text-xl font-medium text-charcoal">
                      Hosted by {property.host.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted">
                      {property.host.role} • {property.host.joined}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-cypress-100 text-cypress-800 text-[11px] font-bold">
                    Superhost
                  </span>
                  <p className="text-[11px] text-charcoal-light mt-1">
                    Responds {property.host.responseTime}
                  </p>
                </div>
              </div>

              {/* Specs Highlights */}
              <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white border border-stone-200 text-center">
                <div>
                  <p className="text-lg font-bold text-charcoal">{property.maxGuests}</p>
                  <p className="text-xs text-charcoal-muted">Guests</p>
                </div>
                <div className="border-x border-stone-200">
                  <p className="text-lg font-bold text-charcoal">{property.bedrooms}</p>
                  <p className="text-xs text-charcoal-muted">Bedrooms</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-charcoal">{property.bathrooms}</p>
                  <p className="text-xs text-charcoal-muted">Bathrooms</p>
                </div>
              </div>

              {/* Narrative Story */}
              <div>
                <h3 className="font-serif text-2xl font-normal text-charcoal mb-3">
                  About this home
                </h3>
                <p className="text-charcoal-muted text-base font-light leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="pt-6 border-t border-stone-200">
                <h3 className="font-serif text-2xl font-normal text-charcoal mb-4">
                  What this place offers
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100 text-sm text-charcoal font-medium">
                      <CheckCircle2 className="w-4 h-4 text-cypress-600 flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating Detailed Breakdown */}
              <div className="pt-6 border-t border-stone-200">
                <h3 className="font-serif text-2xl font-normal text-charcoal mb-4">
                  Guest ratings & review scores
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {Object.entries(property.ratingBreakdown).map(([key, val]) => (
                    <div key={key} className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                      <p className="text-xs uppercase tracking-wider text-charcoal-muted capitalize">{key}</p>
                      <p className="text-xl font-serif font-bold text-charcoal mt-1">{val.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column (5 cols): Sticky Booking Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-soft-xl space-y-6">
                
                {/* Price Heading */}
                <div className="flex items-baseline justify-between border-b border-stone-100 pb-5">
                  <div>
                    <span className="font-serif text-3xl font-bold text-charcoal">
                      {formatPrice(basePrice)}
                    </span>
                    <span className="text-sm text-charcoal-muted ml-1">/ night</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{property.rating}</span>
                    <span className="text-charcoal-light">({property.reviewCount})</span>
                  </div>
                </div>

                {/* Reservation Inputs */}
                <div className="border border-stone-300 rounded-2xl overflow-hidden divide-y divide-stone-200">
                  <div className="grid grid-cols-2 divide-x divide-stone-200">
                    <div className="p-3 bg-stone-50/50">
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-muted">Check in</label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm font-semibold focus:outline-none mt-0.5"
                      />
                    </div>
                    <div className="p-3 bg-stone-50/50">
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-muted">Check out</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-transparent text-xs sm:text-sm font-semibold focus:outline-none mt-0.5"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-stone-50/50 flex items-center justify-between">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-muted">Guests</label>
                      <select 
                        value={guests} 
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="bg-transparent text-xs sm:text-sm font-semibold focus:outline-none mt-0.5 cursor-pointer"
                      >
                        {[...Array(property.maxGuests)].map((_, i) => (
                          <option key={i+1} value={i+1}>{i+1} guest{i > 0 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                    <div className="text-right">
                      <label className="block text-[10px] uppercase tracking-wider font-bold text-charcoal-muted">Duration</label>
                      <select
                        value={nights}
                        onChange={(e) => setNights(Number(e.target.value))}
                        className="bg-transparent text-xs sm:text-sm font-semibold focus:outline-none mt-0.5 cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 7, 10, 14].map((n) => (
                          <option key={n} value={n}>{n} nights</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Live Price Breakdown */}
                <div className="space-y-2.5 text-sm pt-2">
                  <div className="flex justify-between text-charcoal-muted">
                    <span>{formatPrice(basePrice)} × {nights} nights</span>
                    <span className="font-semibold text-charcoal">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Cleaning fee</span>
                    <span className="font-semibold text-charcoal">{formatPrice(cleaningFee)}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-muted">
                    <span>Airbnb service fee</span>
                    <span className="font-semibold text-charcoal">{formatPrice(serviceFee)}</span>
                  </div>

                  <div className="pt-3 border-t border-stone-200 flex justify-between text-base font-bold text-charcoal">
                    <span>Total before taxes</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Reserve Action Button in Signature Airbnb Rausch */}
                <button
                  onClick={handleReserveClick}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#FF385C] to-[#E00B41] hover:from-[#E00B41] hover:to-[#D70466] text-white font-bold text-base shadow-soft hover:shadow-soft-lg active:scale-98 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Reserve</span>
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                <p className="text-center text-[11px] text-charcoal-light">
                  You won’t be charged yet. Instant confirmation pass provided.
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Mode */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[activePhotoIndex]}
            alt="Full view"
            className="max-w-5xl max-h-[80vh] object-contain rounded-2xl shadow-2xl"
          />
          <div className="mt-4 flex items-center gap-3 overflow-x-auto max-w-full p-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActivePhotoIndex(i)}
                alt="thumb"
                className={`w-16 h-12 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                  i === activePhotoIndex ? 'border-airbnb scale-105' : 'border-transparent opacity-60'
                }`}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
