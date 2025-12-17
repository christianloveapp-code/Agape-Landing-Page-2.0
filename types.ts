import { ReactNode } from 'react';

export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  href?: string;
}

export interface CardProps extends BaseProps {
  rotate?: 'left' | 'right' | 'none';
  bgColor?: string;
}
