// CtCI: #2.3

function deleteMiddleNode(node) {
  if(node == null) return;

	if(node.next !== null) {
		node.value = node.next.value;
		node.next = node.next.next;
	}
}
