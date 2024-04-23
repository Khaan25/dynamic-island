import CallReject from './call-reject'
import CallSuccess from './call-success'

export default function CallWrapper() {
  return (
    <div className="flex text-base gap-2 justify-center items-center">
      <CallSuccess />
      <CallReject />
    </div>
  )
}
