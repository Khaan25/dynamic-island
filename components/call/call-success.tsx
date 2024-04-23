import { ComponentProps } from 'react'
import CallIcon from './call-icon'
import { CallProps } from './call-wrapper'
import { cn } from '@/lib/utils'

export default function CallSuccess({ className, ...props }: CallProps) {
  return (
    <button className={cn('h-11 w-11 bg-green-500 rounded-full items-center justify-center flex', className)} {...props}>
      <CallIcon />
    </button>
  )
}
