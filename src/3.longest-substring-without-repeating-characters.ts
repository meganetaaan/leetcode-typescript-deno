/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const len = s.length
  if (len < 2) {
    return len;
  }
  let hash = new Map();
  hash.set(s[0], 0)
  let max = 0;
  let right = 1, left = 0;
  while (s[right] != null) {
    const c = s[right];
    if (hash.has(c)) {
      max = Math.max(max, right - left);
      left = Math.max(hash.get(c) + 1, left)
    }
    hash.set(c, right);
    right++;
  }
  return Math.max(max, right - left)
}

// @lc code=end

export { lengthOfLongestSubstring };