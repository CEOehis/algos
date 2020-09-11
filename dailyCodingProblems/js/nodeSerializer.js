/*
Problem:
Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class
```
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```
The following test should pass:

```
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```
*/

class Node {
  constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
  }
}

function serialize(node) {
  return JSON.stringify(dfs(node));
}

function deserialize(s) {
  let tree = JSON.parse(s);
  return generateTreeFromArray(tree);
}

function generateTreeFromArray(array) {
  if(array === null) return null;
  let node = new Node(
                  array[0],
                  generateTreeFromArray(array[1]),
                  generateTreeFromArray(array[2])
                  );
  return node;
}

function dfs(node) {
  const level = [];
  if(node === null) return;

  level.push(node.value);
  level.push(dfs(node.left));
  level.push(dfs(node.right));

  return level;
}

let node = new Node(
            'root',
            new Node('left', new Node('left.left')),
            new Node('right')
        );

console.assert(deserialize(serialize(node)).left.left.value === 'left.left');