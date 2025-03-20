"use client";

import React from "react";
import Board from "../components/Board/Board";
import Button from "../components/Button/Button";
import useNewBoulderStore from "./store/NewBoulderStore";
import { HoldTypes } from "../components/Board/types";
import isHoldActive from "./utils/isHoldActive";
import { MAX_START_HOLDS, MAX_TOP_HOLDS } from "./constants";
import FullWidthButtonCluster from "../components/FullWidthButtonCluster/FullWidthButtonCluster";

const buttonClasses = {
  [HoldTypes.START]: `[&>span]:after:shadow-orange-400 [&>span]:after:bg-orange-400`,
  [HoldTypes.HAND]: `[&>span]:after:shadow-lime-400 [&>span]:after:bg-lime-400`,
  [HoldTypes.TOP]: `[&>span]:after:shadow-purple-400 [&>span]:after:bg-purple-400`,
};

const CreationBoard = () => {
  const { setActiveType, setHold, removeHold, activeType, boulder } =
    useNewBoulderStore();
  const onBoardClick = (event: React.MouseEvent<SVGElement>) => {
    const hold = event.target as SVGPathElement;
    const holdId = hold?.dataset?.holdId;
    let updatedActiveHoldType = null;

    // TO DO - extract this logic
    if (!holdId) return;

    const { isActive, holdType } = isHoldActive({ holdId, boulder });

    if (isActive) {
      return removeHold(holdId, holdType!);
    }

    // TO DO - move to a switch
    if (HoldTypes.TOP === activeType) {
      const isMaxHolds = boulder[activeType].length >= MAX_TOP_HOLDS;
      const firstInHold = boulder[activeType][0];

      if (isMaxHolds && firstInHold) removeHold(firstInHold, activeType);
    }

    if (HoldTypes.START === activeType) {
      const isMaxHolds = boulder[activeType].length >= MAX_START_HOLDS;

      if (isMaxHolds) {
        setActiveType(HoldTypes.HAND);
        updatedActiveHoldType = HoldTypes.HAND;
      }
    }

    setHold(holdId, updatedActiveHoldType || activeType);
  };

  return (
    <>
      <Board onClick={onBoardClick} boulder={boulder} />
      <FullWidthButtonCluster className="sticky bottom-0">
        <Button
          className={buttonClasses[HoldTypes.START]}
          selected={activeType === HoldTypes.START}
          onClick={() => setActiveType(HoldTypes.START)}
        >
          Start
        </Button>
        <Button
          className={buttonClasses[HoldTypes.HAND]}
          selected={activeType === HoldTypes.HAND}
          onClick={() => setActiveType(HoldTypes.HAND)}
        >
          Hand
        </Button>
        <Button
          className={buttonClasses[HoldTypes.TOP]}
          selected={activeType === HoldTypes.TOP}
          onClick={() => setActiveType(HoldTypes.TOP)}
        >
          Top
        </Button>
      </FullWidthButtonCluster>
    </>
  );
};

export default CreationBoard;
