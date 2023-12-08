export class WordTrie {
  private value: string;
  private children: WordTrie[];
  private isWord: boolean;

  constructor({ value, isWord }: { value: string; isWord?: boolean }) {
    this.value = value;
    this.children = [];
    this.isWord = isWord ?? false;
  }

  addWord(word: string) {
    let node = this as WordTrie;

    for (let i = 0; i < word.length; i++) {
      const character = word[i];

      if (!character) {
        return;
      }

      const nextChildNode = node.getChildren().find((child) => {
        return child.getValue() === character;
      });

      if (nextChildNode) {
        node = nextChildNode;
        continue;
      }

      const isLastCharacter = i === word.length - 1;

      const newNode = new WordTrie({
        value: character,
        isWord: isLastCharacter,
      });

      node = node.addChild(newNode);
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