import { cn } from '@/lib/utils'
import CallWrapper from '../call/call-wrapper'
import ContactImage from '../contact/contact-image'
import ContactInfo from '../contact/contact-info'
import { MotionDiv } from '../motion'

export default function DynamicCall() {
  return (
    <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }} className={cn('flex justify-between items-center w-[300px] origin-center')}>
      <div className="flex gap-4">
        <ContactImage />
        <ContactInfo />
      </div>

      <CallWrapper />
    </MotionDiv>
  )
}
