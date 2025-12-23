import { ErrorBlockProps } from "./ErrorsBlock.types";

export default function ErrorBlock({ errors }: ErrorBlockProps) {
    return (
        <div className="border border-red-500 p-2 bg-red-200  text-red-500 rounded" role="alert">
            <p className="sr-only">
                Error:
            </p>
            <ul className="list-disc px-4">
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
        </div>
    );
}