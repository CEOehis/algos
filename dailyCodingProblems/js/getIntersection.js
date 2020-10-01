/*
Problem #20 [Easy]:
Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
*/

// time: O(M + N) || space: O(M + N)
function getIntersection(A, B) {
	nodeALength = getLength(A); //4
	nodeBLength = getLength(B); //5

	let longerNode = nodeALength >= nodeBLength ? A : B; // B
	let shorterNode = nodeALength < nodeBLength ? A : B; // A

	// progress through longer list a bit
	let diff = Math.abs(nodeBLength - nodeBLength); // 1

	while(diff > 0) {
		longerNode = longerNode.next;
		diff--;
	}

	while(longerNode != null && shorterNode != null) {
	if(longerNode.val === shorterNode.val) return longerNode.val;
	longerNode = longerNode.next;
	shorterNode = shorterNode.next;
}

return false;
}

function getLength(list) {
	let count = 0;
	while(list != null) {
		count++;
		list = list.next;
	}
}
