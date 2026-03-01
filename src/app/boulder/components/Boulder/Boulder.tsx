
"use client";

import useBoulderStore from "@/app/boulder/store/BoulderStore";
import Board from "@/features/Board/Board";
import { cn } from "@/utils/cn";
import { use } from "react";
import { BoulderProps } from "./Boulder.types";

const Boulder = ({ bouderDataRes }: BoulderProps) => {
  const { boulder, error } = use(bouderDataRes);
  const isFlipped = useBoulderStore((state) => state.isFlipped);

  if (error) return <div>Error finding boulder</div>;

  return (
    <div>
      <Board boulder={boulder?.boulder} className={cn("h-auto w-auto", isFlipped && "transform -scale-x-100")} />
    </div>
  );
};

export default Boulder;
