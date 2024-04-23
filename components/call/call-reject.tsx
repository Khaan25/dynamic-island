import { cn } from '@/lib/utils'
import CallIcon from './call-icon'
import { CallProps } from './call-wrapper'

export default function CallReject({ className, ...props }: CallProps) {
  return (
    <button className={cn('h-11 w-11 bg-red-500 rounded-full items-center justify-center flex', className)} {...props}>
      <CallIcon className="rotate-[135deg]" />
    </button>
  )
}
