import { useLocalStorage } from "@/hooks/useLocalStorage";
import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import useNewBoulderStore from "@/app/(create-boulder)/store/NewBoulderStore";
import { NewBoulderStore } from "@/app/(create-boulder)/store/types";
import { useShallow } from "zustand/shallow";
import { saveBoulderErrors } from "../../constants/errorsMessages";

const boulderStoreSelector = (state: NewBoulderStore) => ({
    boulder: state.boulder,
});

export default function useSaveBoulder() {
    const memoizedSelector = useShallow(boulderStoreSelector);
    const [boulderList, setBoulderList] = useLocalStorage<BoulderListItemDto[]>(
        "boulderList",
        []
    );

    const { boulder } = useNewBoulderStore(memoizedSelector);


    function saveToLocalStorage(boulderName: string, grade: string) {
        const boulderWithGradeAndName = {
            boulder: boulder,
            name: boulderName,
            grade,
            id: Date.now().toString(),
        };

        const nameAlreadyExists = boulderList.some(b => b.name === boulderName);
        const errors: string[] = [];

        if (nameAlreadyExists) errors.push(saveBoulderErrors.nameExists);
        if (!boulder.start.length) errors.push(saveBoulderErrors.noStartHold);
        if (!boulder.top.length) errors.push(saveBoulderErrors.noTopHold);

        if (errors.length) return { success: false, errors };

        try {
            setBoulderList([...boulderList, boulderWithGradeAndName])
            return { success: true };
        } catch (error) {
            return { success: false, errors: ["Failed to save boulder to localStorage"] };
        }
    }

    return { saveToLocalStorage }

}