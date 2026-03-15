import { BoardHeaderNavProps } from "./BoardHeaderNav.types";

const BoardHeaderNav = ({ children }: BoardHeaderNavProps) => {
  return (
    <nav className="w-fit h-fit">
      <ul className="flex items-center gap-2">
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <li className="flex min-w-10 justify-center" key={index}>
              {child}
            </li>
          ))
        ) : (
          <li className="flex min-w-10 justify-center">{children}</li>
        )}
      </ul>
    </nav>
  );
};

export default BoardHeaderNav;
