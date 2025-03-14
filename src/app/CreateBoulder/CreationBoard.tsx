"use client";

import React from "react";
import Board from "../components/Board/Board";
import Button from "../components/Button/Button";
import useNewBoulderStore from "./store/NewBoulderStore";
import { HoldTypes } from "../components/Board/types";

const CreationBoard = () => {
  const { setActiveType, setHold, removeHold, activeType, boulder } =
    useNewBoulderStore();
  const onBoardClick = (event: React.MouseEvent<SVGElement>) => {
    const hold = event.target as SVGPathElement;
    const holdId = hold?.dataset?.holdId;
    let updatedActiveHoldType = null;

    if (!holdId) return;

    const { isActive, holdType } = isHoldActive(holdId);
    if (isActive) {
      removeHold(holdId, holdType!);
      if (holdType === activeType) return;
    }

    if (HoldTypes.TOP === activeType) {
      // TO DO - extract magic number
      const isMaxHolds = boulder[activeType].length >= 2;
      const firstInHold = boulder[activeType][0];

      if (isMaxHolds) removeHold(firstInHold, activeType);
    }

    if (HoldTypes.START === activeType) {
      // TO DO - extract magic number
      const isMaxHolds = boulder[activeType].length >= 2;

      if (isMaxHolds) {
        setActiveType(HoldTypes.HAND);
        updatedActiveHoldType = HoldTypes.HAND;
      }
    }

    setHold(holdId, updatedActiveHoldType || activeType);
  };

  // TO DO - extract this function
  const isHoldActive = (
    holdId: string
  ): { holdType: HoldTypes | null; isActive: boolean } => {
    const boulderEntries = Object.entries(boulder);

    for (const [holdType, holdIds] of boulderEntries) {
      if (holdIds.includes(holdId)) {
        return { holdType: holdType as HoldTypes, isActive: true };
      }
    }

    return { holdType: null, isActive: false };
  };

  return (
    <>
      {JSON.stringify({ boulder })}
      <Board onClick={onBoardClick} boulder={boulder} />
      <Button onClick={() => setActiveType(HoldTypes.START)}>Start</Button>
      <Button onClick={() => setActiveType(HoldTypes.HAND)}>Hand</Button>
      <Button onClick={() => setActiveType(HoldTypes.TOP)}>Top</Button>
    </>
  );
};

export default CreationBoard;
