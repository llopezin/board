"use client";

import useNewBoulderStore from "./store/NewBoulderStore";
import HoldTypeSelector from "./components/HoldTypeSelector/HoldTypeSelector";
import { NewBoulderStore } from "./store/types";
import SaveBoulder from "../SaveBoulder/SaveBoulder";
import { useShallow } from "zustand/shallow";
import UseCreateBoulderActions from "./hooks/useCreationBoardActions";
import Board from "../Board/Board";
import BoardHeaderNav from "./components/BoardHeaderNav/BoardHeaderNav";

const creationBoardStateSelector = (state: NewBoulderStore) => ({
  setActiveType: state.setActiveType,
  saveToLocalStorage: state.saveToLocalStorage,
  activeType: state.activeType,
  boulder: state.boulder,
});

const CreateBoulder = () => {
  const { onBoardClick } = UseCreateBoulderActions();
  const memoizedSelector = useShallow(creationBoardStateSelector);

  const { setActiveType, saveToLocalStorage, activeType, boulder } =
    useNewBoulderStore(memoizedSelector);

  return (
    <div className="relative w-full overflow-y-scroll">
      <BoardHeaderNav>
        <SaveBoulder saveFn={saveToLocalStorage} />
      </BoardHeaderNav>

      <Board onClick={onBoardClick} boulder={boulder} />
      <HoldTypeSelector setActiveType={setActiveType} activeType={activeType} />
    </div>
  );
};

export default CreateBoulder;
