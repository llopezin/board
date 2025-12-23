import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { useLocalStorage } from "@/hooks/useLocalStorage";


export function useBoulderData(id: string) {
    const [boulderList] = useLocalStorage<BoulderListItemDto[]>(
        "boulderList",
        []
    );
    const boulderData = boulderList.find((boulder) => boulder.id === id);

    return boulderData;
}

