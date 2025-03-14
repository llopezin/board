"use client";

import React from "react";
import Board from "../components/Board/Board";
import Button from "../components/Button/Button";
import useNewBoulderStore from "./store/NewBoulderStore";
import { HoldTypes } from "../components/Board/types";
import isHoldActive from "./utils/isHoldActive";
import { MAX_START_HOLDS, MAX_TOP_HOLDS } from "./constants";

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
      removeHold(holdId, holdType!);
      if (holdType === activeType) return;
    }

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
      {JSON.stringify({ boulder })}
      <Board onClick={onBoardClick} boulder={boulder} />
      <Button onClick={() => setActiveType(HoldTypes.START)}>Start</Button>
      <Button onClick={() => setActiveType(HoldTypes.HAND)}>Hand</Button>
      <Button onClick={() => setActiveType(HoldTypes.TOP)}>Top</Button>
    </>
  );
};

export default CreationBoard;
