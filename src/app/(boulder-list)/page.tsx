'use client';

import { Spinner } from "@/components/common/Spinner/Spinner";
import { BoulderGrade } from "@/domain/contants/boulderGrades";
import { Suspense, useState } from "react";
import BoulderList from "./components/BoulderList/BoulderList";
import GradeSelector from "./components/GradeSelector/GradeSelector";
import getBoulderList from "./services/getBoulderList";

export default function BoulderListPage() {
  const [grades, setGrades] = useState<BoulderGrade[] | undefined>(undefined);
  const bouldersListResponse = getBoulderList(grades);

  return (
    <>
      <GradeSelector setGrades={setGrades} grades={grades} />
      <Suspense fallback={<Spinner />}>
        <BoulderList boulderList={bouldersListResponse} />
      </Suspense>
    </>
  )
}

