import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary', // Default is 'primary'
  shape = 'default' // Default is 'default' shape
}) => {

  // 1. Base Styles (Applied to ALL buttons)
  // Layout, Padding, Animation, Rounded corners
  const baseStyles = "font-medium text-sm py-3 px-6 transition-all duration-300 active:scale-95 flex items-center justify-center text-center";

   // 2. Shape Styles (Choose between normal edges or pill edges)
  const shapeStyles = {
    default: "rounded-lg",
    pill: "rounded-full",
    square: "rounded-none" // Just an example of how easy it is to add more later!
  };

  // 3. Variants (Color/Border definitions)
  const variantStyles = {
    // Solid Green (Your original style)
    primary: "bg-iroko text-white hover:bg-iroko-hover active:bg-iroko-pressed shadow-md hover:shadow-lg",

    // Yellow Background Button 
    latest: "bg-[#CFCA11] text-black hover:bg-[#CFCA11] hover:bg-white active:opacity-100 shadow-md hover:shadow-lg",
    
    // Bordered Green (Good for 'Learn More' or secondary actions)
    outlineGreen: "border-1 border-iroko text-iroko bg-transparent hover:bg-transparent hover:border-iroko-hover active:border-iroko-pressed active:text-iroko-pressed hover:text-iroko-hover shadow-sm",
    
    // Bordered latest(Iroko Amber Yellow)
    outlineAmber: "border-1 border-iroko text-iroko bg-transparent hover:bg-transparent hover:border-[#CFCA11] active:border-[#CFCA11] active:text-iroko hover:text-iroko-hover shadow-sm",

    // Bordered White
    outlineWhite: "border-1 border-gray-300 text-gray-300 bg-transparent hover:border-white hover:text-white shadow-sm",
    
    // White/Light (Good for dark backgrounds)
    secondary: "bg-white text-iroko hover:bg-gray-100 shadow-md",
    
    // Ghost (No background, just text - Good for 'Cancel')
    ghost: "bg-transparent text-black hover:bg-transparent shadow-none"
  };

  return (
    <button
      onClick={onClick}
      // Combine Base + Variant + Custom Classes
      className={`${baseStyles} ${shapeStyles[shape]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
