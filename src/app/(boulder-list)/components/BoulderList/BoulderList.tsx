"use client";

import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import BoulderListItem from "../BoulderListItem/BoulderListItem";
import FullWidthList from "@/components/common/FullWidthList/FullWidthList";

const BoulderList = () => {
  const [boulderList] = useLocalStorage<BoulderListItemDto[]>(
    "boulderList",
    []
  );

  return (
    <div className="bg-stone-800 w-screen h-screen">
      <h2 className="text-white text-2xl p-4">Boulder List</h2>
      <FullWidthList>
        {boulderList.map(({ name, grade, id }) => (
          <BoulderListItem key={name} boulderData={{ name, grade, id }} />
        ))}
      </FullWidthList>
    </div>
  );
};

export default BoulderList;
