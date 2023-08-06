import React from 'react';

interface ButtonProps {
  label: string;
  type: 'primary' | 'secondary';
  fullWidthOnMobile?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, type, fullWidthOnMobile = false }) => {
  let buttonClasses = "mt-2 py-3 px-6 text-base font-bold uppercase rounded shadow text-white";

  if (type === 'primary') {
    buttonClasses += " bg-red-600";
  } else if (type === 'secondary') {
    buttonClasses += " bg-black";
  }

  buttonClasses += fullWidthOnMobile ? ' w-full md:w-auto' : '';

  return (
    <button className={buttonClasses}>
      {label}
    </button>
  );
};
