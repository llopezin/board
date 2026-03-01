import { cn } from "@/utils/cn"

export default function Spinner({ className }: { className?: string }) {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <p className="sr-only">Loading...</p>
            <div className={cn("animate-spin rounded-full h-32 w-32 border-b-2 border-white", className)}></div>
        </div>
    )
}