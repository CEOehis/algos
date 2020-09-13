// CtCI: #1.5
// time: O(N) || space: O(N)
function isOneEditAway(s, t) {
	if(Math.abs(s.length - t.length) > 1) return false;

	let sFreq = getFrequencyTable(s);
	let tFreq = getFrequencyTable(t);

	let seenEdit = false;

	// check the smaller string in the larger one
	let larger = s.length > t.length ? sFreq : tFreq;
	let smaller = s.length > t.length ? tFreq : sFreq;

	for (const character in larger) {
		let smallerCount = smaller[character] || 0;
		let largerCount = larger[character];

        let diff = largerCount - smallerCount;
		if (diff) {
      if (diff > 1) return false;
			if (seenEdit) return false;
			seenEdit = true;
		}
	}

	return true;
}

function getFrequencyTable(s) {
	let result = {};

	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		result[char] = result[char] ? result[char] + 1 : 1;
	}

	return result;
}

console.log(isOneEditAway('pale', 'ple'));
console.log(isOneEditAway('pales', 'pale'));
console.log(isOneEditAway('pale', 'bale'));
console.log(isOneEditAway('pale', 'bake'));
console.log(isOneEditAway('paperpified', 'paperpifieds'));
console.log(isOneEditAway('paperpified', 'paperpifiess'));
