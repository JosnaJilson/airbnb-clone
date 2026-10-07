import React from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';

export default function FeaturedExperience({ onExploreStay }) {
  return (
    <section id="signature" className="py-20 md:py-28 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Large Cinematic Property Image */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-soft-xl bg-stone-900 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85"
                alt="Ocean Glass Villa Uluwatu"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/70 via-transparent to-black/10" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-soft flex items-center justify-between text-left">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-airbnb">
                    Airbnb Featured Sanctuary
                  </p>
                  <p className="font-serif text-lg text-charcoal font-medium">
                    Ocean Glass Villa • Uluwatu, Bali
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-xs font-bold text-charcoal">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.92 (148 reviews)</span>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Inset Accent */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl overflow-hidden shadow-soft-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=500&q=80"
                alt="Infinity pool view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-airbnb/10 border border-airbnb/30 text-airbnb text-xs uppercase tracking-widest font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-airbnb" />
              <span>AIRBNB SIGNATURE</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-normal text-charcoal leading-[1.12] tracking-tight">
              Wake up somewhere extraordinary.
            </h2>

            {/* Description Explaining Uniqueness */}
            <p className="mt-5 text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
              Suspended over the azure cliffs of Uluwatu, the Ocean Glass Villa redefines tropical minimalism. Floor-to-ceiling retractable glass walls dissolve the line between master suites and the vast Indian Ocean horizon.
            </p>

            <p className="mt-4 text-sm sm:text-base text-charcoal-muted font-light leading-relaxed">
              Hand-carved volcanic stone, private saltwater infinity pools, and round-the-clock bespoke culinary services ensure every sunset remains indelibly etched in memory.
            </p>

            {/* Key Feature Specs */}
            <div className="mt-6 grid grid-cols-2 gap-4 w-full py-4 border-y border-stone-200">
              <div>
                <p className="text-2xl font-serif text-charcoal font-semibold">180°</p>
                <p className="text-xs text-charcoal-light uppercase tracking-wider mt-0.5">Ocean Panorama</p>
              </div>
              <div>
                <p className="text-2xl font-serif text-charcoal font-semibold">100%</p>
                <p className="text-xs text-charcoal-light uppercase tracking-wider mt-0.5">Renewable Solar Powered</p>
              </div>
            </div>

            {/* Explore the Stay CTA */}
            <button
              onClick={onExploreStay}
              className="mt-8 group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-charcoal hover:bg-airbnb text-white text-sm font-bold tracking-wide shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <span>Explore the stay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
