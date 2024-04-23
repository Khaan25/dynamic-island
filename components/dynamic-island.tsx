import { DynamicIslandTypes } from '@/types'
import { MotionDiv } from './motion'
import { cn } from '@/lib/utils'

interface DynamicIslandProps {
  children?: React.ReactNode
  className?: string
  active: DynamicIslandTypes
}

export default function DynamicIsland({ children, active, className = 'min-w-[125px] min-h-10' }: DynamicIslandProps) {
  return (
    <MotionDiv
      className={cn(`relative  bg-black ${active === 'event' ? 'rounded-3xl' : 'rounded-full'} px-3 py-2.5 text-white border-[1px]  flex items-start justify-start`, className)}
      layout
      style={{ transformOrigin: 'top', originX: 0.5, originY: 0 }}
      transition={{
        layout: {
          duration: 0.3,
          stiffness: 250,
          damping: 18,
          type: 'spring',
        },
      }}>
      {children}
    </MotionDiv>
  )
}
