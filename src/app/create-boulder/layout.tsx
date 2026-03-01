import BoardHeaderBar from "@/components/common/BoardHeaderNav/BoardHeaderBar";
import BoardHeaderNav from "@/components/common/BoardHeaderNav/BoardHeaderNav";
import GoToBoulderListButton from "@/components/common/GoToBoulderListButton/GoToBoulderListButton";
import Spinner from "@/components/common/Spinner/Spinner";
import { Suspense } from "react";

export default function CreateBoulderLayout({ children }: { children: React.ReactNode }) {
    return <Suspense fallback={<Spinner />}>
        <div className="relative grid grid-rows-[auto_1fr_auto] h-dvh">
            <BoardHeaderBar>
                <BoardHeaderNav>
                    <GoToBoulderListButton />
                </BoardHeaderNav>
            </BoardHeaderBar>
            {children}
        </div>
    </Suspense>
}