import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { db } from "@/lib/firebase/client";
import { GetBoulderListReturn } from "./getBoulderList.types";
import { cacheTag } from "next/cache";
import { collectionNames } from "@/constants/collection-names";
import { cacheTags } from "@/constants/cache-tags";

export default async function getBoulderList(): GetBoulderListReturn {
    "use cache";
    cacheTag(cacheTags.boulderList);

    try {
        const boulders = db.collection(collectionNames.boulder);
        const boulderNamesSnapshot = await boulders.select("name", "grade").get();
        const bouldersList = boulderNamesSnapshot.docs.map((doc) => (
            { ...doc.data(), id: doc.id } as BoulderListItemDto
        ));

        return { bouldersList, error: false };
    } catch (error) {
        return { bouldersList: null, error: true };
    }
}
