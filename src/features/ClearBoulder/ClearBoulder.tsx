import useNewBoulderStore from "@/app/(create-boulder)/store/NewBoulderStore"
import ClearIcon from "@/components/icons/clear"


export default function ClearBoulder() {
    const { clearBoulder } = useNewBoulderStore()

    return (
        <div className="flex flex-col items-center">
            <button className="p-2" onClick={clearBoulder} title="clear boulder">
                <ClearIcon className="h-5 w-5 [&_path]:stroke-white" />
            </button>
            <span className="text-white text-xs">Clear</span>
        </div>
    )
};

