import { Home, BarChart, SquareStack, Users, CheckSquare, FileStack } from "lucide-react";
import { NavItem } from "./NavItem";

export function MainNavigation(){
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Contratos" icon={FileStack} />
      <NavItem title="Fiscal" icon={CheckSquare} />
      <NavItem title="Usuários" icon={Users} />
    </nav>
  );
}