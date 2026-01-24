import React from 'react';
import { Heart, Sparkles, Apple, Play, RotateCcw, X, Star } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="pt-12 md:pt-24 flex flex-col md:flex-row items-center gap-12 md:gap-20">

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left space-y-8 z-10 relative">
        {/* Coming Soon Sticker */}
        <div className="hidden md:block absolute -top-10 -right-4 bg-secondary text-white px-4 py-2 rotate-6 border-[3px] border-ink rounded-lg shadow-neo z-20 animate-pulse">
          <span className="font-heading text-xl">Coming 2026!</span>
        </div>

        <div className="relative inline-block">
          <span className="absolute -top-6 -right-8 text-highlight transform rotate-12">
            <Sparkles size={48} fill="#FFD32A" stroke="#1a1a1a" strokeWidth={2.5} />
          </span>
          <h1 className="font-heading text-5xl md:text-7xl leading-[1.1] mb-2">
            Find your <br />
            <span className="bg-highlight px-2 border-[3px] border-ink rounded-lg shadow-[4px_4px_0px_#1a1a1a] transform -rotate-2 inline-block mx-1">God-given</span>
            match.
          </h1>
        </div>

        <p className="font-body text-2xl md:text-3xl text-gray-800 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Agape Christian Dating is where faith meets intent. No swiping fatigue, just real connections.
        </p>

        <div className="space-y-8 pt-4">


          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="font-heading text-lg text-gray-500 transform -rotate-1">Available soon on:</p>
            <div className="flex gap-4">
              {/* App Store Badge */}
              <button className="flex items-center gap-3 bg-ink text-cream px-5 py-2 rounded-xl border-[3px] border-ink hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_#4ecdc4] active:translate-y-0 active:shadow-none transition-all duration-200">
                <Apple size={28} fill="#fff9f0" />
                <div className="text-left leading-none">
                  <div className="text-[10px] font-body font-bold tracking-wider opacity-90">Download on the</div>
                  <div className="font-heading text-lg mt-0.5">App Store</div>
                </div>
              </button>
              {/* Google Play Badge */}
              <button className="flex items-center gap-3 bg-ink text-cream px-5 py-2 rounded-xl border-[3px] border-ink hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_#FFD32A] active:translate-y-0 active:shadow-none transition-all duration-200">
                <Play size={26} fill="#fff9f0" className="ml-1" />
                <div className="text-left leading-none">
                  <div className="text-[10px] font-body font-bold tracking-wider opacity-90">GET IT ON</div>
                  <div className="font-heading text-lg mt-0.5">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex items-center justify-center md:justify-start gap-3">
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-[2.5px] border-ink bg-gray-200 overflow-hidden">
                <img src={`https://picsum.photos/100/100?random=${i}`} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <span className="font-body font-bold text-lg transform rotate-2">Join 2,000+ waiting believers!</span>
        </div>
      </div>

      {/* Visual / Phone Mockup */}
      <div className="flex-1 w-full max-w-md relative mt-12 md:mt-0">
        {/* Decorative elements behind phone */}


        {/* Phone Frame */}
        {/* Two Intertwined Phones */}
        <div className="relative w-full max-w-[600px] h-[600px] transform scale-90 sm:scale-100 md:scale-90">

          {/* Decorative Sparks/Hearts Background */}
          <div className="absolute top-0 right-10 text-secondary animate-bounce delay-1000">
            <Sparkles size={40} fill="currentColor" />
          </div>
          <div className="absolute bottom-20 left-0 text-highlight animate-pulse">
            <Heart size={30} fill="currentColor" />
          </div>

          {/* Phone 1 (Back/Left - Male Profile) */}
          <div className="absolute top-10 -left-4 sm:left-0 w-[280px] h-[520px] bg-cream border-[4px] border-ink rounded-[36px] overflow-hidden shadow-neo transform -rotate-12 z-10 flex flex-col">
            {/* Status Bar */}
            <div className="h-8 border-b-[3px] border-ink flex justify-between items-center px-4 bg-white flex-shrink-0">
              <Heart size={16} fill="#FF4757" className="text-primary" />
              <div className="flex gap-1">
                <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            {/* Filters Mockup */}
            <div className="p-3 border-b-[3px] border-ink flex gap-2 overflow-hidden bg-white flex-shrink-0">
              <div className="px-2 py-1 border-[2px] border-ink rounded-full text-[10px] font-bold">18-35</div>
              <div className="px-2 py-1 border-[2px] border-ink rounded-full text-[10px] font-bold">Quality Time</div>
              <div className="px-2 py-1 border-[2px] border-ink rounded-full text-[10px] font-bold">Pentecostal</div>
            </div>
            {/* Profile Image */}
            <div className="relative flex-grow bg-gray-200 min-h-0">
              <img src="/images/hero-sarah.jpg" alt="Female Profile" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="font-heading text-2xl">Sarah, 23</h3>
                <p className="font-body text-sm opacity-90">"I like to travel."</p>
              </div>
            </div>
            {/* Action Buttons Mockup */}
            <div className="p-4 flex justify-between gap-2 bg-white border-t-[3px] border-ink flex-shrink-0">
              <div className="w-12 h-12 rounded-full border-[3px] border-ink flex items-center justify-center bg-teal-100 shadow-[2px_2px_0px_#1a1a1a]"><RotateCcw size={20} className="text-teal-600" /></div>
              <div className="w-12 h-12 rounded-full border-[3px] border-ink flex items-center justify-center bg-gray-100 shadow-[2px_2px_0px_#1a1a1a]"><X size={24} className="text-gray-600" /></div>
              <div className="w-12 h-12 rounded-full border-[3px] border-ink flex items-center justify-center bg-highlight shadow-[2px_2px_0px_#1a1a1a]"><Star size={20} fill="white" className="text-white" /></div>
              <div className="w-12 h-12 rounded-full border-[3px] border-ink flex items-center justify-center bg-primary text-white shadow-[2px_2px_0px_#1a1a1a]"><Heart size={24} fill="white" /></div>
            </div>
          </div>

          {/* Central Connection Heart */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <Heart size={80} fill="#FF4757" stroke="#1a1a1a" strokeWidth={3} className="drop-shadow-[4px_4px_0px_#1a1a1a] animate-pulse" />
          </div>

          {/* Phone 2 (Front/Right - Female Profile) */}
          <div className="absolute top-24 -right-4 sm:right-0 w-[280px] h-[520px] bg-cream border-[4px] border-ink rounded-[36px] overflow-hidden shadow-neo transform rotate-12 z-20 flex flex-col">
            {/* Status Bar */}
            <div className="h-8 border-b-[3px] border-ink flex justify-between items-center px-4 bg-white flex-shrink-0">
              <Heart size={16} fill="#FF4757" className="text-primary" />
              <div className="flex gap-1">
                <div className="w-12 h-2 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            {/* Filters Mockup */}
            <div className="p-3 border-b-[3px] border-ink flex gap-2 overflow-hidden bg-white flex-shrink-0">
              <div className="px-2 py-1 border-[2px] border-ink rounded-full text-[10px] font-bold">21-30</div>
              <div className="px-2 py-1 border-[2px] border-ink rounded-full text-[10px] font-bold">Quality Time</div>
              <div className="px-2 py-1 border-[2px] border-ink rounded-full text-[10px] font-bold">Baptist</div>
            </div>
            {/* Profile Image */}
            <div className="relative flex-grow bg-gray-200 min-h-0">
              <img src="/images/hero-jack.jpg" alt="Male Profile" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h3 className="font-heading text-2xl">Jack, 25</h3>
                <p className="font-body text-sm opacity-90">"I love Jesus"</p>
              </div>
            </div>
            {/* Action Buttons Mockup */}
            <div className="p-4 flex justify-between gap-2 bg-white border-t-[3px] border-ink flex-shrink-0">
              <div className="w-12 h-12 rounded-full border-[3px] border-ink flex items-center justify-center bg-teal-100 shadow-[2px_2px_0px_#1a1a1a]"><RotateCcw size={20} className="text-teal-600" /></div>
              <div className="w-12 h-12 rounded-full border-[3px] border-ink flex items-center justify-center bg-gray-100 shadow-[2px_2px_0px_#1a1a1a]"><X size={24} className="text-gray-600" /></div>
              <div className="w-12 h-12 rounded-full border-[3px] border-ink flex items-center justify-center bg-highlight shadow-[2px_2px_0px_#1a1a1a]"><Star size={20} fill="white" className="text-white" /></div>
              <div className="w-12 h-12 rounded-full border-[3px] border-ink flex items-center justify-center bg-primary text-white shadow-[2px_2px_0px_#1a1a1a]"><Heart size={24} fill="white" /></div>
            </div>
          </div>

        </div>

        {/* Floating Sticker */}
        <div className="absolute -bottom-10 -right-8 bg-highlight px-4 py-2 border-[3px] border-ink rounded-lg shadow-neo transform -rotate-6 z-20">
          <span className="font-heading text-xl">It's a match!</span>
        </div>
      </div>
    </section>
  );
};