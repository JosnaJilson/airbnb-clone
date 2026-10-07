import React from 'react';
import { uniqueStays } from '../data/uniqueStays';
import { Compass, ArrowRight } from 'lucide-react';

export default function UniqueStays({ onSelectType }) {
  return (
    <section id="unique" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-terracotta-600 mb-2">
            <Compass className="w-4 h-4" />
            <span>Architectural Typologies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal tracking-tight">
            Curated architectural typologies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-muted max-w-2xl font-light">
            From forest canopy perches to transparent Arctic domes, experience stays crafted beyond ordinary walls.
          </p>
        </div>

        <p className="text-sm font-medium text-charcoal-muted">
          6 singular building formats
        </p>
      </div>

      {/* Varied Aspect Ratio Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {uniqueStays.map((stay, idx) => (
          <div
            key={stay.id}
            onClick={() => onSelectType(stay.title)}
            className={`group cursor-pointer rounded-3xl overflow-hidden bg-stone-900 shadow-soft hover:shadow-soft-xl transition-all duration-300 ${
              idx % 2 === 1 ? 'lg:translate-y-6' : ''
            }`}
          >
            {/* Image with dynamic aspect ratio */}
            <div className={`relative ${stay.aspect} w-full overflow-hidden`}>
              <img
                src={stay.image}
                alt={stay.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal/30 to-transparent" />

              {/* Tag Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {stay.tag}
                </span>
              </div>

              {/* Bottom Text Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white text-left">
                <p className="text-xs text-stone-300 font-medium mb-1">
                  {stay.count}
                </p>
                <h3 className="font-serif text-2xl font-normal group-hover:text-terracotta-300 transition-colors">
                  {stay.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-200/90 font-light leading-relaxed line-clamp-2">
                  {stay.subtitle}
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-stone-300 font-medium">
                  <span>Explore collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
