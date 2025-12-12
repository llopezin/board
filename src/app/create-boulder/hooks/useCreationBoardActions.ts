import { MAX_START_HOLDS, MAX_TOP_HOLDS } from "../utils/constants";
import useNewBoulderStore from "../store/NewBoulderStore";
import { HandleMoreThanTwoStartsArgs } from "./types";
import { BoulderEntries, HoldTypes } from "@/features/Board/types";
import { IsHoldActiveProps } from "../components/CreateBoulder/CreateBoulder.types";

export default function UseCreateBoulderActions() {
  const { setActiveType, removeHold, activeType, setHold, boulder } =
    useNewBoulderStore();

  function isHoldActive({ holdId, boulder }: IsHoldActiveProps) {
    const boulderEntries = Object.entries(boulder) as BoulderEntries;

    for (const [holdType, holdIds] of boulderEntries) {
      if (holdIds.includes(holdId)) {
        return { holdType: holdType as HoldTypes, isActive: true };
      }
    }

    return { holdType: null, isActive: false };
  }

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
