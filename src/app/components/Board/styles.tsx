import { HoldTypes } from "./types";

const holdStyles: Record<HoldTypes, string[]> = {
    [HoldTypes.HAND]: ['!fill-white/40', 'stroke-lime-400', 'stroke-[12px]'],
    [HoldTypes.TOP]: ['!fill-white/40', 'stroke-purple-400', 'stroke-[12px]'],
    [HoldTypes.START]: ['!fill-white/40', 'stroke-orange-400', 'stroke-[12px]']
};

export default holdStyles;