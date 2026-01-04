import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { db } from "@/lib/firebase/client";
import { collectionNames } from "@/constants/collection-names";
import { revalidateTag } from "next/cache";
import { cacheTags } from "@/constants/cache-tags";

export default async function postBoulder(boulder: Omit<BoulderListItemDto, "id">) {
    try {
        const collection = db.collection(collectionNames.boulder);

        const res = await collection.add(boulder);
        revalidateTag(cacheTags.boulderList, 'max');

        return res;
    } catch (error) {
        console.warn("error posting boulder: ", error);

        throw error;
    }
}