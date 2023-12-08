import words from "../data/words.json";
import { buildAvailableLetterCounts } from "../utils/buildAvailableLetterCounts";

// N = number of english words
// M = length of available letters
// K = length of longest english word
// O(N * (M + K))
const findWordCombinations = (availableLetters: string) => {
  const result = [];

  for (const word of words) {
    const availableLetterCounts = buildAvailableLetterCounts(availableLetters);

    const isInvalidWord = word.split("").find((character) => {
      const characterCount = availableLetterCounts.get(character);

      if (!characterCount) {
        return true;
      }

      availableLetterCounts.set(character, characterCount - 1);
    });

    if (isInvalidWord) {
      continue;
    }

    result.push(word);
  }

  return result;
};

export default findWordCombinations;
