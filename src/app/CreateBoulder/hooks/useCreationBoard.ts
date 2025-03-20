import { Boulder, HoldTypes } from "@/app/components/Board/types";
import { MAX_START_HOLDS, MAX_TOP_HOLDS } from "../constants";
import useNewBoulderStore from "../store/NewBoulderStore";

type HandleMoreThanTwoTopsArgs = {
  boulder: Boulder;
  activeType: HoldTypes;
};

type HandleMoreThanTwoStartsArgs = HandleMoreThanTwoTopsArgs & {
  boulder: Boulder;
  activeType: HoldTypes;
  updatedActiveHoldType: HoldTypes[];
};

export default function UseCreationBoard() {
  const { setActiveType, removeHold } = useNewBoulderStore();

  function handleMoreThanTwoTops({
    boulder,
    activeType,
  }: HandleMoreThanTwoTopsArgs) {
    const isMaxHolds = boulder[activeType].length >= MAX_TOP_HOLDS;
    const firstInHold = boulder[activeType][0];

    if (isMaxHolds && firstInHold) removeHold(firstInHold, activeType);
  }

  function handleMoreThanTwoStarts({
    boulder,
    activeType,
    updatedActiveHoldType,
  }: HandleMoreThanTwoStartsArgs) {
    const isMaxHolds = boulder[activeType].length >= MAX_START_HOLDS;

    if (isMaxHolds) {
      setActiveType(HoldTypes.HAND);
      updatedActiveHoldType.push(HoldTypes.HAND);
    }
  }

  return {
    handleMoreThanTwoStarts,
    handleMoreThanTwoTops,
  };
}
