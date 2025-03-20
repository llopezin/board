import React from "react";
import { ButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

const baseClasses = "p-12 text-white bg-stone-800 hover:bg-stone-700";

const variantsConfig = {
  primary: "", // TO DO
  fullWidth: "w-full",
  small: "p-2",
  medium: "p-8",
  large: "p-12",
  selected:
    "relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bottom-[-5px] after:right-0 after:rounded-[3px] after:shadow-[0px_0px_3px_1px] after:shadow-vibrantOrange after:bg-vibrantOrange",
};

const Button = ({
  variant,
  size,
  selected,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        baseClasses,
        className,
        size && variantsConfig[size],
        variant && variantsConfig[variant]
      )}
      {...props}
    >
      <span className={twMerge(selected && variantsConfig.selected)}>
        {props.children}
      </span>
    </button>
  );
};

export default Button;
