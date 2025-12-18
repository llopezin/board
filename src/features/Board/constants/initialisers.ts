import { Difference, HoldTypes } from "../types";

const holdIdsEmptyDifference = { added: [], removed: [] };

const emptyDifference: Difference = {
  [HoldTypes.TOP]: holdIdsEmptyDifference,
  [HoldTypes.START]: holdIdsEmptyDifference,
  [HoldTypes.HAND]: holdIdsEmptyDifference,
  [HoldTypes.FOOT]: holdIdsEmptyDifference,
};

const emptyBoulder = { [HoldTypes.TOP]: [], [HoldTypes.START]: [], [HoldTypes.HAND]: [], [HoldTypes.FOOT]: [] };

export { emptyDifference, emptyBoulder };
