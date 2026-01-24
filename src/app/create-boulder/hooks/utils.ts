import { BoulderEntries } from "@/features/Board/types";
import { IsHoldActiveProps } from "../components/CreateBoulder/CreateBoulder.types";

export function isHoldActive({ holdId, boulder }: IsHoldActiveProps) {
    const boulderEntries = Object.entries(boulder) as BoulderEntries;

    for (const [holdType, holdIds] of boulderEntries) {
        if (holdIds.includes(holdId)) {
            return { holdType: holdType, isActive: true };
        }
    }

    return { holdType: null, isActive: false };
}