// CtCI: #1.6
// time: O(N) || space: O(N)
function compress(s) {
	let result = [];
	let charCount = 0;

	for (let i = 0; i < s.length; i++) {
    if(result.length >= s.length) return s;

		charCount++;
		let current = s[i];
		let next = s[i + 1];

		if(current !== next) {
			result.push(current);
      charCount.toString().split('').forEach(c => result.push(c)); // push individual digits
			charCount = 0;
		}
  }

	if (result.length >= s.length) return s;
	return result.join('');
}

console.log(compress(''));
console.log(compress('aa'));
console.log(compress('aabcccccaaa'));
console.log(compress('abcdefghjjjjjjjjjjjji'));
console.log(compress('abcdefghjjjjjjjjjjjjji'));
console.log(compress('abcdefgh'));
