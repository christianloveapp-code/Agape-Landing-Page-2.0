import React from 'react';
import { ButtonProps } from '../../types';

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-heading text-xl px-8 py-3 rounded-2xl border-[3px] border-ink transition-all duration-200 transform hover:-translate-y-1 hover:shadow-neo-hover active:translate-y-0 active:shadow-neo-active";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-primary text-white shadow-neo";
      break;
    case 'secondary':
      variantStyles = "bg-secondary text-white shadow-neo";
      break;
    case 'ghost':
      variantStyles = "bg-white text-ink shadow-neo hover:bg-gray-50";
      break;
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};