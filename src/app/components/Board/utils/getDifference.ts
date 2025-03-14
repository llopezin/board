import { Boulder, BoulderEntries, HoldId } from "../types";
import { emptyDifference } from "../constants/initialisers";
import deepEqual from "@/app/utils/deepEqual";
import getTypeChanges from "./getTypeChanges";

function getDifference(newBoulder: Boulder, currentBoulder: Boulder) {
  const difference = { ...emptyDifference };
  const boulderEntries = Object.entries(newBoulder) as BoulderEntries;
  const holdsTypeChanged = getTypeChanges(newBoulder);

  const isTypeChange = (hold: HoldId) =>
    holdsTypeChanged.length && holdsTypeChanged.includes(hold);

  for (const [holdType, newHolds] of boulderEntries) {
    const activeHolds: HoldId[] = currentBoulder[holdType];

    if (deepEqual(activeHolds, newHolds)) continue;

    const removed = activeHolds.filter(
      (hold) => !newHolds.includes(hold) && !isTypeChange(hold)
    );
    const added = newHolds.filter((newHold) => !activeHolds.includes(newHold));

    difference[holdType] = { added, removed };
  }

  return difference;
}

export default getDifference;
