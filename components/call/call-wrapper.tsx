'ues client'

import useStore from '@/store/useStore'
import { ComponentProps } from 'react'
import CallReject from './call-reject'
import CallSuccess from './call-success'

export type CallProps = ComponentProps<'button'>

export default function CallWrapper() {
  const { setIsland } = useStore()

  return (
    <div className="flex text-base gap-2 justify-center items-center">
      <CallSuccess onClick={() => setIsland('default')} />
      <CallReject onClick={() => setIsland('default')} />
    </div>
  )
}
