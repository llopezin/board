import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { db } from "@/lib/firebase/client";
import { GetBoulderReturn } from "./getBoulders.types";
import { collectionNames } from "@/constants/collection-names";

export default async function getBoulder(id: string): Promise<GetBoulderReturn> {
    try {
        const boulderRef = db.collection(collectionNames.boulder).doc(id);
        const boulderRes = await boulderRef.get();
        const boulder = boulderRes.data() as Omit<BoulderListItemDto, 'id'>;

        return { boulder, error: false };
    } catch (error) {
        return { boulder: null, error: true };
    }
}
