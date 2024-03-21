import React, { forwardRef } from "react";

interface InputProps {
  error?: { message: string };
  className?: string
  label: string
  placeHolder?: string
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(({ error, className = '', label, placeHolder, ...rest }, ref) => {
  const defaultClass = 'flex min-h-[60px] w-full rounded-md border border-input bg-gray-300 px-3 py-2 text-lg shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50';
  const inputClass = `${defaultClass} ${className}`;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <label htmlFor="id" className="text-lg font-medium">{label}</label>
      <input {...rest} ref={ref} className={inputClass} id="id" placeholder={placeHolder} />
      {error && <span className="w-full">{error.message}</span>}
    </div>
  );
});
