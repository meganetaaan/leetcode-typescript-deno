/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
const REVERSE_MAX = Math.pow(2, 31) - 1
const REVERSE_MIN = -Math.pow(2, 31)
function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1
  const result = Number(String(Math.abs(x)).split('').reverse().join('')) * sign
  if (result < REVERSE_MIN || REVERSE_MAX < result) {
    return 0
  }
  return result
};
// @lc code=end

export { reverse }
