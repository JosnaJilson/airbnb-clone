import React, { useState } from 'react';
import { 
  Heart, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  Bed, 
  Sparkles 
} from 'lucide-react';

export default function PropertyCard({ 
  property, 
  isFavorite, 
  onToggleFavorite, 
  onSelectProperty,
  currency = 'INR',
  showTaxes = false
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = property.images && property.images.length > 0 
    ? property.images 
    : ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85'];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formatPrice = (amount) => {
    const finalAmount = showTaxes ? Math.round(amount * 1.18) : amount;
    if (currency === 'INR') {
      return `₹${finalAmount.toLocaleString('en-IN')}`;
    } else if (currency === 'USD') {
      return `$${Math.round(finalAmount / 83).toLocaleString()}`;
    } else {
      return `€${Math.round(finalAmount / 90).toLocaleString()}`;
    }
  };

  return (
    <div 
      onClick={() => onSelectProperty(property)}
      className="group flex flex-col cursor-pointer bg-white rounded-3xl p-3 border border-stone-200 hover:border-stone-300 shadow-soft-sm hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-300"
    >
      
      {/* Media Container with Carousel & Heart */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-100">
        <img
          src={images[currentImageIndex]}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Favorite / Heart Button with Pulse Micro-interaction */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(property.id);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 hover:bg-white backdrop-blur-md flex items-center justify-center text-charcoal shadow-soft-sm hover:scale-110 active:scale-95 transition-all duration-200 z-10"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            className={`w-4.5 h-4.5 transition-colors ${
              isFavorite 
                ? 'fill-airbnb text-airbnb scale-110' 
                : 'text-charcoal-deep stroke-[2]'
            }`} 
          />
        </button>

        {/* Property Badge */}
        {property.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-charcoal border border-white/60 flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-airbnb" />
            <span>{property.badge}</span>
          </div>
        )}

        {/* Carousel Chevrons */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-105 transition-all duration-200 shadow-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm text-charcoal flex items-center justify-center opacity-0 group-hover:opacity-100 hover:scale-105 transition-all duration-200 shadow-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1 z-10">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    idx === currentImageIndex 
                      ? 'w-4 bg-white' 
                      : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Property Details Content */}
      <div className="pt-3.5 pb-2 px-2 flex flex-col flex-1 text-left">
        
        {/* Row 1: Location & Star Rating */}
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs uppercase tracking-wider font-bold text-charcoal-muted truncate">
            {property.location}
          </p>
          <div className="flex items-center gap-1 text-xs font-bold text-charcoal flex-shrink-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{property.rating.toFixed(2)}</span>
            <span className="text-charcoal-light font-normal">({property.reviewCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-normal text-charcoal mt-1 group-hover:text-airbnb transition-colors line-clamp-1">
          {property.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-charcoal-muted line-clamp-2 mt-1 font-light leading-relaxed">
          {property.shortDescription}
        </p>

        {/* Supporting Specifications */}
        <div className="flex items-center gap-3 text-xs text-charcoal-light mt-3 pt-2.5 border-t border-stone-100">
          <span className="flex items-center gap-1">
            <Bed className="w-3.5 h-3.5 text-stone-400" />
            {property.beds} beds
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5 text-stone-400" />
            Up to {property.maxGuests} guests
          </span>
        </div>

        {/* Price Section */}
        <div className="mt-3 pt-2 flex items-baseline justify-between">
          <div>
            <span className="text-base sm:text-lg font-bold text-charcoal tracking-tight">
              {formatPrice(property.price)}
            </span>
            <span className="text-xs text-charcoal-muted ml-1 font-normal">night</span>
            {showTaxes && (
              <span className="block text-[10px] text-cypress-700 font-medium">Includes taxes & fees</span>
            )}
          </div>
          <span className="text-xs text-airbnb font-semibold group-hover:underline">
            View stay →
          </span>
        </div>

      </div>

    </div>
  );
}
