'use client'

import useStore from '@/store/useStore'
import DynamicIsland from './dynamic-island'
import DynamicCall from './states/dynamic-call'
import DynamicEvent from './states/dynamic-event'
import { Button } from './ui/button'

export default function DynamicIslandWrapper() {
  const { island, setIsland } = useStore()

  return (
    <div className="relative p-4 min-h-[250px] h-full flex items-start w-full justify-center">
      <DynamicIsland active={island}>
        {island === 'call' && <DynamicCall />}
        {island === 'event' && <DynamicEvent />}
      </DynamicIsland>
      <div className="absolute bottom-4 flex gap-2">
        <Button variant="secondary" onClick={() => setIsland('default')}>
          Default
        </Button>
        <Button variant="secondary" onClick={() => setIsland('call')}>
          Call
        </Button>
        <Button variant="secondary" onClick={() => setIsland('event')}>
          Calendar Event
        </Button>
      </div>
    </div>
  )
}
