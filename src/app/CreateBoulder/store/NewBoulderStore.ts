import { create } from "zustand";
import { NewBoulderStore } from "./types";
import { HoldId, HoldTypes } from "@/app/components/Board/types";
import { devtools } from "zustand/middleware";
import { emptyBoulder } from "@/app/components/Board/constants/initialisers";
import { immer } from "zustand/middleware/immer";

const initialState = {
  boulder: { ...emptyBoulder },
  activeType: HoldTypes.START,
};

const useNewBoulderStore = create<
  NewBoulderStore,
  [["zustand/immer", never], ["zustand/devtools", never]]
>(
  immer(
    devtools((set) => ({
      ...initialState,
      setHold: (hold: HoldId, type: HoldTypes) =>
        set((state) => {
          (state.boulder[type] as HoldId[]).push(hold);
        }),
      removeHold: (hold: HoldId, type: HoldTypes) =>
        set((state) => {
          (state.boulder[type] as HoldId[]) = state.boulder[type].filter(
            (id) => id !== hold
          );
        }),
      setActiveType: (type) => set({ activeType: type }),
    }))
  )
);

export default useNewBoulderStore;
