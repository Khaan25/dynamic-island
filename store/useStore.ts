import { create } from 'zustand'
import createIslandSlice, { IslandSlice } from './slices/island-slice'

const useStore = create<IslandSlice>()((...a) => ({
  ...createIslandSlice(...a),
}))

export default useStore
