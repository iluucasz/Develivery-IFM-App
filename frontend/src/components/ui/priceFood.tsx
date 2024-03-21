import React, { useState } from 'react';
import { Button } from './button';

type TPriceFood = {
  onChange: (newValue: number) => void,
  label: string
}

export const PriceFood = ({ onChange, label }: TPriceFood) => {
  const [count, setCount] = useState(12);

  const updateCount = (newCount: number) => {
    setCount(newCount);
    onChange(newCount);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <label htmlFor="id" className="text-lg font-medium">{label}</label>
      <div className='flex gap-2 bg-rose-900/50 rounded-lg'>
        <Button type="button" className='h-10 w-10' onClick={() => updateCount(count >= 1 ? count - 1 : 0)}>
          <span>-</span>
        </Button>
        <div className="flex items-center">
          <span className="text-lg font-semibold" id='id'>
            {count} R$
          </span>
        </div>
        <Button type="button" className='h-10 w-10' onClick={() => { updateCount(count <= 29 ? count + 1 : count) }}>
          <span>+</span>
        </Button>
      </div>
    </div>
  );
};
