'use client'
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { CgClose, CgMenuGridO } from "react-icons/cg";
import { IoFilterSharp } from "react-icons/io5";
import { MdOutlineNotifications } from "react-icons/md";
import { PiGearSix } from "react-icons/pi";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Separator } from "../ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

export const Header = () => {

  const [show, setShow] = useState<boolean>(false)

  return (
    <header className="h-24 w-full bg-white">

      {
        !show ? <TooltipProvider>
          <div className="h-full w-full flex justify-between px-4 transition-all duration-1000">
            <div className="flex items-center gap-4">
              <Tooltip>
                <TooltipTrigger asChild>

                  {/* Primary Menu App */}
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size={"sm"} className="bg-pink-900/20 h-10 w-10">
                        <CgMenuGridO size={25} className="text-pink-900" />
                      </Button>
                    </SheetTrigger>

                    <SheetContent side={"left"}>
                      <SheetHeader>
                        <SheetTitle className="text-slate-900">Menu</SheetTitle>
                        <SheetDescription>
                          <p>Delivery IFM App</p>
                        </SheetDescription>
                      </SheetHeader>
                      <Separator className="my-4" />

                      {/* Acordion Menu - options menu */}
                      <Accordion type="single" collapsible className="w-full flex flex-col gap-9">

                        <AccordionItem value="item-1" className="rounded-sm bg-rose-800/60 p-4 shadow-xl text-xl">
                          <AccordionTrigger className="flex items-center justify-between text-md text-gray-900">Food</AccordionTrigger>
                          <AccordionContent>
                            <Button>
                              Criar comida
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Visualizar as comidas
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Deletar comida
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Atualizar informações da comida
                            </Button>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="rounded-sm bg-rose-800/60 p-4 shadow-xl text-xl">
                          <AccordionTrigger className="flex items-center justify-between text-md text-gray-900">Clientes</AccordionTrigger>
                          <AccordionContent>
                            <Button>
                              Criar cliente
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Visualizar os clientes
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Deletar cliente
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Atualizar informações do cliente
                            </Button>
                          </AccordionContent>
                        </AccordionItem>


                        <AccordionItem value="item-3" className="rounded-sm bg-rose-800/60 p-4 shadow-xl text-xl">
                          <AccordionTrigger className="flex items-center justify-between text-md text-gray-900">Status</AccordionTrigger>
                          <AccordionContent>
                            <Button>
                              Visualizar status da entrega
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Endereços entregues
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Atualizar status da entrega
                            </Button>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="rounded-sm bg-rose-800/60 p-4 shadow-xl text-xl">
                          <AccordionTrigger className="flex items-center justify-between text-md text-gray-900">Finanças</AccordionTrigger>
                          <AccordionContent>
                            <Button>
                              Total vendido
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Clientes que pagaram
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Meta de vendas
                            </Button>
                          </AccordionContent>
                          <AccordionContent>
                            <Button>
                              Formas de pagamento
                            </Button>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </SheetContent>
                  </Sheet>

                </TooltipTrigger>
                <TooltipContent>
                  <p>Menu</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size={"sm"} className="bg-pink-900/20 h-10 w-10" onClick={() => { setShow(!show) }}>
                    <BsSearch size={20} className="text-pink-900" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Procurar</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex items-center gap-6">
              <Tooltip>
                <TooltipContent>
                  <p>Notificação</p>
                </TooltipContent>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-pink-900/20 h-10 w-20">
                        <MdOutlineNotifications size={22} className="text-pink-900" />
                        <span className="absolute bottom-6 right-0 rounded-full h-6 w-6 bg-rose-800 text-slate-200">6</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="flex flex-col items-center py-4 gap-5 w-48">
                        <NavigationMenuLink className="text-center">Notificações</NavigationMenuLink>
                        <NavigationMenuLink className="text-sm text-center">Você não possui nenhuma notificação.</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </Tooltip >

              {/* USER MENU */}
              <Sheet>
                <SheetTrigger className="flex items-center justify-center h-12 w-24 bg-gray-400 rounded-3xl">
                  <Avatar>
                    <AvatarImage />
                    <AvatarFallback>LU</AvatarFallback>
                  </Avatar>
                  <Button variant="ghost" size={"sm"}>
                    <PiGearSix size={30} className="text-pink-900" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Configurações da conta</SheetTitle>
                    <SheetDescription>
                      Lucas Santos | Entregador
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col items-center mt-10 gap-8">
                    <h2 className="text-xl">Configuração</h2>
                    <Button>
                      Alterar nome
                    </Button>
                    <Button>
                      Alterar senha
                    </Button>
                    <Button>
                      Visualizar usuários
                    </Button>

                    <h2 className="text-xl">Status</h2>

                    <div className="flex flex-col items-center gap-4">
                      <h2 className="text-lg">Total de vendas:</h2>
                      <div className="flex flex-col items-center justify-center w-28 h-28 bg-rose-900/85 rounded-full">
                        <h2 className="text-white text-md">32</h2>
                        <h2 className="text-white text-md">180 R$</h2>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

            </div>
          </div>
        </TooltipProvider> : null
      }

      {
        // SEARCH BUTTOM
        show ? <div className="relative px-2 flex items-center h-24 w-full bg-white z-50 transition-all duration-1000">
          <Input type="email" placeholder="Procurar" className="w-full h-14 px-14 text-lg" />
          <BsSearch size={20} className="absolute left-6 top-[38px]" />
          <Button variant="ghost" size={"sm"} className="absolute right-24 h-10 w-10">
            <IoFilterSharp size={20} className=" text-pink-900" />
          </Button>
          <Button variant="ghost" size={"sm"} className="absolute right-12 bg-pink-900/20 h-10 w-10" onClick={() => { setShow(!show) }}>
            <CgClose size={20} className=" text-pink-900" />
          </Button>
        </div> : null
      }

    </header >)
}