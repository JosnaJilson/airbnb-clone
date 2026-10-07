import React, { useState } from 'react';
import { Star, Heart, X, MapPin, ZoomIn, ZoomOut, Navigation, Bed, Users } from 'lucide-react';

export default function MapView({ 
  properties, 
  onSelectProperty, 
  onToggleFavorite, 
  favorites, 
  currency = 'INR' 
}) {
  const [selectedPin, setSelectedPin] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Geographic positioning mapping for realistic spatial plot on visual world map
  const coordinates = {
    'ocean-glass-villa': { x: 74, y: 64, label: 'Bali' },
    'alpine-wooden-retreat': { x: 48, y: 36, label: 'Swiss Alps' },
    'cliffside-azure-house': { x: 53, y: 43, label: 'Santorini' },
    'forest-haven-cabin': { x: 67, y: 55, label: 'Kerala' },
    'desert-horizon-villa': { x: 61, y: 46, label: 'Dubai' },
    'kyoto-garden-residence': { x: 84, y: 41, label: 'Kyoto' },
    'nordic-glass-observatory': { x: 50, y: 20, label: 'Norway' },
    'provencal-stone-bastide': { x: 46, y: 38, label: 'Provence' },
    'manhattan-skyline-penthouse': { x: 26, y: 38, label: 'New York' },
  };

  const formatPrice = (val) => {
    if (currency === 'INR') return `₹${val.toLocaleString('en-IN')}`;
    if (currency === 'USD') return `$${Math.round(val / 83).toLocaleString()}`;
    return `€${Math.round(val / 90).toLocaleString()}`;
  };

  return (
    <div className="relative w-full h-[680px] rounded-3xl overflow-hidden border border-stone-200 shadow-soft-xl bg-[#E8ECEF] select-none">
      
      {/* Map SVG Canvas & Styling */}
      <div 
        className="w-full h-full relative transition-transform duration-300 overflow-hidden"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
      >
        {/* World Cartographic Outlines Background */}
        <svg 
          viewBox="0 0 1000 600" 
          className="w-full h-full object-cover opacity-75"
          preserveAspectRatio="none"
        >
          {/* Subtle Ocean Graticules */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DCE1E5" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="1000" height="600" fill="#EBF0F3"/>
          <rect width="1000" height="600" fill="url(#grid)"/>

          {/* Stylized Continents Outlines */}
          {/* North America */}
          <path d="M 120 120 Q 200 100 280 140 T 320 280 T 260 380 T 150 280 Z" fill="#DCE2E6" stroke="#CAD2D8" strokeWidth="1.5" />
          {/* South America */}
          <path d="M 280 340 Q 340 380 320 480 T 260 560 T 240 420 Z" fill="#DCE2E6" stroke="#CAD2D8" strokeWidth="1.5" />
          {/* Europe */}
          <path d="M 460 140 Q 560 120 540 240 T 440 260 Z" fill="#DCE2E6" stroke="#CAD2D8" strokeWidth="1.5" />
          {/* Africa */}
          <path d="M 470 270 Q 580 280 570 420 T 500 520 T 440 360 Z" fill="#DCE2E6" stroke="#CAD2D8" strokeWidth="1.5" />
          {/* Asia */}
          <path d="M 560 130 Q 760 110 860 220 T 780 380 T 620 300 Z" fill="#DCE2E6" stroke="#CAD2D8" strokeWidth="1.5" />
          {/* Australia */}
          <path d="M 780 430 Q 880 440 860 520 T 760 500 Z" fill="#DCE2E6" stroke="#CAD2D8" strokeWidth="1.5" />
        </svg>

        {/* Plot Price Pins */}
        {properties.map((property) => {
          const pos = coordinates[property.id] || { x: 50, y: 50, label: property.location };
          const isSelected = selectedPin?.id === property.id;

          return (
            <div
              key={property.id}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
              onClick={() => setSelectedPin(property)}
            >
              <div 
                className={`px-3 py-1.5 rounded-full font-bold text-xs shadow-soft-lg flex items-center gap-1 transition-all duration-200 transform hover:scale-110 active:scale-95 ${
                  isSelected 
                    ? 'bg-charcoal text-white ring-2 ring-white scale-110' 
                    : 'bg-white text-charcoal hover:bg-stone-50 border border-stone-300'
                }`}
              >
                <span>{formatPrice(property.price)}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Map Floating Controls */}
      <div className="absolute top-5 right-5 z-30 flex flex-col gap-2 bg-white rounded-2xl shadow-soft p-1 border border-stone-200">
        <button
          onClick={() => setZoomLevel(Math.min(zoomLevel + 0.2, 1.8))}
          className="p-2.5 rounded-xl hover:bg-stone-100 text-charcoal transition-colors"
          title="Zoom in"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => setZoomLevel(Math.max(zoomLevel - 0.2, 0.8))}
          className="p-2.5 rounded-xl hover:bg-stone-100 text-charcoal transition-colors"
          title="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => { setZoomLevel(1); setSelectedPin(null); }}
          className="p-2.5 rounded-xl hover:bg-stone-100 text-charcoal transition-colors"
          title="Reset map view"
        >
          <Navigation className="w-4 h-4" />
        </button>
      </div>

      {/* Selected Property Popup Card Overlay */}
      {selectedPin && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 w-80 sm:w-96 bg-white rounded-3xl p-4 shadow-soft-xl border border-stone-200 animate-fadeIn">
          <button
            onClick={() => setSelectedPin(null)}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white text-charcoal shadow-sm z-10"
          >
            <X className="w-4 h-4" />
          </button>

          <div 
            onClick={() => onSelectProperty(selectedPin)}
            className="cursor-pointer group"
          >
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-3">
              <img
                src={selectedPin.images[0]}
                alt={selectedPin.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-charcoal/80 backdrop-blur-md text-white text-[10px] font-semibold">
                {selectedPin.badge || 'Guest favorite'}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-charcoal-muted mb-1">
              <span>{selectedPin.location}</span>
              <div className="flex items-center gap-1 font-semibold text-charcoal">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{selectedPin.rating}</span>
              </div>
            </div>

            <h4 className="font-serif text-lg font-medium text-charcoal group-hover:text-airbnb transition-colors truncate">
              {selectedPin.title}
            </h4>

            <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="font-bold text-sm text-charcoal">{formatPrice(selectedPin.price)}</span>
                <span className="text-xs text-charcoal-muted ml-1">night</span>
              </div>
              <span className="text-xs font-semibold text-airbnb group-hover:underline">
                View stay details →
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Map View Watermark Banner */}
      <div className="absolute top-5 left-5 z-30 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-stone-200 text-xs font-semibold text-charcoal shadow-soft-sm flex items-center gap-2">
        <MapPin className="w-3.5 h-3.5 text-airbnb" />
        <span>Interactive Map • Showing {properties.length} stays</span>
      </div>

    </div>
  );
}
