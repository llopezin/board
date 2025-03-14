import { paintBoulderArgs } from "../types";
import { activateHolds } from "./activateHold";

function paintBoulder({ boardRef, boulder }: paintBoulderArgs) {
  const boulderEntries = Object.entries(boulder);

  for (const [holdType, holdIds] of boulderEntries) {
    activateHolds({ holdIds, holdType, boardRef });
  }
}

export default paintBoulder;
