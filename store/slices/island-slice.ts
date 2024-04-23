import { islandSchema } from '@/schema'
import * as z from 'zod'
import { StateCreator } from 'zustand'

type Island = z.infer<typeof islandSchema>

type IslandSlice = {
  island: Island
  setIsland: (data: Island) => void
}

const initialState: Island = 'default'

const createIslandSlice: StateCreator<IslandSlice> = set => ({
  island: initialState,
  setIsland: (data) => set({ island: data }),
})

export default createIslandSlice
export type { Island, IslandSlice }
