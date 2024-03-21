'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: "Food",
    items: [
      "Criar comida",
      "Visualizar as comidas",
      "Deletar comida",
      "Atualizar informações da comida"
    ]
  },
  {
    title: "Clientes",
    items: [
      "Criar cliente",
      "Visualizar os clientes",
      "Deletar cliente",
      "Atualizar informações do cliente"
    ]
  },
  {
    title: "Status",
    items: [
      "Visualizar status da entrega",
      "Endereços entregues",
      "Atualizar status da entrega"
    ]
  },
  {
    title: "Finanças",
    items: [
      "Total vendido",
      "Clientes que pagaram",
      "Meta de vendas",
      "Formas de pagamento"
    ]
  }
];

const DialogMenuOptions = ({ setShowMenuOptions }: any) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClose = () => {
    setOpenIndex(null);
    setShowMenuOptions(false);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <div className="bg-white fixed inset-y-0 left-0 w-3/4 p-6 shadow-xl overflow-y-auto">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Menu</h1>
              <button
                className="focus:outline-none"
                onClick={handleClose}
              >
                <p className='flex items-center justify-center font-normal w-16 px-2 border-b-2 border-black'>fechar</p>
              </button>
            </div>
            <p className="text-sm font-normal text-gray-500">Delivery IFM App</p>
            <div>
              {menuItems.map((menu, index) => (
                <div key={index} className="rounded-sm bg-rose-800/60 shadow-lg shadow-rose-900/40 mt-8">
                  <button className="w-full p-4 text-left text-md font-semibold text-gray-900 focus:outline-none" onClick={() => toggleAccordion(index)}>
                    {menu.title}
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4">
                      {menu.items.map((item, i) => (
                        <Button key={i} className="w-full text-white py-2 rounded mt-2 text-sm">{item}</Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogMenuOptions;
