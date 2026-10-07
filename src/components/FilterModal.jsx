import React, { useState } from 'react';
import { X, SlidersHorizontal, Check } from 'lucide-react';

export default function FilterModal({ 
  isOpen, 
  onClose, 
  filters, 
  onApplyFilters, 
  currency = 'INR' 
}) {
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || 40000);
  const [minBedrooms, setMinBedrooms] = useState(filters.minBedrooms || 0);
  const [selectedAmenities, setSelectedAmenities] = useState(filters.amenities || []);

  if (!isOpen) return null;

  const amenityOptions = [
    'Private pool',
    'Hot tub',
    'High-speed Wi-Fi',
    'Ocean view',
    'Mountain views',
    'Fireplace',
    'Sauna',
    'EV charging'
  ];

  const toggleAmenity = (item) => {
    if (selectedAmenities.includes(item)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== item));
    } else {
      setSelectedAmenities([...selectedAmenities, item]);
    }
  };

  const handleReset = () => {
    setMaxPrice(40000);
    setMinBedrooms(0);
    setSelectedAmenities([]);
  };

  const handleApply = () => {
    onApplyFilters({
      maxPrice,
      minBedrooms,
      amenities: selectedAmenities
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-4xl p-8 shadow-soft-xl border border-stone-200 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-airbnb" />
            <h3 className="font-serif text-2xl font-normal text-charcoal">Filters</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100 text-charcoal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters Content */}
        <div className="py-6 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Price Range Slider */}
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-sm font-semibold text-charcoal">Nightly Price (Up to)</span>
              <span className="font-serif text-xl font-bold text-airbnb">
                ₹{maxPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="8000"
              max="50000"
              step="2000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-airbnb cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-charcoal-light mt-1">
              <span>₹8,000</span>
              <span>₹50,000+</span>
            </div>
          </div>

          {/* Minimum Bedrooms */}
          <div>
            <span className="text-sm font-semibold text-charcoal block mb-3">Bedrooms</span>
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setMinBedrooms(num)}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                    minBedrooms === num
                      ? 'bg-charcoal text-white border-charcoal'
                      : 'bg-white text-charcoal border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {num === 0 ? 'Any' : `${num}+`}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities Multi-Select */}
          <div>
            <span className="text-sm font-semibold text-charcoal block mb-3">Amenities</span>
            <div className="grid grid-cols-2 gap-2.5">
              {amenityOptions.map((amenity) => {
                const isChecked = selectedAmenities.includes(amenity);
                return (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => toggleAmenity(amenity)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs text-left transition-all ${
                      isChecked
                        ? 'border-airbnb bg-airbnb/10 font-semibold text-charcoal'
                        : 'border-stone-200 hover:border-stone-300 text-charcoal-muted'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                      isChecked ? 'bg-airbnb border-airbnb text-white' : 'border-stone-300'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{amenity}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-charcoal-muted hover:text-charcoal underline"
          >
            Clear all
          </button>
          <button
            onClick={handleApply}
            className="px-6 py-3 rounded-full bg-airbnb hover:bg-airbnb-hover text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Show stays
          </button>
        </div>

      </div>
    </div>
  );
}
