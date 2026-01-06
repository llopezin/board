import Board from "@/features/Board/Board";
import { BoulderProps } from "./Boulder.types";
import YScrollContainer from "@/components/common/YScrollContainer/YScrollContainer";
import { use } from "react";

const Boulder = ({ bouderDataRes }: BoulderProps) => {
  const { boulder, error } = use(bouderDataRes);

  if (error) return <div>Error finding boulder</div>;

  return (
    <YScrollContainer>
      <Board boulder={boulder?.boulder} />
    </YScrollContainer>
  );
};

export default Boulder;
