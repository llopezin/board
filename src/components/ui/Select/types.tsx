export type SelectProps = {
  className?: string;
  children?: React.ReactNode;
} & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "className">;

export type OptionProps = {
  className?: string;
  children?: React.ReactNode;
} & Omit<React.OptionHTMLAttributes<HTMLOptionElement>, "className">;
