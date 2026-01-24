import React from 'react';
import { Heart, Sparkles, Apple, Play } from 'lucide-react';
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
        <div className="absolute top-10 -right-4 w-24 h-24 bg-secondary rounded-full border-[3px] border-ink z-0 animate-bounce delay-700"></div>
        <div className="absolute -bottom-6 -left-6 w-full h-full bg-ink rounded-[40px] transform rotate-3 z-0"></div>

        {/* Phone Frame */}
        <div className="relative bg-white border-[4px] border-ink rounded-[36px] overflow-hidden shadow-neo z-10">
          {/* Notch area */}
          <div className="bg-cream h-12 border-b-[3px] border-ink flex items-center justify-center px-6">
            <div className="w-16 h-4 bg-ink rounded-full opacity-20"></div>
          </div>

          {/* Screen Content */}
          <div className="p-6 bg-cream min-h-[400px] flex flex-col items-center">

            {/* Match Card */}
            <div className="w-full bg-white border-[3px] border-ink rounded-2xl overflow-hidden shadow-[4px_4px_0px_#1a1a1a] mb-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="h-48 bg-gray-200 border-b-[3px] border-ink relative">
                <img src="https://picsum.photos/400/300?random=10" alt="Match" className="w-full h-full object-cover" />
                <div className="absolute bottom-2 right-2 bg-white px-2 py-1 border-[2px] border-ink rounded-lg font-heading text-sm">
                  24, Graphic Designer
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-heading text-xl">Grace, 24</h3>
                <p className="font-body text-lg leading-tight mt-1">"Love hiking and coffee shops. Looking for someone to share Sunday service with."</p>

                <div className="flex gap-2 mt-3 flex-wrap">
                  <span className="bg-secondary/30 px-2 py-1 rounded-md border-[2px] border-ink text-xs font-bold">Worship Leader</span>
                  <span className="bg-highlight/30 px-2 py-1 rounded-md border-[2px] border-ink text-xs font-bold">Coffee</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 w-full justify-center">
              <button className="w-14 h-14 bg-white border-[3px] border-ink rounded-full flex items-center justify-center shadow-[3px_3px_0px_#1a1a1a] hover:bg-gray-100 transition-colors">
                <span className="font-heading text-2xl">X</span>
              </button>
              <button className="w-14 h-14 bg-primary border-[3px] border-ink rounded-full flex items-center justify-center shadow-[3px_3px_0px_#1a1a1a] hover:translate-y-1 hover:shadow-none transition-all">
                <Heart fill="white" stroke="white" size={28} />
              </button>
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