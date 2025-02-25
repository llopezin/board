enum ButtonVariants {
    PRIMARY = 'primary',
}

enum ButtonSizes {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    FULL_WIDTH = 'fullWidth',
}

export type ButtonProps = {
    variant?: ButtonVariants;
    size?: ButtonSizes;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;