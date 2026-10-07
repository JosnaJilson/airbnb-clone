import React from 'react';
import { 
  CheckCircle2, 
  Map, 
  Compass, 
  HeartHandshake
} from 'lucide-react';

export default function WhyNestora() {
  const features = [
    {
      icon: Compass,
      title: 'Curated stays',
      description: 'Every property is selected for character and quality, assessed for aesthetic distinction and comfort.',
      tag: '01 / Character'
    },
    {
      icon: Map,
      title: 'Beautiful destinations',
      description: 'Discover places worth travelling for—from remote alpine summits to vibrant historical quarters.',
      tag: '02 / Geography'
    },
    {
      icon: Compass,
      title: 'Designed for explorers',
      description: 'A simple, intuitive experience from initial discovery to instant seamless booking and arrival.',
      tag: '03 / Simplicity'
    },
    {
      icon: HeartHandshake,
      title: 'Trusted hosts',
      description: 'Connect with hosts who care about your stay, offering thoughtful local guidance and genuine warmth.',
      tag: '04 / Trust'
    }
  ];

  return (
    <section id="why-nestora" className="py-20 md:py-28 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-charcoal text-xs uppercase tracking-widest font-bold mb-4 shadow-soft-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-airbnb" />
            <span>The Airbnb Promise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal tracking-tight">
            Travel differently. Stay memorably.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted font-light leading-relaxed">
            We believe vacation rentals should inspire wonder, provide restorative stillness, and connect you with authentic local cultures.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group p-8 rounded-3xl bg-white border border-stone-200 shadow-soft-sm hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-stone-100 group-hover:bg-airbnb/10 flex items-center justify-center text-charcoal group-hover:text-airbnb transition-colors">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-charcoal-light">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-charcoal mb-3 group-hover:text-airbnb transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-charcoal-muted font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-charcoal-light group-hover:text-charcoal transition-colors">
                  <span>Verified Airbnb Standard</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-airbnb" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
