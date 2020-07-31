/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

function maxDepth(root: TreeNode | null): number {
  if (root == null) {
    return 0;
  }
  const queue: [TreeNode, number][] = [];
  let depth = 0;
  queue.push([root, 1]);
  while (queue.length > 0) {
    const [n, d] = queue.pop() as [TreeNode, number];
    depth = Math.max(depth, d);
    if (n.left != null) {
      queue.push([n.left, d + 1]);
    }
    if (n.right != null) {
      queue.push([n.right, d + 1]);
    }
  }
  return depth;
} // end
// @lc code=end

export { maxDepth };