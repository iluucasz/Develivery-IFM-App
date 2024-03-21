import { Button } from '@/components/ui/button';
import React from 'react';

const configItems = [
  {
    title: "Configurações",
    options: [
      "Alterar nome",
      "Alterar senha",
      "Visualizar usuários"
    ]
  },
  {
    title: "Total de vendas",
    options: []
  }
];

const DialogConfigUser = ({ setShowDialogConfigUser }: any) => {

  const handleClose = () => {
    setShowDialogConfigUser(false);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50"></div>
        <div className="bg-white fixed left-0 top-0 h-full w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 p-6 shadow-xl overflow-y-auto">
          <div className="relative flex flex-col gap-6">
            <span className='absolute top-0 right-0 cursor-pointer' onClick={handleClose}>fechar</span>
            <div className='flex flex-col gap-2'>
              <h1 className="text-xl font-bold">Config. da conta</h1>
              <p>Lucas Santos | Entregador</p>
            </div>
            <div className="flex flex-col gap-4">
              {configItems.map((item, index) => (
                <div key={index} className='flex flex-col gap-12'>
                  <h2 className="text-xl mt-4 text-center">{item.title}:</h2>
                  {item.options.map((option, idx) => (
                    <Button key={idx} className="text-white py-2 rounded">{option}</Button>
                  ))}
                </div>
              ))}
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center justify-center w-28 h-28 bg-rose-900/85 rounded-full">
                  <h2 className="text-white text-md">32</h2>
                  <h2 className="text-white text-md">180 R$</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogConfigUser;
