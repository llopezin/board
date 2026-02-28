import Board from "@/features/Board/Board";
import { use } from "react";
import { BoulderProps } from "./Boulder.types";

const Boulder = ({ bouderDataRes }: BoulderProps) => {
  const { boulder, error } = use(bouderDataRes);

  if (error) return <div>Error finding boulder</div>;

  return (
    <div>
      <Board boulder={boulder?.boulder} className="h-auto w-auto" />
    </div>
  );
};

export default Boulder;
