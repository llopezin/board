import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { db } from "@/lib/firebase/client";

// TO DO - move to separate file
export type GetBoulderReturn = {
    boulder: Omit<BoulderListItemDto, 'id'> | null;
    error: boolean;
}

export default async function getBoulder(id: string): Promise<GetBoulderReturn> {
    try {
        const boulderRef = db.collection("boulder").doc(id);
        const boulderRes = await boulderRef.get();
        const boulder = boulderRes.data() as Omit<BoulderListItemDto, 'id'>;

        return { boulder, error: false };
    } catch (error) {
        return { boulder: null, error: true };
    }
}
