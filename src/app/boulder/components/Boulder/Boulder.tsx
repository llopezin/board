"use client";

import Board from "@/features/Board/Board";
import { BoulderProps } from "./Boulder.types";
import YScrollContainer from "@/components/common/YScrollContainer/YScrollContainer";
import { useBoulderData } from "../../hooks/useBoulderData";

const Boulder = ({ id }: BoulderProps) => {
  const boulderData = useBoulderData(id);

  return (
    <YScrollContainer>
      <Board boulder={boulderData?.boulder} />
    </YScrollContainer>
  );
};

export default Boulder;
