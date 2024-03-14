import { create } from "zustand";

export type CounterStore = {
    count: number
    increment?: () => void
    decrement?: () => void
    asyncIncrement?: () => Promise<void>
}


export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () =>  {
        set((state) => ({count: state.count + 1}))
    },
    decrement: () => {
        set((state) => ({count: state.count - 1}))
    },
    asyncIncrement: async () => {
        const response = await new Promise((resolve) => setTimeout((resolve), 2000))
        set((state) => ({count: state.count+1}))
    }
}))