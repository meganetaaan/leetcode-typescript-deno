/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function findLongestPalindromeEven(
  s: string,
  idx: number,
  to: number,
): number[] {
  let max = 0;
  for (let i = 0; i < to; i++) {
    const a = s[idx + i];
    const b = s[idx - i];
    if (a == null || b == null || a !== b) {
      break;
    }
    max++;
  }
  return [idx - (max - 1), idx + (max - 1)];
}
function findLongestPalindromeOdd(s: string, idx: number, to: number) {
  let max = 0;
  for (let i = 0; i < to; i++) {
    const a = s[idx + i + 1];
    const b = s[idx - i];
    if (a == null || b == null || a !== b) {
      break;
    }
    max++;
  }
  if (max == 0) {
    return [idx, idx]
  }
  return [idx - (max - 1), idx + (max - 1) + 1];
}
function longestPalindrome(s: string): string {
  let max = 0;
  let maxFrom = 0, maxTo = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    let from, to;
    [from, to] = findLongestPalindromeEven(s, i, len);
    if (max < to - from) {
      max = to - from;
      maxFrom = from;
      maxTo = to;
    }
    [from, to] = findLongestPalindromeOdd(s, i, len);
    if (max < to - from) {
      max = to - from;
      maxFrom = from;
      maxTo = to;
    }
  }
  return s.substr(maxFrom, maxTo - maxFrom + 1);
}
// @lc code=end

export { longestPalindrome };