import { WordTrie } from "../utils/WordTrie";

const findWordCombinations = (availableLetters: string, wordTrie: WordTrie) => {
  const result = new Set();

  const generateWordCombinations = (
    currentNode: WordTrie,
    availableLetters: string,
    currentLetters: string[]
  ) => {
    if (currentNode.getIsWord()) {
      result.add(currentLetters.join(""));
    }

    for (const child of currentNode.getChildren()) {
      const letter = child.getValue();

      if (!letter) {
        continue;
      }

      if (availableLetters.includes(letter)) {
        generateWordCombinations(child, availableLetters.replace(letter, ""), [
          ...currentLetters,
          letter,
        ]);
      }
    }
  };

  generateWordCombinations(wordTrie, availableLetters, []);

  return Array.from(result);
};

export default findWordCombinations;
