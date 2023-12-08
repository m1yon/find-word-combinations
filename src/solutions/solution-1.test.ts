import { expect, it } from "bun:test";
import findWordCombinations from "./solution-1";

it("finds the correct words given a standard input", () => {
  const result = findWordCombinations("oogd");

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
  const result = findWordCombinations("");
  expect(result).toEqual([]);
});

it("finds the correct word given an input where only one word can be made", () => {
  const result = findWordCombinations("a");
  expect(result).toEqual(["a"]);
});
