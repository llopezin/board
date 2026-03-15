"use client"

import { routes } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { HoldLeft } from "./components/HoldLeft";
import { HoldRight } from "./components/HoldRight";

export default function Page() {
    const router = useRouter();
    useEffect(() => {
        router.prefetch(routes.boulderList)

        setTimeout(() => {
            router.push(routes.boulderList);
        }, 3000);
    }, [router]);

    return (
        <>
            <style>{`
                @keyframes holdFadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.85);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                @keyframes strokeDraw {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
                @keyframes welcomeFadeIn {
                    from {
                        opacity: 0;
                        letter-spacing: 0.5em;
                    }
                    to {
                        opacity: 1;
                        letter-spacing: 0.3em;
                    }
                }
            `}</style>
            <div className="flex flex-col items-center justify-center min-h-screen bg-stone-900">
                <div className="grid grid-cols-2 grid-rows-3 items-center -space-x-4">
                    <div className="row-start-1 row-span-2">
                        <HoldLeft />
                    </div>
                    <div className="flex justify-end row-start-2 row-span-2 col-start-2" style={{ transform: 'rotate(180deg) scale(0.8)' }}>
                        <HoldLeft strokeColor="#FF6B35" />
                    </div>
                    <div className="row-start-1 row-span-2 col-start-2 pb-[42px] pl-[24px]" style={{ transform: 'rotate(-15deg) scale(0.65)' }}>
                        <HoldRight />
                    </div>
                </div>
                <p
                    className="text-2xl font-extralight tracking-[0.3em] uppercase text-white/90 mt-8"
                    style={{
                        opacity: 0,
                        animation: "welcomeFadeIn 1.2s ease-out 2s forwards",
                    }}
                >
                    Welcome
                </p>
            </div >
        </>
    );
};

