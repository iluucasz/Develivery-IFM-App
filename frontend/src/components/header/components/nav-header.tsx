'use client'
import { MdOutlineNotifications } from "react-icons/md";
import { PiGearSix } from "react-icons/pi";
import { CgClose, CgMenuGridO } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

export const NavHeader = ({ setShowMenuOptions, setShowDialogConfigUser }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState<boolean>(false)

  return (
    <nav className="relative flex items-center justify-between h-full w-full px-4 transition-all duration-1000">

      <div className="flex items-center gap-4">
        {/* Menu */}
        <Button className="bg-pink-900/20 h-12 w-12 lg:w-16 lg:h-16" onClick={() => setShowMenuOptions(true)}>
          <CgMenuGridO size={25} className="text-white lg:h-10 lg:w-12 " />
        </Button>

        {/* pesquisa */}
        <Button className="bg-pink-900/20 h-12 w-12 lg:w-16 lg:h-16" onClick={() => setShow(!show)}>
          <BsSearch size={20} className="text-white lg:h-10 lg:w-12" />
        </Button>
      </div>

      {/* notificação */}
      <div className="relative flex gap-4 items-center">
        <Button className="relative bg-pink-900/20 h-12 w-12 lg:w-16 lg:h-16" onClick={() => setIsOpen(!isOpen)}>
          <MdOutlineNotifications size={22} className="text-pink-white lg:h-10 lg:w-12" />
          <span className="absolute bottom-8 left-8 text-sm bg-slate-900/90 w-6 h-6 rounded-full">6</span>
        </Button>
        {isOpen && (
          <div className="absolute top-[85px] right-1 flex flex-col items-center py-4 gap-5 w-48 bg-white shadow-lg rounded-md">
            <div className="text-center font-semibold">Notificações</div>
            <div className="text-sm text-center">Você não possui nenhuma notificação.</div>
          </div>
        )}

        {/* configuração */}
        <div className="flex items-center">
          <div className="flex items-center justify-between px-4 bg-gray-200 rounded-full h-16 w-28 lg:w-36 lg:h-20">
            <h2 className="flex items-center justify-center rounded-full bg-rose-900/90 text-white text-sm h-10 w-10 lg:h-14 lg:w-14">LU</h2>
            <div onClick={() => { setShowDialogConfigUser(true) }} className="cursor-pointer hover:bg-rose-900/20 rounded-full">
              <PiGearSix size={30} className="text-pink-900/90 lg:h-10 lg:w-12" />
            </div>
          </div>
        </div>
      </div>

      {
        // Toggle procurar
        show ? (
          <div className="absolute flex items-center h-24 w-38 max-w-full px-2 bg-white z-50 transition-all duration-1000 lg:w-2/4">
            <input type="email" placeholder="Procurar" className="w-full h-14 px-14 text-lg border-2 border-gray-300 rounded-md lg:h-16" />
            <BsSearch size={20} className="absolute left-6 top-[38px] text-pink-900" />
            <button className="absolute right-20 h-10 w-10 flex justify-center items-center bg-transparent" onClick={() => { /* Logic to open filter */ }}>
              <IoFilterSharp size={20} className="text-pink-900" />
            </button>
            <button className="absolute right-6 h-10 w-10 flex justify-center items-center bg-pink-900/20 rounded-full" onClick={() => setShow(!show)}>
              <CgClose size={20} className="text-pink-900" />
            </button>
          </div>
        ) : null
      }
    </nav>
  )
}