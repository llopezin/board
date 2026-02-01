import { BoulderGrade } from "@/domain/contants/boulderGrades";
import { Dispatch, SetStateAction } from "react";

export interface GradeSelectorProps {
    grades?: BoulderGrade[];
    setGrades: Dispatch<SetStateAction<BoulderGrade[] | undefined>>;
}
