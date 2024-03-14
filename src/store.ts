import { create } from "zustand";

export type CounterStore = {
    count: number
    increment?: () => void
    decrement?: () => void
    isLoading?: boolean
    setIsLoading?: (isLoading:boolean) => void
    asyncIncrement?: () => Promise<void>
}


export const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    isLoading: false,
    setIsLoading: (isLoading) => set({isLoading}), 
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