import { describe, expect, it } from "bun:test";
import findWordCombinations from "./solution-2";
import { WordTrie } from "../utils/WordTrie";
import words from "../data/words.json";

describe("Solution 2", () => {
  it("finds the correct words given a standard input", () => {
    const wordTrie = new WordTrie();
    wordTrie.addWords(words);

    const result = findWordCombinations({ availableLetters: "oogd", wordTrie });

    const expectedResult = [
      "do",
      "dog",
      "doo",
      "go",
      "god",
      "goo",
      "good",
      "o",
      "od",
      "oo",
    ];

    /**
     *  I used a more complicated matcher because a specific return order isn't
     *  required and could differ between implementations.
     */
    expect(result).toEqual(expect.arrayContaining(expectedResult));
    expect(result).toBeArrayOfSize(expectedResult.length);
  });

  it("finds no words given an empty string", () => {
    const wordTrie = new WordTrie();
    wordTrie.addWords(words);

    const result = findWordCombinations({ availableLetters: "", wordTrie });
    expect(result).toEqual([]);
  });

  it("finds the correct word given an input where only one word can be made", () => {
    const wordTrie = new WordTrie();
    wordTrie.addWords(words);

    const result = findWordCombinations({ availableLetters: "a", wordTrie });
    expect(result).toEqual(["a"]);
  });
});
