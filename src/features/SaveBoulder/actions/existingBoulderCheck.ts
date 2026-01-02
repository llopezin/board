"use server";

import getBoulderByName from "../service/getBoulderByName";

export default async function boulderAlreadyExists(name: string) {
    const boulder = await getBoulderByName(name);

    return !!boulder;
}
