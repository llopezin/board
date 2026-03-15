import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto"

export type BoulderListProps = {
    boulderList: Promise<{ bouldersList: BoulderListItemDto[] | null; error: boolean }>;
}