import { cn } from "@/utils/cn";
import { YScrollContainerProps } from "./YScrollContainer.types";

const baseClasses = "overflow-y-scroll h-full";

const YScrollContainer = ({ children, className }: YScrollContainerProps) => {
  return <div className={cn(baseClasses, className)}>{children}</div>;
};

export default YScrollContainer;
