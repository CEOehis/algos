// CtCI: #1.1
// time: O(N) || space: O(N)
function isUnique(s) {
  let charSet = new Set();

  for (let i = 0; i < s.length; i++) {
      if (charSet.has(s[i])) return false;
      charSet.add(s[i]);
  }

  return true;

}