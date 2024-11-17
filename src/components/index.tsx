import React from 'react'

import { DropdownComponent } from '@/components/dropdown'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

export const CardComponent = () => {
  return (

    <Card className='w-fit rounded-md'  >
      <CardContent className='p-2' >
        <div className='flex items-center gap-2'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-sm font-medium'>John Doe</span>
            <span className='text-xs text-muted-foreground'>john@doe.com</span>
          </div>
          <DropdownComponent />
        </div>
      </CardContent >
    </Card >
  )
}
