/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }
  const str = String(x)
  return str === str.split("").reverse().join("")
}

// @lc code=end
export { isPalindrome };