import { Boulder, HoldId, HoldTypes } from "@/features/Board/types";

type NewBoulderStoreState = {
  boulder: Boulder;
  activeType: keyof Boulder;
};

type NewBoulderStoreAction = {
  setHold: (hold: HoldId, activeType: HoldTypes) => void;
  setActiveType: (type: keyof Boulder) => void;
  removeHold: (hold: HoldId, activeType: HoldTypes) => void;
  saveToLocalStorage: (boulderName: string, grade: string) => {success: boolean; error?: string};
  clearBoulder: () => void;
};

export type NewBoulderStore = NewBoulderStoreState & NewBoulderStoreAction;
