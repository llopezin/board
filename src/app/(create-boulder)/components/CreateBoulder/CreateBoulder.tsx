"use client";

import useNewBoulderStore from "../../store/NewBoulderStore";
import { NewBoulderStore } from "../../store/types";
import { useShallow } from "zustand/shallow";
import UseCreateBoulderActions from "../../hooks/useCreationBoardActions";
import Board from "@/features/Board/Board";
import BoardHeaderNav from "@/components/common/BoardHeaderNav/BoardHeaderNav";
import SaveBoulder from "@/features/SaveBoulder/SaveBoulder";
import HoldTypeSelector from "@/components/common/HoldTypeSelector/HoldTypeSelector";
import YScrollContainer from "@/components/common/YScrollContainer/YScrollContainer";
import BoardFooter from "@/components/common/BoardFooter/BoardFooter";
import ClearBoulder from "@/features/ClearBoulder/ClearBoulder";
import GoToBoulderListButton from "@/components/common/GoToBoulderListButton/GoToBoulderListButton";
import BoardHeaderBar from "@/components/common/BoardHeaderNav/BoardHeaderBar";
import saveBoulder from "@/features/SaveBoulder/actions/saveBoulder";

const creationBoardStateSelector = (state: NewBoulderStore) => ({
  boulder: state.boulder,
  setActiveType: state.setActiveType,
  activeType: state.activeType,
});

export default function CreateBoulder() {
  const { onBoardClick } = UseCreateBoulderActions();
  const memoizedSelector = useShallow(creationBoardStateSelector);

  const { boulder, setActiveType, activeType } =
    useNewBoulderStore(memoizedSelector);

  return (
    <div className="relative grid grid-rows-[auto_1fr_auto] h-dvh">
      <BoardHeaderBar>
        <BoardHeaderNav>
          <GoToBoulderListButton />
        </BoardHeaderNav>
      </BoardHeaderBar>

      <YScrollContainer>
        <Board onClick={onBoardClick} boulder={boulder} />
      </YScrollContainer>

      <BoardFooter>
        <HoldTypeSelector setActiveType={setActiveType} activeType={activeType} />
        <div className="flex gap-2 items-center">
          <ClearBoulder />
          <SaveBoulder saveFn={saveBoulder} boulder={boulder} />
        </div>
      </BoardFooter>
    </div>
  );
}
