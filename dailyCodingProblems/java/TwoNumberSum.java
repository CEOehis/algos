package dailyCodingProblems.java;

import java.util.HashMap;

public class TwoNumberSum {
  static boolean twoNumberSum(int[] numbers, int k) {
    HashMap<Integer, Boolean> processedNumbers = new HashMap<>();

    for (int i = 0; i < numbers.length; i++) {
      int current = numbers[i];
      int complement = k - current;
      if (processedNumbers.containsKey(complement)) {
        return true;
      }

      processedNumbers.put(current, true);
    }

    return false;
  }

  public static void main(String[] args) {
    int[] numbers = {10, 15, 3, 7};
    int k = 17;

    System.out.println(twoNumberSum(numbers, k));
  }
}
