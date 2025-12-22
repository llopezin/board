import { cn } from "@/utils/cn";
import { BoardHeaderBarProps } from "./BoardHeaderBar.types";

const BoardHeaderBar = ({ children }: BoardHeaderBarProps) => {
  return (
    <div className={cn("flex px-4 bg-stone-800 min-h-16 items-center", {
      "justify-between": children instanceof Array,
      "justify-end": !(children instanceof Array),
    })}>
      {children}
    </div>
  );
};

export default BoardHeaderBar;
