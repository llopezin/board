import { PaintDifferenceArgs } from "../types";
import { activateHolds, deactivateHolds } from "./activateHold";

function paintDifference({ difference, boardRef }: PaintDifferenceArgs) {
  const diffEntries = Object.entries(difference);

  for (const [holdType, differences] of diffEntries) {
    if (differences.removed.length)
      deactivateHolds({ holdIds: differences.removed, holdType, boardRef });

    if (differences.added.length)
      activateHolds({ holdIds: differences.added, holdType, boardRef });
  }
}

export default paintDifference;
