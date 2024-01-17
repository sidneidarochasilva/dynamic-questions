import { Menu, ChevronDown, CircleUserRound } from "lucide-react";
import Image from "next/image";


export default function HeaderComponent() {
  return (
    <div className="bg-slate-950 h-96 p-8 ">
      <div className="flex justify-between ">
        <div className="flex gap-3 items-center cursor-pointer">
          <Image
            alt="Menu Hamberguer"
            src="/menu.svg"
            width={24}
            height={24}
            className="hover:scale-105"
          />
          <Image
            className="hidden sm:block"
            alt="Logo"
            src="/logo.svg"
            width={126}
            height={20}
          />
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <CircleUserRound color="white" />
          <p className="text-white">Sidnei R. Silva</p>
          <Image
            className="hidden sm:block"
            alt="Arrow Down"
            src="/arrow-down.svg"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="p-10">
        <p className="text-zinc-200 text-xs">Pesquisa de Satisfação</p>
      </div>


    </div>
  )
} 