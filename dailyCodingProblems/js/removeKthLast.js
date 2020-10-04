/*
Problem #26 [Medium]:
Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
*/


// Solution Algorithm
// move a pointer to the list, k steps forward, lets call this "fastPointer"
// initialize another pointer at the head of the list, lets call this "runner"
// now move both lists forward together, while fastPointer's next is not null
// When fastPointer's next is null we have reached the end of the list, thus runner's next is the value we need to delete

// time: O(N) || space: O(1)
function removeKthLast(listNode, k) {
  let fastPointer = listNode;
  let runner = listNode;

  while(k > 0) {
    fastPointer = fastPointer.next;
    k--;
  }

  while(fastPointer.next !== null) {
    runner = runner.next;
    fastPointer = fastPointer.next;
  }

  // delete the required node by pointing to it's next node instead.
  runner.next = runner.next.next;
  return listNode;
}

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    add(value) {
        let runner = this;
        while(runner.next !== null) {
            runner = runner.next;
        }

        runner.next = new LinkedListNode(value);
        return this;
    }

    serialize() {
      let runner = this;
      let list = [];
      while(runner !== null) {
        list.push(runner.value);
        runner = runner.next
      }

      return list.join('->')
    }
}

// 2->5->6->9->1->4->24->0->20
// setup a LinkedList like the above
let list = new LinkedListNode(2);
list.add(5).add(6).add(9).add(1).add(4).add(24).add(0).add(20);
console.log(list.serialize())
removeKthLast(list, 3);

// 2->5->6->9->1->4->0->20
// the node with the value 24 is deleted. It's the 3rd to last element
console.log(list.serialize());