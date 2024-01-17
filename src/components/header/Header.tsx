import { Menu, ChevronDown, CircleUserRound } from "lucide-react";


export default function HeaderComponent() {
  return (
    <div className="bg-slate-950 h-96 p-8 ">
      <div className="flex justify-between ">
        <div className="flex gap-3 items-center cursor-pointer">
          <Menu color="white" />
          <h1 className="text-white text-2xl">LOGO</h1>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <CircleUserRound color="white" />
          <p className="text-white">Sidnei R. Silva</p>
          <ChevronDown className="text-white" />
        </div>
      </div>
      <div className="p-10">
      <p className="text-zinc-200 text-xs">Pesquisa de Satisfação</p>
      </div>
   

    </div>
  )
} 