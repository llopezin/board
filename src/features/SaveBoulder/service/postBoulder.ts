import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { db } from "@/lib/firebase/client";

export default async function postBoulder(boulder: Omit<BoulderListItemDto, "id">) {
    try {
        const collection = db.collection("boulder");

        return await collection.add(boulder);
    } catch (error) {
        console.warn("error posting boulder: ", error);

        throw error;
    }
}