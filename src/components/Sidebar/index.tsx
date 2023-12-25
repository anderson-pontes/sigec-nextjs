import { Logo } from './Logo';
import { BarChart, CheckSquare, Cog, FileStack, Home, LifeBuoy, Users, Search } from 'lucide-react';
import { NavItem } from './NavItem';
import { Profile } from './Profile';
import { InputControl, InputPrefix, InputRoot } from '../Input';

export function Sidebar() {
  return (
    <aside className=" flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
    <Logo />

    <InputRoot>
      <InputPrefix >
      <Search className="h-5 w-5 text-zinc-500"/>
      </InputPrefix>   
      <InputControl placeholder='Pesquisar' />
    </InputRoot>

    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Contratos" icon={FileStack} />
      <NavItem title="Fiscal" icon={CheckSquare} />
      <NavItem title="Usuários" icon={Users} />
    </nav>

    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
      <NavItem title="Suporte" icon={LifeBuoy} />
      <NavItem title="Configuração" icon={Cog} />
      </nav>

      <div className="h-px bg-zinc-200" />

      <Profile />

    </div>

    </aside>
  )
}