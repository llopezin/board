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
import { useRouter } from "next/navigation";
import { routes } from "@/domain/contants/routes";

const creationBoardStateSelector = (state: NewBoulderStore) => ({
  boulder: state.boulder,
  setActiveType: state.setActiveType,
  activeType: state.activeType,
  saveToLocalStorage: state.saveToLocalStorage,
});

export default function CreateBoulder() {
  const { onBoardClick } = UseCreateBoulderActions();
  const memoizedSelector = useShallow(creationBoardStateSelector);
  const router = useRouter();

  const { boulder, setActiveType, activeType, saveToLocalStorage } =
    useNewBoulderStore(memoizedSelector);

  const saveFn = (name: string, grade: string) => {
    const state = saveToLocalStorage(name, grade);

    if (state.success) router.push(routes.boulderList);

    return state;
  };

  return (
    <div className="relative">
      <BoardHeaderNav>
        <Link className="text-white" href={routes.boulderList}>
          My boulders
        </Link>
        <SaveBoulder saveFn={saveFn} />
      </BoardHeaderNav>

      <YScrollContainer>
        <Board onClick={onBoardClick} boulder={boulder} />
      </YScrollContainer>

      <HoldTypeSelector setActiveType={setActiveType} activeType={activeType} />
    </div>
  );
}
