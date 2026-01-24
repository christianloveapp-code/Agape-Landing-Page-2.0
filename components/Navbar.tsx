import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 py-4 px-4 bg-cream/90 backdrop-blur-sm border-b-[3px] border-ink">
      <div className="container mx-auto max-w-6xl flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          {/* Custom Logo: Heart with Cross */}
          <div className="relative w-12 h-12 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Agape Logo"
              className="w-full h-full object-contain"
              style={{ filter: 'drop-shadow(4px 4px 0px #1a1a1a)' }}
            />
          </div>
          <span className="font-heading text-3xl tracking-wide mt-1">Agape</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/about" className="font-heading text-lg hover:text-primary hover:underline decoration-wavy decoration-2 underline-offset-4 transition-all">About Us</Link>
          <Link to="/faq" className="font-heading text-lg hover:text-primary hover:underline decoration-wavy decoration-2 underline-offset-4 transition-all">FAQ</Link>
          <Link to="/help" className="font-heading text-lg hover:text-primary hover:underline decoration-wavy decoration-2 underline-offset-4 transition-all">Help</Link>

        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 border-[3px] border-ink rounded-lg bg-white shadow-[2px_2px_0px_#1a1a1a] active:translate-y-1 active:shadow-none transition-all">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream border-b-[3px] border-ink p-6 flex flex-col gap-4 shadow-xl">
          <Link to="/about" className="font-heading text-xl text-center" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/faq" className="font-heading text-xl text-center" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/help" className="font-heading text-xl text-center" onClick={() => setIsOpen(false)}>Help</Link>

        </div>
      )}
    </nav>
  );
};