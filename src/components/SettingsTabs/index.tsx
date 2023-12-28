'use client'
import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
export function SettingsTabs() {
  return (
    <Tabs.Root >
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
             <TabItem value="detalhes" title="Detalhes" isSelected />
             <TabItem value="perfil" title="Perfil" />
             <TabItem value="setor" title="Setor" />
             <TabItem value="password" title="Password" />
      </Tabs.List>    
    </Tabs.Root>  
  )
}