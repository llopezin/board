import { create } from 'zustand'
import { NewBoulderStore } from './types';
import { HoldTypes } from '@/app/components/Board/types';
import { devtools } from 'zustand/middleware';

const useNewBoulderStore = create<
    NewBoulderStore,
    [['zustand/devtools', never]]>(
        devtools((set) => ({
            boulder: { top: [], start: [], hand: [] },
            activeType: HoldTypes.START,
            setHold: (hold) => set((state) => ({
                boulder: {
                    ...state.boulder,
                    [state.activeType]: [...state.boulder[state.activeType], hold]
                }
            })),
            setActiveType: (type) => set({ activeType: type })
        })));

export default useNewBoulderStore;