import CallIcon from "./call-icon";

export default function CallReject() {
  return (
    <button className="h-11 w-11 bg-red-500 rounded-full items-center justify-center flex">
      <CallIcon className="rotate-[135deg]" />
    </button>
  )
}
