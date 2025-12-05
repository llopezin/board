import Button from "@/components/Button/Button";
import React from "react";
import holdTypeButtonClasses from "../CreationBoard/utils/buttonClasses";
import { HoldTypes } from "@/components/Board/types";
import { HoldTypeSelectorProps } from "./HolTypeSelector.types";
import { ButtonSizes } from "@/components/Button/types";

const HoldTypeSelector = ({
  activeType,
  setActiveType,
}: HoldTypeSelectorProps) => {
  const holdTypeNames = Object.values(HoldTypes);

  return (
    <div className="w-full flex [&>button]:grow sticky bottom-0 left-0 right-0">
      {holdTypeNames.map((type) => (
        <Button
          key={type}
          className={holdTypeButtonClasses[type]}
          selected={activeType === type}
          onClick={() => setActiveType(type)}
          size={ButtonSizes.MEDIUM}
        >
          {type}
        </Button>
      ))}
    </div>
  );
};

export default HoldTypeSelector;
