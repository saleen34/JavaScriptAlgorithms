class Trie {
  constructor(props) {
    this.end = false;
    this.children = [];
  }

  GetTrieNode() {
    var t = new Trie();
    var i = 0;
    for (i=0; i<26; ++i) {
      t.children.push(null);
    }
    return t;
  }

  AddTrieNode(tRoot, str) {
    var i = 0;
    var iLen = str.length;
    var childIndex = 0;

    for (i=0; i<iLen; ++i) {
      childIndex = this.FindIndex(str[i]);
      if (!tRoot.children[childIndex]) {
        tRoot.children[childIndex] = this.GetTrieNode();
      }
      tRoot = tRoot.children[childIndex];
    }

    tRoot.end = true;
  }

  WordExists(tRoot, str) {

    if (!tRoot || !str) {
      return false;
    }

    var i = 0;
    var iLen = str.length;
    var childIndex = null;

    for (i=0; i<iLen; ++i) {
      childIndex = this.FindIndex(str[i]);
      if (tRoot.children[childIndex]) {
        tRoot = tRoot.children[childIndex];
        if (tRoot.end) {
          return true;
        }
      } else if (tRoot.end) {
        return true;
      } else {
        return false;
      }
    }
  }

  FindIndex(c) {
    if (!c || (typeof c !== 'string')) {
      return false;
    }
    return c.charCodeAt() - 'a'.charCodeAt();
  }

  FindChar(index) {
    if (!index) {
      return false;
    }
    return String.fromCharCode(index + 97);
  }
}

tRoot = new Trie();
tRoot.AddTrieNode(tRoot, 'there');
tRoot.AddTrieNode(tRoot, 'their');
tRoot.AddTrieNode(tRoot, 'dog');
tRoot.AddTrieNode(tRoot, 'doggy');
tRoot.AddTrieNode(tRoot, 'cat');
tRoot.AddTrieNode(tRoot, 'catnip');
console.log(tRoot.WordExists(tRoot, 'their'));


