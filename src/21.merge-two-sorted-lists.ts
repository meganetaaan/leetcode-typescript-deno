/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

import { ListNode } from "../lib/list-node.ts";

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (l1 == null && l2 == null) {
    return null;
  } else if (l1 == null) {
    return l2;
  } else if (l2 == null) {
    return l1;
  }
  const result = new ListNode();
  let tail = result
  while (true) {
    if (l2 == null) {
      tail.next = l1
      break;
    } else if (l1 == null) {
      tail.next = l2;
      break;
    }
    if (l2.val < l1.val) {
      [tail.next, l2] = [l2, l2.next];
    } else {
      [tail.next, l1] = [l1, l1.next];
    }
    tail = tail.next;
  }
  return result.next;
}

// @lc code=end

export { mergeTwoLists };