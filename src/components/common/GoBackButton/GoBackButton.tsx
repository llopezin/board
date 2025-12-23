"use client";

import { GoBackButtonProps } from "./GoBackButton.types";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

export default function GoBackButton({ className }: GoBackButtonProps) {
    const router = useRouter();
    return (
        <button className={cn("text-white", className)} onClick={() => router.back()}>
            &larr;
        </button>
    )
};

