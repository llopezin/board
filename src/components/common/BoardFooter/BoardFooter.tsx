import { BoardFooterProps } from "./BoardFooter.types";

export default function BoardFooter({ children }: BoardFooterProps) {
    return (
        <footer className="flex items-center justify-between p-3">
            {children}
        </footer>
    )
};

