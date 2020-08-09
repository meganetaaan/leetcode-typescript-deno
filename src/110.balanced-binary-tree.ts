/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

function depth(node: TreeNode | null): number {
  if (node == null) {
    return 0;
  }
  return Math.max(depth(node.left), depth(node.right)) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  if (root == null) {
    return true;
  }
  const left = depth(root.left);
  const right = depth(root.right);

  return Math.abs(left - right) <= 1 && isBalanced(root.left) &&
    isBalanced(root.right);
} // end
// @lc code=end

export { isBalanced };