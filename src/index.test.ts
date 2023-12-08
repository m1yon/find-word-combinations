import { expect, it } from "bun:test";
import findWordCombinations from ".";

it("finds the correct words given a standard input", () => {
  const result = findWordCombinations("oogd");
  expect(result).toEqual([
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
  ]);
});

it("finds no words given an empty string", () => {
  const result = findWordCombinations("");
  expect(result).toEqual([]);
});
