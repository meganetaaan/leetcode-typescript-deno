/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let max = 0;
  for (let i = 0, len = height.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    }
  }
  return max;
}

// @lc code=end

export { maxArea };