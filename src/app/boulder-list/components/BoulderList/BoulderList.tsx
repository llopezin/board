"use client";

import { BoulderListItemDto } from "@/domain/dtos/BoulderListItem.dto";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import BoulderListItem from "../BoulderListItem/BoulderListItem";
import FullWidthList from "@/components/common/FullWidthList/FullWidthList";
import GoBackButton from "@/components/common/GoBackButton/GoBackButton";

const BoulderList = () => {

  const [boulderList] = useLocalStorage<BoulderListItemDto[]>(
    "boulderList",
    []
  );

  return (
    <div className="bg-stone-800 w-screen h-screen">
      <div className="flex gap-4 p-4">
        <GoBackButton />
        <h2 className="text-white text-2xl">Boulder List</h2>
      </div>

      <FullWidthList>
        {boulderList.map(({ name, grade, id }) => (
          <BoulderListItem key={name} boulderData={{ name, grade, id }} />
        ))}
      </FullWidthList>
    </div>
  );
};

export default BoulderList;
