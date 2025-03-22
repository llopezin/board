"use client";

import React from "react";
import Board from "../components/Board/Board";
import Button from "../components/Button/Button";
import useNewBoulderStore from "./store/NewBoulderStore";
import { HoldTypes } from "../components/Board/types";
import FullWidthButtonCluster from "../components/FullWidthButtonCluster/FullWidthButtonCluster";
import UseCreationBoardActions from "./hooks/useCreationBoardActions";

const buttonClasses = {
  [HoldTypes.START]: `[&>span]:after:shadow-orange-400 [&>span]:after:bg-orange-400`,
  [HoldTypes.HAND]: `[&>span]:after:shadow-lime-400 [&>span]:after:bg-lime-400`,
  [HoldTypes.TOP]: `[&>span]:after:shadow-purple-400 [&>span]:after:bg-purple-400`,
};

const CreationBoard = () => {
  const { setActiveType, activeType, boulder } = useNewBoulderStore();
  const { onBoardClick } = UseCreationBoardActions();

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
