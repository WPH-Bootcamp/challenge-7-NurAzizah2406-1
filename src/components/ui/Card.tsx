import React from 'react';
import type { CardProps } from '../../types';

const Card = ({ children, className = '', onClick }: CardProps) => {
  const isClickable = !!onClick;
  
  return (
    <div
      onClick={onClick}
      className={`bg-card rounded-2xl border border-slate-800/60 p-6 shadow-xl shadow-black/10 transition-all duration-300 ${
        isClickable
          ? 'cursor-pointer hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-slate-700/80'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
