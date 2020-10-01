// CtCI: #2.2
// time: O(N) || space: O(1)
function findKthToLast(listNode, k) {
  let firstPointer, secondPointer;
  firstPointer = secondPointer = listNode;

  for (let i = 0; i < k; i++) {
    if (firstPointer === null) throw new Error('k is larger than list size');
    firstPointer = firstPointer.next;
  }

  while (firstPointer !== null) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  return secondPointer;
}