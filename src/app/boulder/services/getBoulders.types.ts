import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";

export type GetBoulderReturn = {
    boulder: Omit<BoulderListItemDto, 'id'> | null;
    error: boolean;
}