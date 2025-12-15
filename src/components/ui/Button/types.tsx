enum ButtonVariants {
  PRIMARY = "primary",
}

enum ButtonSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  FULL_WIDTH = "fullWidth",
}

export type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  selected?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export { ButtonSizes, ButtonVariants };
