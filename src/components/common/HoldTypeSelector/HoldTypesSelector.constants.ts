import { HoldTypes } from "@/features/Board/types";

const holdTypeButtonClasses = {
  [HoldTypes.START]: `border-[2px] border-orange-400`,
  [HoldTypes.HAND]: `border-[2px] border-lime-400`,
  [HoldTypes.TOP]: `border-[2px] border-purple-400`,
  [HoldTypes.FOOT]: `border-[2px] border-white`,
};

export default holdTypeButtonClasses;
