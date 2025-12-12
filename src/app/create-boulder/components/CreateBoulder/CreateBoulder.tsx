"use client";

import useNewBoulderStore from "../../store/NewBoulderStore";
import { NewBoulderStore } from "../../store/types";
import { useShallow } from "zustand/shallow";
import UseCreateBoulderActions from "../../hooks/useCreationBoardActions";
import Board from "@/features/Board/Board";
import BoardHeaderNav from "@/components/common/BoardHeaderNav/BoardHeaderNav";
import SaveBoulder from "@/features/SaveBoulder/SaveBoulder";
import HoldTypeSelector from "@/components/common/HoldTypeSelector/HoldTypeSelector";
import Link from "next/link";
import YScrollContainer from "@/components/common/YScrollContainer/YScrollContainer";

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
    <div className="relative">
      <BoardHeaderNav>
        <Link className="text-white" href="/">
          My boulders
        </Link>
        <SaveBoulder
          saveFn={useNewBoulderStore((state) => state.saveToLocalStorage)}
        />
      </BoardHeaderNav>

      <YScrollContainer>
        <Board onClick={onBoardClick} boulder={boulder} />
      </YScrollContainer>

      <HoldTypeSelector setActiveType={setActiveType} activeType={activeType} />
    </div>
  );
}
