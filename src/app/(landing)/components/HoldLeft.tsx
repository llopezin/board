import { cn } from "@/utils/cn";

export const HoldLeft = ({ className, strokeColor }: { className?: string, strokeColor?: string }) => {
    return (
        <svg
            width="174"
            height="124"
            viewBox="0 0 174 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("hold-svg", className)}
            style={{
                opacity: 0,
                animation: "holdFadeIn 0.8s ease-out 0.2s forwards",
            }}
        >
            <path
                fillRule="evenodd"
                fill="#ffffff50"
                stroke={strokeColor || "#A855F7"}
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                strokeDasharray="1"
                strokeDashoffset="1"
                style={{
                    animation: "strokeDraw 1.6s ease-in-out 0.5s forwards",
                }}
                d="M30.2804 112.452C3.08043 104.052 -0.719565 86.6188 0.780435 78.9521C34.2804 68.452 58.2804 92.4523 112.78 64.4523C135.28 52.8926 139.78 28.9524 149.78 6.9521C157.508 -10.0477 173.28 8.95166 173.28 35.9521C173.28 49.4891 161.28 112.452 143.28 118.952C125.28 125.452 64.2804 122.952 30.2804 112.452Z
     M124 87 m-11 0 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0Z"
            />
        </svg>
    );
};

