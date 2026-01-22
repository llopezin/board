import { cn } from "@/utils/cn";
import React from "react";
import { TextInputProps } from "./types";

const baseClasses = "px-3 py-2 rounded";
const labelBaseClasses = "flex flex-col gap-2 text-sm font-medium";

const TextInput = ({
  label,
  className,
  labelClassName,
  ...props
}: TextInputProps) => {
  const id = React.useId();

  if (label) {
    return (
      <label htmlFor={id} className={cn(labelBaseClasses, labelClassName)}>
        {label}
        <input className={cn(baseClasses, className)} {...props} id={id} />
      </label>
    );
  }

  return <input className={cn(baseClasses, className)} {...props} id={id} />;
};

export default TextInput;
