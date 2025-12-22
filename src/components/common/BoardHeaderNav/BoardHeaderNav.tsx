import { BoardHeaderNavProps } from "./BoardHeaderNav.types";

const BoardHeaderNav = ({ children }: BoardHeaderNavProps) => {
  return (
    <nav className="w-fit h-fit">
      <ul className="flex items-center gap-3">
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
  );
};

export default BoardHeaderNav;
