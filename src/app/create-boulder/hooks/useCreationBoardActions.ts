import { HoldTypes } from "@/features/Board/types";
import useNewBoulderStore from "../store/NewBoulderStore";
import { MAX_START_HOLDS, MAX_TOP_HOLDS } from "../utils/constants";
import { HandleMoreThanTwoStartsArgs } from "./types";
import { isHoldActive } from "./utils";

export default function UseCreateBoulderActions() {
  const { setActiveType, removeHold, activeType, setHold, boulder } =
    useNewBoulderStore();

  function handleMoreThanTwoTops() {
    const isMaxHolds = boulder[activeType].length >= MAX_TOP_HOLDS;
    const firstInHold = boulder[activeType][0];

    if (isMaxHolds && firstInHold) removeHold(firstInHold, activeType);
  }

  function handleMoreThanTwoStarts({
    updatedActiveHoldType,
  }: HandleMoreThanTwoStartsArgs) {
    const isMaxHolds = boulder[activeType].length >= MAX_START_HOLDS;

    if (isMaxHolds) {
      setActiveType(HoldTypes.HAND);
      updatedActiveHoldType.push(HoldTypes.HAND);
    }
  }

  function onBoardClick(event: React.MouseEvent<SVGElement>) {
    const hold = event.target as SVGPathElement;
    const holdId = hold?.dataset?.holdId;

    if (!holdId) return;

    const { isActive, holdType } = isHoldActive({ holdId, boulder });
    const updatedActiveHoldType: HoldTypes[] = [];

    if (isActive) return removeHold(holdId, holdType!);
    if (HoldTypes.TOP === activeType) handleMoreThanTwoTops();
    if (HoldTypes.START === activeType) {
      handleMoreThanTwoStarts({ updatedActiveHoldType });
    }

    setHold(holdId, updatedActiveHoldType[0] || activeType);
  }

  return {
    onBoardClick,
  };
}
