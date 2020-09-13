// CtCI: #1.2
// time: O(N) || space: O(1)
function isPermutation(a, b) {
  if (a.length !== b.length) return false;

  let charSet = new Array(128).fill(0); // ascii characters

	for (let i = 0; i < a.length; i++) {
		let charCode = a.charCodeAt(i);
		charSet[charCode] += 1;
	}

	for (let j = 0; j < b.length; j++) {
		let charCode = b.charCodeAt(j);
		let newCharacterCount = charSet[charCode] - 1;
		if (newCharacterCount < 0) return false;
		charSet[charCode] = newCharacterCount;
  }

  return true;
}

console.log(isPermutation('hello', 'olleh'));
console.log(isPermutation('same', 'mace'));
console.log(isPermutation('perimeter', 'permit'))
