import { create } from "zustand";


const useCounter = create((set) => ({
  count: 0,
  increase: (value) => set(() => ({ count: value})),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

export default useCounter;
