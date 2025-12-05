import React from "react";
import { TextInputProps } from "./types";
import { twMerge } from "tailwind-merge";

const baseClasses =
  "px-3 py-2 border border-stone-300 rounded focus:outline-none focus:ring-2 focus:ring-vibrantOrange";

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
        <label
          htmlFor={id}
          className={twMerge(labelBaseClasses, labelClassName)}
        >
          {label}
        </label>
      )}
      <input className={twMerge(baseClasses, className)} {...props} id={id} />
    </>
  );
};

export default TextInput;
