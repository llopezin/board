"use client";

import React from "react";
import Board from "~/components/Board/Board";
import Button from "~/components/Button/Button";
import useNewBoulderStore from "./store/NewBoulderStore";
import { HoldTypes } from "~/components/Board/types";
import FullWidthButtonCluster from "~/components/FullWidthButtonCluster/FullWidthButtonCluster";
import UseCreationBoardActions from "./hooks/useCreationBoardActions";
import holdTypeButtonClasses from "./utils/buttonClasses";

const CreationBoard = () => {
  const { setActiveType, activeType, boulder } = useNewBoulderStore();
  const { onBoardClick } = UseCreationBoardActions();
  const holdTypeNames = Object.values(HoldTypes);

  return (
    <div className="relative w-full overflow-y-scroll">
      <Board onClick={onBoardClick} boulder={boulder} />
      <FullWidthButtonCluster className="sticky bottom-0 left-0 right-0">
        {holdTypeNames.map((type) => (
          <Button
            key={type}
            className={holdTypeButtonClasses[type]}
            selected={activeType === type}
            onClick={() => setActiveType(type)}
          >
            {type}
          </Button>
        ))}
      </FullWidthButtonCluster>
    </div>
  );
};

export default CreationBoard;
