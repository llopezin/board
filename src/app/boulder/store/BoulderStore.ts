import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { BoulderStore } from "./types";

const initialState = {
  isFlipped: false,
};

const useBoulderStore = create<
  BoulderStore,
  [["zustand/devtools", never]]
>(
  devtools((set) => ({
    ...initialState,
    flipBoulder: () => set((state) => ({ isFlipped: !state.isFlipped })),
  }))
);

export default useBoulderStore;
