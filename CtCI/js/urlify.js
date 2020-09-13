// CtCI: #1.3
// time: O(N) || space: O(N)
function urlify(s, n) {

	let totalLength = s.length;
	let runner = totalLength - 1;

	let result = new Array(totalLength);

	for (let i = n - 1; i >= 0; i--) {
		if(s[i] === ' ') {
			// add space characters
			result[runner] = '0'
			runner--;
			result[runner] = '2'
			runner--;
			result[runner] = '%'
			runner--;
		} else {
			result[runner] = s[i];
			runner--;
		}
	}

	return result.join('');
}

console.log(urlify('Mr John Smith    ', 13));
