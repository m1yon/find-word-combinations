# find-word-combinations

This repository defines a function `findWordCombinations` that accepts a single string as input and returns a list of English words that can be created using some combination of the letters in the input string.

```
Example input: "oogd"
Example output: ["good", "god", "dog", "goo", "do", "go"]
```

Two solutions are provided:

- `src/solutions/solution-1.ts` (an initial brute force approach)
- `src/solutions/solution-2.ts` (a more optimal approach using a prefix trie)

## Prerequisites

- **Bun**, a fast all-in-one JavaScript runtime - https://bun.sh/

## Getting Started

To install dependencies:

```bash
bun install
```

To run tests:

```bash
bun test
```
