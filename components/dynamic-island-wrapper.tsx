'use client'

import { useState } from "react"

export default function DynamicIslandWrapper() {
  const [active, setActive] = useState<DynamicIslandProps>('default')

  return (
    <div className="relative p-4 min-h-[250px] h-full flex items-start w-full justify-center">
      <DynamicIsland active={active}>
        {active === 'call' && <DynamicCall />}
        {active === 'event' && <DynamicEvent />}
      </DynamicIsland>
      <div className="absolute bottom-4 flex gap-2">
        <Button
          variant={'secondary'}
          onClick={() => {
            setActive(() => 'default')
          }}>
          Default
        </Button>
        <Button variant={'secondary'} onClick={() => setActive(() => 'call')}>
          Call
        </Button>
        <Button variant={'secondary'} onClick={() => setActive(() => 'event')}>
          Calendar Event
        </Button>
      </div>
    </div>
  )
}
