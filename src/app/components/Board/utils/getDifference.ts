import getDuplicates from "@/app/utils/getDuplicates";
import { Boulder, HoldId, HoldTypes } from "../types";
import { emptyDifference } from "../constants/initialisers";
import deepEqual from "@/app/utils/deepEqual";

function getDifference(newBoulder: Boulder, currentBoulder: Boulder) {
  const difference = { ...emptyDifference };
  const boulderEntries = Object.entries(newBoulder);

  const holdTypes = Object.keys(newBoulder) as HoldTypes[];
  const allHoldIds = holdTypes.map((holdType) => newBoulder[holdType]).flat();
  const holdsTypeChanged = getDuplicates(allHoldIds);

  const isTypeChange = (hold: HoldId) =>
    holdsTypeChanged.length && holdsTypeChanged.includes(hold);

  for (const [type, holdIds] of boulderEntries) {
    const holdType = type as HoldTypes;
    const newHolds = holdIds as HoldId[];
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
