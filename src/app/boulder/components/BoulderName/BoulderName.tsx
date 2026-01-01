import { BoulderNameProps } from "./BoulderName.types";

export default function BoulderName({ name }: BoulderNameProps) {
    return (
        <div className="flex items-center text-white px-4">
            <h3>{name}</h3>
        </div>
    )
};

