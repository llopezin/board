import { cn } from "@/utils/cn";
import { SubmitButtonProps } from "./SubmitButton.types";

const baseClasses = "bg-purple-400 p-2 rounded disabled:opacity-50 font-semibold";

export default function SubmitButton({ className, ...props }: SubmitButtonProps) {
    return (
        <button
            className={cn(baseClasses, className)}
            type="submit"
            {...props}
        />
    );
}
