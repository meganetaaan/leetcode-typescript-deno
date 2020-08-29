/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  const result = []
  let preArr: number[] = [];
  for (let i = 0; i < numRows; i++) {
    if (i == 0) {
      preArr = [1]
      result.push(preArr)
      continue
    }
    const arr = []
    for (let j = -1; j < preArr.length; j++) {
      const left = j == -1 ? 0 : preArr[j]
      const right = j + 1 == preArr.length ? 0 : preArr[j + 1]
      arr.push(left + right)
    }
    result.push(arr)
    preArr = arr
  }
  return result
}// end
// @lc code=end

export { generate }