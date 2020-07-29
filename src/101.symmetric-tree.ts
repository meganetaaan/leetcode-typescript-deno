/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
  if (root == null) {
    return true
  }
  const queue: (TreeNode | null)[] = []
  queue.push(root.left)
  queue.push(root.right)
  let p, q;
  while (queue.length > 0) {
    p = queue.shift() as (TreeNode | null);
    q = queue.shift() as (TreeNode | null);
    if (p == null && q == null) {
      continue;
    } else if (p == null || q == null) {
      return false;
    } else if (p.val !== q.val) {
      return false
    }
    queue.push(p.right, q.left)
    queue.push(p.left, q.right)
  }
  return true;

};
// end
// @lc code=end

export { isSymmetric }
