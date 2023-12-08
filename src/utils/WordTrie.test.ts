import { expect, it } from "bun:test";
import { WordTrie } from "./WordTrie";

it("generates the correct tree given a single word", () => {
  const root = new WordTrie({ value: "" });
  root.addWord("great");

  expect(root).toMatchSnapshot();
});
