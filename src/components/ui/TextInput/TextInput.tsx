import { cn } from "@/utils/cn";
import { TextInputProps } from "./types";

const baseClasses = "px-3 py-2 rounded";
const labelBaseClasses = "flex flex-col gap-2 text-sm font-medium";

const TextInput = ({
  label,
  className,
  labelClassName,
  ...props
}: TextInputProps) => {

  return (
    <label className={labelBaseClasses}>
      <span className={labelClassName}>{label}</span>
      <input className={cn(baseClasses, className)} {...props} />
    </label>
  );
};

export default TextInput;
