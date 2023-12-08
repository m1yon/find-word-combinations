import { expect, it } from "bun:test";
import { WordTrie } from "./WordTrie";

it("generates a single node correctly", () => {
  const root = new WordTrie({ value: "a" });

  expect(root).toMatchSnapshot();
});

it("generates the correct tree given a single word", () => {
  const root = new WordTrie({ value: "" });
  root.addWord("great");

  expect(root).toMatchSnapshot();
});

it("generates the correct tree given multiple words that do not connect", () => {
  const root = new WordTrie({ value: "" });
  root.addWord("red");
  root.addWord("tree");
  root.addWord("far");

  expect(root).toMatchSnapshot();
});
