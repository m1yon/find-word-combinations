export class WordTrie {
  private value?: string;
  private children: WordTrie[];
  private isWord: boolean;

  constructor(args?: { value?: string; isWord?: boolean }) {
    this.value = args?.value;
    this.children = [];
    this.isWord = args?.isWord ?? false;
  }

  addWord(word: string) {
    let node = this as WordTrie;

    word.split("").forEach((character, index) => {
      const nextChildNode = node.getChildren().find((child) => {
        return child.getValue() === character;
      });

      if (nextChildNode) {
        node = nextChildNode;
        return;
      }

      const isLastCharacter = index === word.length - 1;

      const newNode = new WordTrie({
        value: character,
        isWord: isLastCharacter,
      });

      node = node.addChild(newNode);
    });
  }

  addWords(words: string[]) {
    for (const word of words) {
      this.addWord(word);
    }
  }

  getValue() {
    return this.value;
  }

  getChildren() {
    return this.children;
  }

  getIsWord() {
    return this.isWord;
  }

  setIsWord(isWord: boolean) {
    this.isWord = isWord;
  }

  addChild(node: WordTrie) {
    this.children.push(node);
    return node;
  }
}
