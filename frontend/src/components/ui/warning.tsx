'use client';
import { Button } from "./button";


export const WarningPage = ({ setShowWarning }: any) => {

  return (
    <div className="fixed inset-0 z-50 top-0 left-0 w-full h-full bg-black rounded-b-sm shadow-xl">
      <div className="flex flex-col w-full h-full p-4 justify-evenly">
        <h2 className="text-red-500 text-center font-bold text-lg">Confirme se deseja realmente excluir...</h2>
        <div className="flex justify-between">
          <Button onClick={() => { setShowWarning(false) }} className="h-12 w-20 bg-white">
            <p className="text-black">Não</p>
          </Button>
          <Button onClick={() => { setShowWarning(false) }} className="h-12 w-20">
            <p>Sim</p>
          </Button>
        </div>
      </div>
    </div>
  )
}