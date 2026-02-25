import React from 'react';

const Button = ({ children, onClick, className = "" }) => {
  return (
       <button
      onClick={onClick}
      className={`
        bg-iroko text-white font-medium py-3 px-6 rounded-lg transition-all duration-300
        hover:bg-iroko-hover 
        active:bg-iroko-pressed active:scale-95
        shadow-md hover:shadow-lg
        ${className} 
      `}
    >
      {children}
    </button>
  )
}

export default Button;

