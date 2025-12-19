
import BoulderListIcon from "@/components/icons/boulderList";
import { routes } from "@/domain/contants/routes";
import Link from "next/link";

export default function GoToBoulderListButton() {
    return (
        <Link className="text-white flex flex-col items-center justify-center py-2" href={routes.boulderList}>
            <span className="text-xs">Climb</span>
            <BoulderListIcon className="w-6 h-6 [&>path]:stroke-white" />
        </Link>
    )
};
