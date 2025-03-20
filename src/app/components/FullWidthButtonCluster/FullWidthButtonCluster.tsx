import { FullWidthButtonClusterProps } from "./types";
import { twMerge } from "tailwind-merge";

const baseClasses = "w-full flex [&>button]:grow";

const FullWidthButtonCluster = ({
  children,
  className,
}: FullWidthButtonClusterProps) => {
  return <div className={twMerge(baseClasses, className)}>{children}</div>;
};

export default FullWidthButtonCluster;
