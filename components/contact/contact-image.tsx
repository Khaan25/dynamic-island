import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
export default function ContactImage({ className }: { className?: string }) {
  return (
    <Avatar className={cn('w-12 h-12', className)}>
      <AvatarImage src="https://avatar.vercel.sh/rauchg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
