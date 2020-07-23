/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;
  const results: [number, number, number][] = [];
  for (let a = 0; (a < len - 2); a++) {
    const na = nums[a];
    if (na > 0) {
      break;
    } else if (a > 0 && na === nums[a - 1]) {
      continue;
    }
    let b = a + 1;
    let c = len - 1;
    while (b < c) {
      const sum = nums[a] + nums[b] + nums[c];
      if (sum === 0) {
        results.push([nums[a], nums[b], nums[c]]);
        while (nums[b] === nums[b + 1]) {
          b++;
        }
        while (nums[c] === nums[c - 1]) {
          c--;
        }
        b++;
        c--;
      } else if (sum < 0) {
        b++;
      } else {
        c--;
      }
    }
  }
  return results;
}

// @lc code=end

export { threeSum };