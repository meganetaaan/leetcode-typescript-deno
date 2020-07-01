/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0, len = nums.length - 1; i < len; i++) {
    if (nums[i] + nums[i + 1] === target) {
      return [i, i + 1];
    }
  }
  throw new Error("Target not found in the array.");
}
// @lc code=end

export { twoSum };