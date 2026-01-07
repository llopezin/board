import { create } from 'zustand';
import { UserState } from './useUserStore.types';

export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));
