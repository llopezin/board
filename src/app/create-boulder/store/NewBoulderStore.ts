import { emptyBoulder } from "@/features/Board/constants/initialisers";
import { Boulder, HoldId, HoldTypes } from "@/features/Board/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { NewBoulderStore } from "./types";

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
      cleanStoredBoulder: () => set((state) => {
        state.boulder = initialState.boulder as unknown as Boulder;
        state.activeType = HoldTypes.START;
      }),
    }))
  )
);

export default useNewBoulderStore;
