/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue: (TreeNode | null)[] = []
  queue.push(p)
  queue.push(q)
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
    queue.push(p.left, q.left)
    queue.push(p.right, q.right)
  }
  return true;
}

//end
// @lc code=end

export { isSameTree };