import { collectionNames } from "@/constants/collection-names";
import { BoulderGrade, boulderGrades } from "@/domain/contants/boulderGrades";
import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { clientDb } from "@/lib/firebase/client";
import { collection, getDocs, query, where } from "firebase/firestore";
import { GetBoulderListReturn } from "./getBoulderList.types";

export default async function getBoulderList(grades?: BoulderGrade[]): GetBoulderListReturn {
    try {
        const boulders = collection(clientDb, collectionNames.boulder);
        const q = query(boulders, where("grade", "in", grades?.length ? grades : boulderGrades));
        const boulderNamesSnapshot = await getDocs(q);
        const bouldersList = boulderNamesSnapshot.docs.map((doc) => (
            { ...doc.data(), id: doc.id } as BoulderListItemDto
        ));

        return { bouldersList, error: false };
    } catch {
        return { bouldersList: null, error: true };
    }
}