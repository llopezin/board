"use client";

import FlipIcon from "@/components/icons/flip";
import useBoulderStore from "../../store/BoulderStore";

export default function FlipBoulder() {
    const flipBoulder = useBoulderStore((state) => state.flipBoulder);
    return (
        <button className="flex flex-col items-center text-xs text-white" onClick={flipBoulder}>
            <span>Flip</span>
            <FlipIcon />
        </button>
    )
};

