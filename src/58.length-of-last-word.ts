/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  if (s.length === 0) {
    return 0
  }
  const arr =  s.split(" ");
  for (let i = arr.length - 1; i >= 0; i--) {
    const len = arr[i].length
    if (len > 0) {
      return len
    }
  }
  return 0
};

// end
// @lc code=end

export { lengthOfLastWord };
