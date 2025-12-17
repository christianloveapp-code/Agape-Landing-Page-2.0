import React from 'react';
import { CardProps } from '../../types';

export const Card: React.FC<CardProps> = ({ 
  children, 
  rotate = 'none', 
  bgColor = 'bg-white', 
  className = '' 
}) => {
  let rotationClass = "";
  if (rotate === 'left') rotationClass = "-rotate-1 md:-rotate-2 hover:rotate-0";
  if (rotate === 'right') rotationClass = "rotate-1 md:rotate-2 hover:rotate-0";

  return (
    <div className={`
      relative 
      ${bgColor} 
      border-[3px] 
      border-ink 
      rounded-[24px] 
      shadow-neo 
      p-6 
      transition-transform 
      duration-300 
      ${rotationClass} 
      ${className}
    `}>
      {children}
    </div>
  );
};