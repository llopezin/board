export type TextInputProps = {
  className?: string;
  label?: string;
  labelClassName?: string;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "className" | "label" | "id"
>;
