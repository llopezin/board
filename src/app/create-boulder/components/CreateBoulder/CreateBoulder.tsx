"use client";

import BoardFooter from "@/components/common/BoardFooter/BoardFooter";
import BoardHeaderBar from "@/components/common/BoardHeaderNav/BoardHeaderBar";
import BoardHeaderNav from "@/components/common/BoardHeaderNav/BoardHeaderNav";
import GoToBoulderListButton from "@/components/common/GoToBoulderListButton/GoToBoulderListButton";
import HoldTypeSelector from "@/components/common/HoldTypeSelector/HoldTypeSelector";
import YScrollContainer from "@/components/common/YScrollContainer/YScrollContainer";
import { routes } from "@/constants/routes";
import Board from "@/features/Board/Board";
import ClearBoulder from "@/features/ClearBoulder/ClearBoulder";
import saveBoulder from "@/features/SaveBoulder/actions/saveBoulder";
import SaveBoulder from "@/features/SaveBoulder/SaveBoulder";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/shallow";
import UseCreateBoulderActions from "../../hooks/useCreationBoardActions";
import useNewBoulderStore from "../../store/NewBoulderStore";
import { NewBoulderStore } from "../../store/types";

const creationBoardStateSelector = (state: NewBoulderStore) => ({
  boulder: state.boulder,
  setActiveType: state.setActiveType,
  activeType: state.activeType,
});

export default function CreateBoulder() {
  const router = useRouter();
  const { onBoardClick, clearBoard } = UseCreateBoulderActions();
  const memoizedSelector = useShallow(creationBoardStateSelector);

  const { boulder, setActiveType, activeType } =
    useNewBoulderStore(memoizedSelector);

  const onSuccess = () => {
    clearBoard();
    router.push(routes.boulderList)
  };

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
          <ClearBoulder clearBoulder={clearBoard} />
          <SaveBoulder saveFn={saveBoulder} boulder={boulder} onSuccess={onSuccess} />
        </div>
      </BoardFooter>
    </div>
  );
}
