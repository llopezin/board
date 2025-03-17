import getDuplicates from "@/app/utils/getDuplicates";
import { Difference, HoldTypes } from "../types";

function getTypeChanges(difference: Difference) {
  const holdTypes = Object.keys(difference) as HoldTypes[];
  const allHoldIds = holdTypes
    .map((holdType) => {
      const { added, removed } = difference[holdType];
      return added.concat(removed);
    })
    .flat();

  return getDuplicates(allHoldIds);
}

export default getTypeChanges;
