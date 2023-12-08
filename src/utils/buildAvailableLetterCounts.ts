export const buildAvailableLetterCounts = (availableLetters: string) => {
  const availableLetterCounts = new Map<string, number>();

  availableLetters.split("").forEach((character) => {
    availableLetterCounts.set(
      character,
      (availableLetterCounts.get(character) ?? 0) + 1
    );
  });

  return availableLetterCounts;
};
