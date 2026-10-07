import React from 'react';
import PropertyCard from './PropertyCard';
import CategoryFilter from './CategoryFilter';
import MapView from './MapView';
import { RotateCcw, Compass } from 'lucide-react';

export default function PropertyGrid({ 
  properties, 
  favorites, 
  onToggleFavorite, 
  onSelectProperty,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onClearFilters,
  currency,
  showTaxes,
  setShowTaxes,
  onOpenFilters,
  isMapView,
  setIsMapView
}) {
  return (
    <section id="stays" className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Discovery Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-airbnb mb-2">
            <Compass className="w-4 h-4" />
            <span>Airbnb Holiday Stays</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal tracking-tight">
            Stay somewhere extraordinary
          </h2>
          <p className="mt-2 text-base sm:text-lg text-charcoal-muted max-w-2xl font-light">
            Verified holiday rentals, villas, chalets, and architectural escapes across the world.
          </p>
        </div>

        <div className="text-sm font-medium text-charcoal-muted">
          Showing <span className="font-bold text-charcoal">{properties.length}</span> verified stays
        </div>
      </div>

      {/* Categories Filter Strip with Map Toggle */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        showTaxes={showTaxes}
        setShowTaxes={setShowTaxes}
        onOpenFilters={onOpenFilters}
        isMapView={isMapView}
        setIsMapView={setIsMapView}
      />

      {/* Active Search & Filters Indicator */}
      {(searchQuery || selectedCategory !== 'All') && (
        <div className="mb-8 flex items-center justify-between p-4 bg-stone-100/90 rounded-2xl border border-stone-200">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-muted flex-wrap">
            <span>Filtering by:</span>
            {searchQuery && (
              <span className="font-semibold text-charcoal bg-white px-2.5 py-1 rounded-full border border-stone-200">
                Destination: "{searchQuery}"
              </span>
            )}
            {selectedCategory !== 'All' && (
              <span className="font-semibold text-charcoal bg-white px-2.5 py-1 rounded-full border border-stone-200">
                Category: {selectedCategory}
              </span>
            )}
          </div>
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1.5 text-xs font-bold text-airbnb hover:underline transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
        </div>
      )}

      {/* Main Content: Map View or Grid View */}
      {isMapView ? (
        <MapView
          properties={properties}
          onSelectProperty={onSelectProperty}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          currency={currency}
        />
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.includes(property.id)}
              onToggleFavorite={onToggleFavorite}
              onSelectProperty={onSelectProperty}
              currency={currency}
              showTaxes={showTaxes}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-stone-300 p-8">
          <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-charcoal-muted mb-4">
            <Compass className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl font-normal text-charcoal">No retreats match this exact query</h3>
          <p className="mt-2 text-sm text-charcoal-muted max-w-md mx-auto font-light">
            Try adjusting your search criteria or explore our featured global destinations.
          </p>
          <button
            onClick={onClearFilters}
            className="mt-6 px-6 py-2.5 rounded-full bg-charcoal text-white text-xs uppercase tracking-wider font-bold hover:bg-airbnb transition-colors"
          >
            View All Stays
          </button>
        </div>
      )}

    </section>
  );
}
