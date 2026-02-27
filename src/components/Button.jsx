import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary' // Default is 'primary' if you don't specify
}) => {

  // 1. Base Styles (Applied to ALL buttons)
  // Layout, Padding, Animation, Rounded corners
  const baseStyles = "font-medium py-3 px-6 rounded-lg transition-all duration-300 active:scale-95 flex items-center justify-center";

  // 2. Variants (Color/Border definitions)
  const variantStyles = {
    // Solid Green (Your original style)
    primary: "bg-iroko text-white hover:bg-iroko-hover active:bg-iroko-pressed shadow-md hover:shadow-lg",
    
    // Bordered Green (Good for 'Learn More' or secondary actions)
    outline: "border-2 border-iroko text-iroko bg-transparent hover:bg-iroko hover:text-white shadow-sm",
    
    // White/Light (Good for dark backgrounds)
    secondary: "bg-white text-iroko hover:bg-gray-100 shadow-md",
    
    // Ghost (No background, just text - Good for 'Cancel')
    ghost: "bg-transparent text-iroko hover:bg-iroko/10 shadow-none"
  };

  return (
    <button
      onClick={onClick}
      // Combine Base + Variant + Custom Classes
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
