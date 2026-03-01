
type BoulderStoreState = {
  isFlipped: boolean;
};

type BoulderStoreAction = {
  flipBoulder: () => void;
};

export type BoulderStore = BoulderStoreState & BoulderStoreAction;
