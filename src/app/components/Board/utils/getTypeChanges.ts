import getDuplicates from "@/app/utils/getDuplicates";
import { Boulder, HoldTypes } from "../types";

function getTypeChanges(boulder: Boulder) {
  const holdTypes = Object.keys(boulder) as HoldTypes[];
  const allHoldIds = holdTypes.map((holdType) => boulder[holdType]).flat();
  return getDuplicates(allHoldIds);
}

export default getTypeChanges;
