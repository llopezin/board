import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { db } from "@/lib/firebase/client";

export default async function getBoulderList(): Promise<{ bouldersList: BoulderListItemDto[] | null; error: boolean }> {
    try {
        const boulders = db.collection("boulder");
        const boulderNamesSnapshot = await boulders.select("name", "grade").get();
        const bouldersList = boulderNamesSnapshot.docs.map((doc) => (
            { ...doc.data(), id: doc.id } as BoulderListItemDto
        ));

        return { bouldersList, error: false };
    } catch (error) {
        return { bouldersList: null, error: true };
    }
}
