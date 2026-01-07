export type FormProps = {
    className?: string;
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, "className">;
