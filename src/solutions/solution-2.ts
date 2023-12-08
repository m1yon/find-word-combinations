import { WordTrie } from "../utils/WordTrie";

const findWordCombinations = ({
  availableLetters,
  wordTrie,
}: {
  availableLetters: string;
  wordTrie: WordTrie;
}) => {
  const result = new Set();

  const generateWordCombinations = ({
    currentNode,
    availableLetters,
    currentLetters,
  }: {
    currentNode: WordTrie;
    availableLetters: string;
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

      if (availableLetters.includes(letter)) {
        generateWordCombinations({
          currentNode: child,
          availableLetters: availableLetters.replace(letter, ""),
          currentLetters: [...currentLetters, letter],
        });
      }
    }
  };

  generateWordCombinations({
    currentNode: wordTrie,
    availableLetters,
    currentLetters: [],
  });

  return Array.from(result);
};

export default findWordCombinations;
