import { collectionNames } from "@/constants/collection-names";
import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { db } from "@/lib/firebase/server";
import { GetBoulderListReturn } from "./getBoulderList.types";

export default async function getBoulderList(): GetBoulderListReturn {
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