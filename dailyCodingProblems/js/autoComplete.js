/*
Problem #11 [Medium]:
Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].


*/

// time: O(W * L) || space: O(V + E)
class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = "*";
  }

  insert(string) {
    let current = this.root;
    for (let i = 0; i < string.length; i++) {
      if (!(string[i] in current)) {
        current[string[i]] = {};
      }
      current = current[string[i]];
    }
    current[this.endSymbol] = string;
  }
}

function autoComplete(query, words) {
  let trie = new Trie();
  for (let word of words) {
    trie.insert(word);
  }

  let current = trie.root;
  for (let char of query) {
    if (!(char in current)) {
      return false;
    }
    current = current[char];
  }

  let suggestions = [];
  getSuggestions(current, suggestions);
  return suggestions;
}

function getSuggestions(root, suggestions) {
  for (let key in root) {
    if ((key === "*")) {
      suggestions.push(root[key]);
    } else {
      getSuggestions(root[key], suggestions);
    }
  }
}


let words = ['dog', 'deer', 'deal'];
let query = 'de';

console.log(autoComplete(query, words));