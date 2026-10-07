import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CallToAction({ onStartExploring }) {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2400&q=85"
          alt="Luxury alpine escape"
          className="w-full h-full object-cover object-center filter brightness-[0.72] scale-105"
        />
        <div className="absolute inset-0 bg-charcoal-deep/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-transparent to-charcoal-deep/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs uppercase tracking-widest font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Belong Anywhere with Airbnb</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight">
          Your next escape is closer than you think.
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-stone-200 max-w-xl mx-auto font-light leading-relaxed">
          “Find a stay that turns a trip into a memory.”
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartExploring}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#FF385C] to-[#E00B41] hover:from-[#E00B41] hover:to-[#D70466] text-white font-bold text-base shadow-soft-xl hover:shadow-soft transition-all duration-300"
          >
            <span>Start exploring</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </section>
  );
}
