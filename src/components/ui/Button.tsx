
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  isLoading,
  fullWidth,
  disabled,
  ...props
}: ButtonProps) => {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all button-hover focus:outline-none disabled:opacity-60 disabled:pointer-events-none";
  
  // Variant classes
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border hover:border-foreground bg-transparent text-foreground",
    ghost: "bg-transparent text-foreground hover:bg-secondary",
    link: "bg-transparent text-primary hover:underline p-0 h-auto"
  };
  
  // Size classes
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 h-8",
    md: "text-sm px-4 py-2 h-10",
    lg: "text-base px-6 py-2.5 h-12"
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          ></circle>
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : iconLeft ? (
        <span className="mr-2">{iconLeft}</span>
      ) : null}
      
      {children}
      
      {!isLoading && iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
