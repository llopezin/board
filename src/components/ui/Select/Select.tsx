import { SelectProps, OptionProps } from "./types";
import { cn } from "@/utils/cn";

const baseClasses = "bg-white px-3 py-2 rounded border-r-8 border-white";

const Select = ({ className, children, ...props }: SelectProps) => {
  return (
    <select className={cn(baseClasses, className)} {...props}>
      {children}
    </select>
  );
};

const Option = ({ className, children, ...props }: OptionProps) => {
  return (
    <option className={className} {...props}>
      {children}
    </option>
  );
};

type Compound = typeof Select & { Option: typeof Option };

(Select as Compound).Option = Option;

export default Select as Compound;
