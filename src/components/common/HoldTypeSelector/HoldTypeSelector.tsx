import Button from "@/components/ui/Button/Button";
import React from "react";
import holdTypeButtonClasses from "../../../app/create-boulder/utils/buttonClasses";
import { HoldTypeSelectorProps } from "./HolTypeSelector.types";
import { ButtonSizes } from "@/components/ui/Button/types";
import { HoldTypes } from "@/features/Board/types";

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
