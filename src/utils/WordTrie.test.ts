import { expect, it } from "bun:test";
import { WordTrie } from "./WordTrie";

it("generates a single node correctly", () => {
  const root = new WordTrie({ value: "a" });

  expect(root).toMatchSnapshot();
});

it("generates the correct trie given a single word", () => {
  const root = new WordTrie();
  root.addWord("great");

  expect(root).toMatchSnapshot();
});

it("generates the correct trie given multiple words that do not connect", () => {
  const root = new WordTrie();
  root.addWords(["red", "tree", "far"]);

  expect(root).toMatchSnapshot();
});

it("generates the correct trie given multiple words that do connect", () => {
  const root = new WordTrie();
  root.addWords(["great", "growl", "growler"]);

  expect(root).toMatchSnapshot();
});
