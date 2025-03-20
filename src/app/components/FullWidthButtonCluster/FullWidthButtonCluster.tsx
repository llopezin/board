import clsx from "clsx";
import { FullWidthButtonClusterProps } from "./types";

const baseClasses = "w-full flex [&>button]:grow";

const FullWidthButtonCluster = ({
  children,
  className,
}: FullWidthButtonClusterProps) => {
  return <div className={clsx(baseClasses, className)}>{children}</div>;
};

export default FullWidthButtonCluster;
