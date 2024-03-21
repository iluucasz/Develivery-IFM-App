'use client'
import { PiPlus } from 'react-icons/pi';
import { Button } from '../ui/button';
import { FoodForm } from './components/food-form';
import { useState } from 'react';
import { FoodTodo } from './components/food-todo';

const FoodPage = () => {
  const [showFoodDialog, setShowFoodDialog] = useState(false);

  const showDialog = () => {
    setShowFoodDialog(!showFoodDialog);
    console.log(showFoodDialog);
  }

  return (
    <div className='flex flex-col justify-center items-center'>

      <div className='flex flex-col items-center gap-6 w-full h-full min-h-[755px] mt-5 mx-2 bg-rose-900/80 rounded-lg'>
        <h1 className='text-2xl font-semibold rounded-l p-2 w-24 text-gray-200'>Comida</h1>
        <Button className='flex items-center bg-rose-950 gap-2 h-10 w-2/4' onClick={showDialog}>
          <PiPlus />
          <p>Criar Comida</p>
        </Button>
        <div className='flex flex-col gap-6 h-[500px] overflow-auto'>
          <FoodTodo />
          <FoodTodo />
          <FoodTodo />
        </div>
      </div>
      {
        showFoodDialog ? <FoodForm setShowFoodDialog={setShowFoodDialog} name="Adicionar comida" /> : null
      }
    </div>
  )
}

export default FoodPage