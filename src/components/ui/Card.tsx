import React from 'react';
import type { CardProps } from '../../types';

const Card = ({ children, className = '', onClick }: CardProps) => {
  const isClickable = !!onClick;
  
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-card rounded-2xl border border-gray-250 dark:border-slate-800/60 p-6 shadow-md shadow-black/5 dark:shadow-xl dark:shadow-black/10 transition-all duration-300 ${
        isClickable
          ? 'cursor-pointer hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/40 dark:hover:border-slate-700/80'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
