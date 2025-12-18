import { GoBackButtonProps } from "./GoBackButton.types";
import { cn } from "@/utils/cn";

export default function GoBackButton({ onClick, className }: GoBackButtonProps) {
    return (
        <button className={cn("text-white", className)} onClick={onClick}>
            &larr;
        </button>
    )
};

