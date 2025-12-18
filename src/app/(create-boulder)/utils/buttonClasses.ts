import { HoldTypes } from "@/features/Board/types";

const holdTypeButtonClasses = {
  [HoldTypes.START]: `[&>span]:after:shadow-orange-400 [&>span]:after:bg-orange-400`,
  [HoldTypes.HAND]: `[&>span]:after:shadow-lime-400 [&>span]:after:bg-lime-400`,
  [HoldTypes.TOP]: `[&>span]:after:shadow-purple-400 [&>span]:after:bg-purple-400`,
  [HoldTypes.FOOT]: `[&>span]:after:shadow-white [&>span]:after:bg-white`,
};

export default holdTypeButtonClasses;
