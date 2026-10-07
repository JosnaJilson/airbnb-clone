import React from 'react';
import { 
  Sparkles, 
  Palmtree, 
  Mountain, 
  Building2, 
  Trees, 
  Crown, 
  Compass,
  SlidersHorizontal,
  Map,
  List
} from 'lucide-react';
import { categoriesList } from '../data/properties';

const iconMap = {
  Sparkles,
  Palmtree,
  Mountain,
  Building2,
  Trees,
  Crown,
  Compass
};

export default function CategoryFilter({ 
  selectedCategory, 
  onSelectCategory, 
  showTaxes, 
  setShowTaxes,
  onOpenFilters,
  isMapView,
  setIsMapView
}) {
  return (
    <div className="py-6 border-b border-stone-200 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Horizontal Category Scroll */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 lg:pb-0 scroll-smooth">
          {categoriesList.map((cat) => {
            const Icon = iconMap[cat.icon] || Sparkles;
            const isSelected = selectedCategory.toLowerCase() === cat.name.toLowerCase() || 
              (selectedCategory === 'All' && cat.name === 'All stays');

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.name === 'All stays' ? 'All' : cat.name)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isSelected 
                    ? 'bg-charcoal text-white border-charcoal shadow-soft-sm' 
                    : 'bg-white text-charcoal-muted border-stone-200 hover:border-charcoal hover:text-charcoal'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-charcoal-muted'}`} />
                <span>{cat.name}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-charcoal-muted'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Controls: Map Toggle, Taxes Toggle & Filter Dialog */}
        <div className="flex items-center gap-3 justify-end flex-shrink-0">
          
          {/* Map / Grid View Switcher */}
          <button
            onClick={() => setIsMapView(!isMapView)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-semibold transition-all ${
              isMapView
                ? 'bg-airbnb text-white border-airbnb shadow-soft'
                : 'bg-white text-charcoal border-stone-300 hover:border-charcoal'
            }`}
          >
            {isMapView ? <List className="w-4 h-4" /> : <Map className="w-4 h-4" />}
            <span>{isMapView ? 'Show list' : 'Show map'}</span>
          </button>

          {/* Taxes Toggle */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-stone-200 text-xs text-charcoal-muted font-medium shadow-soft-sm">
            <span>Display total before taxes</span>
            <button
              onClick={() => setShowTaxes(!showTaxes)}
              className={`w-9 h-5 rounded-full transition-colors relative focus:outline-none ${
                showTaxes ? 'bg-airbnb' : 'bg-stone-300'
              }`}
              role="switch"
              aria-checked={showTaxes}
            >
              <span 
                className={`block w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${
                  showTaxes ? 'translate-x-4.5' : 'translate-x-0.5'
                }`} 
              />
            </button>
          </div>

          {/* Filters Button */}
          <button
            onClick={onOpenFilters}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 hover:border-charcoal text-xs sm:text-sm font-medium text-charcoal shadow-soft-sm hover:shadow-soft transition-all"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-charcoal" />
            <span>Filters</span>
          </button>

        </div>

      </div>
    </div>
  );
}
