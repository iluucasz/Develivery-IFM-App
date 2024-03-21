import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...rest }) => {
  const defaultClass = 'flex justify-center items-center max-w-full ma-h-full bg-rose-900/90 hover:bg-rose-800 text-white font-bold rounded-lg';
  const buttonClass = `${defaultClass} ${className}`;

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};
