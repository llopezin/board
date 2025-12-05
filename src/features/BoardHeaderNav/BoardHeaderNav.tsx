import React from "react";
import { BoardHeaderNavProps } from "./BoardHeaderNav.types";

const BoardHeaderNav = ({ children }: BoardHeaderNavProps) => {
  return (
    <div className="bg-stone-800 sticky top-0 left-0">
      <nav>
        <ul className="flex items-center justify-end gap-4">
          {Array.isArray(children) ? (
            children.map((child, index) => <li key={index}>{child}</li>)
          ) : (
            <li>{children}</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default BoardHeaderNav;
