import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-[3px] border-ink py-12 mt-12 relative overflow-hidden">
      {/* Decorative squiggle */}
      <div className="absolute top-0 left-0 w-full h-2 bg-secondary" style={{ backgroundImage: 'linear-gradient(45deg, #1a1a1a 25%, transparent 25%, transparent 50%, #1a1a1a 50%, #1a1a1a 75%, transparent 75%, transparent)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="text-center md:text-left">
          <h2 className="font-heading text-3xl mb-2">Agape</h2>
          <p className="font-body text-lg text-gray-600">Launching Kingdom marriages in 2026.</p>
        </div>

        <div className="flex gap-6">
          <Link to="/privacy" className="font-body text-lg font-bold hover:text-primary underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary transition-all">Privacy Policy</Link>
          <Link to="/terms" className="font-body text-lg font-bold hover:text-primary underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary transition-all">Terms of Service</Link>
          <Link to="/help" className="font-body text-lg font-bold hover:text-primary underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary transition-all">Help</Link>
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 border-[2.5px] border-ink rounded-lg flex items-center justify-center hover:bg-highlight hover:shadow-neo transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-10 h-10 border-[2.5px] border-ink rounded-lg flex items-center justify-center hover:bg-secondary hover:shadow-neo transition-all">
            <Twitter size={20} />
          </a>
          <a href="#" className="w-10 h-10 border-[2.5px] border-ink rounded-lg flex items-center justify-center hover:bg-primary hover:shadow-neo transition-all">
            <Facebook size={20} />
          </a>
        </div>

      </div>

      <div className="text-center mt-12 font-body text-gray-500">
        &copy; 2026 Agape Christian Dating. Coming soon to App Store & Google Play.
      </div>
    </footer>
  );
};