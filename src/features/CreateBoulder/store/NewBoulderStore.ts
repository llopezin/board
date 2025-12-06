import { create } from "zustand";
import { NewBoulderStore } from "./types";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { HoldId, HoldTypes } from "@/features/Board/types";
import { emptyBoulder } from "@/features/Board/constants/initialisers";

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
      saveToLocalStorage: (boulderName: string, grade: string) => {
        set((state) => {
          // TO DO - handle type safety
          // TO DO - handle name conflicts
          // TO DO - extract key boulderList
          const boulderWithGradeAndName = {
            boulder: state.boulder,
            name: boulderName,
            grade,
          };

          const listString = localStorage.getItem("boulderList");
          const list = listString ? JSON.parse(listString) : [];

          list.push(boulderWithGradeAndName);

          localStorage.setItem("boulderList", JSON.stringify(list));
        });
      },
    }))
  )
);

export default useNewBoulderStore;
