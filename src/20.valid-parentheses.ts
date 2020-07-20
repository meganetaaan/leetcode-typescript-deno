/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start

const PAIR: { [key: string]: string } = {
  ")": "(",
  "}": "{",
  "]": "[",
};
Object.freeze(PAIR);

function isValid(s: string): boolean {
  const stack = [];
  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i];
    const pair = PAIR[c];
    if (PAIR[c] == null) {
      stack.push(c);
    } else if (pair === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}
// @lc code=end

export { isValid };