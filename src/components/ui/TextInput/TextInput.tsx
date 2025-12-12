import React from "react";
import { TextInputProps } from "./types";
import { cn } from "@/utils/cn";

const baseClasses = "px-3 py-2 rounded";
const labelBaseClasses = "text-sm font-medium";

const TextInput = ({
  label,
  className,
  labelClassName,
  ...props
}: TextInputProps) => {
  const id = React.useId();

  return (
    <>
      {label && (
        <label htmlFor={id} className={cn(labelBaseClasses, labelClassName)}>
          {label}
        </label>
      )}
      <input className={cn(baseClasses, className)} {...props} id={id} />
    </>
  );
};

export default TextInput;
