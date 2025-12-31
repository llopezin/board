import holdTypeButtonClasses from "./HoldTypesSelector.constants";
import { HoldTypeSelectorProps } from "./HoldTypeSelector.types";
import { HoldTypes } from "@/features/Board/types";
import { Foot } from "@/components/icons/foot";
import { Hand } from "@/components/icons/hand";
import { Top } from "@/components/icons/top";
import { Start } from "@/components/icons/start";
import { cn } from "@/utils/cn";

const baseClasses = "w-10 p-[10px] aspect-square max-h-10  [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-white [&_path]:fill-white rounded-full shrink-0"
const activeClasses = "bg-white [&>svg]:fill-black [&_path]:fill-black"

const HoldTypeSelector = ({
  activeType,
  setActiveType,
}: HoldTypeSelectorProps) => {
  const holdTypeNames = Object.values(HoldTypes);

  const holdTypeIcons = {
    [HoldTypes.FOOT]: <Foot />,
    [HoldTypes.HAND]: <Hand />,
    [HoldTypes.TOP]: <Top />,
    [HoldTypes.START]: <Start />,
  };

  return (
    <div className="flex gap-2">
      {holdTypeNames.map((type) => (
        <div className="flex flex-col items-center" key={type}>
          <button
            onClick={() => setActiveType(type)}
            className={cn(baseClasses, holdTypeButtonClasses[type], {
              [activeClasses]: activeType === type,
            })}
            aria-pressed={activeType === type}
            title={type}
          >
            {holdTypeIcons[type]}
          </button>
          <span className="text-xs text-white">{type}</span>
        </div>
      ))
      }
    </div >
  );
};

export default HoldTypeSelector;
