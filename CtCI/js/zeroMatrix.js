// CtCI: #1.1
// time: O(MN) || space: O(N)
function zeroMatrix(matrix) {
	let zeroRows = {};
	let zeroCols = {};

	for (let row = 0; row < matrix.length; row++) {
		for(let col = 0; col < matrix.length; col++) {
			if(matrix[row][col] === 0) {
				zeroRows[row] = true;
				zeroCols[col] = true;
			}
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      if(col in zeroCols || row in zeroRows) {
        matrix[row][col] = 0;
      }
    }
  }

    return matrix;
}

var matrix = [
    [1,  0,  0,  4,  5],
    [6,  7,  0,  9,  10],
    [11, 12, 13, 14, 11],
    [15, 0, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

console.log(zeroMatrix(matrix));