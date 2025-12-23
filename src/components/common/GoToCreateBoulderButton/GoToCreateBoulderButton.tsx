import CreateBoulderIcon from "@/components/icons/createBoulder";
import { routes } from "@/domain/contants/routes";
import Link from "next/link";

export default function GoToCreateBoulderButton() {
    return (
        <Link className="text-white flex flex-col items-center justify-center py-2" href={routes.home}>
            <span className="text-xs">Create</span>
            <CreateBoulderIcon className="w-6 h-6 [&>path]:stroke-white [&>polygon]:fill-white" />
        </Link>
    )
};
