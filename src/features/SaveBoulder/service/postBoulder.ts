import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { db } from "@/lib/firebase/client";
import { collectionNames } from "@/constants/collection-names";

export default async function postBoulder(boulder: Omit<BoulderListItemDto, "id">) {
    try {
        const collection = db.collection(collectionNames.boulder);

        const res = await collection.add(boulder);

        return res;
    } catch (error) {
        console.warn("error posting boulder: ", error);

        throw error;
    }
}