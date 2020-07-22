/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let idx = 0;
  let current: number | null = null;
  nums.forEach((n) => {
    if (n != current) {
      current = n;
      nums[idx++] = current;
    }
  });
  nums.splice(idx, nums.length - idx);
  return nums.length;
}

// @lc code=end
export { removeDuplicates };