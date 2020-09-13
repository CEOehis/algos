// CtCI: #1.4
// time: O(N) || space: O(N)
function isPalindromePermutation(s) {
	// assumptions: case insensitive
	// consider non-letter characters as insignificant

	let characterCounts = mapCharacterToCharCount(s);

	let seenOddCharacter = false;

	for (const character in characterCounts) {
		let count = characterCounts[character];
		if (count % 2 !== 0) {
			if (seenOddCharacter)return false;
			seenOddCharacter = true;
		}
	}
	return true;
}

function mapCharacterToCharCount(s) {
	let result = {};

	for (let i = 0; i < s.length; i++) {
		let char = s[i].toLowerCase();
		if (!isLetter(char)) continue;
		result[char] = result[char] ? result[char] + 1 : 1;
	}

	return result;
}

function isLetter(char) {
	return char.match(/[a-z]/i);
}
