import { motion } from "framer-motion";

export default function DynamicIsland() {
  return (
    <motion.div
      className={cn(`relative  bg-black ${active === 'event' ? 'rounded-3xl' : 'rounded-full'} px-3 py-2.5 text-white border-[1px]  flex items-start justify-start`, className)}
      layout
      style={{ transformOrigin: 'top', originX: 0.5, originY: 0 }}
      transition={{
        layout: {
          duration: 0.3,
          stiffness: 110,
          damping: 12,
          type: 'spring',
        },
      }}>
      {children}
    </motion.div>
  )
}
