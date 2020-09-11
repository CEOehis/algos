package dailyCodingProblems.java;
import java.util.Arrays;

/*
Problem #2 [Hard]:
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/


class ArrayProduct {

  static int[] arrayProduct(int[] numbers) {
    int[] result = new int[numbers.length];

    int product = 1;
    for(int num : numbers) {
      product *= num;
    }

    for(int i = 0; i < result.length; i++) {
      result[i] = product / numbers[i];
    }

    return result;
  }

  public static void main(String[] args) {
    int[] input = {1, 2, 3, 4, 5};
    int[] output = arrayProduct(input);

    System.out.println(Arrays.toString(output));
  }
}