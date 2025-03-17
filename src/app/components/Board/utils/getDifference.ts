import { Boulder, BoulderEntries, HoldId } from "../types";
import { emptyDifference } from "../constants/initialisers";
import deepEqual from "@/app/utils/deepEqual";

function getDifference(newBoulder: Boulder, currentBoulder: Boulder) {
  const difference = { ...emptyDifference };
  const boulderEntries = Object.entries(newBoulder) as BoulderEntries;

  for (const [holdType, newHolds] of boulderEntries) {
    const activeHolds: HoldId[] = currentBoulder[holdType];

    if (deepEqual(activeHolds, newHolds)) continue;

    const removed = activeHolds.filter((hold) => !newHolds.includes(hold));
    const added = newHolds.filter((newHold) => !activeHolds.includes(newHold));

    difference[holdType] = { added, removed };
  }

  return difference;
}

export default getDifference;
