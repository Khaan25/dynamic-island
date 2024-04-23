import * as z from 'zod'

export type DynamicIslandTypes = 'event' | 'call' | 'default'
export const islandSchema = z.enum(['event', 'call', 'default'])
