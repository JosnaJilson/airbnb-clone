import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, ArrowRight, Star, Bed } from 'lucide-react';

export default function AIConciergeModal({ 
  isOpen, 
  onClose, 
  properties, 
  onSelectProperty,
  currency = 'INR' 
}) {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello! I am your Airbnb Concierge. Tell me your travel dream—mention your preferred destination, scenery (beach, snow, forest), budget, or group size—and I will match the perfect sanctuary.'
    }
  ]);
  const [recommended, setRecommended] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userText = prompt;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setPrompt('');
    setIsTyping(true);

    setTimeout(() => {
      const q = userText.toLowerCase();
      let matches = properties.filter((p) => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          p.country.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      });

      if (matches.length === 0) {
        if (q.includes('beach') || q.includes('sea') || q.includes('ocean')) {
          matches = properties.filter(p => p.categories.includes('Beach'));
        } else if (q.includes('mountain') || q.includes('snow') || q.includes('ski')) {
          matches = properties.filter(p => p.categories.includes('Mountains'));
        } else if (q.includes('cheap') || q.includes('budget') || q.includes('under')) {
          matches = [...properties].sort((a, b) => a.price - b.price).slice(0, 3);
        } else {
          matches = properties.slice(0, 3);
        }
      }

      setRecommended(matches.slice(0, 2));
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `I have hand-selected ${matches.length > 1 ? `${matches.length} incredible stays` : 'this exceptional stay'} tailored to your wish:`
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  const samplePrompts = [
    'Private oceanfront villa in Bali with pool',
    'Mountain chalet in the Swiss Alps with Matterhorn view',
    'Forest eco-cabin in Kerala under ₹15,000'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-4xl shadow-soft-xl border border-stone-200 overflow-hidden flex flex-col h-[600px]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 bg-stone-50 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-airbnb text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-charcoal text-sm">Airbnb AI Concierge</h3>
              <p className="text-[11px] text-charcoal-muted">Natural Language Stay Discovery</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200/60 text-charcoal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Stream */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-7 h-7 rounded-full bg-airbnb text-white flex items-center justify-center flex-shrink-0 text-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-charcoal text-white rounded-br-xs'
                    : 'bg-stone-100 text-charcoal rounded-bl-xs'
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-charcoal-light">
              <div className="w-2 h-2 rounded-full bg-airbnb animate-ping" />
              <span>Concierge is searching global stays...</span>
            </div>
          )}

          {/* AI Recommended Cards */}
          {recommended.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {recommended.map((prop) => (
                <div
                  key={prop.id}
                  onClick={() => { onSelectProperty(prop); onClose(); }}
                  className="p-3 rounded-2xl border border-stone-200 hover:border-airbnb hover:shadow-soft transition-all cursor-pointer bg-white group"
                >
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-28 object-cover rounded-xl mb-2"
                  />
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-charcoal-muted truncate">{prop.location}</span>
                    <span className="flex items-center gap-0.5 font-bold">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      {prop.rating}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-medium text-charcoal group-hover:text-airbnb truncate">
                    {prop.title}
                  </h4>
                  <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-charcoal">
                    <span>₹{prop.price.toLocaleString('en-IN')}/night</span>
                    <span className="text-airbnb flex items-center gap-1 group-hover:underline">
                      Reserve →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Sample Prompts */}
        <div className="px-6 py-2 border-t border-stone-100 bg-stone-50 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] text-charcoal-light font-medium flex-shrink-0">Suggestions:</span>
          {samplePrompts.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setPrompt(s)}
              className="text-[11px] bg-white border border-stone-200 px-2.5 py-1 rounded-full text-charcoal-muted hover:border-charcoal hover:text-charcoal whitespace-nowrap"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="p-4 border-t border-stone-200 bg-white flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask anything (e.g., Clifftop stay in Santorini for couples)..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 px-4 py-3 rounded-full border border-stone-300 focus:outline-none focus:border-airbnb text-sm"
          />
          <button
            type="submit"
            className="w-11 h-11 rounded-full bg-airbnb hover:bg-airbnb-hover text-white flex items-center justify-center transition-colors shadow-soft"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
}
