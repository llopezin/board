import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto"

export type BoulderListProps = {
    boulderList: { bouldersList: BoulderListItemDto[] | null; error: boolean };
}