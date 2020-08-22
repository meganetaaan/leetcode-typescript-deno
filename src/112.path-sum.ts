/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
 */

import { TreeNode } from "../lib/tree-node.ts"

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 /* 
 深さ優先探索で解く。
 tmpValにrootから順にvalを足しこんでいく。
 leafである&&tmpVal+leaf.valがsumと等しければ直ちにtrueを返す
 tmpVal+n.valがsumを上回る場合探索を打ち切る（pushしない）
 最後まで探索できちゃったらfalse
 */

type Tuple = [TreeNode, number];

function hasPathSum(root: TreeNode | null, sum: number): boolean {
  if (root == null) {
    return false;
  }
  const stack: Tuple[] = []
  stack.push([root, 0])
  while (stack.length > 0) {
    const [node, n] = stack.pop() as Tuple
    const v = node.val + n
    if (node.left == null && node.right == null && v === sum) {
      return true;
    }
    if (node.left != null) {
      stack.push([node.left, v])
    }
    if (node.right != null) {
      stack.push([node.right, v])
    }
  }
  // path not found
  return false;
};//end
// @lc code=end

export { hasPathSum }
