import { Bell, LayoutGrid } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { cn } from '@/lib/utils'

import { CardComponent } from '@/components'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function Header({ className }: { className?: string }) {

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border", className)}>
      <div className="flex items-center h-16 gap-4 px-6">
        <SidebarTrigger />
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <div className='flex justify-between w-full'>
          <div className="flex items-center gap-2">
            <LayoutGrid height={18} width={18} />
            <span className="text-sm font-medium">Soluções</span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Bell height={24} width={24} />
          <CardComponent />
        </div>
      </div>
    </header>
  )
}
