import { db } from "@/lib/firebase/client";

export default async function getBoulderByName(name: string) {
    try {
        const collection = db.collection("boulder");
        const query = collection.select("name").where("name", "==", name);
        const snapshot = await query.get();

        if (snapshot.empty) return null;

        return snapshot.docs[0].data().name;
    } catch (error) {
        console.warn("error getting boulder by name: ", error);

        throw error;
    }
}