/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  const strsLen = strs.length;
  // Guard
  if (strsLen === 0) {
    return "";
  } else if (strsLen === 1) {
    return strs[0];
  }
  const arr: string[] = [];
  for (let i = 0;; i++) {
    const c = strs[0][i]
    if (c == null) {
      break
    }
    for (let j = 1; j < strsLen; j++) {
      if (strs[j][i] !== c) {
        return arr.join("");
      }
    }
    arr.push(c);
  }
  return arr.join("");
}
// @lc code=end

export { longestCommonPrefix };