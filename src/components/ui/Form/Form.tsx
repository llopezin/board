import { cn } from "@/utils/cn";
import { FormProps } from "./Form.types";

const baseClasses = "flex flex-col gap-5";

export default function Form({ className, children, ...props }: FormProps) {
    return (
        <form className={cn(baseClasses, className)} {...props}>
            {children}
        </form>
    );
}
