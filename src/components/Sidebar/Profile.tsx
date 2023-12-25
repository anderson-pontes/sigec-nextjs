import { LogOut } from "lucide-react";

export function Profile(){
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img src="https://github.com/anderson-pontes.png" className="w-10 h-10 rounded-full" />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Anderson Pontes</span>
        <span className="text-sm truncate text-zinc-500">anderson.pontes@pge.pa.gov.br</span>
      </div>
      <button type="button" className=" group ml-auto rounded-md p-2 hover:bg-red-50">
        <LogOut className="w-5 h-5 text-zinc-500 group-hover:text-red-600"  />
      </button>
    </div>
  )
}