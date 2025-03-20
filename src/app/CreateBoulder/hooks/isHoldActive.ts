import { BoulderEntries, HoldTypes } from "@/app/components/Board/types";
import { IsHoldActiveProps } from "../types";

function isHoldActive({ holdId, boulder }: IsHoldActiveProps) {
  const boulderEntries = Object.entries(boulder) as BoulderEntries;

  for (const [holdType, holdIds] of boulderEntries) {
    if (holdIds.includes(holdId)) {
      return { holdType: holdType as HoldTypes, isActive: true };
    }
  }

  return { holdType: null, isActive: false };
}

export default isHoldActive;
