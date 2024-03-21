import React from 'react'
import FoodPage from '../food'
import { ClientPage } from '../clients'

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center min-h-screen h-full rounded-lg bg-rose-900/50 mx-2 mt-5'>
      <FoodPage />
      <ClientPage />
    </div>
  )
}

export default Dashboard