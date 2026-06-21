import React from 'react';
import type { ButtonProps } from '../../types';

const Button = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg px-5 py-2.5 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-sm shadow-primary/20 hover:shadow-md hover:shadow-primary/30',
    secondary: 'bg-secondary text-white hover:bg-secondary-hover shadow-sm shadow-secondary/20 hover:shadow-md hover:shadow-secondary/30',
    outline: 'border border-primary/25 text-primary bg-transparent hover:bg-primary/5 hover:border-primary',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
