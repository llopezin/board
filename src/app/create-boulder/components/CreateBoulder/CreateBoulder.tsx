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
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

const creationBoardStateSelector = (state: NewBoulderStore) => ({
  boulder: state.boulder,
  setActiveType: state.setActiveType,
  activeType: state.activeType,
  clearBoulder: state.clearBoulder,
});

export default function CreateBoulder() {
  const router = useRouter();
  const { onBoardClick } = UseCreateBoulderActions();
  const memoizedSelector = useShallow(creationBoardStateSelector);

  const { boulder, setActiveType, activeType, clearBoulder } =
    useNewBoulderStore(memoizedSelector);

  const onSuccess = () => {
    clearBoulder();
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
          <ClearBoulder />
          <SaveBoulder saveFn={saveBoulder} boulder={boulder} onSuccess={onSuccess} />
        </div>
      </BoardFooter>
    </div>
  );
}
