import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { db } from "@/lib/firebase/client";
import { collectionNames } from "@/constants/collection-names";
import { revalidateTag } from "next/cache";

export default async function postBoulder(boulder: Omit<BoulderListItemDto, "id">) {
    try {
        const collection = db.collection(collectionNames.boulder);

        revalidateTag(collectionNames.boulder, 'max');
        return collection.add(boulder);
    } catch (error) {
        console.warn("error posting boulder: ", error);

        throw error;
    }
}