/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
  let i = 0, j = height.length - 1;
  let water = 0;
  while (i < j) {
    water = Math.max(water, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return water;
}

// @lc code=end

export { maxArea };