import { create } from 'zustand'
import { NewBoulderStore } from './types';
import { HoldId, HoldTypes } from '@/app/components/Board/types';
import { devtools } from 'zustand/middleware';

const initialState = {
    boulder: { top: [], start: [], hand: [] },
    activeType: HoldTypes.START,
}

const useNewBoulderStore = create<
    NewBoulderStore,
    [['zustand/devtools', never]]>(
        devtools((set) => ({
            ...initialState,
            setHold: (hold: HoldId, type: HoldTypes) => set((state) => ({
                boulder: {
                    ...state.boulder,
                    [type]: [...state.boulder[type], hold]
                }
            })),
            removeHold: (hold: HoldId, type: HoldTypes) => set((state) => ({
                boulder: {
                    ...state.boulder,
                    [type]: state.boulder[type].filter((id) => id !== hold)
                }
            })),
            setActiveType: (type) => set({ activeType: type })
        })));

export default useNewBoulderStore;