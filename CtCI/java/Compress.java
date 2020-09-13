package CtCI.java;

public class Compress {
  // CtCI: #1.6
  // time: O(N) || space: O(N)
  static String compress(String s) {
    StringBuilder result = new StringBuilder();
    int charCount = 0;

    for (int i = 0; i < s.length(); i++) {
      if(result.length() >= s.length()) return s;

      charCount++;

      if (i + 1 >= s.length() || s.charAt(i) != s.charAt(i + 1)) {
        result.append(s.charAt(i));
        result.append(charCount);
        charCount = 0;
      }
    }

    if (result.length() >= s.length()) return s;
    return result.toString();
  }

  public static void main(String[] args) {
    System.out.println(compress(""));
    System.out.println(compress("aa"));
    System.out.println(compress("aabcccccaaa"));
    System.out.println(compress("abcdefghjjjjjjjjjjjji"));
    System.out.println(compress("abcdefghjjjjjjjjjjjjji"));
  }
}
