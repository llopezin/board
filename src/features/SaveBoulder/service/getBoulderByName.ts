import { collectionNames } from "@/constants/collection-names";
import { db } from "@/lib/firebase/server";

export default async function getBoulderByName(name: string) {
    try {
        const collection = db.collection(collectionNames.boulder);
        const query = collection.select("name").where("name", "==", name);
        const snapshot = await query.get();

        if (snapshot.empty) return null;

        return snapshot.docs[0].data().name;
    } catch (error) {
        console.warn("error getting boulder by name: ", error);

        throw error;
    }
}