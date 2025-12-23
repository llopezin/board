"use client";

import { useBoulderData } from "../../hooks/useBoulderData";
import { BoulderNameProps } from "./BoulderName.types";

export default function BoulderName({ id }: BoulderNameProps) {
    const boulderData = useBoulderData(id);

    return (
        <div className="flex items-center text-white px-4">
            <h3>{boulderData?.name}</h3>
        </div>
    )
};

