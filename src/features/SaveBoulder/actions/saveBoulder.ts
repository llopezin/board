"use server";

import { saveBoulderErrors } from "../constants/errorsMessages";
import postBoulder from "../service/postBoulder";
import { SaveBoulderFormState } from "../components/SaveBoulderForm/SaveBoulderForm.types";


export default async function saveBoulder(state: SaveBoulderFormState, formData: FormData): Promise<SaveBoulderFormState> {
    const name = formData.get("name") as string;
    const grade = formData.get("grade") as string;
    const boulderData = formData.get("boulder") as string;
    const boulder = JSON.parse(boulderData);

    const boulderWithGradeAndName = {
        boulder: boulder,
        name,
        grade,
    };

    const errors: string[] = [];

    if (!boulder.start.length) errors.push(saveBoulderErrors.noStartHold);
    if (!boulder.top.length) errors.push(saveBoulderErrors.noTopHold);

    if (errors.length) return { success: false, errors };

    try {
        await postBoulder(boulderWithGradeAndName);
        return { success: true };
    } catch (error) {
        return { success: false, errors: [saveBoulderErrors.unknownError] };
    }
}

