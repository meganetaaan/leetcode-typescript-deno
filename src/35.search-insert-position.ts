/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  const len = nums.length
  if (target < nums[0]) {
    return 0;
  } else if (nums[len - 1] < target) {
    return len;
  }

  // do binary search
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      while(nums[middle] === nums[middle - 1]) {
        middle--
      }
      return middle
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  // if target not found, here "left" points the index to insert
  return left;
}

// end
// @lc code=end

export { searchInsert };