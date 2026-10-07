import React from 'react';
import { ArrowUpRight, Compass } from 'lucide-react';
import { destinations } from '../data/destinations';

export default function DestinationSection({ onSelectDestination }) {
  return (
    <section id="destinations" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-terracotta-600 mb-2">
            <Compass className="w-4 h-4" />
            <span>Curated Regions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal tracking-tight">
            Explore popular destinations
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-muted max-w-2xl font-light">
            Distinctive landscapes where natural grandeur meets breathtaking architectural stays.
          </p>
        </div>

        <div className="text-sm font-medium text-charcoal-muted">
          Showing 8 iconic escapes worldwide
        </div>
      </div>

      {/* Visually Rich Grid with Varied Compositions */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.id}
            onClick={() => onSelectDestination(dest.name)}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-xl transition-all duration-500 bg-stone-900 ${dest.colSpan}`}
          >
            {/* Image Container with Hover Scale */}
            <div className="relative h-72 sm:h-80 lg:h-96 w-full overflow-hidden">
              <img
                src={dest.image}
                alt={`${dest.name}, ${dest.country}`}
                loading="lazy"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Dual Gradient Overlays for Luxury Editorial Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

              {/* Top Meta Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {dest.tag}
                </span>
                <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Details Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-left text-white">
                <p className="text-xs font-medium text-stone-300 uppercase tracking-wider">
                  {dest.country}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal mt-0.5 group-hover:text-terracotta-200 transition-colors">
                  {dest.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-200/90 line-clamp-2 font-light leading-relaxed">
                  {dest.subtitle}
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-stone-300">
                  <span>{dest.staysCount}</span>
                  <span className="text-terracotta-300 font-medium group-hover:underline">Browse stays →</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
