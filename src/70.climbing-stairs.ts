/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function combinationsCount(m: number, n: number): number {
  if (m < n) {
    return 0;
  } else if (m === n || n === 0) {
    return 1;
  } else {
    let c = BigInt(1), i;
    for (i = n + 1; i <= m; i ++) {
      c *= BigInt(i);
    }
    for (i = 2; i <= m - n; i ++) {
      c /= BigInt(i);
    }
    return Number(c);
  }
}

function climbStairs(n: number): number {
  let result = 0;
  for (let i = 0; i <= Math.floor(n / 2); i++) {
    const combi = combinationsCount(n - i, i);
    result += combi;
  }
  return result;
} // end
// @lc code=end
export { climbStairs };