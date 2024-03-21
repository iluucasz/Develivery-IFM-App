'use client'
import { useState } from "react";
import DialogMenuOptions from "./components/dialog-menu-options";
import { NavHeader } from "./components/nav-header";
import DialogConfigUser from "./components/dialog-config-user";

export const Header = () => {
  const [showMenuOptions, setShowMenuOptions] = useState(false)
  const [showDialogConfigUser, setShowDialogConfigUser] = useState(false)

  return (
    <header className="h-24 w-full bg-white shadow-black shadow-sm lg:h-32">
      <NavHeader setShowMenuOptions={setShowMenuOptions} setShowDialogConfigUser={setShowDialogConfigUser} />
      {
        showDialogConfigUser ? <DialogConfigUser setShowDialogConfigUser={setShowDialogConfigUser} /> : null
      }
      {
        showMenuOptions ? <DialogMenuOptions setShowMenuOptions={setShowMenuOptions} /> : null
      }
    </header >)
}


