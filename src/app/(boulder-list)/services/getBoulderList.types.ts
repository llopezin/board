import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";

export type GetBoulderListReturn = Promise<{ bouldersList: BoulderListItemDto[] | null; error: boolean }> 