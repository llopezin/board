import { HoldTypes } from "./types";

const baseClasses = ["!fill-white/40", "stroke-[12px]"];

const holdStyles: Record<HoldTypes, string[]> = {
  [HoldTypes.HAND]: [`stroke-lime-400`, ...baseClasses],
  [HoldTypes.TOP]: [`stroke-purple-400`, ...baseClasses],
  [HoldTypes.START]: [`stroke-orange-400`, ...baseClasses],
};

export default holdStyles;
