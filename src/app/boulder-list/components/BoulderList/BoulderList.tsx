"use client";

import FullWidthList from "@/components/common/FullWidthList/FullWidthList";
import { use } from "react";
import BoulderListItem from "../BoulderListItem/BoulderListItem";
import type { BoulderListProps } from "./BoulderList.types";

const errorClasses = "text-white text-xl text-center";

const BoulderList = ({ boulderList }: BoulderListProps) => {
  const { bouldersList, error } = use(boulderList);
  const fetchError = error || !bouldersList;

  if (fetchError) return <p className={errorClasses}>Error fetching boulders list</p>;
  if (!bouldersList.length) return <p className={errorClasses}>No boulders created yet</p>;
  console.log('bouldersList: ', bouldersList);

  return (
    <FullWidthList>
      {bouldersList.map(({ name, grade, id }) => (
        <BoulderListItem key={name} boulderData={{ name, grade, id }} />
      ))}
    </FullWidthList>
  );
};

export default BoulderList;
