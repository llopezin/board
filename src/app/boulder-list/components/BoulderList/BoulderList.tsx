"use client";

import BoulderListItem from "../BoulderListItem/BoulderListItem";
import FullWidthList from "@/components/common/FullWidthList/FullWidthList";
import type { BoulderListProps } from "./BoulderList.types";
import { use } from "react";

const errorClasses = "text-white text-xl text-center";

const BoulderList = ({ boulderList }: BoulderListProps) => {
  const { bouldersList, error } = use(boulderList);
  const fetchError = error || !bouldersList;

  if (fetchError) return <p className={errorClasses}>Error fetching boulders list</p>;
  if (!bouldersList.length) return <p className={errorClasses}>No boulders created yet</p>;

  return (
    <FullWidthList>
      {bouldersList.map(({ name, grade, id }) => (
        <BoulderListItem key={name} boulderData={{ name, grade, id }} />
      ))}
    </FullWidthList>
  );
};

export default BoulderList;
