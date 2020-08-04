/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

import { TreeNode } from "../lib/tree-node.ts";

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

type Triple = [TreeNode | null, number, number];
function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null
  }
  const stack: Triple[] = []
  stack.push([null, 0, nums.length - 1])
  let root: TreeNode | null = null;
  while (stack.length > 0) {
    const [parent, left, right] = stack.pop() as Triple
    const i = Math.floor((left + right) / 2)
    const n = new TreeNode(nums[i])
    if (parent == null) {
      root = n
    } else {
      if (n.val < parent.val) {
        parent.left = n
      } else {
        parent.right = n
      }
    }
    if (left <= i - 1) {
      stack.push([n, left, i - 1])
    }
    if (right >= i + 1) {
      stack.push([n, i + 1, right])
    }
  }
  return root;
}//
// @lc code=end

export { sortedArrayToBST };
