import { Boulder, HoldId } from '@/app/components/Board/types'

type NewBoulderStoreState = {
    boulder: Boulder;
    activeType: keyof Boulder;
};

type NewBoulderStoreAction = {
    setHold: (hold: HoldId) => void;
    setActiveType: (type: keyof Boulder) => void;
};

export type NewBoulderStore = NewBoulderStoreState & NewBoulderStoreAction;