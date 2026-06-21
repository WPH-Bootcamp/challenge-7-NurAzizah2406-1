import React from 'react';
import { CardProps } from '../../types';

const Card = ({ children, className = '', onClick }: CardProps) => {
  const isClickable = !!onClick;
  
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl border border-slate-100 p-6 shadow-sm transition-all duration-300 ${
        isClickable
          ? 'cursor-pointer hover:shadow-md hover:-translate-y-1 hover:border-slate-200'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
