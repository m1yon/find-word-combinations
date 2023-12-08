import { WordTrie } from "../utils/WordTrie";

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
  const result = new Set();

  const availableLetterCounts = new Map();

  availableLetters.split("").forEach((character) => {
    availableLetterCounts.set(
      character,
      (availableLetterCounts.get(character) ?? 0) + 1
    );
  });

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
