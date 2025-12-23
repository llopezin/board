const boulderGradesArray = [
  "3",
  "4",
  "5",
  "6A",
  "6A+",
  "6B",
  "6B+",
  "6C",
  "6C+",
  "7A",
  "7A+",
  "7B",
  "7B+",
  "7C",
  "7C+",
  "8A",
  "8A+",
  "8B",
  "8B+",
  "8C",
  "8C+",
  "9A",
];

export type BoulderGradesT = typeof boulderGradesArray;
export type BoulderGrade = BoulderGradesT[number];
export const boulderGrades: BoulderGrade[] = boulderGradesArray;
