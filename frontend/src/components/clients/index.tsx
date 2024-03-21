import React from 'react'
import { ClientCard } from './client-card'
import { Button } from '../ui/button'
import { PiPlus } from 'react-icons/pi'

export const ClientPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-4'>
      <div className='flex flex-col items-center gap-6 min-w-[320px] w-full h-full min-h-[755px] mt-5 mx-2 bg-rose-900/80 rounded-lg'>
        <h1 className='text-2xl font-semibold rounded-l p-2 w-24 text-gray-200'>Clientes</h1>

        <Button className='flex items-center bg-rose-950 gap-2 h-10 w-2/4'>
          <PiPlus />
          <p>Criar Cliente</p>
        </Button>

        <div className='flex items-center'>
          <p className='bg-white p-2 rounded-l-sm text-md font-medium'>Total de clientes</p>
          <span className='text-slate-200 rounded-r-sm bg-black p-2'>22</span>
        </div>

        <div className='flex flex-col gap-2'>
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </div>
    </div>
  )
}
