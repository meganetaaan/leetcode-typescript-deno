/*
 * @lc app=leetcode id=107 lang=typescript
 *
 * [107] Binary Tree Level Order Traversal II
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

function pushDepth(depth: number, value: number, matrix: number[][]): void {
  let arr = matrix[depth];
  if (arr == null) {
    arr = [];
    matrix[depth] = arr;
  }
  arr.push(value);
}

function levelOrderBottom(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (root == null) {
    return result;
  }
  const queue: [TreeNode, number][] = [];
  queue.push([root, 0]);
  while (queue.length > 0) {
    const [n, d] = queue.pop() as [TreeNode, number];
    pushDepth(d, n.val, result);
    if (n.left != null) {
      queue.push([n.left, d + 1]);
    }
    if (n.right != null) {
      queue.push([n.right, d + 1]);
    }
  }
  return result.map((arr) => arr.reverse()).reverse();
} // end
// @lc code=end

export { levelOrderBottom };