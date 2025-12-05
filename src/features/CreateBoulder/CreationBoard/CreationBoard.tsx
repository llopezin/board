"use client";

import React from "react";
import Board from "@/components/Board/Board";
import UseCreationBoardActions from "./hooks/useCreationBoardActions";
import BoardHeaderNavigation from "../../BoardHeaderNav/BoardHeaderNav";
import useNewBoulderStore from "../store/NewBoulderStore";
import HoldTypeSelector from "../HoldTypeSelector/HoldTypeSelector";
import { NewBoulderStore } from "../store/types";
import SaveBoulder from "../../SaveBoulder/SaveBoulder/SaveBoulder";
import { useShallow } from "zustand/shallow";

const creationBoardStateSelector = (state: NewBoulderStore) => ({
  setActiveType: state.setActiveType,
  saveToLocalStorage: state.saveToLocalStorage,
  activeType: state.activeType,
  boulder: state.boulder,
});

const CreationBoard = () => {
  const { onBoardClick } = UseCreationBoardActions();
  const memoizedSelector = useShallow(creationBoardStateSelector);

  const { setActiveType, saveToLocalStorage, activeType, boulder } =
    useNewBoulderStore(memoizedSelector);

  return (
    <div className="relative w-full overflow-y-scroll">
      <BoardHeaderNavigation>
        <SaveBoulder saveFn={saveToLocalStorage} />
      </BoardHeaderNavigation>

      <Board onClick={onBoardClick} boulder={boulder} />
      <HoldTypeSelector setActiveType={setActiveType} activeType={activeType} />
    </div>
  );
};

export default CreationBoard;
