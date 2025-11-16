import { Boulder, HoldId, HoldTypes } from '@/app/components/Board/types'

type NewBoulderStoreState = {
    boulder: Boulder;
    activeType: keyof Boulder;
};

type NewBoulderStoreAction = {
    setHold: (hold: HoldId, activeType: HoldTypes) => void;
    setActiveType: (type: keyof Boulder) => void;
    removeHold: (hold: HoldId, activeType: HoldTypes) => void;
};

export type NewBoulderStore = NewBoulderStoreState & NewBoulderStoreAction;