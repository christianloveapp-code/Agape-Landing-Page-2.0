import React from 'react';
import { Card } from './ui/Card';
import { Shield, Users, BookOpen, Quote } from 'lucide-react';

const FeatureItem: React.FC<{ title: string; description: string; icon: React.ReactNode; color: string; rotate: 'left' | 'right' | 'none' }> = ({ title, description, icon, color, rotate }) => (
  <Card rotate={rotate} className="flex flex-col items-center text-center gap-4 h-full">
    <div className={`w-16 h-16 rounded-full ${color} border-[3px] border-ink flex items-center justify-center shadow-[2px_2px_0px_#1a1a1a]`}>
      {icon}
    </div>
    <h3 className="font-heading text-2xl mt-2">{title}</h3>
    <p className="font-body text-xl text-gray-700 leading-snug">{description}</p>
  </Card>
);

export const Features: React.FC = () => {
  return (
    <section className="py-12 relative">
      
      {/* Scripture Banner */}
      <div className="mb-20 flex justify-center">
        <div className="relative max-w-2xl w-full mx-4">
          {/* Tape Effect */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-secondary/80 border-[2px] border-ink rotate-2 z-20"></div>
          
          <Card bgColor="bg-white" rotate="right" className="p-8 md:p-12 text-center">
             <Quote size={40} className="mx-auto mb-4 text-primary fill-current opacity-20" />
             <p className="font-heading text-2xl md:text-3xl leading-relaxed">
               "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh."
             </p>
             <p className="font-body font-bold text-xl mt-4 text-gray-500">- Genesis 2:24</p>
          </Card>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl mb-4">Why Agape?</h2>
        <p className="font-body text-2xl">Built for relationship, grounded in faith.</p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-2">
        <FeatureItem 
          title="Faith-Centered" 
          description="Matching algorithms that prioritize your spiritual values and denomination preferences."
          icon={<BookOpen size={32} strokeWidth={2.5} />}
          color="bg-secondary"
          rotate="left"
        />
        <FeatureItem 
          title="Safe Community" 
          description="Verified profiles and community guidelines that foster respect and genuine intention."
          icon={<Shield size={32} strokeWidth={2.5} />}
          color="bg-primary"
          rotate="none"
        />
        <FeatureItem 
          title="Intentional Dating" 
          description="Designed for those seeking marriage. No casual swiping, just meaningful connection."
          icon={<Users size={32} strokeWidth={2.5} />}
          color="bg-highlight"
          rotate="right"
        />
      </div>

    </section>
  );
};