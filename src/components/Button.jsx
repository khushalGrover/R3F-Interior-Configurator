// Button.jsx
import React from 'react';

const Button = ({ children, size, variant, onClick }) => {
  // Determine the Tailwind CSS classes based on size and variant props
  let classes = 'py-2 px-4 m-2 mx-1 rounded';
  if (size === 'lg') {
    classes += ' text-lg';
  }
  if (variant === 'outline') {
    classes += ' border border-gray-400 text-gray-700';
  } 
  if (variant === 'primary'){
    classes += ' bg-blue-700 text-white border border-gray-700';
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;