"use client";

import Board from "@/features/Board/Board";
import { BoulderProps } from "./Boulder.types";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import BoardHeaderNav from "@/components/common/BoardHeaderNav/BoardHeaderNav";
import Link from "next/link";
import YScrollContainer from "@/components/common/YScrollContainer/YScrollContainer";
import { routes } from "@/domain/contants/routes";

const Boulder = ({ id }: BoulderProps) => {
  const [boulderList] = useLocalStorage<BoulderListItemDto[]>(
    "boulderList",
    []
  );
  const boulderData = boulderList.find((boulder) => boulder.id === id);

  return (
    <div>
      <BoardHeaderNav>
        <Link className="text-white" href={routes.boulderList}>
          My boulders
        </Link>
      </BoardHeaderNav>
      <YScrollContainer>
        <Board boulder={boulderData?.boulder} />
      </YScrollContainer>
    </div>
  );
};

export default Boulder;
