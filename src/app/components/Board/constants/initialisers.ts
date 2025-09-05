import { Difference, HoldTypes } from "../types";

const holdIdsEmptyDifference = { added: [], removed: [] };

const emptyDifference: Difference = {
  [HoldTypes.TOP]: holdIdsEmptyDifference,
  [HoldTypes.START]: holdIdsEmptyDifference,
  [HoldTypes.HAND]: holdIdsEmptyDifference,
};

const emptyBoulder = { top: [], start: [], hand: [] };

export { emptyDifference, emptyBoulder };
