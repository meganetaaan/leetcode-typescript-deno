export class TreeNode {
  static fromArray8(arr: number[]): TreeNode | null {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == null) {
        return null
      }
    }
    return new TreeNode(arr[0], new TreeNode(arr[1], new TreeNode(arr[3]), new TreeNode(arr[4])), new TreeNode(arr[2], new TreeNode(arr[5]), new TreeNode(arr[6])))
  }
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
