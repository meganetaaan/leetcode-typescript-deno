import { ListNode } from "../lib/list-node.ts";
/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (l1 == null || l2 == null) {
    throw new Error("Both l1 and l2 should not be null");
  }
  const fst = new ListNode();
  let n = fst;
  let up = 0;
  let prev = n;
  while (l1 != null || l2 != null || up != 0) {
    prev = n;
    const sum = (l1?.val || 0) + (l2?.val || 0) + up;
    n.val = sum % 10;
    up = sum >= 10 ? 1 : 0;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
    n = n.next = new ListNode();
  }
  prev.next = null
  return fst;
}
// @lc code=end

export { addTwoNumbers };
