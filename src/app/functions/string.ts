export const lastIndexSplit = (split: string, item: string): string => {
  const lastIndex = item.split(split)

  return lastIndex[lastIndex.length - 1]
}