export interface SaveBoulderProps {
  saveFn: (name: string, grade: string) => {success: boolean; error?: string};
}
