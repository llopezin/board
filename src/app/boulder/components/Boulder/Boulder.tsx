"use client";

import Board from "@/features/Board/Board";
import { BoulderProps } from "./Boulder.types";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import YScrollContainer from "@/components/common/YScrollContainer/YScrollContainer";

const Boulder = ({ id }: BoulderProps) => {
  const [boulderList] = useLocalStorage<BoulderListItemDto[]>(
    "boulderList",
    []
  );
  const boulderData = boulderList.find((boulder) => boulder.id === id);

  return (
    <YScrollContainer>
      <Board boulder={boulderData?.boulder} />
    </YScrollContainer>
  );
};

export default Boulder;
