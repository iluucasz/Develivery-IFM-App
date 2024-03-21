import React from 'react'

export const ClientCard = () => {
  return (
    <div className='flex flex-col gap-4 h-[150px] bg-slate-200 rounded-r-[6px] border-l-8 border-yellow-600 mx-2 p-2 shadow-xl'>
      <div className='flex items-center justify-between'>
        <h3 className='text-lg font-medium'>Luh</h3>
        <p>Preparando...</p>
      </div>
      <p className='w-full h-full text-sm overflow-auto'>
        quero sem molho, apenas uma carne, sem feijão e sem arroz
      </p>
      <div className='flex justify-between items-center'>
        <p className='font-bold'>Picanha</p>
        <button className='bg-slate-500 rounded-sm p-2 text-sm font-medium'>Ver cliente</button>
      </div>
    </div>
  )
}

{/* <p>Endereço da pessoa</p>
      <p>Quantidade</p> */}

{/* <p>Pagou?</p> */ }
{/* <p>forma de pagamento</p> */ }
{/* <p>Total a pagar</p> */ }
