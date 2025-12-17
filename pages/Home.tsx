import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';

export const Home: React.FC = () => {
  return (
    <main className="container mx-auto px-4 max-w-6xl space-y-24 pb-24">
      <Hero />
      <Features />
    </main>
  );
};
