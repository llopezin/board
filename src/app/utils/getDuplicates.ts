const getDuplicates = <T>(arr: T[]): T[] => {
  const duplicates = arr.filter(
    (item) => arr.indexOf(item) !== arr.lastIndexOf(item)
  );
  return [...new Set(duplicates)];
};
export default getDuplicates;
