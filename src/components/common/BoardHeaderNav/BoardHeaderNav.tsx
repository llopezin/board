import { BoardHeaderNavProps } from "./BoardHeaderNav.types";

const BoardHeaderNav = ({ children }: BoardHeaderNavProps) => {
  return (
    <div className="flex flex-col px-2 justify-center bg-stone-800 sticky top-0 left-0 h-10">
      <nav>
        <ul className="flex items-center justify-end gap-4 ">
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <li className="flex" key={index}>
                {child}
              </li>
            ))
          ) : (
            <li className="flex">{children}</li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default BoardHeaderNav;
