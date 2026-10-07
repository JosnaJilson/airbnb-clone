import React from 'react';
import { X, Heart, Trash2, Star } from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  favoriteProperties, 
  onRemoveFavorite, 
  onSelectProperty,
  onClearAll,
  currency = 'INR'
}) {
  if (!isOpen) return null;

  const formatPrice = (val) => {
    if (currency === 'INR') return `₹${val.toLocaleString('en-IN')}`;
    if (currency === 'USD') return `$${Math.round(val / 83).toLocaleString()}`;
    return `€${Math.round(val / 90).toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-soft-xl border-l border-stone-200 flex flex-col">
          
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-airbnb text-airbnb" />
              <h2 className="font-serif text-2xl font-normal text-charcoal">
                Your Wishlists
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-stone-200/60 text-charcoal transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stays List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {favoriteProperties.length > 0 ? (
              favoriteProperties.map((prop) => (
                <div
                  key={prop.id}
                  className="group relative flex gap-4 p-3 rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-soft-sm transition-all bg-white text-left"
                >
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-charcoal-light uppercase tracking-wider">
                          {prop.location}
                        </span>
                        <div className="flex items-center gap-0.5 text-xs font-bold">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{prop.rating}</span>
                        </div>
                      </div>
                      <h4 
                        onClick={() => { onSelectProperty(prop); onClose(); }}
                        className="font-serif text-base font-medium text-charcoal group-hover:text-airbnb cursor-pointer truncate mt-0.5"
                      >
                        {prop.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-bold text-charcoal">
                        {formatPrice(prop.price)} <span className="font-normal text-charcoal-muted">night</span>
                      </span>
                      <button
                        onClick={() => onRemoveFavorite(prop.id)}
                        className="p-1.5 text-stone-400 hover:text-red-500 rounded-full hover:bg-stone-100 transition-colors"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400 mb-3">
                  <Heart className="w-6 h-6 stroke-[1.5]" />
                </div>
                <p className="font-serif text-xl text-charcoal">No saved homes yet</p>
                <p className="text-xs text-charcoal-muted mt-1 max-w-xs mx-auto">
                  Click the heart icon on any property card to build your private collection of dream stays.
                </p>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {favoriteProperties.length > 0 && (
            <div className="p-6 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs font-semibold text-charcoal-muted hover:text-red-600 transition-colors"
              >
                Clear all ({favoriteProperties.length})
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-airbnb hover:bg-airbnb-hover text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Keep Exploring
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
