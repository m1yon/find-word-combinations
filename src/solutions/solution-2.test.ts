import { describe, expect, it } from "bun:test";
import findWordCombinations from "./solution-2";
import { WordTrie } from "../utils/WordTrie";
import words from "../data/words.json";

describe("Solution 2", () => {
  it("finds the correct words given a standard input", () => {
    const wordTrie = new WordTrie();
    wordTrie.addWords(words);

    const result = findWordCombinations("oogd", wordTrie);

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

    expect(result).toEqual(expect.arrayContaining(expectedResult));
    expect(result).toBeArrayOfSize(expectedResult.length);
  });

  it("finds no words given an empty string", () => {
    const wordTrie = new WordTrie();
    wordTrie.addWords(words);

    const result = findWordCombinations("", wordTrie);
    expect(result).toEqual([]);
  });

  it("finds the correct word given an input where only one word can be made", () => {
    const wordTrie = new WordTrie();
    wordTrie.addWords(words);

    const result = findWordCombinations("a", wordTrie);
    expect(result).toEqual(["a"]);
  });
});
