import React from "react";
import { cn } from "@/utils/cn";
import { FullWidthListProps } from "./FullWidthList.types";

const baseClasses = "flex flex-col";

const FullWidthList = <C extends React.ElementType = "li">({
  children,
  className,
}: FullWidthListProps<C>) => {
  return <ul className={cn(baseClasses, className)}>{children}</ul>;
};

export default FullWidthList;
