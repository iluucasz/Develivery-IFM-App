import { WarningPage } from "@/components/ui/warning";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { FaTrash, FaUsers } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { FoodForm } from "./food-form";

export const FoodTodo = () => {
  const [showMenuFood, setShowMenuFood] = useState(false)
  const [showWarning, setShowWarning] = useState(false);
  const [showFoodDialog, setShowFoodDialog] = useState(false);

  return (
    <>
      <div className="relative flex flex-col w-[320px] h-[350px] max-w-full p-4 bg-slate-300 gap-4 border-t-8 border-black rounded-b-md">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg">Picanha</h1>
          <button className="flex items-center justify-center h-6 w-10 rounded-sm" onClick={() => { setShowMenuFood(!showMenuFood) }}>
            {
              showMenuFood ? <CgClose /> : <BsThreeDotsVertical size={20} />
            }
          </button>
        </div>
        <div className="flex flex-col gap-4 bg-slate-200 h-full w-full p-2 rounded-xl">
          <div className="flex justify-between">
            <span className="p-1 text-md font-medium rounded-sm text-center capitalize">clíssia</span>
            <span className="p-1 text-md font-bold rounded-sm text-center capitalize">16 R$</span>
          </div>
          <div className="bg-gray-300 w-full h-1"></div>
          <p className="overflow-auto h-24 text-lg">Arroz, Feijão, Farofa, dois pedaços de picanha na brasa, molho.</p>
          <div className="bg-gray-300 w-full h-1"></div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-slate-400 rounded-sm p-2">
              <FaUsers size={20} />
              <span>22</span>
            </div>
            <div className="flex items-center gap-2 rounded-sm p-2">
              <div className="flex gap-2 items-center text-base">
                <p>Vendidos:</p>
                <span className="font-bold">22</span>
              </div>
            </div>
          </div>
        </div>

        {/* MOLDAL DE EDITAR / EXCLUIR */}
        {
          showMenuFood ? <div className="absolute right-9 top-10 flex flex-col p-2 gap-4 rounded-b-sm rounded-l-sm bg-black text-slate-200 z-20">
            <button className="flex items-center gap-2 bg-rose-900 rounded-sm p-2 hover:bg-rose-900/50" onClick={() => { setShowMenuFood(false), setShowFoodDialog(true) }}>
              <MdModeEditOutline />
              <p>Editar</p>
            </button>
            <div className="bg-white h-[1px]"></div>
            <button className="flex items-center gap-2 bg-rose-900 rounded-sm p-2 hover:bg-rose-900/50" onClick={() => { setShowMenuFood(false), setShowWarning(true) }}>
              <FaTrash />
              <p>Excluir</p>
            </button>
          </div> : null
        }

        {
          showWarning ? <WarningPage setShowWarning={setShowWarning} /> : null
        }
      </div>
      {
        showFoodDialog ? <FoodForm setShowFoodDialog={setShowFoodDialog} name="Atualizar comida" /> : null
      }
    </>
  )
}