import { WordTrie } from "../utils/WordTrie";
import { buildAvailableLetterCounts } from "../utils/buildAvailableLetterCounts";

// M = length of available letters
// D = Maximum depth of wordTrie
// B = Average childs per node
// O(M + B^D)
const findWordCombinations = ({
  availableLetters,
  wordTrie,
}: {
  availableLetters: string;
  wordTrie: WordTrie;
}) => {
  /**
   *  I decided to keep the result set and availableLetterCounts in the
   *  closure because it makes the code easier to read since you're
   *  passing around fewer arguments.
   */
  const result = new Set(); // I used a Set here to prevent duplicates.
  const availableLetterCounts = buildAvailableLetterCounts(availableLetters);

  const generateWordCombinations = ({
    currentNode,
    currentLetters,
  }: {
    currentNode: WordTrie;
    currentLetters: string[];
  }) => {
    if (currentNode.getIsWord()) {
      result.add(currentLetters.join(""));
    }

    for (const child of currentNode.getChildren()) {
      const letter = child.getValue();

      if (!letter) {
        continue;
      }

      if ((availableLetterCounts.get(letter) ?? 0) > 0) {
        /**
         *  I initially cloned the set here each time and sent it as an argument,
         *  but ultimately switched to this in-place manipulation approach because
         *  cloning a set each time is costly performance and memory-wise.
         */
        availableLetterCounts.set(
          letter,
          (availableLetterCounts.get(letter) ?? 0) - 1
        );

        generateWordCombinations({
          currentNode: child,
          currentLetters: [...currentLetters, letter],
        });

        availableLetterCounts.set(
          letter,
          (availableLetterCounts.get(letter) ?? 0) + 1
        );
      }
    }
  };

  generateWordCombinations({
    currentNode: wordTrie,
    currentLetters: [],
  });

  return Array.from(result);
};

export default findWordCombinations;
