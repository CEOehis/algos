/*
Problem #1 [Easy]
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

// time: O(N) || space: O(N)
function twoNumberSum(numbers, k) {
  let processedNumbers = {};

  for(let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    let complement = k - current;
    if (complement in processedNumbers) {
      return true;
    }

    processedNumbers[current] = true;
  }

  return false;
}
