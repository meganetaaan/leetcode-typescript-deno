/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const aNum = BigInt("0b" + a)
  const bNum = BigInt("0b" + b)
  return (aNum + bNum).toString(2);
}// end
// @lc code=end

export { addBinary };