package CtCI.java;

import java.util.HashMap;

public class IsUnique {
  /**
   * CtCI: #1.1
   * Space: O(N) -> unique characters in s
   * Time: O(N) -> total characters in s
   * @param s string
   * @return whether or not characters in string are unique
   */
  static boolean isUnique(String s) {
    HashMap<Character, Character> uniqueCharacters = new HashMap<>();
    char[] characters = s.toCharArray();
    for (char c: characters) {
        if (uniqueCharacters.containsKey(c)) {
            return false;
        }
        uniqueCharacters.put(c, c);
    }
    return  true;
  }

  public static void main(String[] args) {
    System.out.println("Test isUnique:");
    System.out.println(isUnique("helloWorld"));
    System.out.println(isUnique("Rythmandblues"));
  }
}
